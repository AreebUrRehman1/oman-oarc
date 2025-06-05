
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Clock, DollarSign, Users, Award, Heart, Lightbulb, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';

const Careers = () => {
  const [selectedJob, setSelectedJob] = useState(null);

  const benefits = [
    {
      icon: Heart,
      title: 'Health & Wellness',
      description: 'Comprehensive health insurance, wellness programs, and mental health support'
    },
    {
      icon: Lightbulb,
      title: 'Learning & Development',
      description: 'Continuous training, skill development programs, and career advancement opportunities'
    },
    {
      icon: DollarSign,
      title: 'Competitive Compensation',
      description: 'Market-leading salaries, performance bonuses, and profit-sharing programs'
    },
    {
      icon: Shield,
      title: 'Job Security',
      description: 'Stable employment with a growing company and long-term career prospects'
    }
  ];

  const jobOpenings = [
    {
      id: 1,
      title: 'Senior Manufacturing Engineer',
      department: 'Engineering',
      location: 'Sohar, Oman',
      type: 'Full-time',
      salary: 'OMR 2,500 - 3,500',
      description: 'Lead manufacturing process optimization and implement lean manufacturing principles.',
      requirements: ['Bachelor\'s in Mechanical/Industrial Engineering', '5+ years manufacturing experience', 'Lean Six Sigma certification preferred'],
      responsibilities: ['Process optimization and improvement', 'Equipment maintenance planning', 'Quality control implementation', 'Team leadership and training']
    },
    {
      id: 2,
      title: 'Quality Control Specialist',
      department: 'Quality Assurance',
      location: 'Sohar, Oman',
      type: 'Full-time',
      salary: 'OMR 1,800 - 2,500',
      description: 'Ensure product quality through comprehensive testing and inspection procedures.',
      requirements: ['Bachelor\'s in Materials Science/Chemistry', '3+ years QC experience', 'Knowledge of ASTM/EN standards'],
      responsibilities: ['Product testing and inspection', 'Quality documentation', 'Non-conformance investigation', 'Supplier quality audits']
    },
    {
      id: 3,
      title: 'Sales Manager - International',
      department: 'Sales & Marketing',
      location: 'Sohar, Oman',
      type: 'Full-time',
      salary: 'OMR 3,000 - 4,500',
      description: 'Drive international sales growth and manage key customer relationships.',
      requirements: ['Bachelor\'s in Business/Engineering', '7+ years B2B sales experience', 'International market knowledge'],
      responsibilities: ['International market development', 'Customer relationship management', 'Sales strategy implementation', 'Contract negotiation']
    },
    {
      id: 4,
      title: 'Environmental Engineer',
      department: 'Sustainability',
      location: 'Sohar, Oman',
      type: 'Full-time',
      salary: 'OMR 2,200 - 3,000',
      description: 'Lead environmental initiatives and ensure compliance with sustainability standards.',
      requirements: ['Bachelor\'s in Environmental Engineering', '4+ years environmental experience', 'ISO 14001 knowledge'],
      responsibilities: ['Environmental compliance monitoring', 'Sustainability program development', 'Waste management optimization', 'Environmental reporting']
    },
    {
      id: 5,
      title: 'Production Supervisor',
      department: 'Operations',
      location: 'Sohar, Oman',
      type: 'Full-time',
      salary: 'OMR 1,500 - 2,200',
      description: 'Supervise production operations and ensure safety and efficiency standards.',
      requirements: ['Diploma in Engineering/Manufacturing', '3+ years supervisory experience', 'Safety certification'],
      responsibilities: ['Production planning and scheduling', 'Team supervision and training', 'Safety compliance', 'Performance monitoring']
    },
    {
      id: 6,
      title: 'IT Systems Administrator',
      department: 'Information Technology',
      location: 'Sohar, Oman',
      type: 'Full-time',
      salary: 'OMR 2,000 - 2,800',
      description: 'Manage IT infrastructure and support digital transformation initiatives.',
      requirements: ['Bachelor\'s in Computer Science/IT', '4+ years system administration', 'Cloud platform experience'],
      responsibilities: ['System maintenance and monitoring', 'Network security management', 'User support and training', 'Technology upgrade planning']
    }
  ];

  const handleApply = (jobTitle) => {
    toast({
      title: "Application Submitted",
      description: `Your application for ${jobTitle} has been received. We'll contact you soon!`,
    });
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-blue-900 text-white overflow-hidden">
        <div className="absolute inset-0">
          <img  
            className="w-full h-full object-cover opacity-30" 
            alt="Diverse team of professionals working together in modern office"
           src="https://images.unsplash.com/photo-1651009188116-bb5f80eaf6aa" />
        </div>
        <div className="relative z-10 container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Join Our Team</h1>
            <p className="text-xl md:text-2xl text-blue-100 leading-relaxed">
              Build your career with Oman's leading aluminium manufacturer. 
              Discover opportunities for growth, innovation, and making a difference.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Choose OmanAlu</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join a company that values innovation, sustainability, and employee growth. 
              We offer more than just a job – we offer a career path to success.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center p-6 bg-gray-50 rounded-lg hover:shadow-lg transition-shadow"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6">
                  <benefit.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Culture */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Culture</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                At OmanAlu, we foster a culture of innovation, collaboration, and continuous learning. 
                Our diverse team of professionals works together to achieve excellence in everything we do.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Users className="h-6 w-6 text-blue-600" />
                  <span className="text-lg text-gray-700">Collaborative team environment</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Award className="h-6 w-6 text-blue-600" />
                  <span className="text-lg text-gray-700">Recognition and rewards programs</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Lightbulb className="h-6 w-6 text-blue-600" />
                  <span className="text-lg text-gray-700">Innovation and creativity encouraged</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Heart className="h-6 w-6 text-blue-600" />
                  <span className="text-lg text-gray-700">Work-life balance priority</span>
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
                alt="Employees collaborating in modern workplace"
               src="https://images.unsplash.com/photo-1637622124152-33adfabcc923" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Job Openings */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Current Openings</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore exciting career opportunities across various departments and find 
              the perfect role to advance your professional journey.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {jobOpenings.map((job, index) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow cursor-pointer"
                onClick={() => setSelectedJob(selectedJob === job.id ? null : job.id)}
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{job.title}</h3>
                    <p className="text-blue-600 font-medium">{job.department}</p>
                  </div>
                  <span className="px-3 py-1 bg-green-100 text-green-800 text-xs rounded-full">
                    {job.type}
                  </span>
                </div>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center space-x-2 text-gray-600">
                    <MapPin className="h-4 w-4" />
                    <span className="text-sm">{job.location}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-600">
                    <DollarSign className="h-4 w-4" />
                    <span className="text-sm">{job.salary}</span>
                  </div>
                </div>

                <p className="text-gray-600 mb-4 leading-relaxed">{job.description}</p>

                {selectedJob === job.id && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="border-t border-gray-200 pt-4 mt-4"
                  >
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Requirements:</h4>
                      <ul className="space-y-1">
                        {job.requirements.map((req, idx) => (
                          <li key={idx} className="text-sm text-gray-600 flex items-start space-x-2">
                            <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                            <span>{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Responsibilities:</h4>
                      <ul className="space-y-1">
                        {job.responsibilities.map((resp, idx) => (
                          <li key={idx} className="text-sm text-gray-600 flex items-start space-x-2">
                            <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                            <span>{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                )}

                <Button 
                  className="w-full mt-4"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleApply(job.title);
                  }}
                >
                  Apply Now
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-20 bg-blue-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Application Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our streamlined application process ensures a smooth experience from 
              application to onboarding.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Apply Online</h3>
              <p className="text-gray-600 text-sm">Submit your application and resume through our online portal</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Initial Review</h3>
              <p className="text-gray-600 text-sm">Our HR team reviews your application and qualifications</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Interview Process</h3>
              <p className="text-gray-600 text-sm">Multiple rounds of interviews with hiring managers and team leads</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-xl">4</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Welcome Aboard</h3>
              <p className="text-gray-600 text-sm">Comprehensive onboarding and orientation program</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 corporate-blue text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-bold mb-6">Ready to Start Your Journey?</h2>
            <p className="text-xl mb-8 text-blue-100">
              Don't see the perfect role? Send us your resume and we'll keep you in mind 
              for future opportunities that match your skills and interests.
            </p>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
              Send General Application
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Careers;
