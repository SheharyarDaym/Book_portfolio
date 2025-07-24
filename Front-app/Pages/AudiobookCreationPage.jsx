// import { useState } from 'react'
// import { useNavigate } from 'react-router-dom'
// import { ArrowLeft, BookOpen, Sparkles, Check, Star, MessageCircle, Headphones, Mic, Volume2, Music, ArrowRight, Zap, Shield, Clock, Award } from 'lucide-react'

// const AudiobookCreationPage = () => {
//   const navigate = useNavigate()
//   const [selectedPackage, setSelectedPackage] = useState('professional')

//   const features = [
//     {
//       icon: <Mic className="w-12 h-12" />,
//       title: "Professional Voice Recording",
//       description: "High-quality studio recording with professional voice actors or author narration in soundproof environments."
//     },
//     {
//       icon: <Volume2 className="w-12 h-12" />,
//       title: "Audio Engineering & Mastering",
//       description: "Expert audio editing, noise reduction, and mastering to ensure crystal-clear sound quality throughout your audiobook."
//     },
//     {
//       icon: <Music className="w-12 h-12" />,
//       title: "Custom Audio Production",
//       description: "Add intro/outro music, chapter breaks, and sound effects to create an immersive listening experience."
//     },
//     {
//       icon: <Headphones className="w-12 h-12" />,
//       title: "Multi-Platform Distribution",
//       description: "Distribute your audiobook on Audible, Apple Audiobooks, Google Play Books, and other major platforms."
//     },
//     {
//       icon: <Shield className="w-12 h-12" />,
//       title: "Quality Assurance",
//       description: "Comprehensive quality checks including pronunciation verification and audio consistency throughout."
//     },
//     {
//       icon: <Clock className="w-12 h-12" />,
//       title: "Fast Production",
//       description: "Efficient production process with regular updates and milestone deliveries to meet your deadlines."
//     }
//   ]

//   const packages = [
//     {
//       id: 'basic',
//       name: 'Basic Audiobook',
//       price: '$1,999',
//       description: 'Perfect for first-time audiobook creators',
//       features: [
//         'Up to 5 hours of content',
//         'Professional narrator',
//         'Basic audio editing',
//         'MP3 format delivery',
//         '4-6 week production',
//         'Standard quality assurance'
//       ],
//       popular: false
//     },
//     {
//       id: 'professional',
//       name: 'Professional Audiobook',
//       price: '$3,999',
//       description: 'Most popular choice for serious authors',
//       features: [
//         'Up to 10 hours of content',
//         'Premium narrator selection',
//         'Advanced audio engineering',
//         'Multiple format delivery',
//         'Custom intro/outro music',
//         '3-4 week production',
//         'Enhanced quality control',
//         'Revision rounds included'
//       ],
//       popular: true
//     },
//     {
//       id: 'premium',
//       name: 'Premium Audiobook',
//       price: '$6,999',
//       description: 'Complete audiobook production',
//       features: [
//         'Unlimited content length',
//         'Celebrity narrator options',
//         'Full audio production suite',
//         'Multi-voice character work',
//         'Custom sound design',
//         '2-3 week production',
//         'Unlimited revisions',
//         'Marketing materials',
//         'Distribution assistance'
//       ],
//       popular: false
//     }
//   ]

//   const testimonials = [
//     {
//       name: "Rachel Thompson",
//       book: "The Mindful Entrepreneur",
//       image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
//       rating: 5,
//       text: "The audiobook production exceeded all my expectations! The narrator brought my words to life beautifully, and the audio quality is outstanding."
//     },
//     {
//       name: "Marcus Johnson",
//       book: "Digital Marketing Mastery",
//       image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
//       rating: 5,
//       text: "Professional service from start to finish. The team guided me through the entire process and delivered a high-quality audiobook that my audience loves."
//     }
//   ]

//   const processSteps = [
//     {
//       step: "1",
//       title: "Script Preparation",
//       description: "We review your manuscript and prepare it for audio recording with proper formatting and pronunciation guides"
//     },
//     {
//       step: "2",
//       title: "Narrator Selection",
//       description: "Choose from our roster of professional voice actors or work with us to find the perfect narrator for your book"
//     },
//     {
//       step: "3",
//       title: "Studio Recording",
//       description: "Professional recording in our state-of-the-art studios with real-time quality monitoring"
//     },
//     {
//       step: "4",
//       title: "Audio Engineering",
//       description: "Expert editing, noise reduction, and mastering to ensure consistent, high-quality audio throughout"
//     },
//     {
//       step: "5",
//       title: "Final Delivery",
//       description: "Quality assurance check and delivery in all required formats ready for distribution"
//     }
//   ]

//   const audioSamples = [
//     {
//       title: "Fiction Narration",
//       genre: "Fantasy Novel",
//       duration: "2:30",
//       description: "Dramatic character voices with immersive storytelling"
//     },
//     {
//       title: "Business Book",
//       genre: "Non-Fiction",
//       duration: "1:45",
//       description: "Clear, professional delivery perfect for educational content"
//     },
//     {
//       title: "Children's Story",
//       genre: "Children's Book",
//       duration: "3:15",
//       description: "Engaging, animated narration that captivates young listeners"
//     },
//     {
//       title: "Self-Help Guide",
//       genre: "Personal Development",
//       duration: "2:00",
//       description: "Motivational and inspiring tone for life-changing content"
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
//         <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-indigo-50"></div>
//         <div className="max-w-7xl mx-auto relative z-10">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//             <div>
//               <div className="inline-flex items-center space-x-2 bg-purple-100 border border-purple-200 rounded-full px-4 py-2 mb-6">
//                 <Headphones className="w-4 h-4 text-purple-600" />
//                 <span className="text-purple-800 text-sm font-medium">Professional Audiobook Creation</span>
//               </div>
              
//               <h1 className="text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
//                 Professional audiobook
//                 <span className="block text-purple-600">creation services</span>
//               </h1>
              
//               <p className="text-xl text-slate-600 mb-8 leading-relaxed">
//                 Transform your book into a captivating audiobook with professional narration, studio-quality recording, and expert audio production.
//               </p>
              
//               <button className="group bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:shadow-xl hover:shadow-purple-500/25 transform hover:scale-105 transition-all duration-300 flex items-center space-x-3">
//                 <Headphones className="w-5 h-5" />
//                 <span>Create Your Audiobook</span>
//                 <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
//               </button>
//             </div>
            
//             <div className="relative">
//               <div className="grid grid-cols-2 gap-4">
//                 {audioSamples.map((sample, index) => (
//                   <div
//                     key={index}
//                     className="group relative p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border border-slate-200"
//                   >
//                     <div className="flex items-center space-x-3 mb-4">
//                       <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full flex items-center justify-center">
//                         <Volume2 className="w-6 h-6 text-white" />
//                       </div>
//                       <div>
//                         <h3 className="font-bold text-slate-900">{sample.title}</h3>
//                         <p className="text-purple-600 text-sm">{sample.genre}</p>
//                       </div>
//                     </div>
//                     <p className="text-slate-600 text-sm mb-3">{sample.description}</p>
//                     <div className="flex items-center justify-between">
//                       <span className="text-slate-500 text-xs">{sample.duration}</span>
//                       <button className="text-purple-600 hover:text-purple-700 transition-colors">
//                         <Volume2 className="w-4 h-4" />
//                       </button>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//               <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-purple-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
//                 Studio Quality Audio
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
//               Everything your audiobook needs:
//             </h2>
//             <p className="text-xl text-slate-600">Professional audio production from script to distribution</p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {features.map((feature, index) => (
//               <div
//                 key={index}
//                 className="group p-8 bg-gradient-to-br from-slate-50 to-white border border-slate-200 rounded-2xl hover:shadow-xl hover:shadow-purple-500/10 transition-all duration-500 transform hover:scale-105"
//               >
//                 <div className="text-purple-600 mb-6 group-hover:scale-110 transition-transform duration-300">
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
//       <section className="py-20 px-4 bg-gradient-to-br from-slate-50 to-purple-50">
//         <div className="max-w-7xl mx-auto">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl font-bold text-slate-900 mb-4">Our Audiobook Production Process</h2>
//             <p className="text-xl text-slate-600">From manuscript to finished audiobook in 5 professional steps</p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
//             {processSteps.map((step, index) => (
//               <div key={index} className="text-center">
//                 <div className="relative mb-6">
//                   <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto shadow-lg">
//                     {step.step}
//                   </div>
//                   {index < processSteps.length - 1 && (
//                     <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-purple-300 to-indigo-300"></div>
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
//             <h2 className="text-4xl font-bold text-slate-900 mb-4">Choose Your Audiobook Package</h2>
//             <p className="text-xl text-slate-600">Professional audiobook production for every budget and scope</p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {packages.map((pkg) => (
//               <div
//                 key={pkg.id}
//                 className={`relative p-8 rounded-2xl border-2 transition-all duration-300 transform hover:scale-105 ${
//                   pkg.popular
//                     ? 'border-purple-500 bg-gradient-to-br from-purple-50 to-indigo-50 shadow-xl'
//                     : 'border-slate-200 bg-white hover:border-purple-300 hover:shadow-lg'
//                 }`}
//               >
//                 {pkg.popular && (
//                   <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
//                     <span className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
//                       Most Popular
//                     </span>
//                   </div>
//                 )}

//                 <div className="text-center mb-8">
//                   <h3 className="text-2xl font-bold text-slate-900 mb-2">{pkg.name}</h3>
//                   <p className="text-slate-600 mb-4">{pkg.description}</p>
//                   <div className="text-4xl font-bold text-purple-600 mb-2">{pkg.price}</div>
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
//                       ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white hover:shadow-lg'
//                       : 'border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white'
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
//       <section className="py-20 px-4 bg-gradient-to-br from-slate-50 to-purple-50">
//         <div className="max-w-7xl mx-auto">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl font-bold text-slate-900 mb-4">What Our Authors Say</h2>
//             <p className="text-xl text-slate-600">Success stories from audiobook creators</p>
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
//       <section className="py-20 px-4 bg-gradient-to-r from-purple-600 to-indigo-600 relative overflow-hidden">
//         <div className="absolute inset-0 bg-black/10"></div>
//         <div className="max-w-5xl mx-auto text-center relative z-10">
//           <h2 className="text-5xl font-bold text-white mb-8 leading-tight">
//             Ready to Create Your
//             <span className="block text-purple-200">Professional Audiobook?</span>
//           </h2>
          
//           <p className="text-xl text-purple-100 mb-12 max-w-3xl mx-auto leading-relaxed">
//             Join the growing number of authors reaching new audiences through the power of professional audiobook production.
//           </p>
          
//           <div className="flex flex-col sm:flex-row gap-6 justify-center">
//             <button className="group bg-white text-purple-600 px-10 py-4 rounded-lg text-lg font-bold hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-3">
//               <Headphones className="w-5 h-5" />
//               <span>Start Your Audiobook</span>
//               <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
//             </button>
//             <button className="group border-2 border-white text-white px-10 py-4 rounded-lg text-lg font-bold hover:bg-white hover:text-purple-600 transition-all duration-300 flex items-center justify-center space-x-3">
//               <Volume2 className="w-5 h-5" />
//               <span>Listen to Samples</span>
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

// export default AudiobookCreationPage


import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ArrowLeft, BookOpen, Sparkles, Check, Star, MessageCircle, Headphones, Mic, Volume2, Music, ArrowRight, Zap, Shield, Clock, Award } from 'lucide-react'

const AudiobookCreationPage = () => {
  const navigate = useNavigate()
  const [selectedPackage, setSelectedPackage] = useState('professional')

  const features = [
    {
      icon: <Mic className="w-12 h-12" />,
      title: "Professional Voice Recording",
      description: "High-quality studio recording with professional voice actors or author narration in soundproof environments."
    },
    {
      icon: <Volume2 className="w-12 h-12" />,
      title: "Audio Engineering & Mastering",
      description: "Expert audio editing, noise reduction, and mastering to ensure crystal-clear sound quality throughout your audiobook."
    },
    {
      icon: <Music className="w-12 h-12" />,
      title: "Custom Audio Production",
      description: "Add intro/outro music, chapter breaks, and sound effects to create an immersive listening experience."
    },
    {
      icon: <Headphones className="w-12 h-12" />,
      title: "Multi-Platform Distribution",
      description: "Distribute your audiobook on Audible, Apple Audiobooks, Google Play Books, and other major platforms."
    },
    {
      icon: <Shield className="w-12 h-12" />,
      title: "Quality Assurance",
      description: "Comprehensive quality checks including pronunciation verification and audio consistency throughout."
    },
    {
      icon: <Clock className="w-12 h-12" />,
      title: "Fast Production",
      description: "Efficient production process with regular updates and milestone deliveries to meet your deadlines."
    }
  ]

  const packages = [
    {
      id: 'basic',
      name: 'Basic Audiobook',
      price: '$1,999',
      description: 'Perfect for first-time audiobook creators',
      features: [
        'Up to 5 hours of content',
        'Professional narrator',
        'Basic audio editing',
        'MP3 format delivery',
        '4-6 week production',
        'Standard quality assurance'
      ],
      popular: false
    },
    {
      id: 'professional',
      name: 'Professional Audiobook',
      price: '$3,999',
      description: 'Most popular choice for serious authors',
      features: [
        'Up to 10 hours of content',
        'Premium narrator selection',
        'Advanced audio engineering',
        'Multiple format delivery',
        'Custom intro/outro music',
        '3-4 week production',
        'Enhanced quality control',
        'Revision rounds included'
      ],
      popular: true
    },
    {
      id: 'premium',
      name: 'Premium Audiobook',
      price: '$6,999',
      description: 'Complete audiobook production',
      features: [
        'Unlimited content length',
        'Celebrity narrator options',
        'Full audio production suite',
        'Multi-voice character work',
        'Custom sound design',
        '2-3 week production',
        'Unlimited revisions',
        'Marketing materials',
        'Distribution assistance'
      ],
      popular: false
    }
  ]

  const testimonials = [
    {
      name: "Rachel Thompson",
      book: "The Mindful Entrepreneur",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      text: "The audiobook production exceeded all my expectations! The narrator brought my words to life beautifully, and the audio quality is outstanding."
    },
    {
      name: "Marcus Johnson",
      book: "Digital Marketing Mastery",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      text: "Professional service from start to finish. The team guided me through the entire process and delivered a high-quality audiobook that my audience loves."
    }
  ]

  const processSteps = [
    {
      step: "1",
      title: "Script Preparation",
      description: "We review your manuscript and prepare it for audio recording with proper formatting and pronunciation guides"
    },
    {
      step: "2",
      title: "Narrator Selection",
      description: "Choose from our roster of professional voice actors or work with us to find the perfect narrator for your book"
    },
    {
      step: "3",
      title: "Studio Recording",
      description: "Professional recording in our state-of-the-art studios with real-time quality monitoring"
    },
    {
      step: "4",
      title: "Audio Engineering",
      description: "Expert editing, noise reduction, and mastering to ensure consistent, high-quality audio throughout"
    },
    {
      step: "5",
      title: "Final Delivery",
      description: "Quality assurance check and delivery in all required formats ready for distribution"
    }
  ]

  const audioSamples = [
    {
      title: "Fiction Narration",
      genre: "Fantasy Novel",
      duration: "2:30",
      description: "Dramatic character voices with immersive storytelling"
    },
    {
      title: "Business Book",
      genre: "Non-Fiction",
      duration: "1:45",
      description: "Clear, professional delivery perfect for educational content"
    },
    {
      title: "Children's Story",
      genre: "Children's Book",
      duration: "3:15",
      description: "Engaging, animated narration that captivates young listeners"
    },
    {
      title: "Self-Help Guide",
      genre: "Personal Development",
      duration: "2:00",
      description: "Motivational and inspiring tone for life-changing content"
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
      <section className="pt-32 pb-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-indigo-50"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center space-x-2 bg-purple-100 border border-purple-200 rounded-full px-4 py-2 mb-6">
                <Headphones className="w-4 h-4 text-purple-600" />
                <span className="text-purple-800 text-sm font-medium">Professional Audiobook Creation</span>
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
                Professional audiobook
                <span className="block text-purple-600">creation services</span>
              </h1>
              
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                Transform your book into a captivating audiobook with professional narration, studio-quality recording, and expert audio production.
              </p>
              
              <button className="group bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:shadow-xl hover:shadow-purple-500/25 transform hover:scale-105 transition-all duration-300 flex items-center space-x-3">
                <Headphones className="w-5 h-5" />
                <span>Create Your Audiobook</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
            
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                {audioSamples.map((sample, index) => (
                  <div
                    key={index}
                    className="group relative p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border border-slate-200"
                  >
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full flex items-center justify-center">
                        <Volume2 className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-bold text-slate-900">{sample.title}</h3>
                        <p className="text-purple-600 text-sm">{sample.genre}</p>
                      </div>
                    </div>
                    <p className="text-slate-600 text-sm mb-3">{sample.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-500 text-xs">{sample.duration}</span>
                      <button className="text-purple-600 hover:text-purple-700 transition-colors">
                        <Volume2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-purple-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                Studio Quality Audio
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
              Everything your audiobook needs:
            </h2>
            <p className="text-xl text-slate-600">Professional audio production from script to distribution</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={`${300 + index * 100}`}
                className="group p-8 bg-gradient-to-br from-slate-50 to-white border border-slate-200 rounded-2xl hover:shadow-xl hover:shadow-purple-500/10 transition-all duration-500 transform hover:scale-105"
              >
                <div className="text-purple-600 mb-6 group-hover:scale-110 transition-transform duration-300">
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
      <section className="py-20 px-4 bg-gradient-to-br from-slate-50 to-purple-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Our Audiobook Production Process</h2>
            <p className="text-xl text-slate-600">From manuscript to finished audiobook in 5 professional steps</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto shadow-lg">
                    {step.step}
                  </div>
                  {index < processSteps.length - 1 && (
                    <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-purple-300 to-indigo-300"></div>
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
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Choose Your Audiobook Package</h2>
            <p className="text-xl text-slate-600">Professional audiobook production for every budget and scope</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg) => (
              <div
                key={pkg.id}
                className={`relative p-8 rounded-2xl border-2 transition-all duration-300 transform hover:scale-105 ${
                  pkg.popular
                    ? 'border-purple-500 bg-gradient-to-br from-purple-50 to-indigo-50 shadow-xl'
                    : 'border-slate-200 bg-white hover:border-purple-300 hover:shadow-lg'
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">{pkg.name}</h3>
                  <p className="text-slate-600 mb-4">{pkg.description}</p>
                  <div className="text-4xl font-bold text-purple-600 mb-2">{pkg.price}</div>
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
                      ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white hover:shadow-lg'
                      : 'border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white'
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
      <section className="py-20 px-4 bg-gradient-to-br from-slate-50 to-purple-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">What Our Authors Say</h2>
            <p className="text-xl text-slate-600">Success stories from audiobook creators</p>
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
      <section className="py-20 px-4 bg-gradient-to-r from-purple-600 to-indigo-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <h2 className="text-5xl font-bold text-white mb-8 leading-tight">
            Ready to Create Your
            <span className="block text-purple-200">Professional Audiobook?</span>
          </h2>
          
          <p className="text-xl text-purple-100 mb-12 max-w-3xl mx-auto leading-relaxed">
            Join the growing number of authors reaching new audiences through the power of professional audiobook production.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="group bg-white text-purple-600 px-10 py-4 rounded-lg text-lg font-bold hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-3">
              <Headphones className="w-5 h-5" />
              <span>Start Your Audiobook</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="group border-2 border-white text-white px-10 py-4 rounded-lg text-lg font-bold hover:bg-white hover:text-purple-600 transition-all duration-300 flex items-center justify-center space-x-3">
              <Volume2 className="w-5 h-5" />
              <span>Listen to Samples</span>
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

export default AudiobookCreationPage