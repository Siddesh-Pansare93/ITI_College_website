'use client';

import { useGoogleFont } from '../utils/fonts'

export default function HomePage() {
  const montserrat = useGoogleFont('Montserrat')
  const openSans = useGoogleFont('Open Sans')
  
  // Add animation styles
  const animationStyles = `
    @keyframes shimmer {
      0% { background-position: -200% center; }
      100% { background-position: 200% center; }
    }
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(10px); }
      to { opacity: 1; transform: translateY(0); }
    }
    @keyframes slideUp {
      from { opacity: 0; transform: translateY(20px); }
      to { opacity: 1; transform: translateY(0); }
    }
    .animate-fadeIn {
      animation: fadeIn 1s ease-out forwards;
    }
    .animate-slideUp {
      animation: slideUp 1s ease-out 0.5s forwards;
      opacity: 0;
      transform: translateY(20px);
    }
    .animate-pulse {
      animation: pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite;
    }
    @keyframes pulse {
      0%, 100% {
        opacity: 0.2;
        transform: scale(1);
      }
      50% {
        opacity: 0.3;
        transform: scale(1.1);
      }
    }
  `;
  
  return (
    <div className="min-h-screen flex flex-col" style={{ fontFamily: openSans }}>
      <style>{animationStyles}</style>
      
      {/* Navigation Bar */}
      {/* <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-blue-800" style={{ fontFamily: montserrat }}>
              CSM ITI College
            </h1>
          </div>
          <div className="hidden md:flex space-x-6">
            <a href="/" className="text-blue-600 font-medium cursor-pointer">Home</a>
            <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer">About</a>
            <a href="/courses" className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer">Courses</a>
            <a href="/admission" className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer">Admission</a>
            <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer">Contact</a>
          </div>
          <div className="md:hidden">
            <button className="text-gray-700 hover:text-blue-600 cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav> */}

      {/* Hero Section with Animation */}
      <div className="relative overflow-hidden" style={{ minHeight: "85vh" }}>
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0" 
          style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')",
            backgroundPosition: "center 30%"
          }}
        ></div>
        
        {/* Advanced Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-blue-800/85 to-blue-900/80 z-10"></div>
        
        {/* Animated Shapes in Background */}
        <div className="absolute inset-0 z-20 overflow-hidden">
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
          <div className="absolute top-40 -right-40 w-80 h-80 bg-yellow-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-1000"></div>
          <div className="absolute -top-40 left-1/3 w-80 h-80 bg-teal-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-2000"></div>
        </div>
        
        {/* Content Container */}
        <div className="container mx-auto px-4 py-20 md:py-32 relative z-30 h-full flex items-center">
          <div className="max-w-5xl mx-auto text-center">
            {/* Main Heading with 3D Metallic Effect */}
            <div className="mb-6 opacity-0 animate-fadeIn" style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}>
              <h1 className="font-extrabold text-transparent text-4xl sm:text-5xl lg:text-6xl leading-tight tracking-tight mb-2" 
                style={{ 
                  fontFamily: montserrat,
                  background: "linear-gradient(to bottom right, #ffffff 10%, #d6d6d6 30%, #ffffff 50%, #a0a0a0 70%, #e7e7e7 90%)",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  textShadow: "0px 4px 12px rgba(0,0,0,0.5)",
                  WebkitTextStroke: "1px rgba(100,100,100,0.1)",
                  filter: "drop-shadow(0 4px 3px rgba(0,0,0,0.5))",
                }}>
                Chhatrapati Sambhaji Maharaj
              </h1>
              <h6 className="font-extrabold text-transparent text-2xl sm:text-3xl lg:text-4xl leading-tight tracking-tight mb-2" 
                style={{ 
                  fontFamily: montserrat,
                  background: "linear-gradient(to bottom right, #ffffff 10%, #d6d6d6 30%, #ffffff 50%, #a0a0a0 70%, #e7e7e7 90%)",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  textShadow: "0px 4px 12px rgba(0,0,0,0.5)",
                  WebkitTextStroke: "1px rgba(100,100,100,0.1)",
                  filter: "drop-shadow(0 4px 3px rgba(0,0,0,0.5))",
                }}>
                Private Industrial Training Institute
              </h6>
              <div className="flex items-center justify-center">
                <div className="h-0.5 w-12 bg-gradient-to-r from-transparent via-yellow-400 to-transparent mx-3"></div>
                <h2 className="text-yellow-400 text-3xl sm:text-4xl lg:text-5xl font-bold" 
                  style={{ 
                    fontFamily: montserrat,
                    textShadow: "0 2px 10px rgba(250, 204, 21, 0.5), 0 0 30px rgba(250, 204, 21, 0.2)"
                  }}>
                  (ITI), Kandhar
                </h2>
                <div className="h-0.5 w-12 bg-gradient-to-r from-transparent via-yellow-400 to-transparent mx-3"></div>
              </div>
            </div>
            
            {/* Tagline with Animation */}
            <p className="text-xl md:text-2xl text-blue-100 mb-10 max-w-2xl mx-auto leading-relaxed opacity-0 animate-fadeIn"
              style={{
                animationDelay: "0.5s", 
                animationFillMode: "forwards",
                textShadow: "0 2px 4px rgba(0,0,0,0.3)"
              }}>
              Building careers through quality technical education and skill development
            </p>
            
            {/* CTA Buttons with Enhanced Animation */}
            <div className="flex flex-col sm:flex-row justify-center gap-6 mt-8 opacity-0 animate-fadeIn"
              style={{animationDelay: "0.8s", animationFillMode: "forwards"}}>
              {/* <Link 
                to="/admission" 
                className="bg-yellow-500 hover:bg-yellow-400 text-blue-900 font-bold py-4 px-10 rounded-lg transform transition-all duration-300 hover:scale-105 hover:shadow-yellow-400/30 hover:shadow-xl shadow-lg relative overflow-hidden group"
              >
                <span className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-yellow-300 to-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                <span className="absolute top-0 left-0 w-full h-full flex items-center justify-center text-blue-900 font-bold opacity-0 group-hover:opacity-100 transform group-hover:translate-y-0 translate-y-4 transition-all duration-300">Apply Today!</span>
                <span className="relative z-10 group-hover:opacity-0 transition-opacity duration-300">Apply Now</span>
              </Link> */}
              
              <a
                href="#contact" 
                className="bg-transparent backdrop-blur-sm hover:bg-white/10 text-white border-2 border-white font-bold py-4 px-10 rounded-lg transform transition-all duration-300 hover:scale-105 hover:shadow-white/20 hover:shadow-xl shadow-lg relative overflow-hidden group"
              >
                <span className="absolute inset-0 w-0 bg-white transition-all duration-300 ease-out opacity-10 group-hover:w-full"></span>
                <span className="relative">Contact Us</span>
              </a>
            </div>
            
            {/* College Features */}
            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 opacity-0 animate-fadeIn" 
              style={{animationDelay: "1.1s", animationFillMode: "forwards"}}>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 text-center">
                <div className="text-2xl font-bold text-yellow-400 mb-1">500+</div>
                <div className="text-sm text-blue-100">Students Enrolled</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 text-center">
                <div className="text-2xl font-bold text-yellow-400 mb-1">95%</div>
                <div className="text-sm text-blue-100">Placement Rate</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 text-center">
                <div className="text-2xl font-bold text-yellow-400 mb-1">20+</div>
                <div className="text-sm text-blue-100">Expert Faculty</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 text-center">
                <div className="text-2xl font-bold text-yellow-400 mb-1">15+</div>
                <div className="text-sm text-blue-100">Industry Partners</div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Wave Shape */}
        <div className="absolute bottom-0 left-0 right-0 h-16 z-20">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-full">
            <path fill="#f8fafc" fillOpacity="1" d="M0,224L80,208C160,192,320,160,480,165.3C640,171,800,213,960,218.7C1120,224,1280,192,1360,176L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
          </svg>
        </div>
      </div>
      
      {/* Courses/Trades Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4" style={{ fontFamily: montserrat }}>
              Our Trades & Courses
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover our industry-focused technical courses designed to prepare you for a successful career
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Electrician Card */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all hover:scale-105 hover:shadow-xl cursor-pointer">
              <div className="h-3 bg-blue-600"></div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800" style={{ fontFamily: montserrat }}>Electrician</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Learn electrical systems installation, maintenance, and repair. Gain hands-on experience with industrial and residential electrical work.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-semibold text-blue-600">2 Year Course</span>
                  <button className="text-blue-600 hover:text-blue-800 font-medium flex items-center cursor-pointer">
                    Learn more
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            
            {/* Wiremen Card */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all hover:scale-105 hover:shadow-xl cursor-pointer">
              <div className="h-3 bg-green-600"></div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-green-100 p-3 rounded-full mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800" style={{ fontFamily: montserrat }}>Wiremen</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Specialize in wiring installation for buildings and electrical systems. Learn safety protocols and industry-standard wiring techniques.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-semibold text-green-600">1 Year Course</span>
                  <button className="text-green-600 hover:text-green-800 font-medium flex items-center cursor-pointer">
                    Learn more
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            
            {/* Solar Technician Card */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all hover:scale-105 hover:shadow-xl cursor-pointer">
              <div className="h-3 bg-yellow-500"></div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-yellow-100 p-3 rounded-full mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800" style={{ fontFamily: montserrat }}>Solar Technician</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Master the installation and maintenance of solar energy systems. Learn about renewable energy technology and sustainable power solutions.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-semibold text-yellow-600">1.5 Year Course</span>
                  <button className="text-yellow-600 hover:text-yellow-700 font-medium flex items-center cursor-pointer">
                    Learn more
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            
            {/* Finance Executive Card */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all hover:scale-105 hover:shadow-xl cursor-pointer">
              <div className="h-3 bg-purple-600"></div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="bg-purple-100 p-3 rounded-full mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800" style={{ fontFamily: montserrat }}>Finance Executive</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Develop skills in financial management, accounting, and business operations. Prepare for careers in banking, insurance, and corporate finance.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-semibold text-purple-600">1 Year Course</span>
                  <button className="text-purple-600 hover:text-purple-800 font-medium flex items-center cursor-pointer">
                    Learn more
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          {/* <div className="text-center mt-12">
            <a href="/courses" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg shadow-lg transform transition-all hover:scale-105 cursor-pointer inline-block">
              View All Courses
            </a>
          </div> */}
        </div>
      </section>
      
      {/* About Section with Counter */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6" style={{ fontFamily: montserrat }}>
                Why Choose Chhatrapati Sambhaji Maharaj ITI College?
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                We are committed to providing quality technical education that prepares students for successful careers in their chosen fields. Our industry-focused curriculum and experienced faculty ensure that our graduates are job-ready.
              </p>
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
                  <div className="text-gray-700">Students Enrolled</div>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <div className="text-3xl font-bold text-green-600 mb-2">95%</div>
                  <div className="text-gray-700">Placement Rate</div>
                </div>
                <div className="text-center p-4 bg-yellow-50 rounded-lg">
                  <div className="text-3xl font-bold text-yellow-600 mb-2">20+</div>
                  <div className="text-gray-700">Expert Faculty</div>
                </div>
                <div className="text-center p-4 bg-purple-50 rounded-lg">
                  <div className="text-3xl font-bold text-purple-600 mb-2">15+</div>
                  <div className="text-gray-700">Industry Partners</div>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 relative">
              <div className="bg-blue-600 rounded-lg p-1 shadow-xl transform rotate-3 hover:rotate-0 transition-transform duration-300">
                <div className="bg-white rounded-lg overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                    alt="Students in technical training" 
                    className="w-full h-auto"
                  />
                </div>
              </div>
              <div className="absolute -bottom-6 -left-6 bg-yellow-500 text-blue-900 font-bold py-3 px-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
                NCVT Affiliated
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact and Information Section */}
      <section className="py-16 bg-gray-100" id='contact'>
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4" style={{ fontFamily: montserrat }}>
              Contact Us
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Have questions about our programs? Reach out to us for more information.
            </p>
          </div>
          
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="lg:w-1/2 bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6" style={{ fontFamily: montserrat }}>
                Get in Touch
              </h3>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                    <input 
                      type="email" 
                      id="email" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all"
                    placeholder="Your phone number"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea 
                    id="message" 
                    rows={4} 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all"
                    placeholder="Your message or inquiry"
                  ></textarea>
                </div>
                <button 
                  type="submit" 
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg shadow-lg transform transition-all hover:scale-105 cursor-pointer"
                >
                  Send Message
                </button>
              </form>
            </div>
            
            <div className="lg:w-1/2 bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6" style={{ fontFamily: montserrat }}>
                College Information
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-full mr-4 shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-1">Address</h4>
                    <p className="text-gray-600">
                      Chhatrapati Sambhaji Maharaj ITI College Kandhar, kandhar-Bahadarpura Road, kandhar, Pin Code: 431714
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-green-100 p-3 rounded-full mr-4 shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-1">Email</h4>
                    <p className="text-gray-600">
                      <a href="mailto:csmitik@gmail.com" className="text-blue-600 hover:underline">csmitik@gmail.com</a>
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-yellow-100 p-3 rounded-full mr-4 shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-1">Phone</h4>
                    <p className="text-gray-600">
                      <a href="tel:+917840939777" className="text-blue-600 hover:underline">+91 78409 39777</a>
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-purple-100 p-3 rounded-full mr-4 shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-1">Organization</h4>
                    <p className="text-gray-600">
                      Rajarshi Shahu Maharaj SevaBhavi sanstha Manaspuri Tq.Kandhar, Dist.Nanded
                    </p>
                  </div>
                </div>
                <div className="mt-8">
                  <div className="bg-gray-200 rounded-lg overflow-hidden h-64">
                    <iframe 
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15144.699248039117!2d77.1500146!3d18.8767235!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bceb27d2d859a67%3A0x3b5b4189f71186c!2sKandhar%2C%20Maharashtra%20431714!5e0!3m2!1sen!2sin!4v1651234567890!5m2!1sen!2sin" 
                      width="100%" 
                      height="100%" 
                      style={{ border: 0 }} 
                      allowFullScreen 
                      loading="lazy"
                      title="College Location"
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ fontFamily: montserrat }}>
              What Our Students Say
            </h2>
            <p className="text-lg text-blue-200 max-w-2xl mx-auto">
              Hear from our alumni about their experience at Chhatrapati Sambhaji Maharaj ITI College
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Testimonial 1 */}
            <div className="bg-blue-800 rounded-xl p-6 shadow-lg transform transition-all hover:scale-105">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center text-blue-900 font-bold text-xl mr-4">
                  RS
                </div>
                <div>
                  <h4 className="font-bold">Rahul Sharma</h4>
                  <p className="text-blue-300 text-sm">Electrician Course, 2022</p>
                </div>
              </div>
              <p className="text-blue-100 mb-4">
                "The hands-on training I received at CSM ITI College prepared me for real-world challenges. I secured a job immediately after completing my course."
              </p>
              <div className="flex text-yellow-500">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
            </div>
            
            {/* Testimonial 2 */}
            <div className="bg-blue-800 rounded-xl p-6 shadow-lg transform transition-all hover:scale-105">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center text-blue-900 font-bold text-xl mr-4">
                  PP
                </div>
                <div>
                  <h4 className="font-bold">Priya Patil</h4>
                  <p className="text-blue-300 text-sm">Solar Technician, 2021</p>
                </div>
              </div>
              <p className="text-blue-100 mb-4">
                "The faculty at CSM ITI College is exceptional. They not only taught technical skills but also helped me develop professional work ethics. I'm now working with a leading solar company."
              </p>
              <div className="flex text-yellow-500">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
            </div>
            
            {/* Testimonial 3 */}
            <div className="bg-blue-800 rounded-xl p-6 shadow-lg transform transition-all hover:scale-105">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center text-blue-900 font-bold text-xl mr-4">
                  AK
                </div>
                <div>
                  <h4 className="font-bold">Amit Kumar</h4>
                  <p className="text-blue-300 text-sm">Finance Executive, 2023</p>
                </div>
              </div>
              <p className="text-blue-100 mb-4">
                "The practical approach to learning at CSM ITI College gave me an edge in the job market. The career guidance and placement support were invaluable for my career growth."
              </p>
              <div className="flex text-yellow-500">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
            </div>
          </div>
          
            {/* <div className="text-center mt-12">
              <button className="bg-white text-blue-900 hover:bg-yellow-500 font-bold py-3 px-8 rounded-lg shadow-lg transform transition-all hover:scale-105 cursor-pointer">
                Read More Success Stories
              </button>
            </div> */}
        </div>
      </section>
      
      {/* Call to Action Section */}
      <section className="py-16 bg-gradient-to-r from-yellow-500 to-yellow-400">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-8 md:mb-0 md:w-2/3">
              <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4" style={{ fontFamily: montserrat }}>
                Ready to Start Your Career Journey?
              </h2>
              <p className="text-lg text-blue-900">
                Admissions are open for the new academic session. Apply now to secure your seat.
              </p>
            </div>
              {/* <div>
                <Link to={"/admission"} className="bg-blue-900 hover:bg-blue-800 text-white font-bold py-4 px-10 rounded-lg shadow-lg transform transition-all hover:scale-105 cursor-pointer">
                  Apply Now
                </Link>
              </div> */}
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-gray-900 text-white pt-16 pb-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div>
              <h3 className="text-xl font-bold mb-6" style={{ fontFamily: montserrat }}>About Us</h3>
              <p className="text-gray-400 mb-6">
                Chhatrapati Sambhaji Maharaj ITI College is committed to providing quality technical education and skill development to prepare students for successful careers.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="bg-blue-600 hover:bg-blue-700 h-10 w-10 rounded-full flex items-center justify-center transition-colors cursor-pointer">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                  </svg>
                </a>
                <a href="#" className="bg-blue-400 hover:bg-blue-500 h-10 w-10 rounded-full flex items-center justify-center transition-colors cursor-pointer">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                  </svg>
                </a>
                <a href="#" className="bg-pink-600 hover:bg-pink-700 h-10 w-10 rounded-full flex items-center justify-center transition-colors cursor-pointer">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                  </svg>
                </a>
                <a href="#" className="bg-red-600 hover:bg-red-700 h-10 w-10 rounded-full flex items-center justify-center transition-colors cursor-pointer">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                  </svg>
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-6" style={{ fontFamily: montserrat }}>Quick Links</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors cursor-pointer">Home</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors cursor-pointer">About Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors cursor-pointer">Courses</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors cursor-pointer">Admission</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors cursor-pointer">Facilities</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors cursor-pointer">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-6" style={{ fontFamily: montserrat }}>Our Courses</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors cursor-pointer">Electrician</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors cursor-pointer">Wiremen</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors cursor-pointer">Solar Technician</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors cursor-pointer">Finance Executive</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors cursor-pointer">All Courses</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-6" style={{ fontFamily: montserrat }}>Contact Info</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-500 mt-1 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="text-gray-400">Kandhar-Bahadarpura Road, Kandhar, 431714</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-500 mt-1 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="text-gray-400">csmitik@gmail.com</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-500 mt-1 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span className="text-gray-400">+91 78409 39777</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm mb-4 md:mb-0">
                &copy; {new Date().getFullYear()} Chhatrapati Sambhaji Maharaj ITI College. All rights reserved.
              </p>
              <div className="flex space-x-6">
                <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors cursor-pointer">Privacy Policy</a>
                <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors cursor-pointer">Terms of Service</a>
                <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors cursor-pointer">Sitemap</a>
              </div>
            </div>
            
            {/* Developer Credits */}
            <div className="mt-6 pt-6 border-t border-gray-800 text-center">
              <p className="text-gray-500 text-sm">
                Designed and Developed by {" "}
                <a 
                  href="https://devionx.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-yellow-400 transition-colors duration-300 font-medium"
                >
                  DevionX Technologies
                </a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}