// import { useState } from 'react'
// import { useNavigate } from 'react-router-dom'
// import { ArrowLeft, BookOpen, Sparkles, Check, Star, MessageCircle, Printer, Package, Truck, Globe, ArrowRight, Zap, Shield, Clock, Award } from 'lucide-react'

// const BookPrintingPage = () => {
//   const navigate = useNavigate()
//   const [selectedPackage, setSelectedPackage] = useState('professional')

//   const features = [
//     {
//       icon: <Printer className="w-12 h-12" />,
//       title: "High-Quality Print Production",
//       description: "Professional offset and digital printing with premium paper stocks and binding options for exceptional quality and durability."
//     },
//     {
//       icon: <Package className="w-12 h-12" />,
//       title: "Custom Binding Options",
//       description: "Choose from perfect binding, saddle stitching, hardcover, or spiral binding to match your book's style and budget."
//     },
//     {
//       icon: <Globe className="w-12 h-12" />,
//       title: "Global Distribution",
//       description: "Print-on-demand services with worldwide distribution through Amazon KDP, IngramSpark, and other major networks."
//     },
//     {
//       icon: <Zap className="w-12 h-12" />,
//       title: "Fast Turnaround",
//       description: "Quick production times with rush options available. Get your printed books in as little as 5-7 business days."
//     },
//     {
//       icon: <Shield className="w-12 h-12" />,
//       title: "Quality Guarantee",
//       description: "100% satisfaction guarantee with quality control checks at every stage of the printing process."
//     },
//     {
//       icon: <Truck className="w-12 h-12" />,
//       title: "Secure Shipping",
//       description: "Safe and secure packaging with tracking for all shipments. Insurance coverage for high-value orders."
//     }
//   ]

//   const packages = [
//     {
//       id: 'basic',
//       name: 'Basic Print',
//       price: '$299',
//       description: 'Perfect for small print runs',
//       features: [
//         '25-100 copies',
//         'Standard paper quality',
//         'Perfect binding',
//         'Basic cover finish',
//         '10-14 day turnaround',
//         'Standard shipping'
//       ],
//       popular: false
//     },
//     {
//       id: 'professional',
//       name: 'Professional Print',
//       price: '$599',
//       description: 'Most popular for serious authors',
//       features: [
//         '100-500 copies',
//         'Premium paper quality',
//         'Multiple binding options',
//         'Matte or gloss finish',
//         'Color accuracy guarantee',
//         '7-10 day turnaround',
//         'Priority shipping',
//         'Free proofs'
//       ],
//       popular: true
//     },
//     {
//       id: 'premium',
//       name: 'Premium Print',
//       price: '$999',
//       description: 'Complete publishing solution',
//       features: [
//         '500+ copies',
//         'Luxury paper options',
//         'Hardcover available',
//         'Special finishes (foil, emboss)',
//         'Color matching service',
//         '5-7 day turnaround',
//         'Express shipping',
//         'Unlimited proofs',
//         'Dedicated support'
//       ],
//       popular: false
//     }
//   ]

//   const testimonials = [
//     {
//       name: "Emma Rodriguez",
//       book: "The Art of Storytelling",
//       image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
//       rating: 5,
//       text: "The print quality exceeded my expectations! The colors are vibrant and the binding is perfect. My readers love the physical book."
//     },
//     {
//       name: "James Wilson",
//       book: "Business Leadership Guide",
//       image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
//       rating: 5,
//       text: "Professional service from start to finish. The team guided me through every step and delivered exactly what I envisioned."
//     }
//   ]

//   const processSteps = [
//     {
//       step: "1",
//       title: "Upload Your Files",
//       description: "Submit your print-ready PDF files with proper margins and bleed specifications"
//     },
//     {
//       step: "2",
//       title: "Choose Specifications",
//       description: "Select paper type, binding style, cover finish, and quantity for your print run"
//     },
//     {
//       step: "3",
//       title: "Review Digital Proof",
//       description: "Approve your digital proof or request changes before we proceed to printing"
//     },
//     {
//       step: "4",
//       title: "Professional Printing",
//       description: "Your books are printed using state-of-the-art equipment with quality control"
//     },
//     {
//       step: "5",
//       title: "Quality Check & Ship",
//       description: "Final quality inspection before secure packaging and shipping to your location"
//     }
//   ]

//   const printOptions = [
//     {
//       title: "Paperback Books",
//       image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&h=300&fit=crop",
//       description: "Perfect bound paperbacks with professional finish"
//     },
//     {
//       title: "Hardcover Books",
//       image: "https://images.unsplash.com/photo-1589998059171-988d887df646?w=400&h=300&fit=crop",
//       description: "Durable hardcover books with dust jacket options"
//     },
//     {
//       title: "Magazines & Catalogs",
//       image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop",
//       description: "Saddle-stitched publications with vibrant colors"
//     },
//     {
//       title: "Children's Books",
//       image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400&h=300&fit=crop",
//       description: "Durable printing perfect for young readers"
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
//                 Get Quote
//               </button>
//             </div>
//           </div>
//         </div>
//       </nav>

//       {/* Hero Section */}
//       <section className="pt-32 pb-20 px-4 relative overflow-hidden">
//         <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-red-50"></div>
//         <div className="max-w-7xl mx-auto relative z-10">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//             <div>
//               <div className="inline-flex items-center space-x-2 bg-orange-100 border border-orange-200 rounded-full px-4 py-2 mb-6">
//                 <Printer className="w-4 h-4 text-orange-600" />
//                 <span className="text-orange-800 text-sm font-medium">Professional Book Printing Services</span>
//               </div>
              
//               <h1 className="text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
//                 Professional book
//                 <span className="block text-orange-600">printing services</span>
//               </h1>
              
//               <p className="text-xl text-slate-600 mb-8 leading-relaxed">
//                 High-quality printing with fast turnaround times and competitive pricing. From single copies to large print runs, we deliver exceptional results.
//               </p>
              
//               <button className="group bg-gradient-to-r from-orange-600 to-red-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:shadow-xl hover:shadow-orange-500/25 transform hover:scale-105 transition-all duration-300 flex items-center space-x-3">
//                 <Printer className="w-5 h-5" />
//                 <span>Get Printing Quote</span>
//                 <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
//               </button>
//             </div>
            
//             <div className="relative">
//               <div className="grid grid-cols-2 gap-4">
//                 {printOptions.map((option, index) => (
//                   <div
//                     key={index}
//                     className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
//                   >
//                     <img
//                       src={option.image}
//                       alt={option.title}
//                       className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
//                     />
//                     <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
//                     <div className="absolute bottom-4 left-4 right-4">
//                       <h3 className="text-white font-bold text-lg mb-1">{option.title}</h3>
//                       <p className="text-orange-200 text-sm">{option.description}</p>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//               <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-orange-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
//                 Premium Quality Printing
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
//               Everything your printed book needs:
//             </h2>
//             <p className="text-xl text-slate-600">Professional printing solutions for authors and publishers</p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {features.map((feature, index) => (
//               <div
//                 key={index}
//                 className="group p-8 bg-gradient-to-br from-slate-50 to-white border border-slate-200 rounded-2xl hover:shadow-xl hover:shadow-orange-500/10 transition-all duration-500 transform hover:scale-105"
//               >
//                 <div className="text-orange-600 mb-6 group-hover:scale-110 transition-transform duration-300">
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
//       <section className="py-20 px-4 bg-gradient-to-br from-slate-50 to-orange-50">
//         <div className="max-w-7xl mx-auto">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl font-bold text-slate-900 mb-4">Our Book Printing Process</h2>
//             <p className="text-xl text-slate-600">From digital files to finished books in 5 simple steps</p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
//             {processSteps.map((step, index) => (
//               <div key={index} className="text-center">
//                 <div className="relative mb-6">
//                   <div className="w-16 h-16 bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto shadow-lg">
//                     {step.step}
//                   </div>
//                   {index < processSteps.length - 1 && (
//                     <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-orange-300 to-red-300"></div>
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
//             <h2 className="text-4xl font-bold text-slate-900 mb-4">Choose Your Printing Package</h2>
//             <p className="text-xl text-slate-600">Professional printing solutions for every budget and quantity</p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {packages.map((pkg) => (
//               <div
//                 key={pkg.id}
//                 className={`relative p-8 rounded-2xl border-2 transition-all duration-300 transform hover:scale-105 ${
//                   pkg.popular
//                     ? 'border-orange-500 bg-gradient-to-br from-orange-50 to-red-50 shadow-xl'
//                     : 'border-slate-200 bg-white hover:border-orange-300 hover:shadow-lg'
//                 }`}
//               >
//                 {pkg.popular && (
//                   <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
//                     <span className="bg-gradient-to-r from-orange-600 to-red-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
//                       Most Popular
//                     </span>
//                   </div>
//                 )}

//                 <div className="text-center mb-8">
//                   <h3 className="text-2xl font-bold text-slate-900 mb-2">{pkg.name}</h3>
//                   <p className="text-slate-600 mb-4">{pkg.description}</p>
//                   <div className="text-4xl font-bold text-orange-600 mb-2">{pkg.price}</div>
//                   <p className="text-slate-500 text-sm">Starting price</p>
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
//                       ? 'bg-gradient-to-r from-orange-600 to-red-600 text-white hover:shadow-lg'
//                       : 'border-2 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'
//                   }`}
//                 >
//                   Get Quote
//                 </button>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Testimonials Section */}
//       <section className="py-20 px-4 bg-gradient-to-br from-slate-50 to-orange-50">
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
//       <section className="py-20 px-4 bg-gradient-to-r from-orange-600 to-red-600 relative overflow-hidden">
//         <div className="absolute inset-0 bg-black/10"></div>
//         <div className="max-w-5xl mx-auto text-center relative z-10">
//           <h2 className="text-5xl font-bold text-white mb-8 leading-tight">
//             Ready to Print Your
//             <span className="block text-orange-200">Professional Book?</span>
//           </h2>
          
//           <p className="text-xl text-orange-100 mb-12 max-w-3xl mx-auto leading-relaxed">
//             Join thousands of successful authors who have brought their books to life with our professional printing services.
//           </p>
          
//           <div className="flex flex-col sm:flex-row gap-6 justify-center">
//             <button className="group bg-white text-orange-600 px-10 py-4 rounded-lg text-lg font-bold hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-3">
//               <Printer className="w-5 h-5" />
//               <span>Start Your Print Project</span>
//               <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
//             </button>
//             <button className="group border-2 border-white text-white px-10 py-4 rounded-lg text-lg font-bold hover:bg-white hover:text-orange-600 transition-all duration-300 flex items-center justify-center space-x-3">
//               <Package className="w-5 h-5" />
//               <span>View Print Samples</span>
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

// export default BookPrintingPage



import { useState } from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import AOS from 'aos'
import { ArrowLeft, BookOpen, Sparkles, Check, Star, MessageCircle, Printer, Package, Truck, Globe, ArrowRight, Zap, Shield, Clock, Award } from 'lucide-react'

const BookPrintingPage = () => {
  const navigate = useNavigate()
  const [selectedPackage, setSelectedPackage] = useState('professional')

  useEffect(() => {
    AOS.refresh()
  }, [])

  const features = [
    {
      icon: <Printer className="w-12 h-12" />,
      title: "High-Quality Print Production",
      description: "Professional offset and digital printing with premium paper stocks and binding options for exceptional quality and durability."
    },
    {
      icon: <Package className="w-12 h-12" />,
      title: "Custom Binding Options",
      description: "Choose from perfect binding, saddle stitching, hardcover, or spiral binding to match your book's style and budget."
    },
    {
      icon: <Globe className="w-12 h-12" />,
      title: "Global Distribution",
      description: "Print-on-demand services with worldwide distribution through Amazon KDP, IngramSpark, and other major networks."
    },
    {
      icon: <Zap className="w-12 h-12" />,
      title: "Fast Turnaround",
      description: "Quick production times with rush options available. Get your printed books in as little as 5-7 business days."
    },
    {
      icon: <Shield className="w-12 h-12" />,
      title: "Quality Guarantee",
      description: "100% satisfaction guarantee with quality control checks at every stage of the printing process."
    },
    {
      icon: <Truck className="w-12 h-12" />,
      title: "Secure Shipping",
      description: "Safe and secure packaging with tracking for all shipments. Insurance coverage for high-value orders."
    }
  ]

  const packages = [
    {
      id: 'basic',
      name: 'Basic Print',
      price: '$299',
      description: 'Perfect for small print runs',
      features: [
        '25-100 copies',
        'Standard paper quality',
        'Perfect binding',
        'Basic cover finish',
        '10-14 day turnaround',
        'Standard shipping'
      ],
      popular: false
    },
    {
      id: 'professional',
      name: 'Professional Print',
      price: '$599',
      description: 'Most popular for serious authors',
      features: [
        '100-500 copies',
        'Premium paper quality',
        'Multiple binding options',
        'Matte or gloss finish',
        'Color accuracy guarantee',
        '7-10 day turnaround',
        'Priority shipping',
        'Free proofs'
      ],
      popular: true
    },
    {
      id: 'premium',
      name: 'Premium Print',
      price: '$999',
      description: 'Complete publishing solution',
      features: [
        '500+ copies',
        'Luxury paper options',
        'Hardcover available',
        'Special finishes (foil, emboss)',
        'Color matching service',
        '5-7 day turnaround',
        'Express shipping',
        'Unlimited proofs',
        'Dedicated support'
      ],
      popular: false
    }
  ]

  const testimonials = [
    {
      name: "Emma Rodriguez",
      book: "The Art of Storytelling",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      text: "The print quality exceeded my expectations! The colors are vibrant and the binding is perfect. My readers love the physical book."
    },
    {
      name: "James Wilson",
      book: "Business Leadership Guide",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      text: "Professional service from start to finish. The team guided me through every step and delivered exactly what I envisioned."
    }
  ]

  const processSteps = [
    {
      step: "1",
      title: "Upload Your Files",
      description: "Submit your print-ready PDF files with proper margins and bleed specifications"
    },
    {
      step: "2",
      title: "Choose Specifications",
      description: "Select paper type, binding style, cover finish, and quantity for your print run"
    },
    {
      step: "3",
      title: "Review Digital Proof",
      description: "Approve your digital proof or request changes before we proceed to printing"
    },
    {
      step: "4",
      title: "Professional Printing",
      description: "Your books are printed using state-of-the-art equipment with quality control"
    },
    {
      step: "5",
      title: "Quality Check & Ship",
      description: "Final quality inspection before secure packaging and shipping to your location"
    }
  ]

  const printOptions = [
    {
      title: "Paperback Books",
      image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&h=300&fit=crop",
      description: "Perfect bound paperbacks with professional finish"
    },
    {
      title: "Hardcover Books",
      image: "https://images.unsplash.com/photo-1589998059171-988d887df646?w=400&h=300&fit=crop",
      description: "Durable hardcover books with dust jacket options"
    },
    {
      title: "Magazines & Catalogs",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop",
      description: "Saddle-stitched publications with vibrant colors"
    },
    {
      title: "Children's Books",
      image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400&h=300&fit=crop",
      description: "Durable printing perfect for young readers"
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
                Get Quote
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 relative overflow-hidden" data-aos="fade-up">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-red-50"></div>
        
        {/* Floating Printer Icons */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(12)].map((_, i) => (
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
              <Printer className="w-8 h-8 text-orange-400 transform rotate-12" />
            </div>
          ))}
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div data-aos="fade-right" data-aos-delay="200">
              <div className="inline-flex items-center space-x-2 bg-orange-100 border border-orange-200 rounded-full px-4 py-2 mb-6">
                <Printer className="w-4 h-4 text-orange-600" />
                <span className="text-orange-800 text-sm font-medium">Professional Book Printing Services</span>
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
                Professional book
                <span className="block text-orange-600">printing services</span>
              </h1>
              
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                High-quality printing with fast turnaround times and competitive pricing. From single copies to large print runs, we deliver exceptional results.
              </p>
              
              <button className="group bg-gradient-to-r from-orange-600 to-red-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:shadow-xl hover:shadow-orange-500/25 transform hover:scale-105 transition-all duration-300 flex items-center space-x-3">
                <Printer className="w-5 h-5" />
                <span>Get Printing Quote</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
            
            <div className="relative" data-aos="fade-left" data-aos-delay="400">
              <div className="grid grid-cols-2 gap-4">
                {printOptions.map((option, index) => (
                  <div
                    key={index}
                    className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                  >
                    <img
                      src={option.image}
                      alt={option.title}
                      className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-white font-bold text-lg mb-1">{option.title}</h3>
                      <p className="text-orange-200 text-sm">{option.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-orange-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                Premium Quality Printing
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
              Everything your printed book needs:
            </h2>
            <p className="text-xl text-slate-600">Professional printing solutions for authors and publishers</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={`${300 + index * 100}`}
                className="group p-8 bg-gradient-to-br from-slate-50 to-white border border-slate-200 rounded-2xl hover:shadow-xl hover:shadow-orange-500/10 transition-all duration-500 transform hover:scale-105"
              >
                <div className="text-orange-600 mb-6 group-hover:scale-110 transition-transform duration-300">
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
      <section className="py-20 px-4 bg-gradient-to-br from-slate-50 to-orange-50" data-aos="fade-up">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16" data-aos="fade-up" data-aos-delay="200">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Our Book Printing Process</h2>
            <p className="text-xl text-slate-600">From digital files to finished books in 5 simple steps</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center" data-aos="fade-up" data-aos-delay={`${300 + index * 100}`}>
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto shadow-lg">
                    {step.step}
                  </div>
                  {index < processSteps.length - 1 && (
                    <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-orange-300 to-red-300"></div>
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
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Choose Your Printing Package</h2>
            <p className="text-xl text-slate-600">Professional printing solutions for every budget and quantity</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg) => (
              <div
                key={pkg.id}
                data-aos="fade-up"
                data-aos-delay={`${300 + packages.indexOf(pkg) * 100}`}
                className={`relative p-8 rounded-2xl border-2 transition-all duration-300 transform hover:scale-105 ${
                  pkg.popular
                    ? 'border-orange-500 bg-gradient-to-br from-orange-50 to-red-50 shadow-xl'
                    : 'border-slate-200 bg-white hover:border-orange-300 hover:shadow-lg'
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-orange-600 to-red-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">{pkg.name}</h3>
                  <p className="text-slate-600 mb-4">{pkg.description}</p>
                  <div className="text-4xl font-bold text-orange-600 mb-2">{pkg.price}</div>
                  <p className="text-slate-500 text-sm">Starting price</p>
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
                      ? 'bg-gradient-to-r from-orange-600 to-red-600 text-white hover:shadow-lg'
                      : 'border-2 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'
                  }`}
                >
                  Get Quote
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-slate-50 to-orange-50" data-aos="fade-up">
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
      <section className="py-20 px-4 bg-gradient-to-r from-orange-600 to-red-600 relative overflow-hidden" data-aos="fade-up">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="max-w-5xl mx-auto text-center relative z-10" data-aos="fade-up" data-aos-delay="200">
          <h2 className="text-5xl font-bold text-white mb-8 leading-tight">
            Ready to Print Your
            <span className="block text-orange-200">Professional Book?</span>
          </h2>
          
          <p className="text-xl text-orange-100 mb-12 max-w-3xl mx-auto leading-relaxed">
            Join thousands of successful authors who have brought their books to life with our professional printing services.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button data-aos="fade-up" data-aos-delay="400" className="group bg-white text-orange-600 px-10 py-4 rounded-lg text-lg font-bold hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-3">
              <Printer className="w-5 h-5" />
              <span>Start Your Print Project</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button data-aos="fade-up" data-aos-delay="500" className="group border-2 border-white text-white px-10 py-4 rounded-lg text-lg font-bold hover:bg-white hover:text-orange-600 transition-all duration-300 flex items-center justify-center space-x-3">
              <Package className="w-5 h-5" />
              <span>View Print Samples</span>
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

export default BookPrintingPage