import React, { useState } from 'react';
import { Mail, User, MessageSquare, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { useScrollAnimationGroup } from '../hooks/useScrollAnimation';

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  [key: string]: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      console.log('Form submitted:', formData);
      setIsSubmitted(true);
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        message: ''
      });

    } catch (error) {
      console.error('Form submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="bg-light-gray/5 rounded-xl p-8 text-center border border-teal/20">
        <div className="w-16 h-16 bg-teal/20 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle className="w-8 h-8 text-teal" />
        </div>
        <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
        <p className="text-light-gray mb-6">
          Thanks for reaching out! I'll get back to you soon.
        </p>
        <button
          onClick={() => setIsSubmitted(false)}
          className="bg-teal text-navy px-6 py-2 rounded-lg font-semibold hover:bg-teal/90 transition-all duration-300"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-light-gray/5 rounded-xl p-8 border border-light-gray/20 space-y-6">
      <div className="text-center mb-8">
        <h3 className="text-3xl font-bold text-white mb-2">Get In Touch</h3>
        <p className="text-light-gray">
          Have a project in mind? Let's talk about it!
        </p>
      </div>

      {/* Name */}
      <div className="space-y-2">
        <label htmlFor="name" className="flex items-center text-light-gray font-medium">
          <User className="w-4 h-4 mr-2" />
          Your Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          className={`w-full px-4 py-3 bg-navy/50 border rounded-lg text-white placeholder-light-gray/50 focus:outline-none focus:ring-2 focus:ring-teal transition-all duration-300 ${
            errors.name ? 'border-red-500' : 'border-light-gray/30 focus:border-teal'
          }`}
          placeholder="Enter your name"
        />
        {errors.name && (
          <p className="text-red-400 text-sm flex items-center">
            <AlertCircle className="w-4 h-4 mr-1" />
            {errors.name}
          </p>
        )}
      </div>

      {/* Email */}
      <div className="space-y-2">
        <label htmlFor="email" className="flex items-center text-light-gray font-medium">
          <Mail className="w-4 h-4 mr-2" />
          Email Address
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          className={`w-full px-4 py-3 bg-navy/50 border rounded-lg text-white placeholder-light-gray/50 focus:outline-none focus:ring-2 focus:ring-teal transition-all duration-300 ${
            errors.email ? 'border-red-500' : 'border-light-gray/30 focus:border-teal'
          }`}
          placeholder="your.email@example.com"
        />
        {errors.email && (
          <p className="text-red-400 text-sm flex items-center">
            <AlertCircle className="w-4 h-4 mr-1" />
            {errors.email}
          </p>
        )}
      </div>

      {/* Message */}
      <div className="space-y-2">
        <label htmlFor="message" className="flex items-center text-light-gray font-medium">
          <MessageSquare className="w-4 h-4 mr-2" />
          Your Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleInputChange}
          rows={5}
          className={`w-full px-4 py-3 bg-navy/50 border rounded-lg text-white placeholder-light-gray/50 focus:outline-none focus:ring-2 focus:ring-teal transition-all duration-300 resize-vertical ${
            errors.message ? 'border-red-500' : 'border-light-gray/30 focus:border-teal'
          }`}
          placeholder="Tell me about your project or just say hello..."
        />
        {errors.message && (
          <p className="text-red-400 text-sm flex items-center">
            <AlertCircle className="w-4 h-4 mr-1" />
            {errors.message}
          </p>
        )}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-teal text-navy px-8 py-4 rounded-lg font-semibold text-lg hover:bg-teal/90 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center"
      >
        {isSubmitting ? (
          <>
            <div className="w-5 h-5 border-2 border-navy/30 border-t-navy rounded-full animate-spin mr-2"></div>
            Sending...
          </>
        ) : (
          <>
            <Send className="w-5 h-5 mr-2" />
            Send Message
          </>
        )}
      </button>
    </form>
  );
};

export default ContactForm;