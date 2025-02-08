import React from "react";
const services = [
  {
    id: 1,
    title: "Web Design",
    description: "Creating visually appealing and user-friendly web designs.",
  },
  {
    id: 2,
    title: "Frontend Development",
    description: "Building responsive and interactive user interfaces.",
  },
  {
    id: 3,
    title: "Backend Development",
    description: "Developing robust server-side logic and databases.",
  },
  {
    id: 4,
    title: "Full-Stack Development",
    description: "Combining both frontend and backend development skills.",
  },
  {
    id: 5,
    title: "Content Writing",
    description: "Writing content for your business and companies.",
  },
  {
    id: 6,
    title: "Digital Marketing",
    description: "Promote your business with our digital marketing team.",
  },
];

const Services = () => {
  return (
    <div>
      <div className="bg-black text-white py-5 overflow-hidden" id="services">
        <div className="container  px-4 md:px-16 lg:px-24">
          <h2 className="text-4xl font-bold text-center mb-12">My Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div key={service.id} className="bg-gray-800 px-4 pb-6 rounded-lg hover:shadow-lg transform transition-transform duration-300 hover:scale-105">
                <div className="text-right text-2xl font-bold text-transparent  bg-clip-text bg-gradient-to-r from-green-600 to-blue-400">{service.id}</div>
                <div className="text-2xl font-bold text-transparent  bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">{service.title}</div>
               <p className="mt-2 text-gray-300">{service.description}</p>
               <a href="#" className="mt-4 inline-block text-green-400 hover:text-blue-500">Read more</a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
