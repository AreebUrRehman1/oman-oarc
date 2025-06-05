
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Download, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Products = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'coils', name: 'Flat Rolled Coils' },
    { id: 'sheets', name: 'Custom Sheets' },
    { id: 'alloys', name: 'Specialty Alloys' }
  ];

  const products = [
    {
      id: 1,
      category: 'coils',
      name: 'Standard Flat Rolled Coils',
      description: 'High-quality aluminium coils for general industrial applications',
      specifications: ['Thickness: 0.2mm - 6.0mm', 'Width: 500mm - 2000mm', 'Alloy: 1050, 1060, 3003'],
      applications: ['Automotive', 'Construction', 'Packaging'],
      image: 'Standard aluminium coils in industrial warehouse setting'
    },
    {
      id: 2,
      category: 'coils',
      name: 'Precision Rolled Coils',
      description: 'Ultra-precise coils for demanding applications requiring tight tolerances',
      specifications: ['Thickness: 0.1mm - 3.0mm', 'Width: 300mm - 1500mm', 'Tolerance: ±0.01mm'],
      applications: ['Electronics', 'Aerospace', 'Medical Devices'],
      image: 'Precision aluminium coils with tight tolerances'
    },
    {
      id: 3,
      category: 'sheets',
      name: 'Custom Cut Sheets',
      description: 'Tailored aluminium sheets cut to exact customer specifications',
      specifications: ['Thickness: 0.5mm - 10mm', 'Size: Custom dimensions', 'Surface: Mill finish or treated'],
      applications: ['Signage', 'Marine', 'Architecture'],
      image: 'Custom cut aluminium sheets with various sizes'
    },
    {
      id: 4,
      category: 'sheets',
      name: 'Anodized Sheets',
      description: 'Premium anodized aluminium sheets with enhanced corrosion resistance',
      specifications: ['Thickness: 1.0mm - 8.0mm', 'Anodizing: 10-25 microns', 'Colors: Natural, Bronze, Black'],
      applications: ['Architecture', 'Interior Design', 'Electronics'],
      image: 'Anodized aluminium sheets with different color finishes'
    },
    {
      id: 5,
      category: 'alloys',
      name: 'Marine Grade Alloys',
      description: 'Specialized alloys designed for marine and coastal environments',
      specifications: ['Alloy: 5083, 5086, 6061', 'Corrosion resistance: Excellent', 'Strength: High'],
      applications: ['Shipbuilding', 'Offshore', 'Coastal Construction'],
      image: 'Marine grade aluminium alloys for shipbuilding'
    },
    {
      id: 6,
      category: 'alloys',
      name: 'Aerospace Grade Alloys',
      description: 'High-performance alloys meeting aerospace industry standards',
      specifications: ['Alloy: 2024, 7075, 6061-T6', 'Certification: AS9100', 'Strength: Ultra-high'],
      applications: ['Aircraft', 'Satellites', 'Defense'],
      image: 'Aerospace grade aluminium alloys with certifications'
    }
  ];

  const filteredProducts = activeCategory === 'all' 
    ? products 
    : products.filter(product => product.category === activeCategory);

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0">
          <img  
            className="w-full h-full object-cover opacity-30" 
            alt="Various aluminium products displayed in modern facility"
           src="https://images.unsplash.com/photo-1665722651750-2b11a3de10ce" />
        </div>
        <div className="relative z-10 container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Products</h1>
            <p className="text-xl md:text-2xl text-gray-300 leading-relaxed">
              Comprehensive range of premium aluminium products engineered for 
              performance, durability, and reliability across diverse industries.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-12 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={activeCategory === category.id ? 'default' : 'outline'}
                onClick={() => setActiveCategory(category.id)}
                className="px-6 py-2"
              >
                {category.name}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Product Portfolio</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Each product is manufactured to the highest quality standards with 
              comprehensive testing and certification.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative h-48 overflow-hidden">
                  <img  
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" 
                    alt={`${product.name} - ${product.description}`}
                   src="https://images.unsplash.com/photo-1635865165118-917ed9e20936" />
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{product.name}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{product.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Specifications:</h4>
                    <ul className="space-y-1">
                      {product.specifications.map((spec, idx) => (
                        <li key={idx} className="flex items-start space-x-2 text-sm text-gray-600">
                          <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>{spec}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-2">Applications:</h4>
                    <div className="flex flex-wrap gap-2">
                      {product.applications.map((app, idx) => (
                        <span 
                          key={idx}
                          className="px-3 py-1 bg-blue-100 text-blue-800 text-xs rounded-full"
                        >
                          {app}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex space-x-3">
                    <Button size="sm" className="flex-1">
                      Request Quote
                    </Button>
                    <Button size="sm" variant="outline">
                      <Download className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Standards */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Quality Standards</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Every product undergoes rigorous quality control processes to ensure 
                compliance with international standards and customer specifications.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500" />
                  <span className="text-lg text-gray-700">ISO 9001:2015 Certified</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500" />
                  <span className="text-lg text-gray-700">ASTM Standards Compliance</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500" />
                  <span className="text-lg text-gray-700">EN Standards Certified</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500" />
                  <span className="text-lg text-gray-700">AS9100 Aerospace Certification</span>
                </div>
              </div>
              
              <Button size="lg" className="mt-8">
                Download Quality Certificate <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <img  
                className="w-full h-96 object-cover rounded-lg shadow-2xl" 
                alt="Quality control laboratory with testing equipment"
               src="https://images.unsplash.com/photo-1657778752500-9da406aa813f" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Technical Support */}
      <section className="py-20 corporate-blue text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-bold mb-6">Technical Support</h2>
            <p className="text-xl mb-8 text-blue-100">
              Our technical team provides comprehensive support from product selection 
              to application engineering, ensuring optimal performance for your specific needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
                Contact Technical Team
              </Button>
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                Download Product Catalog
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Products;
