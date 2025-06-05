
import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, Globe, Target, Eye, Heart } from 'lucide-react';

const About = () => {
  const milestones = [
    { year: '1999', title: 'Company Founded', description: 'OmanAlu established in Sohar Industrial Area' },
    { year: '2005', title: 'ISO Certification', description: 'Achieved ISO 9001:2000 quality certification' },
    { year: '2010', title: 'Global Expansion', description: 'Expanded operations to serve international markets' },
    { year: '2015', title: 'Sustainability Initiative', description: 'Launched comprehensive environmental program' },
    { year: '2020', title: 'Technology Upgrade', description: 'Invested in state-of-the-art manufacturing equipment' },
    { year: '2024', title: 'Industry Leadership', description: 'Recognized as leading aluminium manufacturer in GCC' }
  ];

  const values = [
    {
      icon: Award,
      title: 'Excellence',
      description: 'We strive for excellence in every aspect of our operations, from product quality to customer service.'
    },
    {
      icon: Users,
      title: 'Teamwork',
      description: 'Our success is built on collaboration, respect, and the collective expertise of our talented team.'
    },
    {
      icon: Globe,
      title: 'Innovation',
      description: 'We continuously invest in technology and processes to stay at the forefront of the industry.'
    },
    {
      icon: Heart,
      title: 'Integrity',
      description: 'We conduct business with honesty, transparency, and ethical practices in all our relationships.'
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0">
          <img  
            className="w-full h-full object-cover opacity-30" 
            alt="OmanAlu manufacturing facility exterior view"
           src="https://images.unsplash.com/photo-1680697589032-fe5c43895c7e" />
        </div>
        <div className="relative z-10 container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">About OmanAlu</h1>
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
              Pioneering aluminium manufacturing excellence in Oman for over 25 years, 
              delivering world-class products to global industries.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Founded in 1999 in the heart of Oman's industrial sector, OmanAlu began with a vision 
                to become the region's premier aluminium manufacturer. What started as a modest operation 
                has grown into a world-class facility serving customers across six continents.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Our journey has been marked by continuous innovation, strategic investments in technology, 
                and an unwavering commitment to quality. Today, we stand as a testament to Omani 
                industrial excellence, contributing significantly to the nation's economic diversification.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                With over 500 skilled professionals and state-of-the-art manufacturing capabilities, 
                we continue to push the boundaries of what's possible in aluminium production.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <img  
                className="w-full h-96 object-cover rounded-lg shadow-2xl" 
                alt="Historical photo of OmanAlu founding team"
               src="https://images.unsplash.com/photo-1621370125669-7c24a3b21119" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Purpose</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center p-8 bg-white rounded-lg shadow-lg"
            >
              <Target className="h-12 w-12 text-blue-600 mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To manufacture premium aluminium products that enable innovation across industries 
                while maintaining the highest standards of quality, sustainability, and customer service.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center p-8 bg-white rounded-lg shadow-lg"
            >
              <Eye className="h-12 w-12 text-blue-600 mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                To be the leading aluminium manufacturer in the Middle East, recognized globally 
                for innovation, quality, and sustainable practices that contribute to a better future.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center p-8 bg-white rounded-lg shadow-lg"
            >
              <Heart className="h-12 w-12 text-blue-600 mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Values</h3>
              <p className="text-gray-600 leading-relaxed">
                Excellence, integrity, innovation, and teamwork form the foundation of everything we do, 
                guiding our decisions and shaping our culture.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <value.icon className="h-10 w-10 text-blue-600 mx-auto mb-4" />
                <h4 className="text-lg font-semibold text-gray-900 mb-3">{value.title}</h4>
                <p className="text-sm text-gray-600 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Journey</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Key milestones that have shaped OmanAlu into the industry leader we are today.
            </p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-blue-200"></div>
            
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? 'justify-start' : 'justify-end'
                }`}
              >
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                  <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-blue-600">
                    <div className="text-2xl font-bold text-blue-600 mb-2">{milestone.year}</div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{milestone.title}</h3>
                    <p className="text-gray-600">{milestone.description}</p>
                  </div>
                </div>
                
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Leadership Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experienced leaders driving innovation and excellence in aluminium manufacturing.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center bg-white p-8 rounded-lg shadow-lg"
            >
              <img  
                className="w-32 h-32 rounded-full mx-auto mb-6 object-cover" 
                alt="CEO portrait in professional business attire"
               src="https://images.unsplash.com/photo-1700227047786-8835486ba7af" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Ahmed Al-Rashid</h3>
              <p className="text-blue-600 font-medium mb-4">Chief Executive Officer</p>
              <p className="text-gray-600 text-sm leading-relaxed">
                25+ years in manufacturing and industrial development, leading OmanAlu's strategic vision and growth.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center bg-white p-8 rounded-lg shadow-lg"
            >
              <img  
                className="w-32 h-32 rounded-full mx-auto mb-6 object-cover" 
                alt="CTO portrait in professional business attire"
               src="https://images.unsplash.com/photo-1585066039196-e30d097340be" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Sarah Mitchell</h3>
              <p className="text-blue-600 font-medium mb-4">Chief Technology Officer</p>
              <p className="text-gray-600 text-sm leading-relaxed">
                Expert in metallurgy and manufacturing technology, driving innovation in aluminium production processes.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center bg-white p-8 rounded-lg shadow-lg"
            >
              <img  
                className="w-32 h-32 rounded-full mx-auto mb-6 object-cover" 
                alt="COO portrait in professional business attire"
               src="https://images.unsplash.com/photo-1700227047786-8835486ba7af" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Mohammed Al-Balushi</h3>
              <p className="text-blue-600 font-medium mb-4">Chief Operations Officer</p>
              <p className="text-gray-600 text-sm leading-relaxed">
                Operations excellence specialist ensuring quality, efficiency, and safety across all manufacturing processes.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
