'use client';
import { Link } from 'react-router';
import { useGoogleFont } from '../utils/fonts'


export default function CourseDetailsPage() {
  const montserrat = useGoogleFont('Montserrat')
  const openSans = useGoogleFont('Open Sans')
  
  return (
    <div className="min-h-screen flex flex-col" style={{ fontFamily: openSans }}>
      {/* Navigation Bar */}
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center">
            <a href="/index.html?screen=HomePage">
              <h1 className="text-2xl font-bold text-blue-800" style={{ fontFamily: montserrat }}>
                CSM ITI College
              </h1>
            </a>
          </div>
          <div className="hidden md:flex space-x-6">
            <a href="/" className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer">Home</a>
            <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer">About</a>
            <a href="/courses" className="text-blue-600 font-medium cursor-pointer">Courses</a>
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
      </nav>

      {/* Course Header */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 p-4 rounded-full mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h1 className="text-3xl md:text-4xl font-bold" style={{ fontFamily: montserrat }}>
                  Electrician Course
                </h1>
              </div>
              <p className="text-xl text-blue-100 mb-6">
                Comprehensive training in electrical systems installation, maintenance, and repair
              </p>
              <div className="flex flex-wrap gap-4 mb-6">
                <div className="bg-blue-800 px-4 py-2 rounded-full text-sm font-medium">
                  <span className="mr-2">⏱️</span> 2 Year Duration
                </div>
                <div className="bg-blue-800 px-4 py-2 rounded-full text-sm font-medium">
                  <span className="mr-2">🏆</span> NCVT Certified
                </div>
                <div className="bg-blue-800 px-4 py-2 rounded-full text-sm font-medium">
                  <span className="mr-2">👨‍🎓</span> 95% Placement Rate
                </div>
              </div>
              <Link to={'/admission'} className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-bold py-3 px-8 rounded-lg transform transition-all hover:scale-105 shadow-lg cursor-pointer">
                Apply Now
              </Link>
            </div>
            <div className="md:w-1/2">
              <div className="bg-white p-1 rounded-lg shadow-xl transform md:rotate-3 hover:rotate-0 transition-transform duration-300">
                <img 
                  src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="Electrician working" 
                  className="rounded-lg w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Course Overview */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center" style={{ fontFamily: montserrat }}>
              Course Overview
            </h2>
            
            <div className="bg-gray-50 p-8 rounded-xl shadow-md mb-12">
              <p className="text-lg text-gray-700 mb-6">
                The Electrician course at Chhatrapati Sambhaji Maharaj ITI College is designed to provide comprehensive training in electrical systems installation, maintenance, and repair. This program prepares students for careers in residential, commercial, and industrial electrical work.
              </p>
              <p className="text-lg text-gray-700">
                Our curriculum combines theoretical knowledge with extensive hands-on practice, ensuring that graduates are job-ready and equipped with the skills demanded by the industry. The course is certified by the National Council for Vocational Training (NCVT), making our graduates eligible for employment across India and abroad.
              </p>
            </div>
            
            {/* Key Features */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-blue-50 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-blue-800 mb-4" style={{ fontFamily: montserrat }}>
                  Key Highlights
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600 mt-1 mr-3" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>NCVT certified curriculum</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600 mt-1 mr-3" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>State-of-the-art electrical labs</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600 mt-1 mr-3" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Experienced faculty from industry</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600 mt-1 mr-3" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Regular industrial visits</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600 mt-1 mr-3" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Dedicated placement assistance</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-green-50 p-6 rounded-xl">
                <h3 className="text-xl font-bold text-green-800 mb-4" style={{ fontFamily: montserrat }}>
                  Eligibility & Admission
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600 mt-1 mr-3" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>10th pass (SSC) or equivalent</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600 mt-1 mr-3" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Minimum 35% marks in qualifying exam</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600 mt-1 mr-3" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Age: 14-40 years</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600 mt-1 mr-3" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Selection through merit or entrance test</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600 mt-1 mr-3" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Limited seats available (60 per batch)</span>
                  </li>
                </ul>
              </div>
            </div>
            
            {/* Curriculum */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-gray-800 mb-6" style={{ fontFamily: montserrat }}>
                Curriculum Highlights
              </h3>
              
              <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-gray-200">
                  <div className="p-6">
                    <h4 className="text-lg font-semibold text-blue-800 mb-4">First Year</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        <span>Basic Electrical Theory</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        <span>Workshop Calculation & Science</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        <span>Engineering Drawing</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        <span>Basic Wiring Techniques</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        <span>Electrical Measuring Instruments</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        <span>Domestic Electrical Installations</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        <span>Safety Practices & Procedures</span>
                      </li>
                    </ul>
                  </div>
                  <div className="p-6">
                    <h4 className="text-lg font-semibold text-blue-800 mb-4">Second Year</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        <span>AC/DC Machines & Motors</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        <span>Industrial Wiring Systems</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        <span>Transformer Installation & Maintenance</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        <span>Electronic Control Circuits</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        <span>Electrical Troubleshooting</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        <span>Digital Electronics & PLC Basics</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        <span>Industrial Training & Project Work</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Career Opportunities */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-gray-800 mb-6" style={{ fontFamily: montserrat }}>
                Career Opportunities
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                <div className="bg-blue-50 p-5 rounded-lg text-center">
                  <div className="bg-blue-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">Industrial Electrician</h4>
                  <p className="text-gray-600">Work in manufacturing plants maintaining electrical systems</p>
                </div>
                
                <div className="bg-blue-50 p-5 rounded-lg text-center">
                  <div className="bg-blue-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                  </div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">Residential Electrician</h4>
                  <p className="text-gray-600">Install and repair electrical systems in homes and apartments</p>
                </div>
                
                <div className="bg-blue-50 p-5 rounded-lg text-center">
                  <div className="bg-blue-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                    </svg>
                  </div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">Maintenance Technician</h4>
                  <p className="text-gray-600">Maintain and repair electrical equipment in commercial buildings</p>
                </div>
                
                <div className="bg-blue-50 p-5 rounded-lg text-center">
                  <div className="bg-blue-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">Power Company Technician</h4>
                  <p className="text-gray-600">Work with utility companies to maintain power distribution systems</p>
                </div>
                
                <div className="bg-blue-50 p-5 rounded-lg text-center">
                  <div className="bg-blue-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                    </svg>
                  </div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">Control Panel Technician</h4>
                  <p className="text-gray-600">Build and maintain electrical control panels for automation systems</p>
                </div>
                
                <div className="bg-blue-50 p-5 rounded-lg text-center">
                  <div className="bg-blue-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">Electrical Contractor</h4>
                  <p className="text-gray-600">Start your own electrical contracting business after gaining experience</p>
                </div>
              </div>
            </div>
            
            {/* Testimonial */}
            <div className="bg-blue-900 text-white p-8 rounded-xl shadow-lg mb-12">
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/4 mb-6 md:mb-0 flex justify-center">
                  <div className="w-24 h-24 bg-yellow-500 rounded-full flex items-center justify-center text-blue-900 font-bold text-2xl">
                    RK
                  </div>
                </div>
                <div className="md:w-3/4 md:pl-6">
                  <p className="text-lg italic mb-4">
                    "The Electrician course at CSM ITI College completely transformed my career prospects. The hands-on training and industry exposure prepared me for real-world challenges. I'm now working with a leading electrical contractor with a great salary package."
                  </p>
                  <div className="font-semibold">
                    Rajesh Kumar, Batch of 2022
                    <div className="text-blue-300 text-sm">Currently working at Larsen & Toubro</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Apply Now CTA */}
            <div className="bg-gradient-to-r from-yellow-500 to-yellow-400 p-8 rounded-xl text-center">
              <h3 className="text-2xl font-bold text-blue-900 mb-4" style={{ fontFamily: montserrat }}>
                Ready to Start Your Career as an Electrician?
              </h3>
              <p className="text-blue-900 text-lg mb-6">
                Applications are now open for the upcoming batch. Limited seats available!
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link to={"/admission"} className="bg-blue-900 hover:bg-blue-800 text-white font-bold py-3 px-8 rounded-lg transform transition-all hover:scale-105 shadow-lg cursor-pointer">
                  Apply Now
                </Link>
                <button className="bg-white hover:bg-gray-100 text-blue-900 font-bold py-3 px-8 rounded-lg transform transition-all hover:scale-105 shadow-lg cursor-pointer">
                  Download Brochure
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} Chhatrapati Sambhaji Maharaj ITI College. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="/" className="text-gray-400 hover:text-white text-sm transition-colors cursor-pointer">Back to Home</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors cursor-pointer">Contact Us</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors cursor-pointer">Privacy Policy</a>
            </div>
          </div>
          
          {/* Developer Credits */}
          <div className="mt-6 pt-6 border-t border-gray-700 text-center">
            <p className="text-gray-500 text-sm">
              Developed and designed by{" "}
              <a 
                href="https://devionx.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center group"
              >
                <span className="bg-gradient-to-r from-blue-400 via-indigo-500 to-blue-500 bg-clip-text text-transparent group-hover:from-yellow-400 group-hover:via-yellow-500 group-hover:to-yellow-400 font-medium transition-all duration-300">
                  Devionx Technologies
                </span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 ml-1 text-gray-400 group-hover:text-yellow-400 transition-colors duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}