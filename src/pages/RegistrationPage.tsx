import React, { useState } from 'react';
import { CheckCircle } from 'lucide-react';
import { membershipPlans } from '../data/memberships';

const RegistrationPage: React.FC = () => {
  const [selectedPlan, setSelectedPlan] = useState(membershipPlans[1].id); // Default to premium
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    zipCode: '',
    paymentMethod: 'creditCard',
    agreeToTerms: false
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target as HTMLInputElement;
    const checked = type === 'checkbox' ? (e.target as HTMLInputElement).checked : undefined;
    
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };
  
  const handlePlanSelection = (planId: string) => {
    setSelectedPlan(planId);
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // In a real application, you'd send this data to a server
    console.log('Form submitted:', { ...formData, membershipPlan: selectedPlan });
    
    // Show success message
    setFormSubmitted(true);
    
    // Reset form (in a real app, you might redirect to a thank you page)
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        address: '',
        city: '',
        zipCode: '',
        paymentMethod: 'creditCard',
        agreeToTerms: false
      });
    }, 5000);
  };
  
  return (
    <div>
      {/* Hero Banner */}
      <section className="relative py-20 bg-gray-900 text-white overflow-hidden">
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center z-0 opacity-40" 
          style={{ 
            backgroundImage: 'url(https://images.pexels.com/photos/2247179/pexels-photo-2247179.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)',
          }}
        />
        <div className="absolute inset-0 bg-dark/70 z-0"></div>
        
        <div className="container relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Become a Member</h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            Join our fitness community and start your journey to a healthier, stronger you.
          </p>
        </div>
      </section>
      
      {/* Membership Plans */}
      <section className="section bg-light">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Choose Your Membership Plan</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Select the plan that best fits your fitness goals and lifestyle.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {membershipPlans.map((plan) => (
              <div 
                key={plan.id}
                className={`card p-6 border-2 transition-all ${
                  selectedPlan === plan.id 
                    ? 'border-primary shadow-lg scale-[1.02]' 
                    : 'border-transparent hover:border-gray-200'
                }`}
              >
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <div className="text-3xl font-bold text-primary">
                    ${plan.price}
                    <span className="text-base font-normal text-gray-500">/{plan.period}</span>
                  </div>
                </div>
                
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle size={18} className="text-primary mr-2 flex-shrink-0 mt-1" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button
                  onClick={() => handlePlanSelection(plan.id)}
                  className={`w-full py-3 rounded-md transition-colors ${
                    selectedPlan === plan.id
                      ? 'bg-primary text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {selectedPlan === plan.id ? 'Selected' : 'Select Plan'}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Registration Form */}
      <section className="section bg-white">
        <div className="container max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Complete Your Registration</h2>
            <p className="text-lg text-gray-600">
              Fill out the form below to complete your membership registration.
            </p>
          </div>
          
          {formSubmitted ? (
            <div className="bg-success/10 border border-success rounded-lg p-6 text-center animate-fade-in">
              <svg className="w-16 h-16 text-success mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Registration Successful!</h3>
              <p className="text-lg text-gray-600">
                Thank you for joining FitForge! We've sent a confirmation email with your membership details.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="card p-8">
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4 pb-2 border-b">Personal Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="form-control">
                    <label htmlFor="firstName" className="form-label">First Name *</label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="form-input"
                      required
                    />
                  </div>
                  <div className="form-control">
                    <label htmlFor="lastName" className="form-label">Last Name *</label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="form-input"
                      required
                    />
                  </div>
                  <div className="form-control">
                    <label htmlFor="email" className="form-label">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="form-input"
                      required
                    />
                  </div>
                  <div className="form-control">
                    <label htmlFor="phone" className="form-label">Phone Number *</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="form-input"
                      required
                    />
                  </div>
                </div>
              </div>
              
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4 pb-2 border-b">Address</h3>
                <div className="grid grid-cols-1 gap-4">
                  <div className="form-control">
                    <label htmlFor="address" className="form-label">Street Address *</label>
                    <input
                      type="text"
                      id="address"
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      className="form-input"
                      required
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="form-control">
                      <label htmlFor="city" className="form-label">City *</label>
                      <input
                        type="text"
                        id="city"
                        name="city"
                        value={formData.city}
                        onChange={handleInputChange}
                        className="form-input"
                        required
                      />
                    </div>
                    <div className="form-control">
                      <label htmlFor="zipCode" className="form-label">ZIP Code *</label>
                      <input
                        type="text"
                        id="zipCode"
                        name="zipCode"
                        value={formData.zipCode}
                        onChange={handleInputChange}
                        className="form-input"
                        required
                      />
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4 pb-2 border-b">Payment Method</h3>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="creditCard"
                      name="paymentMethod"
                      value="creditCard"
                      checked={formData.paymentMethod === 'creditCard'}
                      onChange={handleInputChange}
                      className="w-4 h-4 text-primary focus:ring-primary"
                    />
                    <label htmlFor="creditCard" className="ml-2 text-gray-700">Credit Card</label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="debitCard"
                      name="paymentMethod"
                      value="debitCard"
                      checked={formData.paymentMethod === 'debitCard'}
                      onChange={handleInputChange}
                      className="w-4 h-4 text-primary focus:ring-primary"
                    />
                    <label htmlFor="debitCard" className="ml-2 text-gray-700">Debit Card</label>
                  </div>
                  <div className="flex items-center">
                    <input
                      type="radio"
                      id="bankTransfer"
                      name="paymentMethod"
                      value="bankTransfer"
                      checked={formData.paymentMethod === 'bankTransfer'}
                      onChange={handleInputChange}
                      className="w-4 h-4 text-primary focus:ring-primary"
                    />
                    <label htmlFor="bankTransfer" className="ml-2 text-gray-700">Bank Transfer</label>
                  </div>
                  
                  {/* In a real application, you would add fields for the specific payment details */}
                </div>
              </div>
              
              <div className="mb-8">
                <div className="flex items-start">
                  <input
                    type="checkbox"
                    id="agreeToTerms"
                    name="agreeToTerms"
                    checked={formData.agreeToTerms}
                    onChange={handleInputChange}
                    className="w-4 h-4 mt-1 text-primary focus:ring-primary"
                    required
                  />
                  <label htmlFor="agreeToTerms" className="ml-2 text-gray-700">
                    I agree to the <a href="#" className="text-primary hover:underline">Terms and Conditions</a> and <a href="#" className="text-primary hover:underline">Privacy Policy</a>
                  </label>
                </div>
              </div>
              
              <div className="text-center">
                <button type="submit" className="btn-primary w-full md:w-auto">
                  Complete Registration
                </button>
              </div>
            </form>
          )}
        </div>
      </section>
    </div>
  );
};

export default RegistrationPage;