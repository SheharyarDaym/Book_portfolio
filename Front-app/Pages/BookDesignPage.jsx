// import { useState } from 'react'
// import { useNavigate } from 'react-router-dom'
// import { ArrowLeft, BookOpen, Sparkles, Check, Star, MessageCircle, Palette, Image, Layout, Brush, ArrowRight, Zap, Shield, Clock, Award } from 'lucide-react'

// const BookDesignPage = () => {
//   const navigate = useNavigate()
//   const [selectedPackage, setSelectedPackage] = useState('professional')

//   const features = [
//     {
//       icon: <Palette className="w-12 h-12" />,
//       title: "Custom Cover Design",
//       description: "Unique, eye-catching book covers designed specifically for your genre and target audience to maximize sales appeal."
//     },
//     {
//       icon: <Layout className="w-12 h-12" />,
//       title: "Interior Layout Design",
//       description: "Professional interior formatting with proper typography, spacing, and layout for both print and digital versions."
//     },
//     {
//       icon: <Image className="w-12 h-12" />,
//       title: "Illustration & Graphics",
//       description: "Custom illustrations, graphics, and visual elements to enhance your book's visual appeal and reader engagement."
//     },
//     {
//       icon: <Brush className="w-12 h-12" />,
//       title: "Brand Consistency",
//       description: "Cohesive design elements that align with your author brand and create a professional, recognizable identity."
//     },
//     {
//       icon: <Shield className="w-12 h-12" />,
//       title: "Print-Ready Files",
//       description: "High-resolution, print-ready files with proper bleeds, margins, and specifications for professional printing."
//     },
//     {
//       icon: <Clock className="w-12 h-12" />,
//       title: "Fast Delivery",
//       description: "Quick turnaround times with multiple design concepts and unlimited revisions until you're completely satisfied."
//     }
//   ]

//   const packages = [
//     {
//       id: 'basic',
//       name: 'Basic Design',
//       price: '$399',
//       description: 'Essential design for new authors',
//       features: [
//         'Custom cover design',
//         'Basic interior formatting',
//         '3 design concepts',
//         'Print & digital formats',
//         '2 revision rounds',
//         '5-7 day turnaround'
//       ],
//       popular: false
//     },
//     {
//       id: 'professional',
//       name: 'Professional Design',
//       price: '$799',
//       description: 'Complete design solution for serious authors',
//       features: [
//         'All Basic features',
//         'Premium cover design',
//         'Advanced interior layout',
//         '5 design concepts',
//         'Custom typography',
//         'Marketing materials',
//         '5 revision rounds',
//         '3-5 day turnaround'
//       ],
//       popular: true
//     },
//     {
//       id: 'premium',
//       name: 'Premium Design',
//       price: '$1,499',
//       description: 'Luxury design package with everything',
//       features: [
//         'All Professional features',
//         'Luxury cover design',
//         'Custom illustrations',
//         'Unlimited concepts',
//         'Brand identity package',
//         'Series design consistency',
//         'Unlimited revisions',
//         '2-3 day turnaround',
//         'Dedicated designer'
//       ],
//       popular: false
//     }
//   ]

//   const testimonials = [
//     {
//       name: "Alexandra Stone",
//       book: "Midnight Reflections",
//       image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
//       rating: 5,
//       text: "The cover design is absolutely stunning! It perfectly captures the mood of my novel and has significantly increased my book sales. Professional work!"
//     },
//     {
//       name: "David Kumar",
//       book: "Digital Transformation Guide",
//       image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
//       rating: 5,
//       text: "Outstanding design work! The interior layout is clean and professional, and the cover design makes my business book stand out in the marketplace."
//     }
//   ]

//   const processSteps = [
//     {
//       step: "1",
//       title: "Design Brief",
//       description: "Share your vision, target audience, genre, and design preferences through our detailed brief questionnaire"
//     },
//     {
//       step: "2",
//       title: "Concept Creation",
//       description: "Our designers create multiple unique concepts based on your requirements and market research"
//     },
//     {
//       step: "3",
//       title: "Design Development",
//       description: "Refine your chosen concept with detailed design work, typography selection, and color refinement"
//     },
//     {
//       step: "4",
//       title: "Revision & Refinement",
//       description: "Collaborate on revisions to perfect every detail until the design exceeds your expectations"
//     },
//     {
//       step: "5",
//       title: "Final Delivery",
//       description: "Receive all final files in multiple formats ready for print and digital publishing platforms"
//     }
//   ]

//   const designTypes = [
//     {
//       title: "Fiction Covers",
//       image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&h=300&fit=crop",
//       description: "Captivating designs for novels, romance, mystery, fantasy, and sci-fi books",
//       genres: ["Romance", "Mystery", "Fantasy", "Thriller", "Literary Fiction"]
//     },
//     {
//       title: "Non-Fiction Covers",
//       image: "https://images.unsplash.com/photo-1589998059171-988d887df646?w=400&h=300&fit=crop",
//       description: "Professional designs for business, self-help, biography, and educational books",
//       genres: ["Business", "Self-Help", "Biography", "Health", "Education"]
//     },
//     {
//       title: "Children's Books",
//       image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop",
//       description: "Colorful, engaging designs that appeal to young readers and parents",
//       genres: ["Picture Books", "Middle Grade", "Young Adult", "Educational"]
//     },
//     {
//       title: "Specialty Books",
//       image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400&h=300&fit=crop",
//       description: "Unique designs for cookbooks, art books, poetry, and specialty publications",
//       genres: ["Cookbooks", "Art Books", "Poetry", "Photography", "Journals"]
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
//         <div className="absolute inset-0 bg-gradient-to-br from-pink-50 to-purple-50"></div>
//         <div className="max-w-7xl mx-auto relative z-10">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//             <div>
//               <div className="inline-flex items-center space-x-2 bg-pink-100 border border-pink-200 rounded-full px-4 py-2 mb-6">
//                 <Palette className="w-4 h-4 text-pink-600" />
//                 <span className="text-pink-800 text-sm font-medium">Professional Book Design Services</span>
//               </div>
              
//               <h1 className="text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
//                 Professional book
//                 <span className="block text-pink-600">design services</span>
//               </h1>
              
//               <p className="text-xl text-slate-600 mb-8 leading-relaxed">
//                 Create stunning book covers and interior layouts that capture attention, convey your message, and drive sales across all publishing platforms.
//               </p>
              
//               <button className="group bg-gradient-to-r from-pink-600 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:shadow-xl hover:shadow-pink-500/25 transform hover:scale-105 transition-all duration-300 flex items-center space-x-3">
//                 <Palette className="w-5 h-5" />
//                 <span>Start Design Project</span>
//                 <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
//               </button>
//             </div>
            
//             <div className="relative">
//               <div className="grid grid-cols-2 gap-4">
//                 {designTypes.map((type, index) => (
//                   <div
//                     key={index}
//                     className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
//                   >
//                     <img
//                       src={type.image}
//                       alt={type.title}
//                       className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
//                     />
//                     <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
//                     <div className="absolute bottom-4 left-4 right-4">
//                       <h3 className="text-white font-bold text-lg mb-1">{type.title}</h3>
//                       <p className="text-pink-200 text-sm">{type.description}</p>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//               <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-pink-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
//                 Award-Winning Designs
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
//               Everything your book design needs:
//             </h2>
//             <p className="text-xl text-slate-600">Comprehensive design services for every genre and format</p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {features.map((feature, index) => (
//               <div
//                 key={index}
//                 className="group p-8 bg-gradient-to-br from-slate-50 to-white border border-slate-200 rounded-2xl hover:shadow-xl hover:shadow-pink-500/10 transition-all duration-500 transform hover:scale-105"
//               >
//                 <div className="text-pink-600 mb-6 group-hover:scale-110 transition-transform duration-300">
//                   {feature.icon}
//                 </div>
//                 <h3 className="text-xl font-bold text-slate-900 mb-4">{feature.title}</h3>
//                 <p className="text-slate-600 leading-relaxed">{feature.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Design Showcase */}
//       <section className="py-20 px-4 bg-gradient-to-br from-slate-50 to-pink-50">
//         <div className="max-w-7xl mx-auto">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl font-bold text-slate-900 mb-4">Our Design Specialties</h2>
//             <p className="text-xl text-slate-600">Expert designs for every book genre and publishing format</p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//             {designTypes.map((type, index) => (
//               <div
//                 key={index}
//                 className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
//               >
//                 <div className="relative h-64 overflow-hidden">
//                   <img
//                     src={type.image}
//                     alt={type.title}
//                     className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
//                   <div className="absolute bottom-4 left-4 right-4">
//                     <h3 className="text-white font-bold text-2xl mb-2">{type.title}</h3>
//                     <p className="text-pink-200">{type.description}</p>
//                   </div>
//                 </div>
//                 <div className="p-6">
//                   <h4 className="font-semibold text-slate-900 mb-3">Popular Genres:</h4>
//                   <div className="flex flex-wrap gap-2">
//                     {type.genres.map((genre, genreIndex) => (
//                       <span
//                         key={genreIndex}
//                         className="px-3 py-1 bg-pink-100 text-pink-700 rounded-full text-sm font-medium"
//                       >
//                         {genre}
//                       </span>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Process Section */}
//       <section className="py-20 px-4 bg-white">
//         <div className="max-w-7xl mx-auto">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl font-bold text-slate-900 mb-4">Our Book Design Process</h2>
//             <p className="text-xl text-slate-600">From concept to completion in 5 collaborative steps</p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
//             {processSteps.map((step, index) => (
//               <div key={index} className="text-center">
//                 <div className="relative mb-6">
//                   <div className="w-16 h-16 bg-gradient-to-r from-pink-600 to-purple-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto shadow-lg">
//                     {step.step}
//                   </div>
//                   {index < processSteps.length - 1 && (
//                     <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-pink-300 to-purple-300"></div>
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
//       <section className="py-20 px-4 bg-gradient-to-br from-slate-50 to-pink-50">
//         <div className="max-w-7xl mx-auto">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl font-bold text-slate-900 mb-4">Choose Your Design Package</h2>
//             <p className="text-xl text-slate-600">Professional book design solutions for every budget and vision</p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {packages.map((pkg) => (
//               <div
//                 key={pkg.id}
//                 className={`relative p-8 rounded-2xl border-2 transition-all duration-300 transform hover:scale-105 ${
//                   pkg.popular
//                     ? 'border-pink-500 bg-gradient-to-br from-pink-50 to-purple-50 shadow-xl'
//                     : 'border-slate-200 bg-white hover:border-pink-300 hover:shadow-lg'
//                 }`}
//               >
//                 {pkg.popular && (
//                   <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
//                     <span className="bg-gradient-to-r from-pink-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
//                       Most Popular
//                     </span>
//                   </div>
//                 )}

//                 <div className="text-center mb-8">
//                   <h3 className="text-2xl font-bold text-slate-900 mb-2">{pkg.name}</h3>
//                   <p className="text-slate-600 mb-4">{pkg.description}</p>
//                   <div className="text-4xl font-bold text-pink-600 mb-2">{pkg.price}</div>
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
//                       ? 'bg-gradient-to-r from-pink-600 to-purple-600 text-white hover:shadow-lg'
//                       : 'border-2 border-pink-600 text-pink-600 hover:bg-pink-600 hover:text-white'
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
//       <section className="py-20 px-4 bg-white">
//         <div className="max-w-7xl mx-auto">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl font-bold text-slate-900 mb-4">What Our Authors Say</h2>
//             <p className="text-xl text-slate-600">Success stories from beautifully designed books</p>
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
//       <section className="py-20 px-4 bg-gradient-to-r from-pink-600 to-purple-600 relative overflow-hidden">
//         <div className="absolute inset-0 bg-black/10"></div>
//         <div className="max-w-5xl mx-auto text-center relative z-10">
//           <h2 className="text-5xl font-bold text-white mb-8 leading-tight">
//             Ready to Design Your
//             <span className="block text-pink-200">Stunning Book?</span>
//           </h2>
          
//           <p className="text-xl text-pink-100 mb-12 max-w-3xl mx-auto leading-relaxed">
//             Create a book design that stands out in the marketplace and captures your readers' attention from the very first glance.
//           </p>
          
//           <div className="flex flex-col sm:flex-row gap-6 justify-center">
//             <button className="group bg-white text-pink-600 px-10 py-4 rounded-lg text-lg font-bold hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-3">
//               <Palette className="w-5 h-5" />
//               <span>Start Design Project</span>
//               <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
//             </button>
//             <button className="group border-2 border-white text-white px-10 py-4 rounded-lg text-lg font-bold hover:bg-white hover:text-pink-600 transition-all duration-300 flex items-center justify-center space-x-3">
//               <Image className="w-5 h-5" />
//               <span>View Design Portfolio</span>
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

// export default BookDesignPage



import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ArrowLeft, BookOpen, Sparkles, Check, Star, MessageCircle, Palette, Image, Layout, Brush, ArrowRight, Zap, Shield, Clock, Award } from 'lucide-react'

const BookDesignPage = () => {
  const navigate = useNavigate()
  const [selectedPackage, setSelectedPackage] = useState('professional')

  const features = [
    {
      icon: <Palette className="w-12 h-12" />,
      title: "Custom Cover Design",
      description: "Unique, eye-catching book covers designed specifically for your genre and target audience to maximize sales appeal."
    },
    {
      icon: <Layout className="w-12 h-12" />,
      title: "Interior Layout Design",
      description: "Professional interior formatting with proper typography, spacing, and layout for both print and digital versions."
    },
    {
      icon: <Image className="w-12 h-12" />,
      title: "Illustration & Graphics",
      description: "Custom illustrations, graphics, and visual elements to enhance your book's visual appeal and reader engagement."
    },
    {
      icon: <Brush className="w-12 h-12" />,
      title: "Brand Consistency",
      description: "Cohesive design elements that align with your author brand and create a professional, recognizable identity."
    },
    {
      icon: <Shield className="w-12 h-12" />,
      title: "Print-Ready Files",
      description: "High-resolution, print-ready files with proper bleeds, margins, and specifications for professional printing."
    },
    {
      icon: <Clock className="w-12 h-12" />,
      title: "Fast Delivery",
      description: "Quick turnaround times with multiple design concepts and unlimited revisions until you're completely satisfied."
    }
  ]

  const packages = [
    {
      id: 'basic',
      name: 'Basic Design',
      price: '$399',
      description: 'Essential design for new authors',
      features: [
        'Custom cover design',
        'Basic interior formatting',
        '3 design concepts',
        'Print & digital formats',
        '2 revision rounds',
        '5-7 day turnaround'
      ],
      popular: false
    },
    {
      id: 'professional',
      name: 'Professional Design',
      price: '$799',
      description: 'Complete design solution for serious authors',
      features: [
        'All Basic features',
        'Premium cover design',
        'Advanced interior layout',
        '5 design concepts',
        'Custom typography',
        'Marketing materials',
        '5 revision rounds',
        '3-5 day turnaround'
      ],
      popular: true
    },
    {
      id: 'premium',
      name: 'Premium Design',
      price: '$1,499',
      description: 'Luxury design package with everything',
      features: [
        'All Professional features',
        'Luxury cover design',
        'Custom illustrations',
        'Unlimited concepts',
        'Brand identity package',
        'Series design consistency',
        'Unlimited revisions',
        '2-3 day turnaround',
        'Dedicated designer'
      ],
      popular: false
    }
  ]

  const testimonials = [
    {
      name: "Alexandra Stone",
      book: "Midnight Reflections",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      text: "The cover design is absolutely stunning! It perfectly captures the mood of my novel and has significantly increased my book sales. Professional work!"
    },
    {
      name: "David Kumar",
      book: "Digital Transformation Guide",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      text: "Outstanding design work! The interior layout is clean and professional, and the cover design makes my business book stand out in the marketplace."
    }
  ]

  const processSteps = [
    {
      step: "1",
      title: "Design Brief",
      description: "Share your vision, target audience, genre, and design preferences through our detailed brief questionnaire"
    },
    {
      step: "2",
      title: "Concept Creation",
      description: "Our designers create multiple unique concepts based on your requirements and market research"
    },
    {
      step: "3",
      title: "Design Development",
      description: "Refine your chosen concept with detailed design work, typography selection, and color refinement"
    },
    {
      step: "4",
      title: "Revision & Refinement",
      description: "Collaborate on revisions to perfect every detail until the design exceeds your expectations"
    },
    {
      step: "5",
      title: "Final Delivery",
      description: "Receive all final files in multiple formats ready for print and digital publishing platforms"
    }
  ]

  const designTypes = [
    {
      title: "Fiction Covers",
      image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&h=300&fit=crop",
      description: "Captivating designs for novels, romance, mystery, fantasy, and sci-fi books",
      genres: ["Romance", "Mystery", "Fantasy", "Thriller", "Literary Fiction"]
    },
    {
      title: "Non-Fiction Covers",
      image: "https://images.unsplash.com/photo-1589998059171-988d887df646?w=400&h=300&fit=crop",
      description: "Professional designs for business, self-help, biography, and educational books",
      genres: ["Business", "Self-Help", "Biography", "Health", "Education"]
    },
    {
      title: "Children's Books",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop",
      description: "Colorful, engaging designs that appeal to young readers and parents",
      genres: ["Picture Books", "Middle Grade", "Young Adult", "Educational"]
    },
    {
      title: "Specialty Books",
      image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400&h=300&fit=crop",
      description: "Unique designs for cookbooks, art books, poetry, and specialty publications",
      genres: ["Cookbooks", "Art Books", "Poetry", "Photography", "Journals"]
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
        <div className="absolute inset-0 bg-gradient-to-br from-pink-50 to-purple-50"></div>
        
        {/* Floating Design Icons */}
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
              {i % 4 === 0 ? (
                <Palette className="w-8 h-8 text-pink-400 transform rotate-12" />
              ) : i % 4 === 1 ? (
                <Brush className="w-8 h-8 text-pink-400 transform rotate-12" />
              ) : i % 4 === 2 ? (
                <Image className="w-8 h-8 text-pink-400 transform rotate-12" />
              ) : (
                <Layout className="w-8 h-8 text-pink-400 transform rotate-12" />
              )}
            </div>
          ))}
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div data-aos="fade-right" data-aos-delay="200">
              <div className="inline-flex items-center space-x-2 bg-pink-100 border border-pink-200 rounded-full px-4 py-2 mb-6">
                <Palette className="w-4 h-4 text-pink-600" />
                <span className="text-pink-800 text-sm font-medium">Professional Book Design Services</span>
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
                Professional book
                <span className="block text-pink-600">design services</span>
              </h1>
              
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                Create stunning book covers and interior layouts that capture attention, convey your message, and drive sales across all publishing platforms.
              </p>
              
              <button className="group bg-gradient-to-r from-pink-600 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:shadow-xl hover:shadow-pink-500/25 transform hover:scale-105 transition-all duration-300 flex items-center space-x-3">
                <Palette className="w-5 h-5" />
                <span>Start Design Project</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
            
            <div className="relative" data-aos="fade-left" data-aos-delay="400">
              <div className="grid grid-cols-2 gap-4">
                {designTypes.map((type, index) => (
                  <div
                    key={index}
                    className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                  >
                    <img
                      src={type.image}
                      alt={type.title}
                      className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-white font-bold text-lg mb-1">{type.title}</h3>
                      <p className="text-pink-200 text-sm">{type.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-pink-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                Award-Winning Designs
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Everything your book design needs:
            </h2>
            <p className="text-xl text-slate-600">Comprehensive design services for every genre and format</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group p-8 bg-gradient-to-br from-slate-50 to-white border border-slate-200 rounded-2xl hover:shadow-xl hover:shadow-pink-500/10 transition-all duration-500 transform hover:scale-105"
              >
                <div className="text-pink-600 mb-6 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Design Showcase */}
      <section className="py-20 px-4 bg-gradient-to-br from-slate-50 to-pink-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Our Design Specialties</h2>
            <p className="text-xl text-slate-600">Expert designs for every book genre and publishing format</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {designTypes.map((type, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={type.image}
                    alt={type.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-white font-bold text-2xl mb-2">{type.title}</h3>
                    <p className="text-pink-200">{type.description}</p>
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="font-semibold text-slate-900 mb-3">Popular Genres:</h4>
                  <div className="flex flex-wrap gap-2">
                    {type.genres.map((genre, genreIndex) => (
                      <span
                        key={genreIndex}
                        className="px-3 py-1 bg-pink-100 text-pink-700 rounded-full text-sm font-medium"
                      >
                        {genre}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Our Book Design Process</h2>
            <p className="text-xl text-slate-600">From concept to completion in 5 collaborative steps</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-pink-600 to-purple-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto shadow-lg">
                    {step.step}
                  </div>
                  {index < processSteps.length - 1 && (
                    <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-pink-300 to-purple-300"></div>
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
      <section className="py-20 px-4 bg-gradient-to-br from-slate-50 to-pink-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Choose Your Design Package</h2>
            <p className="text-xl text-slate-600">Professional book design solutions for every budget and vision</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg) => (
              <div
                key={pkg.id}
                className={`relative p-8 rounded-2xl border-2 transition-all duration-300 transform hover:scale-105 ${
                  pkg.popular
                    ? 'border-pink-500 bg-gradient-to-br from-pink-50 to-purple-50 shadow-xl'
                    : 'border-slate-200 bg-white hover:border-pink-300 hover:shadow-lg'
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-pink-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">{pkg.name}</h3>
                  <p className="text-slate-600 mb-4">{pkg.description}</p>
                  <div className="text-4xl font-bold text-pink-600 mb-2">{pkg.price}</div>
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
                      ? 'bg-gradient-to-r from-pink-600 to-purple-600 text-white hover:shadow-lg'
                      : 'border-2 border-pink-600 text-pink-600 hover:bg-pink-600 hover:text-white'
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
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">What Our Authors Say</h2>
            <p className="text-xl text-slate-600">Success stories from beautifully designed books</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
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
      <section className="py-20 px-4 bg-gradient-to-r from-pink-600 to-purple-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <h2 className="text-5xl font-bold text-white mb-8 leading-tight">
            Ready to Design Your
            <span className="block text-pink-200">Stunning Book?</span>
          </h2>
          
          <p className="text-xl text-pink-100 mb-12 max-w-3xl mx-auto leading-relaxed">
            Create a book design that stands out in the marketplace and captures your readers' attention from the very first glance.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="group bg-white text-pink-600 px-10 py-4 rounded-lg text-lg font-bold hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-3">
              <Palette className="w-5 h-5" />
              <span>Start Design Project</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="group border-2 border-white text-white px-10 py-4 rounded-lg text-lg font-bold hover:bg-white hover:text-pink-600 transition-all duration-300 flex items-center justify-center space-x-3">
              <Image className="w-5 h-5" />
              <span>View Design Portfolio</span>
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

export default BookDesignPage