import React, { useState } from 'react';
import { Mail, Phone, User, Building, MessageSquare, Clock, Shield, Send, CheckCircle, AlertCircle } from 'lucide-react';

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  company: string;
  subject: string;
  message: string;
  contactMethod: string;
  bestTime: string;
  captcha: string;
}

interface FormErrors {
  [key: string]: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: '',
    contactMethod: 'email',
    bestTime: 'morning',
    captcha: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [captchaQuestion, setCaptchaQuestion] = useState('');
  const [captchaAnswer, setCaptchaAnswer] = useState(0);

  // Generate simple math CAPTCHA
  React.useEffect(() => {
    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;
    setCaptchaQuestion(`${num1} + ${num2} = ?`);
    setCaptchaAnswer(num1 + num2);
  }, []);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    // Required field validation
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject line is required';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 50) {
      newErrors.message = 'Message must be at least 50 characters long';
    }

    if (!formData.captcha.trim()) {
      newErrors.captcha = 'Please solve the math problem';
    } else if (parseInt(formData.captcha) !== captchaAnswer) {
      newErrors.captcha = 'Incorrect answer. Please try again.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Clear error when user starts typing
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
      // Simulate form submission (replace with actual API call)
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Here you would typically send the form data to your backend
      console.log('Form submitted:', formData);
      
      setIsSubmitted(true);
      
      // Reset form after successful submission
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        company: '',
        subject: '',
        message: '',
        contactMethod: 'email',
        bestTime: 'morning',
        captcha: ''
      });

      // Generate new CAPTCHA
      const num1 = Math.floor(Math.random() * 10) + 1;
      const num2 = Math.floor(Math.random() * 10) + 1;
      setCaptchaQuestion(`${num1} + ${num2} = ?`);
      setCaptchaAnswer(num1 + num2);

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
        <h3 className="text-2xl font-bold text-white mb-2">Message Sent Successfully!</h3>
        <p className="text-light-gray mb-6">
          Thank you for reaching out. I'll get back to you within 24 hours.
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
          Ready to start a project or just want to chat? I'd love to hear from you.
        </p>
      </div>

      {/* Full Name */}
      <div className="space-y-2">
        <label htmlFor="fullName" className="flex items-center text-light-gray font-medium">
          <User className="w-4 h-4 mr-2" />
          Full Name *
        </label>
        <input
          type="text"
          id="fullName"
          name="fullName"
          value={formData.fullName}
          onChange={handleInputChange}
          className={`w-full px-4 py-3 bg-navy/50 border rounded-lg text-white placeholder-light-gray/50 focus:outline-none focus:ring-2 focus:ring-teal transition-all duration-300 ${
            errors.fullName ? 'border-red-500' : 'border-light-gray/30 focus:border-teal'
          }`}
          placeholder="Enter your full name"
        />
        {errors.fullName && (
          <p className="text-red-400 text-sm flex items-center">
            <AlertCircle className="w-4 h-4 mr-1" />
            {errors.fullName}
          </p>
        )}
      </div>

      {/* Email and Phone Row */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="email" className="flex items-center text-light-gray font-medium">
            <Mail className="w-4 h-4 mr-2" />
            Email Address *
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

        <div className="space-y-2">
          <label htmlFor="phone" className="flex items-center text-light-gray font-medium">
            <Phone className="w-4 h-4 mr-2" />
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            className="w-full px-4 py-3 bg-navy/50 border border-light-gray/30 rounded-lg text-white placeholder-light-gray/50 focus:outline-none focus:ring-2 focus:ring-teal focus:border-teal transition-all duration-300"
            placeholder="+1 (555) 123-4567"
          />
        </div>
      </div>

      {/* Company */}
      <div className="space-y-2">
        <label htmlFor="company" className="flex items-center text-light-gray font-medium">
          <Building className="w-4 h-4 mr-2" />
          Company/Organization
        </label>
        <input
          type="text"
          id="company"
          name="company"
          value={formData.company}
          onChange={handleInputChange}
          className="w-full px-4 py-3 bg-navy/50 border border-light-gray/30 rounded-lg text-white placeholder-light-gray/50 focus:outline-none focus:ring-2 focus:ring-teal focus:border-teal transition-all duration-300"
          placeholder="Your company or organization"
        />
      </div>

      {/* Subject */}
      <div className="space-y-2">
        <label htmlFor="subject" className="flex items-center text-light-gray font-medium">
          <MessageSquare className="w-4 h-4 mr-2" />
          Subject Line *
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleInputChange}
          className={`w-full px-4 py-3 bg-navy/50 border rounded-lg text-white placeholder-light-gray/50 focus:outline-none focus:ring-2 focus:ring-teal transition-all duration-300 ${
            errors.subject ? 'border-red-500' : 'border-light-gray/30 focus:border-teal'
          }`}
          placeholder="What's this about?"
        />
        {errors.subject && (
          <p className="text-red-400 text-sm flex items-center">
            <AlertCircle className="w-4 h-4 mr-1" />
            {errors.subject}
          </p>
        )}
      </div>

      {/* Message */}
      <div className="space-y-2">
        <label htmlFor="message" className="flex items-center text-light-gray font-medium">
          <MessageSquare className="w-4 h-4 mr-2" />
          Message * (minimum 50 characters)
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
          placeholder="Tell me about your project, ideas, or just say hello..."
        />
        <div className="flex justify-between items-center">
          {errors.message && (
            <p className="text-red-400 text-sm flex items-center">
              <AlertCircle className="w-4 h-4 mr-1" />
              {errors.message}
            </p>
          )}
          <p className="text-light-gray/70 text-sm ml-auto">
            {formData.message.length}/50 characters
          </p>
        </div>
      </div>

      {/* Contact Preferences Row */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="contactMethod" className="flex items-center text-light-gray font-medium">
            <Mail className="w-4 h-4 mr-2" />
            Preferred Contact Method
          </label>
          <select
            id="contactMethod"
            name="contactMethod"
            value={formData.contactMethod}
            onChange={handleInputChange}
            className="w-full px-4 py-3 bg-navy/50 border border-light-gray/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-teal focus:border-teal transition-all duration-300"
          >
            <option value="email">Email</option>
            <option value="phone">Phone</option>
          </select>
        </div>

        <div className="space-y-2">
          <label htmlFor="bestTime" className="flex items-center text-light-gray font-medium">
            <Clock className="w-4 h-4 mr-2" />
            Best Time to Contact
          </label>
          <select
            id="bestTime"
            name="bestTime"
            value={formData.bestTime}
            onChange={handleInputChange}
            className="w-full px-4 py-3 bg-navy/50 border border-light-gray/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-teal focus:border-teal transition-all duration-300"
          >
            <option value="morning">Morning (9 AM - 12 PM)</option>
            <option value="afternoon">Afternoon (12 PM - 5 PM)</option>
            <option value="evening">Evening (5 PM - 8 PM)</option>
          </select>
        </div>
      </div>

      {/* CAPTCHA */}
      <div className="space-y-2">
        <label htmlFor="captcha" className="flex items-center text-light-gray font-medium">
          <Shield className="w-4 h-4 mr-2" />
          Security Check * - {captchaQuestion}
        </label>
        <input
          type="number"
          id="captcha"
          name="captcha"
          value={formData.captcha}
          onChange={handleInputChange}
          className={`w-full px-4 py-3 bg-navy/50 border rounded-lg text-white placeholder-light-gray/50 focus:outline-none focus:ring-2 focus:ring-teal transition-all duration-300 ${
            errors.captcha ? 'border-red-500' : 'border-light-gray/30 focus:border-teal'
          }`}
          placeholder="Enter the answer"
        />
        {errors.captcha && (
          <p className="text-red-400 text-sm flex items-center">
            <AlertCircle className="w-4 h-4 mr-1" />
            {errors.captcha}
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
            Sending Message...
          </>
        ) : (
          <>
            <Send className="w-5 h-5 mr-2" />
            Send Message
          </>
        )}
      </button>

      {/* Privacy Notice */}
      <div className="bg-light-gray/5 rounded-lg p-4 border border-light-gray/10">
        <div className="flex items-start space-x-3">
          <Shield className="w-5 h-5 text-teal mt-0.5 flex-shrink-0" />
          <div>
            <h4 className="text-white font-medium mb-1">Privacy Notice</h4>
            <p className="text-light-gray text-sm leading-relaxed">
              Your information is secure and will only be used to respond to your inquiry. 
              I respect your privacy and will never share your details with third parties. 
              All data is handled in accordance with privacy best practices.
            </p>
          </div>
        </div>
      </div>
    </form>
  );
};

export default ContactForm;