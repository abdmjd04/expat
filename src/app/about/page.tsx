import Image from "next/image";
import founder from "../../../public/assets/images/founder.avif";

const About = () => {
  return (
    <div className="w-full bg-white">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-6">About Us</h1>
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Founder Story</h2>
            <div className="flex flex-col md:flex-row gap-6 mb-6">
              <Image
                src={founder}
                alt="Founder"
                className="w-full md:w-1/3 h-auto rounded-lg object-cover"
              />
              <div>
                <p className="text-gray-700 mb-4">
                  After relocating to three different countries over the span of
                  a decade, our founder experienced firsthand the challenges of
                  starting fresh in a new culture. From navigating complex visa
                  processes to finding reliable healthcare, each move presented
                  its own unique set of obstacles.
                </p>
                <p className="text-gray-700">
                  With a background in physiotherapy and a passion for travel,
                  they created ExpatWell to combine professional health services
                  with practical relocation support – addressing both the
                  physical and logistical challenges of expat life.
                </p>
              </div>
            </div>
          </section>
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Mission & Vision</h2>
            <div className="bg-blue-50 p-6 rounded-lg mb-6">
              <h3 className="text-xl font-medium mb-2">Our Mission</h3>
              <p className="text-gray-700">
                To provide comprehensive support for expats that addresses both
                their practical relocation needs and their physical wellbeing,
                creating a smoother transition to life in a new country.
              </p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-medium mb-2">Our Vision</h3>
              <p className="text-gray-700">
                A world where international relocation is a stress-free
                experience, and where expats have easy access to the support
                services they need to thrive in their new homes.
              </p>
            </div>
          </section>
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Qualifications</h2>
            <div className="border-l-4 border-blue-600 pl-4 mb-6">
              <h3 className="text-xl font-medium mb-2">
                Physiotherapy Credentials
              </h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>{`Master's Degree in Physiotherapy`}</li>
                <li>Certified in Sports Rehabilitation</li>
                <li>Specialized training in Manual Therapy</li>
                <li>5+ years of clinical experience</li>
              </ul>
            </div>
            <div className="border-l-4 border-blue-600 pl-4">
              <h3 className="text-xl font-medium mb-2">
                Expat & Travel Experience
              </h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Lived in 4 countries across 3 continents</li>
                <li>Traveled to over 30 countries</li>
                <li>Fluent in multiple languages</li>
                <li>Experienced in visa processes for multiple regions</li>
              </ul>
            </div>
          </section>
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Languages Spoken</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="flex items-center mb-2">
                  <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                    <span className="font-medium text-blue-600">EN</span>
                  </div>
                  <h3 className="text-lg font-medium">English</h3>
                </div>
                <p className="text-gray-600">Native proficiency</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="flex items-center mb-2">
                  <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                    <span className="font-medium text-blue-600">ES</span>
                  </div>
                  <h3 className="text-lg font-medium">Spanish</h3>
                </div>
                <p className="text-gray-600">Fluent</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="flex items-center mb-2">
                  <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                    <span className="font-medium text-blue-600">FR</span>
                  </div>
                  <h3 className="text-lg font-medium">French</h3>
                </div>
                <p className="text-gray-600">Professional proficiency</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <div className="flex items-center mb-2">
                  <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                    <span className="font-medium text-blue-600">DE</span>
                  </div>
                  <h3 className="text-lg font-medium">German</h3>
                </div>
                <p className="text-gray-600">Basic proficiency</p>
              </div>
            </div>
          </section>
          <section>
            <h2 className="text-2xl font-semibold mb-4">
              Certifications & Memberships
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="border border-gray-200 rounded-lg p-5">
                <h3 className="text-lg font-medium mb-3">
                  Professional Memberships
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center">
                    <svg
                      className="w-5 h-5 text-blue-600 mr-2"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    World Physiotherapy Federation
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="w-5 h-5 text-blue-600 mr-2"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    International Association of Physical Therapists
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="w-5 h-5 text-blue-600 mr-2"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    Expat Network International
                  </li>
                </ul>
              </div>
              <div className="border border-gray-200 rounded-lg p-5">
                <h3 className="text-lg font-medium mb-3">Certifications</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center">
                    <svg
                      className="w-5 h-5 text-blue-600 mr-2"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    Advanced Manual Therapy Certificate
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="w-5 h-5 text-blue-600 mr-2"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    Sports Rehabilitation Specialist
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="w-5 h-5 text-blue-600 mr-2"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    International Relocation Consultant
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};
export default About;
