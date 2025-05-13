'use client';
import { useGoogleFont } from '../utils/fonts'


export default function AdmissionPage() {
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
            <a href="/courses" className="text-gray-700 hover:text-blue-600 transition-colors cursor-pointer">Courses</a>
            <a href="/admission" className="text-blue-600 font-medium cursor-pointer">Admission</a>
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

      {/* Header Banner */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: montserrat }}>
            Admission Process
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Join Chhatrapati Sambhaji Maharaj ITI College and take the first step towards a successful technical career
          </p>
        </div>
      </div>
      
      {/* Admission Timeline */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center" style={{ fontFamily: montserrat }}>
            Admission Timeline
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Vertical Line */}
              <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-blue-200"></div>
              
              {/* Timeline Items */}
              <div className="space-y-12">
                {/* Item 1 */}
                <div className="relative flex flex-col md:flex-row items-center">
                  <div className="flex md:justify-end md:w-1/2 md:pr-8 mb-4 md:mb-0">
                    <div className="bg-blue-50 p-5 rounded-lg shadow-md max-w-xs md:text-right">
                      <h3 className="text-xl font-bold text-blue-800 mb-2">Application Submission</h3>
                      <p className="text-gray-600">Submit your application form along with required documents</p>
                      <p className="text-blue-600 font-semibold mt-2">June 1 - July 15</p>
                    </div>
                  </div>
                  <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-blue-600 border-4 border-white flex items-center justify-center">
                    <span className="text-white font-bold">1</span>
                  </div>
                  <div className="md:w-1/2 md:pl-8 hidden md:block"></div>
                </div>
                
                {/* Item 2 */}
                <div className="relative flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 md:pr-8 hidden md:block"></div>
                  <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-blue-600 border-4 border-white flex items-center justify-center">
                    <span className="text-white font-bold">2</span>
                  </div>
                  <div className="flex md:justify-start md:w-1/2 md:pl-8 mb-4 md:mb-0">
                    <div className="bg-blue-50 p-5 rounded-lg shadow-md max-w-xs">
                      <h3 className="text-xl font-bold text-blue-800 mb-2">Document Verification</h3>
                      <p className="text-gray-600">Verification of submitted documents and eligibility check</p>
                      <p className="text-blue-600 font-semibold mt-2">July 16 - July 25</p>
                    </div>
                  </div>
                </div>
                
                {/* Item 3 */}
                <div className="relative flex flex-col md:flex-row items-center">
                  <div className="flex md:justify-end md:w-1/2 md:pr-8 mb-4 md:mb-0">
                    <div className="bg-blue-50 p-5 rounded-lg shadow-md max-w-xs md:text-right">
                      <h3 className="text-xl font-bold text-blue-800 mb-2">Entrance Test/Interview</h3>
                      <p className="text-gray-600">Aptitude test and personal interview for shortlisted candidates</p>
                      <p className="text-blue-600 font-semibold mt-2">July 28 - August 5</p>
                    </div>
                  </div>
                  <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-blue-600 border-4 border-white flex items-center justify-center">
                    <span className="text-white font-bold">3</span>
                  </div>
                  <div className="md:w-1/2 md:pl-8 hidden md:block"></div>
                </div>
                
                {/* Item 4 */}
                <div className="relative flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 md:pr-8 hidden md:block"></div>
                  <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-blue-600 border-4 border-white flex items-center justify-center">
                    <span className="text-white font-bold">4</span>
                  </div>
                  <div className="flex md:justify-start md:w-1/2 md:pl-8 mb-4 md:mb-0">
                    <div className="bg-blue-50 p-5 rounded-lg shadow-md max-w-xs">
                      <h3 className="text-xl font-bold text-blue-800 mb-2">Merit List Declaration</h3>
                      <p className="text-gray-600">Announcement of selected candidates based on merit</p>
                      <p className="text-blue-600 font-semibold mt-2">August 10</p>
                    </div>
                  </div>
                </div>
                
                {/* Item 5 */}
                <div className="relative flex flex-col md:flex-row items-center">
                  <div className="flex md:justify-end md:w-1/2 md:pr-8 mb-4 md:mb-0">
                    <div className="bg-blue-50 p-5 rounded-lg shadow-md max-w-xs md:text-right">
                      <h3 className="text-xl font-bold text-blue-800 mb-2">Fee Payment & Admission</h3>
                      <p className="text-gray-600">Payment of fees and completion of admission formalities</p>
                      <p className="text-blue-600 font-semibold mt-2">August 12 - August 20</p>
                    </div>
                  </div>
                  <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-blue-600 border-4 border-white flex items-center justify-center">
                    <span className="text-white font-bold">5</span>
                  </div>
                  <div className="md:w-1/2 md:pl-8 hidden md:block"></div>
                </div>
                
                {/* Item 6 */}
                <div className="relative flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 md:pr-8 hidden md:block"></div>
                  <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-green-600 border-4 border-white flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div className="flex md:justify-start md:w-1/2 md:pl-8">
                    <div className="bg-green-50 p-5 rounded-lg shadow-md max-w-xs">
                      <h3 className="text-xl font-bold text-green-800 mb-2">Orientation & Classes Begin</h3>
                      <p className="text-gray-600">Orientation program for new students and commencement of classes</p>
                      <p className="text-green-600 font-semibold mt-2">September 1</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Eligibility & Documents */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center" style={{ fontFamily: montserrat }}>
            Eligibility & Required Documents
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-8 rounded-xl shadow-md">
              <h3 className="text-2xl font-bold text-blue-800 mb-6" style={{ fontFamily: montserrat }}>
                Eligibility Criteria
              </h3>
              
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500 mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <span className="font-semibold">Educational Qualification:</span> 10th pass (SSC) or equivalent from a recognized board
                  </div>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500 mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <span className="font-semibold">Minimum Marks:</span> At least 35% aggregate in qualifying examination
                  </div>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500 mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <span className="font-semibold">Age Limit:</span> Minimum 14 years and maximum 40 years as on 1st August of the admission year
                  </div>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500 mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <span className="font-semibold">Physical Fitness:</span> Candidates should be physically fit and free from any disability that might interfere with the performance of duties
                  </div>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500 mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <span className="font-semibold">Selection Process:</span> Based on merit in qualifying examination or entrance test performance (as applicable)
                  </div>
                </li>
              </ul>
              
              <div className="mt-8 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                <div className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-500 mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <span className="font-semibold">Note:</span> Relaxation in age and qualifying marks is applicable as per government norms for reserved categories
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-md">
              <h3 className="text-2xl font-bold text-blue-800 mb-6" style={{ fontFamily: montserrat }}>
                Required Documents
              </h3>
              
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500 mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <div>
                    <span className="font-semibold">Completed Application Form</span> (duly signed by the candidate)
                  </div>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500 mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <div>
                    <span className="font-semibold">SSC Mark Sheet and Certificate</span> (original and photocopy)
                  </div>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500 mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <div>
                    <span className="font-semibold">School Leaving Certificate</span> (original and photocopy)
                  </div>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500 mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <div>
                    <span className="font-semibold">Domicile/Nationality Certificate</span> (original and photocopy)
                  </div>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500 mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <div>
                    <span className="font-semibold">Caste Certificate</span> (if applicable, original and photocopy)
                  </div>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500 mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <div>
                    <span className="font-semibold">Income Certificate</span> (if applicable, for scholarship)
                  </div>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500 mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <div>
                    <span className="font-semibold">Aadhaar Card</span> (photocopy)
                  </div>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500 mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <div>
                    <span className="font-semibold">Recent Passport Size Photographs</span> (6 copies)
                  </div>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500 mr-3 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  <div>
                    <span className="font-semibold">Medical Fitness Certificate</span> from a registered medical practitioner
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* Application Form */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center" style={{ fontFamily: montserrat }}>
              Application Form
            </h2>
            
            <div className="bg-gray-50 p-8 rounded-xl shadow-lg">
              <form className="space-y-6">
                <div className="mb-8 pb-8 border-b border-gray-200">
                  <h3 className="text-xl font-bold text-blue-800 mb-6" style={{ fontFamily: montserrat }}>
                    Personal Information
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">First Name*</label>
                      <input 
                        type="text" 
                        id="firstName" 
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all"
                        placeholder="Enter your first name"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">Last Name*</label>
                      <input 
                        type="text" 
                        id="lastName" 
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all"
                        placeholder="Enter your last name"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="dob" className="block text-sm font-medium text-gray-700 mb-1">Date of Birth*</label>
                      <input 
                        type="date" 
                        id="dob" 
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="gender" className="block text-sm font-medium text-gray-700 mb-1">Gender*</label>
                      <select 
                        id="gender" 
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all"
                        required
                      >
                        <option value="">Select Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address*</label>
                      <input 
                        type="email" 
                        id="email" 
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all"
                        placeholder="your.email@example.com"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number*</label>
                      <input 
                        type="tel" 
                        id="phone" 
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all"
                        placeholder="Your phone number"
                        required
                      />
                    </div>
                    
                    <div className="md:col-span-2">
                      <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">Address*</label>
                      <textarea 
                        id="address" 
                        rows={3} 
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all"
                        placeholder="Your complete address"
                        required
                      ></textarea>
                    </div>
                  </div>
                </div>
                
                <div className="mb-8 pb-8 border-b border-gray-200">
                  <h3 className="text-xl font-bold text-blue-800 mb-6" style={{ fontFamily: montserrat }}>
                    Educational Information
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="qualification" className="block text-sm font-medium text-gray-700 mb-1">Highest Qualification*</label>
                      <select 
                        id="qualification" 
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all"
                        required
                      >
                        <option value="">Select Qualification</option>
                        <option value="10th">10th (SSC)</option>
                        <option value="12th">12th (HSC)</option>
                        <option value="diploma">Diploma</option>
                        <option value="degree">Bachelor's Degree</option>
                      </select>
                    </div>
                    
                    <div>
                      <label htmlFor="board" className="block text-sm font-medium text-gray-700 mb-1">Board/University*</label>
                      <input 
                        type="text" 
                        id="board" 
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all"
                        placeholder="Name of board/university"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="passingYear" className="block text-sm font-medium text-gray-700 mb-1">Year of Passing*</label>
                      <input 
                        type="number" 
                        id="passingYear" 
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all"
                        placeholder="YYYY"
                        min="2000"
                        max="2023"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="percentage" className="block text-sm font-medium text-gray-700 mb-1">Percentage/CGPA*</label>
                      <input 
                        type="text" 
                        id="percentage" 
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all"
                        placeholder="Enter percentage or CGPA"
                        required
                      />
                    </div>
                  </div>
                </div>
                
                <div className="mb-8 pb-8 border-b border-gray-200">
                  <h3 className="text-xl font-bold text-blue-800 mb-6" style={{ fontFamily: montserrat }}>
                    Course Preference
                  </h3>
                  
                  <div className="grid grid-cols-1 gap-6">
                    <div>
                      <label htmlFor="course" className="block text-sm font-medium text-gray-700 mb-1">Preferred Course*</label>
                      <select 
                        id="course" 
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all"
                        required
                      >
                        <option value="">Select Course</option>
                        <option value="electrician">Electrician</option>
                        <option value="wiremen">Wiremen</option>
                        <option value="solar">Solar Technician</option>
                        <option value="finance">Finance Executive</option>
                      </select>
                    </div>
                    
                    <div>
                      <label htmlFor="alternativeCourse" className="block text-sm font-medium text-gray-700 mb-1">Alternative Course Preference</label>
                      <select 
                        id="alternativeCourse" 
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all"
                      >
                        <option value="">Select Alternative Course</option>
                        <option value="electrician">Electrician</option>
                        <option value="wiremen">Wiremen</option>
                        <option value="solar">Solar Technician</option>
                        <option value="finance">Finance Executive</option>
                      </select>
                    </div>
                    
                    <div>
                      <label htmlFor="howHeard" className="block text-sm font-medium text-gray-700 mb-1">How did you hear about us?</label>
                      <select 
                        id="howHeard" 
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all"
                      >
                        <option value="">Select Option</option>
                        <option value="newspaper">Newspaper</option>
                        <option value="website">Website</option>
                        <option value="socialMedia">Social Media</option>
                        <option value="friend">Friend/Relative</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-start mb-6">
                  <div className="flex items-center h-5">
                    <input
                      id="terms"
                      type="checkbox"
                      className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300"
                      required
                    />
                  </div>
                  <label htmlFor="terms" className="ml-2 text-sm font-medium text-gray-700">
                    I hereby declare that all the information provided is correct to the best of my knowledge. I understand that any false information may result in the cancellation of my application.
                  </label>
                </div>
                
                <div className="flex justify-center">
                  <button 
                    type="submit" 
                    className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg shadow-lg transform transition-all hover:scale-105 cursor-pointer"
                  >
                    Submit Application
                  </button>
                </div>
              </form>
            </div>
            
            <div className="mt-8 p-6 bg-blue-50 rounded-xl border border-blue-100">
              <h3 className="text-xl font-bold text-blue-800 mb-4" style={{ fontFamily: montserrat }}>
                Need Help?
              </h3>
              <p className="text-gray-700 mb-4">
                If you have any questions about the admission process or need assistance with your application, please contact our admission office:
              </p>
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="text-blue-800 font-medium">+91 78409 39777</span>
              </div>
              <div className="flex items-center mt-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="text-blue-800 font-medium">csmitik@gmail.com</span>
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
            
            {/* Developer Credits */}
            <div className="mt-6 pt-6 border-t border-gray-700 text-center">
              <p className="text-gray-500 text-sm">
                Developed and designed by{" "}
                <a 
                  href="https://devionx.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-yellow-400 transition-colors duration-300 font-medium relative group"
                >
                  <span className="bg-gradient-to-r from-blue-400 to-blue-500 bg-clip-text text-transparent group-hover:from-yellow-400 group-hover:to-yellow-500 transition-all duration-300">
                    Devionx Technologies
                  </span>
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-400 transition-all duration-300 group-hover:w-full"></span>
                </a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}