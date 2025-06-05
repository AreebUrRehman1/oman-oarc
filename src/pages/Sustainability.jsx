
import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, Recycle, Zap, Droplets, Award, Target } from 'lucide-react';

const Sustainability = () => {
  const initiatives = [
    {
      icon: Recycle,
      title: 'Circular Economy',
      description: 'Implementing closed-loop recycling systems to minimize waste and maximize resource efficiency.',
      metrics: '95% material recovery rate'
    },
    {
      icon: Zap,
      title: 'Clean Energy',
      description: 'Transitioning to renewable energy sources to power our manufacturing operations.',
      metrics: '60% renewable energy usage'
    },
    {
      icon: Droplets,
      title: 'Water Conservation',
      description: 'Advanced water treatment and recycling systems to minimize environmental impact.',
      metrics: '40% water usage reduction'
    },
    {
      icon: Leaf,
      title: 'Carbon Neutral',
      description: 'Committed to achieving carbon neutrality through emission reduction and offset programs.',
      metrics: 'Target: 2030 carbon neutral'
    }
  ];

  const certifications = [
    { name: 'ISO 14001', description: 'Environmental Management System' },
    { name: 'OHSAS 18001', description: 'Occupational Health & Safety' },
    { name: 'ASI Certification', description: 'Aluminium Stewardship Initiative' },
    { name: 'Green Building', description: 'LEED Certified Facility' }
  ];

  const impactStats = [
    { number: '95%', label: 'Recyclable Materials', description: 'All our products are 100% recyclable' },
    { number: '50%', label: 'Energy Reduction', description: 'Compared to industry average' },
    { number: '30%', label: 'Water Savings', description: 'Through advanced recycling systems' },
    { number: '25%', label: 'Carbon Footprint Reduction', description: 'Since 2020 baseline' }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-green-900 text-white overflow-hidden">
        <div className="absolute inset-0">
          <img  
            className="w-full h-full object-cover opacity-30" 
            alt="Solar panels and green technology at manufacturing facility"
           src="https://images.unsplash.com/photo-1697869162556-ab57db502c09" />
        </div>
        <div className="relative z-10 container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Sustainability</h1>
            <p className="text-xl md:text-2xl text-green-100 leading-relaxed">
              Building a sustainable future through responsible manufacturing, 
              environmental stewardship, and innovative green technologies.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Environmental Commitment */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Environmental Commitment</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We believe that environmental responsibility and business success go hand in hand. 
              Our comprehensive sustainability strategy addresses every aspect of our operations.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {initiatives.map((initiative, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center p-6 bg-gray-50 rounded-lg hover:shadow-lg transition-shadow"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-6">
                  <initiative.icon className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{initiative.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{initiative.description}</p>
                <div className="text-sm font-semibold text-green-600 bg-green-50 px-3 py-1 rounded-full">
                  {initiative.metrics}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Statistics */}
      <section className="py-20 bg-green-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Environmental Impact</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Measurable results from our sustainability initiatives demonstrate our 
              commitment to environmental protection and resource conservation.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {impactStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center p-8 bg-white rounded-lg shadow-lg"
              >
                <div className="text-4xl md:text-5xl font-bold text-green-600 mb-2">{stat.number}</div>
                <div className="text-lg font-semibold text-gray-900 mb-2">{stat.label}</div>
                <div className="text-sm text-gray-600">{stat.description}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Recycling Process */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Aluminium Recycling Excellence</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Aluminium is infinitely recyclable without losing its properties. Our advanced 
                recycling processes ensure that 95% of the energy used in primary production 
                is saved when recycling aluminium.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-green-600 font-bold text-sm">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Collection & Sorting</h4>
                    <p className="text-gray-600 text-sm">Advanced sorting technology separates aluminium by grade and alloy type.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-green-600 font-bold text-sm">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Melting & Purification</h4>
                    <p className="text-gray-600 text-sm">Energy-efficient melting process removes impurities and contaminants.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-green-600 font-bold text-sm">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Reprocessing</h4>
                    <p className="text-gray-600 text-sm">Recycled aluminium is processed into new products with identical quality.</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <img  
                className="w-full h-96 object-cover rounded-lg shadow-2xl" 
                alt="Aluminium recycling process in modern facility"
               src="https://images.unsplash.com/photo-1665165922254-fb1f53a29730" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Environmental Certifications</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our commitment to sustainability is validated by internationally recognized 
              certifications and standards.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center p-6 bg-white rounded-lg shadow-lg"
              >
                <Award className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{cert.name}</h3>
                <p className="text-sm text-gray-600">{cert.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Future Goals */}
      <section className="py-20 bg-green-600 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">2030 Sustainability Goals</h2>
            <p className="text-xl text-green-100 max-w-3xl mx-auto">
              Our ambitious roadmap for the next decade focuses on achieving carbon neutrality 
              and setting new industry standards for sustainable manufacturing.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center p-8 bg-green-700 rounded-lg"
            >
              <Target className="h-12 w-12 text-green-200 mx-auto mb-6" />
              <h3 className="text-2xl font-bold mb-4">Carbon Neutral</h3>
              <p className="text-green-100 leading-relaxed">
                Achieve net-zero carbon emissions across all operations through renewable energy 
                and carbon offset programs.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center p-8 bg-green-700 rounded-lg"
            >
              <Droplets className="h-12 w-12 text-green-200 mx-auto mb-6" />
              <h3 className="text-2xl font-bold mb-4">Zero Waste</h3>
              <p className="text-green-100 leading-relaxed">
                Implement zero waste to landfill policy with 100% material recovery 
                and circular economy principles.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center p-8 bg-green-700 rounded-lg"
            >
              <Zap className="h-12 w-12 text-green-200 mx-auto mb-6" />
              <h3 className="text-2xl font-bold mb-4">100% Renewable</h3>
              <p className="text-green-100 leading-relaxed">
                Power all manufacturing operations with 100% renewable energy sources 
                including solar and wind power.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Sustainability;
