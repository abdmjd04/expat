import React from 'react';
import { Map, Compass, Calendar, ShieldAlert, DollarSign, Plane, Home, CreditCard, FileText, GraduationCap, Briefcase, CheckCircle, Phone, Activity, Clock, Car, Heart } from 'lucide-react';
const Services = () => {
  return <div className="w-full bg-white">
      <div className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Our Services</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Comprehensive support for all aspects of expat life, from travel
            guidance to health services.
          </p>
        </div>
      </div>
      {/* Travel Guide Services */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Travel Guide Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Expert guidance to help you make the most of your travel
              experiences, whether you're visiting for a short trip or exploring
              your new home.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6 border-t-4 border-blue-500">
              <div className="bg-blue-100 p-3 rounded-full inline-flex mb-4">
                <Map className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">
                Travel Planning & Itinerary Creation
              </h3>
              <p className="text-gray-600">
                Customized travel plans tailored to your interests, timeframe,
                and budget. Detailed day-by-day itineraries with recommended
                activities.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 border-t-4 border-blue-500">
              <div className="bg-blue-100 p-3 rounded-full inline-flex mb-4">
                <div className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">
                Local Transportation Tips
              </h3>
              <p className="text-gray-600">
                Guidance on navigating public transit, recommended
                transportation apps, taxi services, and car rental information
                specific to your destination.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 border-t-4 border-blue-500">
              <div className="bg-blue-100 p-3 rounded-full inline-flex mb-4">
                <Compass className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">
                Must-See Places & Hidden Gems
              </h3>
              <p className="text-gray-600">
                Recommendations for popular attractions and lesser-known local
                favorites. Insider tips for authentic experiences beyond the
                tourist trail.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 border-t-4 border-blue-500">
              <div className="bg-blue-100 p-3 rounded-full inline-flex mb-4">
                <Calendar className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Tour Bookings</h3>
              <p className="text-gray-600">
                Assistance with booking guided tours, activities, and
                experiences. Access to exclusive local tours and special rates
                through our network.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 border-t-4 border-blue-500">
              <div className="bg-blue-100 p-3 rounded-full inline-flex mb-4">
                <ShieldAlert className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">
                Safety Tips & Emergency Numbers
              </h3>
              <p className="text-gray-600">
                Comprehensive safety information specific to your destination.
                List of emergency contacts, nearest hospitals, and embassy
                information.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 border-t-4 border-blue-500">
              <div className="bg-blue-100 p-3 rounded-full inline-flex mb-4">
                <DollarSign className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">
                Budget Travel Advice
              </h3>
              <p className="text-gray-600">
                Tips for saving money while traveling, including affordable
                dining options, free activities, and best times to visit
                attractions.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Expat Support */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Expat Support</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive assistance for all aspects of your relocation
              journey, from paperwork to settling in.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-start mb-4">
                <div className="bg-green-100 p-3 rounded-full mr-4">
                  <Plane className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    Visa and Residency Guidance
                  </h3>
                  <p className="text-gray-600">
                    Step-by-step assistance with visa applications,
                    documentation requirements, and residency permit processes.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-start mb-4">
                <div className="bg-green-100 p-3 rounded-full mr-4">
                  <Home className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    Housing/Rental Help
                  </h3>
                  <p className="text-gray-600">
                    Assistance finding suitable accommodation, understanding
                    rental contracts, and navigating local housing markets.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-start mb-4">
                <div className="bg-green-100 p-3 rounded-full mr-4">
                  <CreditCard className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    Local SIM and Banking
                  </h3>
                  <p className="text-gray-600">
                    Guidance on setting up bank accounts, obtaining local phone
                    numbers, and managing utilities in your new country.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-start mb-4">
                <div className="bg-green-100 p-3 rounded-full mr-4">
                  <FileText className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    Translation & Paperwork
                  </h3>
                  <p className="text-gray-600">
                    Translation assistance for important documents and help
                    navigating local bureaucracy and official processes.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-start mb-4">
                <div className="bg-green-100 p-3 rounded-full mr-4">
                  <GraduationCap className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    School & Education Info
                  </h3>
                  <p className="text-gray-600">
                    Information on local schools, enrollment processes, language
                    programs, and educational options for expat families.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-start mb-4">
                <div className="bg-green-100 p-3 rounded-full mr-4">
                  <Briefcase className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    Job & Freelance Support
                  </h3>
                  <p className="text-gray-600">
                    Resources for job hunting, work permit information,
                    freelance registration, and local networking opportunities.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Physiotherapy Services */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Physiotherapy Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Professional physiotherapy care designed specifically for expats
              and travelers, available both in-person and online.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="In-person consultation" className="w-full h-64 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">
                  In-Person Consultations
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span>Comprehensive physical assessment</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span>Hands-on treatment techniques</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span>Personalized exercise programs</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span>Treatment in English and other languages</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="Online consultation" className="w-full h-64 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">
                  Online Consultations
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span>Video assessment and diagnosis</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span>Guided self-treatment techniques</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span>Digital exercise programs</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span>Flexible scheduling across time zones</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="bg-blue-50 rounded-lg p-8">
            <h3 className="text-2xl font-semibold mb-6 text-center">
              Treatment Specialties
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              <div className="bg-white p-5 rounded-lg shadow-sm">
                <div className="flex items-center mb-3">
                  <Activity className="h-5 w-5 text-blue-600 mr-3" />
                  <h4 className="font-medium">Sports Injuries</h4>
                </div>
                <p className="text-gray-600 text-sm">
                  Rehabilitation for athletic injuries and performance
                  optimization.
                </p>
              </div>
              <div className="bg-white p-5 rounded-lg shadow-sm">
                <div className="flex items-center mb-3">
                  <Activity className="h-5 w-5 text-blue-600 mr-3" />
                  <h4 className="font-medium">Back & Neck Pain</h4>
                </div>
                <p className="text-gray-600 text-sm">
                  Treatment for chronic and acute spinal conditions.
                </p>
              </div>
              <div className="bg-white p-5 rounded-lg shadow-sm">
                <div className="flex items-center mb-3">
                  <Activity className="h-5 w-5 text-blue-600 mr-3" />
                  <h4 className="font-medium">Post-Flight Recovery</h4>
                </div>
                <p className="text-gray-600 text-sm">
                  Relief from stiffness and discomfort after long flights.
                </p>
              </div>
              <div className="bg-white p-5 rounded-lg shadow-sm">
                <div className="flex items-center mb-3">
                  <Activity className="h-5 w-5 text-blue-600 mr-3" />
                  <h4 className="font-medium">Postural Correction</h4>
                </div>
                <p className="text-gray-600 text-sm">
                  Assessment and treatment for poor posture and related issues.
                </p>
              </div>
              <div className="bg-white p-5 rounded-lg shadow-sm">
                <div className="flex items-center mb-3">
                  <Activity className="h-5 w-5 text-blue-600 mr-3" />
                  <h4 className="font-medium">Work-Related Pain</h4>
                </div>
                <p className="text-gray-600 text-sm">
                  Solutions for desk-related discomfort and repetitive strain.
                </p>
              </div>
              <div className="bg-white p-5 rounded-lg shadow-sm">
                <div className="flex items-center mb-3">
                  <Activity className="h-5 w-5 text-blue-600 mr-3" />
                  <h4 className="font-medium">Rehabilitation</h4>
                </div>
                <p className="text-gray-600 text-sm">
                  Recovery programs following surgery or major injuries.
                </p>
              </div>
            </div>
          </div>
          <div className="mt-12">
            <h3 className="text-2xl font-semibold mb-6 text-center">
              Service Options
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
                <div className="text-center mb-4">
                  <div className="inline-block bg-blue-100 p-3 rounded-full">
                    <Clock className="h-6 w-6 text-blue-600" />
                  </div>
                </div>
                <h4 className="text-xl font-semibold text-center mb-4">
                  Single Sessions
                </h4>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span>60-minute consultation</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span>Assessment and treatment</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span>Home exercise plan</span>
                  </li>
                </ul>
                <p className="text-center font-semibold text-lg">From €80</p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 border-2 border-blue-500 relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                  Most Popular
                </div>
                <div className="text-center mb-4">
                  <div className="inline-block bg-blue-100 p-3 rounded-full">
                    <Heart className="h-6 w-6 text-blue-600" />
                  </div>
                </div>
                <h4 className="text-xl font-semibold text-center mb-4">
                  Treatment Package
                </h4>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span>5 sessions (60 min each)</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span>Comprehensive care plan</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span>Progress tracking</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span>15% discount on regular price</span>
                  </li>
                </ul>
                <p className="text-center font-semibold text-lg">From €340</p>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
                <div className="text-center mb-4">
                  <div className="inline-block bg-blue-100 p-3 rounded-full">
                    <Car className="h-6 w-6 text-blue-600" />
                  </div>
                </div>
                <h4 className="text-xl font-semibold text-center mb-4">
                  Home Visits
                </h4>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span>Treatment in your home</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span>Portable equipment provided</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span>Available within city limits</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 mt-0.5" />
                    <span>Flexible scheduling</span>
                  </li>
                </ul>
                <p className="text-center font-semibold text-lg">From €100</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>;
};
export default Services;