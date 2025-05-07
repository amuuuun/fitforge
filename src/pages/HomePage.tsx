import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, CheckCircle, Star } from 'lucide-react';
import { testimonials } from '../data/testimonials';

const HomePage: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[90vh] bg-gray-900 flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center z-0" 
          style={{ 
            backgroundImage: 'url(https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)',
            backgroundPosition: 'center 30%',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-dark/80 to-dark/40 backdrop-blur-sm"></div>
        </div>
        
        {/* Hero Content */}
        <div className="container relative z-10 text-white">
          <div className="max-w-2xl space-y-6 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Transform Your Body, <span className="text-accent">Transform Your Life</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-200">
              FitForge is more than a gym—it's a community dedicated to helping you reach your fitness goals and unlock your full potential.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 pt-4">
              <Link to="/register" className="btn-accent">
                Join Now
              </Link>
              <Link to="/supplements" className="btn-secondary bg-transparent text-white border-white hover:bg-white/10">
                Shop Supplements
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section bg-light">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose FitForge?</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We combine state-of-the-art equipment, expert training, and a supportive community to provide the ultimate fitness experience.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Benefit 1 */}
            <div className="card p-6 transition-transform hover:translate-y-[-5px]">
              <div className="rounded-full bg-primary/10 w-14 h-14 flex items-center justify-center mb-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                  <path d="M18 8h1a4 4 0 0 1 0 8h-1"></path><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path><line x1="6" y1="1" x2="6" y2="4"></line><line x1="10" y1="1" x2="10" y2="4"></line><line x1="14" y1="1" x2="14" y2="4"></line>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Premium Equipment</h3>
              <p className="text-gray-600">
                Our gym features the latest fitness equipment, including strength machines, free weights, cardio stations, and functional training areas.
              </p>
            </div>
            
            {/* Benefit 2 */}
            <div className="card p-6 transition-transform hover:translate-y-[-5px]">
              <div className="rounded-full bg-primary/10 w-14 h-14 flex items-center justify-center mb-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                  <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="8.5" cy="7" r="4"></circle><line x1="20" y1="8" x2="20" y2="14"></line><line x1="23" y1="11" x2="17" y2="11"></line>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Expert Trainers</h3>
              <p className="text-gray-600">
                Our certified trainers provide personalized guidance to help you optimize your workouts, prevent injuries, and achieve your fitness goals.
              </p>
            </div>
            
            {/* Benefit 3 */}
            <div className="card p-6 transition-transform hover:translate-y-[-5px]">
              <div className="rounded-full bg-primary/10 w-14 h-14 flex items-center justify-center mb-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                  <path d="M12 2L2 7l10 5 10-5-10-5z"></path><path d="M2 17l10 5 10-5"></path><path d="M2 12l10 5 10-5"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Diverse Classes</h3>
              <p className="text-gray-600">
                From high-intensity workouts to mindful movement, our class schedule offers variety to keep your fitness journey exciting and effective.
              </p>
            </div>
            
            {/* Benefit 4 */}
            <div className="card p-6 transition-transform hover:translate-y-[-5px]">
              <div className="rounded-full bg-primary/10 w-14 h-14 flex items-center justify-center mb-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Supportive Community</h3>
              <p className="text-gray-600">
                Join a motivating community of like-minded individuals who support each other on their fitness journeys.
              </p>
            </div>
            
            {/* Benefit 5 */}
            <div className="card p-6 transition-transform hover:translate-y-[-5px]">
              <div className="rounded-full bg-primary/10 w-14 h-14 flex items-center justify-center mb-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Flexible Hours</h3>
              <p className="text-gray-600">
                With extended operating hours and 24/7 access for premium members, you can work out on your own schedule.
              </p>
            </div>
            
            {/* Benefit 6 */}
            <div className="card p-6 transition-transform hover:translate-y-[-5px]">
              <div className="rounded-full bg-primary/10 w-14 h-14 flex items-center justify-center mb-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Personalized Plans</h3>
              <p className="text-gray-600">
                Receive customized workout and nutrition plans tailored to your specific goals, preferences, and fitness level.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Membership CTA */}
      <section className="section bg-primary text-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">Ready to Start Your Fitness Journey?</h2>
              <p className="text-lg text-white/80">
                Join FitForge today and transform your life with our comprehensive fitness solutions, expert guidance, and supportive community.
              </p>
              <ul className="space-y-3">
                {['No long-term contracts', 'Free fitness assessment', 'Money-back guarantee', 'Flexible membership options'].map((item, index) => (
                  <li key={index} className="flex items-center">
                    <CheckCircle size={20} className="text-accent mr-2" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="pt-2">
                <Link to="/register" className="btn-accent inline-flex items-center">
                  Become a Member
                  <ChevronRight size={18} className="ml-1" />
                </Link>
              </div>
            </div>
            <div className="relative h-80 md:h-auto overflow-hidden rounded-lg">
              <img 
                src="https://images.pexels.com/photos/1229356/pexels-photo-1229356.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Fitness Training" 
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section bg-light">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Members Say</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Don't just take our word for it. Hear from our members who have transformed their lives with FitForge.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="card p-6 h-full flex flex-col">
                <div className="flex items-center mb-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h3 className="font-semibold">{testimonial.name}</h3>
                    <p className="text-gray-500 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={18}
                      className={i < testimonial.rating ? "text-accent fill-accent" : "text-gray-300"}
                    />
                  ))}
                </div>
                <p className="text-gray-600 italic flex-grow">"{testimonial.quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-accent/10 py-16">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Start Your Fitness Journey Today</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-8">
            Join FitForge now and take the first step towards a healthier, stronger you. No matter your fitness level, we're here to help you succeed.
          </p>
          <Link to="/register" className="btn-accent">
            Become a Member
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;