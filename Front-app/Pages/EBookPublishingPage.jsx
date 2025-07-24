// import { useState } from 'react'
// import { useNavigate } from 'react-router-dom'
// import { ArrowLeft, BookOpen, Sparkles, Check, Star, MessageCircle, Download, Globe, Smartphone, Tablet, Monitor, ArrowRight, Zap, Shield, Clock, Award } from 'lucide-react'

// const EBookPublishingPage = () => {
//   const navigate = useNavigate()
//   const [selectedPackage, setSelectedPackage] = useState('professional')

//   const features = [
//     {
//       icon: <BookOpen className="w-12 h-12" />,
//       title: "Professional eBook Conversion",
//       description: "Expert conversion from your manuscript to all major eBook formats including EPUB, MOBI, and KPF for seamless reading across all devices."
//     },
//     {
//       icon: <Globe className="w-12 h-12" />,
//       title: "Multi-Platform Distribution",
//       description: "Get your eBook published on Amazon Kindle, Apple Books, Google Play Books, and other major platforms with optimized formatting for each."
//     },
//     {
//       icon: <Smartphone className="w-12 h-12" />,
//       title: "Mobile-Optimized Reading",
//       description: "Ensure your eBook looks perfect on smartphones, tablets, and e-readers with responsive formatting and optimized typography."
//     },
//     {
//       icon: <Zap className="w-12 h-12" />,
//       title: "Interactive Elements",
//       description: "Add clickable table of contents, internal links, and interactive features that enhance the digital reading experience."
//     },
//     {
//       icon: <Shield className="w-12 h-12" />,
//       title: "DRM Protection",
//       description: "Protect your intellectual property with digital rights management and secure distribution channels."
//     },
//     {
//       icon: <Clock className="w-12 h-12" />,
//       title: "Fast Turnaround",
//       description: "Get your eBook ready for publication in just 3-5 business days with our streamlined conversion process."
//     }
//   ]

//   const packages = [
//     {
//       id: 'basic',
//       name: 'Basic eBook',
//       price: '$99',
//       description: 'Perfect for first-time authors',
//       features: [
//         'EPUB & MOBI conversion',
//         'Basic formatting',
//         'Clickable table of contents',
//         'Up to 2 revisions',
//         '3-5 day turnaround'
//       ],
//       popular: false
//     },
//     {
//       id: 'professional',
//       name: 'Professional eBook',
//       price: '$199',
//       description: 'Most popular choice for serious authors',
//       features: [
//         'All Basic features',
//         'KDP Select optimization',
//         'Enhanced typography',
//         'Internal linking',
//         'Image optimization',
//         'Up to 5 revisions',
//         'Priority support'
//       ],
//       popular: true
//     },
//     {
//       id: 'premium',
//       name: 'Premium eBook',
//       price: '$299',
//       description: 'Complete publishing solution',
//       features: [
//         'All Professional features',
//         'Multi-platform optimization',
//         'Interactive elements',
//         'Custom CSS styling',
//         'Unlimited revisions',
//         'Marketing materials',
//         '24/7 support'
//       ],
//       popular: false
//     }
//   ]

//   const testimonials = [
//     {
//       name: "Sarah Johnson",
//       book: "The Digital Nomad's Guide",
//       image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
//       rating: 5,
//       text: "The eBook conversion was flawless! My book looks professional on every device and platform. Sales have exceeded my expectations."
//     },
//     {
//       name: "Michael Chen",
//       book: "Cryptocurrency Mastery",
//       image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
//       rating: 5,
//       text: "Outstanding service! They handled the technical aspects perfectly while I focused on marketing. Highly recommend for any author."
//     }
//   ]

//   const processSteps = [
//     {
//       step: "1",
//       title: "Submit Your Manuscript",
//       description: "Upload your completed manuscript in Word, PDF, or Google Docs format"
//     },
//     {
//       step: "2",
//       title: "Choose Your Package",
//       description: "Select the eBook publishing package that best fits your needs and budget"
//     },
//     {
//       step: "3",
//       title: "Professional Conversion",
//       description: "Our experts convert and format your book for all major eBook platforms"
//     },
//     {
//       step: "4",
//       title: "Review & Revisions",
//       description: "Review your eBook and request any necessary revisions until it's perfect"
//     },
//     {
//       step: "5",
//       title: "Publish & Distribute",
//       description: "Launch your eBook across multiple platforms and start reaching readers worldwide"
//     }
//   ]

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
//       {/* Navigation */}
//       <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-xl z-50 border-b border-slate-200 shadow-sm">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex justify-between items-center h-20">
//             <div className="flex items-center space-x-3">
//               <button
//                 onClick={() => navigate('/')}
//                 className="p-2 rounded-lg hover:bg-slate-100 transition-colors duration-300"
//               >
//                 <ArrowLeft className="w-6 h-6 text-slate-600" />
//               </button>
//               <div className="relative">
//                 <BookOpen className="w-10 h-10 text-amber-600" />
//                 <Sparkles className="w-4 h-4 text-amber-500 absolute -top-1 -right-1" />
//               </div>
//               <span className="text-2xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
//                 BookCraft Studio
//               </span>
//             </div>
//             <div className="flex items-center space-x-4">
//               <button className="bg-gradient-to-r from-amber-600 to-orange-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300">
//                 Get Started
//               </button>
//             </div>
//           </div>
//         </div>
//       </nav>

//       {/* Hero Section */}
//       <section className="pt-32 pb-20 px-4 relative overflow-hidden">
//         <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50"></div>
//         <div className="max-w-7xl mx-auto relative z-10">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//             <div>
//               <div className="inline-flex items-center space-x-2 bg-blue-100 border border-blue-200 rounded-full px-4 py-2 mb-6">
//                 <BookOpen className="w-4 h-4 text-blue-600" />
//                 <span className="text-blue-800 text-sm font-medium">Expert eBook Publishing Services</span>
//               </div>
              
//               <h1 className="text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
//                 Expert eBook publishing
//                 <span className="block text-blue-600">services</span>
//               </h1>
              
//               <p className="text-xl text-slate-600 mb-8 leading-relaxed">
//                 Professional eBook conversion, design, and formatting all at an affordable price. Transform your manuscript into a market-ready digital book.
//               </p>
              
//               <button className="group bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:shadow-xl hover:shadow-blue-500/25 transform hover:scale-105 transition-all duration-300 flex items-center space-x-3">
//                 <BookOpen className="w-5 h-5" />
//                 <span>Create Your eBook</span>
//                 <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
//               </button>
//             </div>
            
//             <div className="relative">
//               <div className="grid grid-cols-2 gap-4">
//                 <div className="space-y-4">
//                   <img
//                     src="https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=300&h=400&fit=crop&crop=edges"
//                     alt="eBook Example 1"
//                     className="w-full rounded-xl shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500"
//                   />
//                   <img
//                     src="https://images.unsplash.com/photo-1589998059171-988d887df646?w=300&h=400&fit=crop&crop=edges"
//                     alt="eBook Example 2"
//                     className="w-full rounded-xl shadow-2xl transform -rotate-2 hover:rotate-0 transition-transform duration-500"
//                   />
//                 </div>
//                 <div className="space-y-4 mt-8">
//                   <img
//                     src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=400&fit=crop&crop=edges"
//                     alt="eBook Example 3"
//                     className="w-full rounded-xl shadow-2xl transform -rotate-3 hover:rotate-0 transition-transform duration-500"
//                   />
//                   <img
//                     src="https://images.unsplash.com/photo-1512820790803-83ca734da794?w=300&h=400&fit=crop&crop=edges"
//                     alt="eBook Example 4"
//                     className="w-full rounded-xl shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-500"
//                   />
//                 </div>
//               </div>
//               <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-red-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
//                 The New York Times Best-Selling Author
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Features Section */}
//       <section className="py-20 px-4 bg-white">
//         <div className="max-w-7xl mx-auto">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl font-bold text-slate-900 mb-4">
//               Everything your eBook needs is right here:
//             </h2>
//             <p className="text-xl text-slate-600">Comprehensive digital publishing solutions for modern authors</p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {features.map((feature, index) => (
//               <div
//                 key={index}
//                 className="group p-8 bg-gradient-to-br from-slate-50 to-white border border-slate-200 rounded-2xl hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-500 transform hover:scale-105"
//               >
//                 <div className="text-blue-600 mb-6 group-hover:scale-110 transition-transform duration-300">
//                   {feature.icon}
//                 </div>
//                 <h3 className="text-xl font-bold text-slate-900 mb-4">{feature.title}</h3>
//                 <p className="text-slate-600 leading-relaxed">{feature.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Process Section */}
//       <section className="py-20 px-4 bg-gradient-to-br from-slate-50 to-blue-50">
//         <div className="max-w-7xl mx-auto">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl font-bold text-slate-900 mb-4">Our eBook Publishing Process</h2>
//             <p className="text-xl text-slate-600">From manuscript to published eBook in 5 simple steps</p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
//             {processSteps.map((step, index) => (
//               <div key={index} className="text-center">
//                 <div className="relative mb-6">
//                   <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto shadow-lg">
//                     {step.step}
//                   </div>
//                   {index < processSteps.length - 1 && (
//                     <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-blue-300 to-indigo-300"></div>
//                   )}
//                 </div>
//                 <h3 className="text-lg font-bold text-slate-900 mb-3">{step.title}</h3>
//                 <p className="text-slate-600 text-sm leading-relaxed">{step.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Pricing Section */}
//       <section className="py-20 px-4 bg-white">
//         <div className="max-w-7xl mx-auto">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl font-bold text-slate-900 mb-4">Choose Your eBook Package</h2>
//             <p className="text-xl text-slate-600">Professional eBook publishing solutions for every budget</p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {packages.map((pkg) => (
//               <div
//                 key={pkg.id}
//                 className={`relative p-8 rounded-2xl border-2 transition-all duration-300 transform hover:scale-105 ${
//                   pkg.popular
//                     ? 'border-blue-500 bg-gradient-to-br from-blue-50 to-indigo-50 shadow-xl'
//                     : 'border-slate-200 bg-white hover:border-blue-300 hover:shadow-lg'
//                 }`}
//               >
//                 {pkg.popular && (
//                   <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
//                     <span className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
//                       Most Popular
//                     </span>
//                   </div>
//                 )}

//                 <div className="text-center mb-8">
//                   <h3 className="text-2xl font-bold text-slate-900 mb-2">{pkg.name}</h3>
//                   <p className="text-slate-600 mb-4">{pkg.description}</p>
//                   <div className="text-4xl font-bold text-blue-600 mb-2">{pkg.price}</div>
//                 </div>

//                 <ul className="space-y-4 mb-8">
//                   {pkg.features.map((feature, index) => (
//                     <li key={index} className="flex items-center space-x-3">
//                       <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
//                       <span className="text-slate-700">{feature}</span>
//                     </li>
//                   ))}
//                 </ul>

//                 <button
//                   onClick={() => setSelectedPackage(pkg.id)}
//                   className={`w-full py-4 rounded-lg font-semibold transition-all duration-300 ${
//                     pkg.popular
//                       ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:shadow-lg'
//                       : 'border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white'
//                   }`}
//                 >
//                   Get Started
//                 </button>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Testimonials Section */}
//       <section className="py-20 px-4 bg-gradient-to-br from-slate-50 to-blue-50">
//         <div className="max-w-7xl mx-auto">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl font-bold text-slate-900 mb-4">What Our Authors Say</h2>
//             <p className="text-xl text-slate-600">Success stories from published authors</p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//             {testimonials.map((testimonial, index) => (
//               <div
//                 key={index}
//                 className="bg-white p-8 rounded-2xl shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300"
//               >
//                 <div className="flex items-center space-x-1 mb-4">
//                   {[...Array(testimonial.rating)].map((_, i) => (
//                     <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
//                   ))}
//                 </div>
                
//                 <blockquote className="text-slate-700 mb-6 italic leading-relaxed">
//                   "{testimonial.text}"
//                 </blockquote>
                
//                 <div className="flex items-center space-x-4">
//                   <img
//                     src={testimonial.image}
//                     alt={testimonial.name}
//                     className="w-12 h-12 rounded-full object-cover"
//                   />
//                   <div>
//                     <h4 className="font-bold text-slate-900">{testimonial.name}</h4>
//                     <p className="text-slate-600 text-sm">Author of "{testimonial.book}"</p>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-indigo-600 relative overflow-hidden">
//         <div className="absolute inset-0 bg-black/10"></div>
//         <div className="max-w-5xl mx-auto text-center relative z-10">
//           <h2 className="text-5xl font-bold text-white mb-8 leading-tight">
//             Ready to Publish Your
//             <span className="block text-blue-200">Digital Masterpiece?</span>
//           </h2>
          
//           <p className="text-xl text-blue-100 mb-12 max-w-3xl mx-auto leading-relaxed">
//             Join thousands of successful authors who have transformed their manuscripts into professional eBooks with our expert publishing services.
//           </p>
          
//           <div className="flex flex-col sm:flex-row gap-6 justify-center">
//             <button className="group bg-white text-blue-600 px-10 py-4 rounded-lg text-lg font-bold hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-3">
//               <BookOpen className="w-5 h-5" />
//               <span>Start Your eBook Project</span>
//               <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
//             </button>
//             <button className="group border-2 border-white text-white px-10 py-4 rounded-lg text-lg font-bold hover:bg-white hover:text-blue-600 transition-all duration-300 flex items-center justify-center space-x-3">
//               <Download className="w-5 h-5" />
//               <span>Download Sample eBook</span>
//             </button>
//           </div>
//         </div>
//       </section>

//       {/* Floating WhatsApp Button */}
//       <div className="fixed bottom-6 right-6 z-50">
//         <div className="group relative">
//           <a
//             href="https://wa.me/1234567890"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="flex items-center justify-center w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300"
//           >
//             <MessageCircle className="w-7 h-7" />
//           </a>
          
//           <div className="absolute bottom-16 right-0 bg-slate-900 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 pointer-events-none">
//             Chat with us on WhatsApp
//             <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-slate-900"></div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default EBookPublishingPage



import { useState } from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import AOS from 'aos'
import { ArrowLeft, BookOpen, Sparkles, Check, Star, MessageCircle, Download, Globe, Smartphone, Tablet, Monitor, ArrowRight, Zap, Shield, Clock, Award } from 'lucide-react'

const EBookPublishingPage = () => {
  const navigate = useNavigate()
  const [selectedPackage, setSelectedPackage] = useState('professional')

  useEffect(() => {
    AOS.refresh()
  }, [])

  const features = [
    {
      icon: <BookOpen className="w-12 h-12" />,
      title: "Professional eBook Conversion",
      description: "Expert conversion from your manuscript to all major eBook formats including EPUB, MOBI, and KPF for seamless reading across all devices."
    },
    {
      icon: <Globe className="w-12 h-12" />,
      title: "Multi-Platform Distribution",
      description: "Get your eBook published on Amazon Kindle, Apple Books, Google Play Books, and other major platforms with optimized formatting for each."
    },
    {
      icon: <Smartphone className="w-12 h-12" />,
      title: "Mobile-Optimized Reading",
      description: "Ensure your eBook looks perfect on smartphones, tablets, and e-readers with responsive formatting and optimized typography."
    },
    {
      icon: <Zap className="w-12 h-12" />,
      title: "Interactive Elements",
      description: "Add clickable table of contents, internal links, and interactive features that enhance the digital reading experience."
    },
    {
      icon: <Shield className="w-12 h-12" />,
      title: "DRM Protection",
      description: "Protect your intellectual property with digital rights management and secure distribution channels."
    },
    {
      icon: <Clock className="w-12 h-12" />,
      title: "Fast Turnaround",
      description: "Get your eBook ready for publication in just 3-5 business days with our streamlined conversion process."
    }
  ]

  const packages = [
    {
      id: 'basic',
      name: 'Basic eBook',
      price: '$99',
      description: 'Perfect for first-time authors',
      features: [
        'EPUB & MOBI conversion',
        'Basic formatting',
        'Clickable table of contents',
        'Up to 2 revisions',
        '3-5 day turnaround'
      ],
      popular: false
    },
    {
      id: 'professional',
      name: 'Professional eBook',
      price: '$199',
      description: 'Most popular choice for serious authors',
      features: [
        'All Basic features',
        'KDP Select optimization',
        'Enhanced typography',
        'Internal linking',
        'Image optimization',
        'Up to 5 revisions',
        'Priority support'
      ],
      popular: true
    },
    {
      id: 'premium',
      name: 'Premium eBook',
      price: '$299',
      description: 'Complete publishing solution',
      features: [
        'All Professional features',
        'Multi-platform optimization',
        'Interactive elements',
        'Custom CSS styling',
        'Unlimited revisions',
        'Marketing materials',
        '24/7 support'
      ],
      popular: false
    }
  ]

  const testimonials = [
    {
      name: "Sarah Johnson",
      book: "The Digital Nomad's Guide",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      text: "The eBook conversion was flawless! My book looks professional on every device and platform. Sales have exceeded my expectations."
    },
    {
      name: "Michael Chen",
      book: "Cryptocurrency Mastery",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      text: "Outstanding service! They handled the technical aspects perfectly while I focused on marketing. Highly recommend for any author."
    }
  ]

  const processSteps = [
    {
      step: "1",
      title: "Submit Your Manuscript",
      description: "Upload your completed manuscript in Word, PDF, or Google Docs format"
    },
    {
      step: "2",
      title: "Choose Your Package",
      description: "Select the eBook publishing package that best fits your needs and budget"
    },
    {
      step: "3",
      title: "Professional Conversion",
      description: "Our experts convert and format your book for all major eBook platforms"
    },
    {
      step: "4",
      title: "Review & Revisions",
      description: "Review your eBook and request any necessary revisions until it's perfect"
    },
    {
      step: "5",
      title: "Publish & Distribute",
      description: "Launch your eBook across multiple platforms and start reaching readers worldwide"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-xl z-50 border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-3">
              <button
                onClick={() => navigate('/')}
                className="p-2 rounded-lg hover:bg-slate-100 transition-colors duration-300"
              >
                <ArrowLeft className="w-6 h-6 text-slate-600" />
              </button>
              <div className="relative">
                <BookOpen className="w-10 h-10 text-amber-600" />
                <Sparkles className="w-4 h-4 text-amber-500 absolute -top-1 -right-1" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
                BookCraft Studio
              </span>
            </div>
            <div className="flex items-center space-x-4">
              <button className="bg-gradient-to-r from-amber-600 to-orange-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 relative overflow-hidden" data-aos="fade-up">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50"></div>
        
        {/* Floating eBook Icons */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                opacity: 0.1
              }}
            >
              <Tablet className="w-8 h-8 text-blue-400 transform rotate-12" />
            </div>
          ))}
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div data-aos="fade-right" data-aos-delay="200">
              <div className="inline-flex items-center space-x-2 bg-blue-100 border border-blue-200 rounded-full px-4 py-2 mb-6">
                <BookOpen className="w-4 h-4 text-blue-600" />
                <span className="text-blue-800 text-sm font-medium">Expert eBook Publishing Services</span>
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
                Expert eBook publishing
                <span className="block text-blue-600">services</span>
              </h1>
              
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                Professional eBook conversion, design, and formatting all at an affordable price. Transform your manuscript into a market-ready digital book.
              </p>
              
              <button className="group bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:shadow-xl hover:shadow-blue-500/25 transform hover:scale-105 transition-all duration-300 flex items-center space-x-3">
                <BookOpen className="w-5 h-5" />
                <span>Create Your eBook</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
            
            <div className="relative" data-aos="fade-left" data-aos-delay="400">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <img
                    src="https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=300&h=400&fit=crop&crop=edges"
                    alt="eBook Example 1"
                    className="w-full rounded-xl shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1589998059171-988d887df646?w=300&h=400&fit=crop&crop=edges"
                    alt="eBook Example 2"
                    className="w-full rounded-xl shadow-2xl transform -rotate-2 hover:rotate-0 transition-transform duration-500"
                  />
                </div>
                <div className="space-y-4 mt-8">
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=400&fit=crop&crop=edges"
                    alt="eBook Example 3"
                    className="w-full rounded-xl shadow-2xl transform -rotate-3 hover:rotate-0 transition-transform duration-500"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1512820790803-83ca734da794?w=300&h=400&fit=crop&crop=edges"
                    alt="eBook Example 4"
                    className="w-full rounded-xl shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-500"
                  />
                </div>
              </div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-red-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                The New York Times Best-Selling Author
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-white" data-aos="fade-up">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16" data-aos="fade-up" data-aos-delay="200">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Everything your eBook needs is right here:
            </h2>
            <p className="text-xl text-slate-600">Comprehensive digital publishing solutions for modern authors</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={`${300 + index * 100}`}
                className="group p-8 bg-gradient-to-br from-slate-50 to-white border border-slate-200 rounded-2xl hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-500 transform hover:scale-105"
              >
                <div className="text-blue-600 mb-6 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-slate-50 to-blue-50" data-aos="fade-up">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16" data-aos="fade-up" data-aos-delay="200">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Our eBook Publishing Process</h2>
            <p className="text-xl text-slate-600">From manuscript to published eBook in 5 simple steps</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center" data-aos="fade-up" data-aos-delay={`${300 + index * 100}`}>
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto shadow-lg">
                    {step.step}
                  </div>
                  {index < processSteps.length - 1 && (
                    <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-blue-300 to-indigo-300"></div>
                  )}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-3">{step.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 bg-white" data-aos="fade-up">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16" data-aos="fade-up" data-aos-delay="200">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Choose Your eBook Package</h2>
            <p className="text-xl text-slate-600">Professional eBook publishing solutions for every budget</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg) => (
              <div
                key={pkg.id}
                data-aos="fade-up"
                data-aos-delay={`${300 + packages.indexOf(pkg) * 100}`}
                className={`relative p-8 rounded-2xl border-2 transition-all duration-300 transform hover:scale-105 ${
                  pkg.popular
                    ? 'border-blue-500 bg-gradient-to-br from-blue-50 to-indigo-50 shadow-xl'
                    : 'border-slate-200 bg-white hover:border-blue-300 hover:shadow-lg'
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">{pkg.name}</h3>
                  <p className="text-slate-600 mb-4">{pkg.description}</p>
                  <div className="text-4xl font-bold text-blue-600 mb-2">{pkg.price}</div>
                </div>

                <ul className="space-y-4 mb-8">
                  {pkg.features.map((feature, index) => (
                    <li key={index} className="flex items-center space-x-3">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-slate-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => setSelectedPackage(pkg.id)}
                  className={`w-full py-4 rounded-lg font-semibold transition-all duration-300 ${
                    pkg.popular
                      ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:shadow-lg'
                      : 'border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white'
                  }`}
                >
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-slate-50 to-blue-50" data-aos="fade-up">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16" data-aos="fade-up" data-aos-delay="200">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">What Our Authors Say</h2>
            <p className="text-xl text-slate-600">Success stories from published authors</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={`${300 + index * 200}`}
                className="bg-white p-8 rounded-2xl shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <blockquote className="text-slate-700 mb-6 italic leading-relaxed">
                  "{testimonial.text}"
                </blockquote>
                
                <div className="flex items-center space-x-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-bold text-slate-900">{testimonial.name}</h4>
                    <p className="text-slate-600 text-sm">Author of "{testimonial.book}"</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-indigo-600 relative overflow-hidden" data-aos="fade-up">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="max-w-5xl mx-auto text-center relative z-10" data-aos="fade-up" data-aos-delay="200">
          <h2 className="text-5xl font-bold text-white mb-8 leading-tight">
            Ready to Publish Your
            <span className="block text-blue-200">Digital Masterpiece?</span>
          </h2>
          
          <p className="text-xl text-blue-100 mb-12 max-w-3xl mx-auto leading-relaxed">
            Join thousands of successful authors who have transformed their manuscripts into professional eBooks with our expert publishing services.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button 
              data-aos="fade-up" 
              data-aos-delay="400"
              className="group bg-white text-blue-600 px-10 py-4 rounded-lg text-lg font-bold hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-3"
            >
              <BookOpen className="w-5 h-5" />
              <span>Start Your eBook Project</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button 
              data-aos="fade-up" 
              data-aos-delay="500"
              className="group border-2 border-white text-white px-10 py-4 rounded-lg text-lg font-bold hover:bg-white hover:text-blue-600 transition-all duration-300 flex items-center justify-center space-x-3"
            >
              <Download className="w-5 h-5" />
              <span>Download Sample eBook</span>
            </button>
          </div>
        </div>
      </section>

      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <div className="group relative">
          <a
            href="https://wa.me/1234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300"
          >
            <MessageCircle className="w-7 h-7" />
          </a>
          
          <div className="absolute bottom-16 right-0 bg-slate-900 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 pointer-events-none">
            Chat with us on WhatsApp
            <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-slate-900"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EBookPublishingPage