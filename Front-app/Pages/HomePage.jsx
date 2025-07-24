// import { useState, useEffect } from "react"
// import { useNavigate } from "react-router-dom"
// import { Star, Award, BookOpen, Palette, Zap, ArrowRight, Sparkles, Eye, Users, FileText, RotateCcw, ChevronLeft, ChevronRight, Book, Library, MessageCircle, Plus, Minus, Headphones, Edit, DollarSign, Printer, Tablet } from "lucide-react"

// const services = [
//   {
//     icon: <BookOpen className="w-16 h-16" />,
//     title: "eBook Formatting",
//     description: "Professional formatting that makes your content shine across all digital platforms",
//     features: [
//       "KDP eBook Formatting",
//       "Print PDF Layout",
//       "Children's Book Formatting",
//       "Complex Layout Matching",
//       "Clickable TOC / Internal Links"
//     ]
//   },
//   {
//     icon: <Palette className="w-16 h-16" />,
//     title: "Book Cover Design",
//     description: "Eye-catching covers that grab attention and drive sales in any genre",
//     features: [
//       "KDP Paperback Covers",
//       "Kindle eBook Covers",
//       "Romance Covers",
//       "Recipe Book Covers",
//       "Fantasy / Fiction Covers",
//       "Children's Book Covers",
//       "Non-Fiction Covers"
//     ]
//   },
//   {
//     icon: <Zap className="w-16 h-16" />,
//     title: "Lead Magnet Design",
//     description: "Compelling freebies that capture leads and build your audience effectively",
//     features: [
//       "PDF Checklists",
//       "Coaching Workbooks",
//       "Clickable Email Freebies",
//       "Course Materials",
//       "Interactive Designs"
//     ]
//   },
//   {
//     icon: <RotateCcw className="w-16 h-16" />,
//     title: "Conversion Services",
//     description: "Seamless format transitions that preserve quality across all platforms",
//     features: [
//       "PDF to KPF / Kindle Format",
//       "EPUB / MOBI Conversion",
//       "Layout Adjustment for Kindle",
//       "Print-to-Digital Transition"
//     ]
//   }
// ];

// const circularServices = [
//   {
//     id: 'book-printing',
//     icon: <Printer className="w-12 h-12" />,
//     title: "Book Printing",
//     path: "/book-printing"
//   },
//   {
//     id: 'ebook-publishing',
//     icon: <Tablet className="w-12 h-12" />,
//     title: "eBook Publishing",
//     path: "/ebook-publishing"
//   },
//   {
//     id: 'audiobook-creation',
//     icon: <Headphones className="w-12 h-12" />,
//     title: "Audiobook Creation",
//     path: "/audiobook-creation"
//   },
//   {
//     id: 'book-editing',
//     icon: <Edit className="w-12 h-12" />,
//     title: "Book Editing",
//     path: "/book-editing"
//   },
//   {
//     id: 'book-design',
//     icon: <Palette className="w-12 h-12" />,
//     title: "Book Design",
//     path: "/book-design"
//   },
//   {
//     id: 'sales-marketing',
//     icon: <DollarSign className="w-12 h-12" />,
//     title: "Sales & Marketing",
//     path: "/sales-marketing"
//   }
// ];

// const HomePage = () => {
//   const navigate = useNavigate()
//   const [isVisible, setIsVisible] = useState(false)
//   const [activeFilter, setActiveFilter] = useState("all")
//   const [currentSlide, setCurrentSlide] = useState(0)
//   const [heroSlide, setHeroSlide] = useState(0)
//   const [floatingSlide, setFloatingSlide] = useState(0)
//   const [infiniteSlide, setInfiniteSlide] = useState(0)
//   const [currentReview, setCurrentReview] = useState(0)
//   const [openFAQ, setOpenFAQ] = useState(null)

//   // Expanded book collection with more realistic book covers
//   const bookCollection = [
//     {
//       id: 1,
//       title: "The Ultimate Wrestling Coloring Book",
//       image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&h=600&fit=crop&crop=edges",
//       category: "Coloring Book",
//       genre: "Entertainment"
//     },
//     {
//       id: 2,
//       title: "Mudfall - Earth Hunter Jr.",
//       image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=600&fit=crop&crop=edges",
//       category: "Fantasy",
//       genre: "Fiction"
//     },
//     {
//       id: 3,
//       title: "The New Derivative",
//       image: "https://images.unsplash.com/photo-1589998059171-988d887df646?w=400&h=600&fit=crop&crop=edges",
//       category: "Business",
//       genre: "Non-Fiction"
//     },
//     {
//       id: 4,
//       title: "The Adventure of Little Feet",
//       image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=600&fit=crop&crop=edges",
//       category: "Children's",
//       genre: "Children"
//     },
//     {
//       id: 5,
//       title: "Juicing for Authentic Balance",
//       image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=600&fit=crop&crop=edges",
//       category: "Health & Wellness",
//       genre: "Lifestyle"
//     },
//     {
//       id: 6,
//       title: "Mystery of the Midnight Garden",
//       image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400&h=600&fit=crop&crop=edges",
//       category: "Mystery",
//       genre: "Fiction"
//     },
//     {
//       id: 7,
//       title: "Love in the Digital Age",
//       image: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=400&h=600&fit=crop&crop=edges",
//       category: "Romance",
//       genre: "Fiction"
//     },
//     {
//       id: 8,
//       title: "Galactic Warriors",
//       image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=600&fit=crop&crop=edges",
//       category: "Sci-Fi",
//       genre: "Fiction"
//     },
//     {
//       id: 9,
//       title: "Kitchen Mastery Guide",
//       image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=600&fit=crop&crop=edges",
//       category: "Cookbook",
//       genre: "Lifestyle"
//     },
//     {
//       id: 10,
//       title: "Mindful Meditation Practices",
//       image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=600&fit=crop&crop=edges",
//       category: "Self-Help",
//       genre: "Wellness"
//     },
//     {
//       id: 11,
//       title: "Digital Marketing Mastery",
//       image: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=400&h=600&fit=crop&crop=edges",
//       category: "Business",
//       genre: "Marketing"
//     },
//     {
//       id: 12,
//       title: "The Art of Photography",
//       image: "https://images.unsplash.com/photo-1516849841032-87cbac4d88f7?w=400&h=600&fit=crop&crop=edges",
//       category: "Art",
//       genre: "Creative"
//     },
//     {
//       id: 13,
//       title: "Healthy Living Guide",
//       image: "https://images.unsplash.com/photo-1505576399279-565b52d4ac71?w=400&h=600&fit=crop&crop=edges",
//       category: "Health",
//       genre: "Lifestyle"
//     },
//     {
//       id: 14,
//       title: "Space Adventures",
//       image: "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=400&h=600&fit=crop&crop=edges",
//       category: "Science Fiction",
//       genre: "Fiction"
//     },
//     {
//       id: 15,
//       title: "Cryptocurrency Explained",
//       image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=400&h=600&fit=crop&crop=edges",
//       category: "Finance",
//       genre: "Education"
//     },
//     {
//       id: 16,
//       title: "Modern Architecture",
//       image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=400&h=600&fit=crop&crop=edges",
//       category: "Architecture",
//       genre: "Design"
//     },
//     {
//       id: 17,
//       title: "Yoga for Beginners",
//       image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=600&fit=crop&crop=edges",
//       category: "Fitness",
//       genre: "Health"
//     },
//     {
//       id: 18,
//       title: "Travel Photography",
//       image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=400&h=600&fit=crop&crop=edges",
//       category: "Photography",
//       genre: "Travel"
//     }
//   ]

//   const portfolioItems = [
//     {
//       id: 1,
//       title: "Click Not Code",
//       category: "fantasy",
//       image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&h=600&fit=crop&crop=edges",
//       description: "Epic fantasy novel cover design with mystical elements",
//       year: "2024",
//       client: "Sarah Johnson",
//       rating: 5,
//       sales: "15,000+ copies"
//     },
//     {
//       id: 2,
//       title: "Your Ultimate Skylight Installation",
//       category: "business",
//       image: "https://images.unsplash.com/photo-1589998059171-988d887df646?w=400&h=600&fit=crop&crop=edges",
//       description: "Clean, professional design for business literature",
//       year: "2024",
//       client: "Mike Chen",
//       rating: 5,
//       sales: "8,500+ copies"
//     },
//     {
//       id: 3,
//       title: "The Reishi Sleep System",
//       category: "children",
//       image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=600&fit=crop&crop=edges",
//       description: "Colorful and playful design for young readers",
//       year: "2023",
//       client: "Emma Davis",
//       rating: 5,
//       sales: "12,000+ copies"
//     },
//     {
//       id: 4,
//       title: "Midnight in the Library",
//       category: "mystery",
//       image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400&h=600&fit=crop&crop=edges",
//       description: "Intriguing mystery novel with atmospheric design",
//       year: "2024",
//       client: "David Wilson",
//       rating: 5,
//       sales: "20,000+ copies"
//     }
//   ]

//   const categories = [
//     { id: "all", name: "All Projects", count: portfolioItems.length },
//     { id: "fantasy", name: "Fantasy", count: portfolioItems.filter((item) => item.category === "fantasy").length },
//     { id: "business", name: "Business", count: portfolioItems.filter((item) => item.category === "business").length },
//     { id: "children", name: "Children", count: portfolioItems.filter((item) => item.category === "children").length },
//     { id: "mystery", name: "Mystery", count: portfolioItems.filter((item) => item.category === "mystery").length },
//     { id: "romance", name: "Romance", count: portfolioItems.filter((item) => item.category === "romance").length },
//     { id: "sci-fi", name: "Sci-Fi", count: portfolioItems.filter((item) => item.category === "sci-fi").length },
//   ]

//   const filteredItems = activeFilter === "all" ? portfolioItems : portfolioItems.filter((item) => item.category === activeFilter)

//   const stats = [
//     { number: "500+", label: "Books Designed", icon: <BookOpen className="w-6 h-6" /> },
//     { number: "98%", label: "Client Satisfaction", icon: <Star className="w-6 h-6" /> },
//     { number: "5+", label: "Years Experience", icon: <Award className="w-6 h-6" /> },
//     { number: "50+", label: "Happy Authors", icon: <Users className="w-6 h-6" /> },
//   ]

//   const reviews = [
//     {
//       id: 1,
//       name: "Sarah Johnson",
//       title: "Author, The Mystic Chronicles",
//       image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
//       bookCover: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=300&h=450&fit=crop&crop=edges",
//       rating: 5,
//       review: "BookCraft Studio transformed my manuscript into a stunning masterpiece. Their attention to detail and creative vision exceeded all my expectations. The cover design perfectly captures the essence of my fantasy novel.",
//       project: "Fantasy Novel Design"
//     },
//     {
//       id: 2,
//       name: "Michael Chen",
//       title: "Business Author, Digital Success",
//       image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
//       bookCover: "https://images.unsplash.com/photo-1589998059171-988d887df646?w=300&h=450&fit=crop&crop=edges",
//       rating: 5,
//       review: "Professional, timely, and absolutely brilliant work. The team understood my vision immediately and delivered a cover that has significantly boosted my book sales. Highly recommended for any serious author.",
//       project: "Business Book Formatting"
//     },
//     {
//       id: 3,
//       name: "Emma Davis",
//       title: "Children's Author, Little Adventures",
//       image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
//       bookCover: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=450&fit=crop&crop=edges",
//       rating: 5,
//       review: "Working with BookCraft Studio was an absolute joy! They brought my children's book to life with vibrant colors and engaging illustrations. My young readers love the visual appeal, and parents appreciate the quality.",
//       project: "Children's Book Illustration"
//     },
//     {
//       id: 4,
//       name: "David Wilson",
//       title: "Mystery Writer, Dark Secrets",
//       image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
//       bookCover: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=300&h=450&fit=crop&crop=edges",
//       rating: 5,
//       review: "The atmospheric design they created for my mystery novel is absolutely perfect. It captures the dark, suspenseful mood I was aiming for. Sales have increased dramatically since the new cover launch.",
//       project: "Mystery Novel Cover"
//     }
//   ]

//   const faqs = [
//     {
//       question: "How long does the book design process take?",
//       answer: "Our typical turnaround time is 5-7 business days for cover design and 7-10 business days for complete formatting. Rush orders can be accommodated for an additional fee. We'll provide you with a detailed timeline based on your specific project requirements."
//     },
//     {
//       question: "Do you offer revisions if I'm not satisfied?",
//       answer: "Absolutely! We include up to 3 rounds of revisions with every project to ensure you're completely satisfied with the final result. Additional revisions can be made for a small fee. Your satisfaction is our top priority."
//     },
//     {
//       question: "What file formats do you provide?",
//       answer: "We provide all necessary formats including high-resolution print-ready PDFs, Kindle-optimized files (MOBI/KPF), EPUB for other e-readers, and source files (PSD/AI) upon request. You'll receive everything needed for both print and digital publishing."
//     },
//     {
//       question: "Can you work with my existing manuscript?",
//       answer: "Yes! We work with manuscripts in various formats including Word documents, PDFs, Google Docs, and more. Our team will review your content and recommend the best approach for formatting and design based on your genre and target audience."
//     },
//     {
//       question: "Do you offer package deals for multiple services?",
//       answer: "Yes, we offer comprehensive packages that combine cover design, formatting, and marketing materials at discounted rates. Our most popular package includes cover design, interior formatting, and basic marketing materials for a complete publishing solution."
//     },
//     {
//       question: "What makes your designs stand out from competitors?",
//       answer: "Our designs are created by experienced professionals who understand current market trends and genre expectations. We focus on creating covers that not only look beautiful but also drive sales by appealing to your target audience and standing out in crowded marketplaces."
//     }
//   ]

//   useEffect(() => {
//     setIsVisible(true)
//     document.documentElement.style.scrollBehavior = 'smooth'
    
//     // Auto-advance main slideshow
//     const mainInterval = setInterval(() => {
//       setCurrentSlide((prev) => {
//         const next = prev + 1
//         return next >= bookCollection.length ? 0 : next
//       })
//     }, 3000)

//     // Auto-advance hero slideshow
//     const heroInterval = setInterval(() => {
//       setHeroSlide((prev) => {
//         const next = prev + 1
//         return next >= bookCollection.length ? 0 : next
//       })
//     }, 2500)

//     // Auto-advance floating slideshow
//     const floatingInterval = setInterval(() => {
//       setFloatingSlide((prev) => {
//         const next = prev + 1
//         return next >= bookCollection.length ? 0 : next
//       })
//     }, 3500)

//     // Auto-advance continuous slideshow
//     const infiniteInterval = setInterval(() => {
//       setInfiniteSlide((prev) => prev + 1)
//     }, 100) // Very smooth continuous movement

//     // Auto-advance reviews
//     const reviewInterval = setInterval(() => {
//       setCurrentReview((prev) => {
//         const next = prev + 1
//         return next >= reviews.length ? 0 : next
//       })
//     }, 5000)

//     return () => {
//       document.documentElement.style.scrollBehavior = 'auto'
//       clearInterval(mainInterval)
//       clearInterval(heroInterval)
//       clearInterval(floatingInterval)
//       clearInterval(infiniteInterval)
//       clearInterval(reviewInterval)
//     }
//   }, [])

//   const handleNavClick = (e, targetId) => {
//     e.preventDefault()
//     const element = document.getElementById(targetId)
//     if (element) {
//       element.scrollIntoView({ 
//         behavior: 'smooth',
//         block: 'start',
//         inline: 'nearest'
//       })
//     }
//   }

//   const nextSlide = () => {
//     setCurrentSlide((prev) => {
//       const next = prev + 1
//       return next >= bookCollection.length ? 0 : next
//     })
//   }

//   const prevSlide = () => {
//     setCurrentSlide((prev) => {
//       const next = prev - 1
//       return next < 0 ? bookCollection.length - 1 : next
//     })
//   }

//   const handleViewWork = () => {
//     document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })
//   }

//   const handleStartProject = () => {
//     document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })
//   }

//   const nextReview = () => {
//     setCurrentReview((prev) => {
//       const next = prev + 1
//       return next >= reviews.length ? 0 : next
//     })
//   }

//   const prevReview = () => {
//     setCurrentReview((prev) => {
//       const next = prev - 1
//       return next < 0 ? reviews.length - 1 : next
//     })
//   }

//   const toggleFAQ = (index) => {
//     setOpenFAQ(openFAQ === index ? null : index)
//   }

//   const handleServiceClick = (path) => {
//     navigate(path)
//   }

//   // Floating Book Cards Component
//   const FloatingBooks = () => (
//     <div className="absolute inset-0 overflow-hidden pointer-events-none">
//       {bookCollection.slice(0, 12).map((book, index) => (
//         <div
//           key={book.id}
//           className={`absolute transition-all duration-[4000ms] transform ${
//             index % 4 === 0 ? 'animate-pulse' : 
//             index % 4 === 1 ? 'animate-bounce' : 
//             index % 4 === 2 ? 'animate-pulse' : 'animate-bounce'
//           }`}
//           style={{
//             left: `${5 + (index * 8)}%`,
//             top: `${10 + (index % 4) * 20}%`,
//             animationDelay: `${index * 0.3}s`,
//             opacity: 0.08
//           }}
//         >
//           <div className="w-8 h-12 bg-gradient-to-br from-amber-200 to-orange-300 rounded shadow-lg transform rotate-12">
//             <div className="w-full h-1 bg-amber-400 rounded-t"></div>
//           </div>
//         </div>
//       ))}
//     </div>
//   )

//   return (
//     <div 
//       className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 relative overflow-x-hidden"
//     >
//       {/* Floating Book Background */}
//       <FloatingBooks />

//       {/* Navigation */}
//       <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-xl z-50 border-b border-slate-200 shadow-sm">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex justify-between items-center h-20">
//             <div className="flex items-center space-x-3">
//               <div className="relative">
//                 <BookOpen className="w-10 h-10 text-amber-600" />
//                 <Sparkles className="w-4 h-4 text-amber-500 absolute -top-1 -right-1" />
//               </div>
//               <span className="text-2xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
//                 BookCraft Studio
//               </span>
//             </div>
//             <div className="hidden md:flex items-center space-x-8">
//               <a href="#home" onClick={(e) => handleNavClick(e, 'home')} className="text-slate-700 hover:text-amber-600 transition-colors duration-300 font-medium">Home</a>
//               <a href="#portfolio" onClick={(e) => handleNavClick(e, 'portfolio')} className="text-slate-700 hover:text-amber-600 transition-colors duration-300 font-medium">Portfolio</a>
//               <a href="#services" onClick={(e) => handleNavClick(e, 'services')} className="text-slate-700 hover:text-amber-600 transition-colors duration-300 font-medium">Services</a>
//               <a href="#about" onClick={(e) => handleNavClick(e, 'about')} className="text-slate-700 hover:text-amber-600 transition-colors duration-300 font-medium">About</a>
//             </div>
//           </div>
//         </div>
//       </nav>

//       {/* Hero Section - Content First, then Slideshow Below */}
//       <section id="home" className="pt-24 pb-20 px-4 relative overflow-hidden bg-gradient-to-br from-slate-50 to-white">
//         <div className="max-w-7xl mx-auto">
//           {/* Content Section */}
//           <div className={`text-center mb-16 transform transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}>
//             <div className="inline-flex items-center space-x-2 bg-amber-100 border border-amber-200 rounded-full px-6 py-3 mb-8">
//               <Book className="w-4 h-4 text-amber-600" />
//               <span className="text-amber-800 text-sm font-medium">Professional Book Design Services</span>
//             </div>

//             <h1 className="text-5xl lg:text-7xl font-bold text-slate-900 mb-6 leading-tight">
//               Book publishing
//               <span className="block text-4xl lg:text-5xl text-slate-600 font-normal mt-2">
//                 made beautiful
//               </span>
//             </h1>

//             <p className="text-xl text-slate-600 mb-8 leading-relaxed max-w-4xl mx-auto">
//               From stunning cover designs to professional formatting, we transform your manuscript into a masterpiece that stands out in bookstores and online markets.
//             </p>

//             <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
//               <button 
//                 onClick={handleViewWork}
//                 className="group bg-gradient-to-r from-amber-600 to-orange-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:shadow-xl hover:shadow-amber-500/25 transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-3"
//               >
//                 <Book className="w-5 h-5" />
//                 <span>Browse Our Books</span>
//                 <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
//               </button>
//               <button 
//                 onClick={handleStartProject}
//                 className="group border-2 border-slate-300 text-slate-700 px-8 py-4 rounded-lg text-lg font-semibold hover:border-amber-600 hover:text-amber-600 hover:bg-amber-50 transition-all duration-300 flex items-center justify-center space-x-3"
//               >
//                 <Library className="w-5 h-5" />
//                 <span>Learn More</span>
//               </button>
//             </div>

//             {/* Stats Grid */}
//             <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
//               {stats.map((stat, index) => (
//                 <div key={index} className="text-center p-4 bg-white/50 backdrop-blur-sm rounded-lg border border-slate-200">
//                   <div className="text-amber-600 mb-2 flex justify-center">{stat.icon}</div>
//                   <div className="text-3xl font-bold text-slate-900 mb-1">{stat.number}</div>
//                   <div className="text-slate-600 text-sm font-medium">{stat.label}</div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Main Continuous Slideshow Below Title */}
//           <div className={`transform transition-all duration-1000 delay-500 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}>
//             <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-200">
//               <div className="absolute inset-0 bg-gradient-to-br from-slate-50/50 to-amber-50/30"></div>
              
//               {/* Continuous Infinite Slideshow */}
//               <div className="relative z-10">
//                 <div className="text-center py-8 px-8">
//                   <h3 className="text-3xl font-bold text-slate-900 mb-3">Our Book Design Portfolio</h3>
//                   <p className="text-slate-600 mb-8">Continuously showcasing hundreds of professional book covers</p>
                  
//                   {/* Infinite Horizontal Scroll */}
//                   <div className="relative overflow-hidden">
//                     <div 
//                       className="flex space-x-6 transition-transform duration-100 ease-linear"
//                       style={{
//                         transform: `translateX(-${(infiniteSlide * 2) % (bookCollection.length * 200)}px)`,
//                         width: `${bookCollection.length * 400}px`
//                       }}
//                     >
//                       {/* Triple the books for seamless loop */}
//                       {[...bookCollection, ...bookCollection, ...bookCollection].map((book, index) => (
//                         <div
//                           key={`${book.id}-${Math.floor(index / bookCollection.length)}`}
//                           className="flex-shrink-0 group cursor-pointer"
//                         >
//                           <div className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 bg-white border border-slate-200">
//                             <div className="w-32 h-48 relative">
//                               <img
//                                 src={book.image}
//                                 alt={book.title}
//                                 className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
//                               />
//                               <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
//                               <div className="absolute bottom-2 left-2 right-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
//                                 <p className="text-white text-xs font-bold truncate">{book.title}</p>
//                                 <p className="text-amber-200 text-xs">{book.category}</p>
//                               </div>
//                             </div>
//                           </div>
//                         </div>
//                       ))}
//                     </div>
//                   </div>
                  
//                   {/* Second Row - Opposite Direction */}
//                   <div className="relative overflow-hidden mt-6">
//                     <div 
//                       className="flex space-x-6 transition-transform duration-100 ease-linear"
//                       style={{
//                         transform: `translateX(${(infiniteSlide * 1.5) % (bookCollection.length * 200)}px)`,
//                         width: `${bookCollection.length * 400}px`
//                       }}
//                     >
//                       {[...bookCollection.slice().reverse(), ...bookCollection.slice().reverse(), ...bookCollection.slice().reverse()].map((book, index) => (
//                         <div
//                           key={`reverse-${book.id}-${Math.floor(index / bookCollection.length)}`}
//                           className="flex-shrink-0 group cursor-pointer"
//                         >
//                           <div className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 bg-white border border-slate-200">
//                             <div className="w-28 h-42 relative">
//                               <img
//                                 src={book.image}
//                                 alt={book.title}
//                                 className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
//                               />
//                               <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
//                               <div className="absolute bottom-1 left-1 right-1 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
//                                 <p className="text-white text-xs font-bold truncate">{book.title}</p>
//                               </div>
//                             </div>
//                           </div>
//                         </div>
//                       ))}
//                     </div>
//                   </div>
                  
//                   {/* Third Row - Different Speed */}
//                   <div className="relative overflow-hidden mt-6">
//                     <div 
//                       className="flex space-x-4 transition-transform duration-100 ease-linear"
//                       style={{
//                         transform: `translateX(-${(infiniteSlide * 2.5) % (bookCollection.length * 150)}px)`,
//                         width: `${bookCollection.length * 300}px`
//                       }}
//                     >
//                       {[...bookCollection, ...bookCollection, ...bookCollection].map((book, index) => (
//                         <div
//                           key={`third-${book.id}-${Math.floor(index / bookCollection.length)}`}
//                           className="flex-shrink-0 group cursor-pointer"
//                         >
//                           <div className="relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105 bg-white border border-slate-200">
//                             <div className="w-24 h-36 relative">
//                               <img
//                                 src={book.image}
//                                 alt={book.title}
//                                 className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
//                               />
//                               <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
//                             </div>
//                           </div>
//                         </div>
//                       ))}
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Circular Services Section */}
//       <section className="py-20 px-4 bg-white">
//         <div className="max-w-7xl mx-auto">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl font-bold text-slate-900 mb-4">
//               Unlock your book's potential with our comprehensive services
//             </h2>
//             <p className="text-xl text-slate-600 mb-2">
//               <span className="italic">Everything you need</span> is all in one place:
//             </p>
//             <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-orange-400 mx-auto"></div>
//           </div>

//           <div className="grid grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
//             {circularServices.map((service, index) => (
//               <div
//                 key={service.id}
//                 onClick={() => handleServiceClick(service.path)}
//                 className="group flex flex-col items-center cursor-pointer transform hover:scale-105 transition-all duration-300"
//               >
//                 <div className="w-40 h-40 bg-gradient-to-br from-amber-50 to-orange-50 rounded-full flex items-center justify-center mb-4 border-4 border-amber-100 group-hover:border-amber-300 group-hover:shadow-xl group-hover:shadow-amber-500/20 transition-all duration-300">
//                   <div className="text-amber-600 group-hover:text-orange-600 transition-colors duration-300">
//                     {service.icon}
//                   </div>
//                 </div>
//                 <h3 className="text-lg font-semibold text-slate-900 text-center group-hover:text-amber-600 transition-colors duration-300">
//                   {service.title}
//                 </h3>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Continuous Moving Book Strip */}
//       <section className="py-12 bg-gradient-to-r from-amber-600 to-orange-600 relative overflow-hidden">
//         <div className="absolute inset-0 bg-black/10"></div>
//         <div className="relative z-10">
//           <div className="text-center mb-8">
//             <h2 className="text-3xl font-bold text-white mb-2">Infinite Book Gallery</h2>
//             <p className="text-amber-100">Endless showcase of professional book designs</p>
//           </div>
          
//           {/* Infinite Scroll Strip */}
//           <div className="relative overflow-hidden">
//             <div 
//               className="flex space-x-6 transition-transform duration-100 ease-linear"
//               style={{
//                 transform: `translateX(-${(infiniteSlide * 3) % (bookCollection.length * 200)}px)`,
//                 width: `${bookCollection.length * 400}px`
//               }}
//             >
//               {[...bookCollection, ...bookCollection, ...bookCollection].map((book, index) => (
//                 <div key={`strip-${book.id}-${Math.floor(index / bookCollection.length)}`} className="flex-shrink-0 transform hover:scale-110 transition-transform duration-300">
//                   <div className="w-24 h-36 bg-white rounded-lg shadow-xl overflow-hidden border-2 border-white/30">
//                     <img 
//                       src={book.image} 
//                       alt={book.title}
//                       className="w-full h-full object-cover"
//                     />
//                   </div>
//                   <div className="text-center mt-2">
//                     <p className="text-white text-xs font-medium truncate w-24">{book.title}</p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Book Grid Showcase */}
//       <section className="py-16 px-4 bg-white">
//         <div className="max-w-7xl mx-auto">
//           <div className="text-center mb-12">
//             <h2 className="text-4xl font-bold text-slate-900 mb-4">Book Design Gallery</h2>
//             <p className="text-xl text-slate-600">Explore hundreds of professionally designed book covers</p>
//           </div>
          
//           <div className="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-8 gap-4 mb-12">
//             {bookCollection.map((book, index) => (
//               <div
//                 key={book.id}
//                 className="group relative overflow-hidden rounded-lg bg-white border border-slate-200 hover:shadow-xl hover:shadow-amber-500/20 transition-all duration-300 transform hover:scale-105"
//               >
//                 <div className="aspect-[3/4] relative overflow-hidden">
//                   <img
//                     src={book.image}
//                     alt={book.title}
//                     className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
//                     loading="lazy"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
//                   <div className="absolute bottom-2 left-2 right-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
//                     <p className="text-white text-xs font-semibold truncate">{book.title}</p>
//                     <p className="text-amber-200 text-xs">{book.category}</p>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* View More Books Button */}
//           <div className="text-center">
//             <button 
//               onClick={handleViewWork}
//               className="group bg-gradient-to-r from-amber-600 to-orange-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:shadow-xl hover:shadow-amber-500/25 transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-3 mx-auto"
//             >
//               <Library className="w-5 h-5" />
//               <span>View Complete Portfolio</span>
//               <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
//             </button>
//           </div>
//         </div>
//       </section>

//       {/* Services Section with Book Cards */}
//       <section id="services" className="py-24 px-4 relative bg-slate-50">
//         <div className="max-w-7xl mx-auto">
//           <div className="text-center mb-20">
//             <div className="inline-flex items-center space-x-2 bg-amber-100 border border-amber-200 rounded-full px-6 py-3 mb-6">
//               <BookOpen className="w-4 h-4 text-amber-600" />
//               <span className="text-amber-800 text-sm font-medium">Book Design Services</span>
//             </div>
//             <h2 className="text-5xl font-bold text-slate-900 mb-6">What We Create for Authors</h2>
//             <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
//               Comprehensive book design solutions that transform your manuscript into a market-ready masterpiece
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//             {services.map((service, index) => (
//               <div
//                 key={index}
//                 className="group relative p-8 bg-white border border-slate-200 rounded-2xl hover:shadow-xl hover:shadow-amber-500/10 hover:border-amber-300 transition-all duration-500 transform hover:scale-105"
//               >
//                 <div className="absolute inset-0 bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
//                 {/* Sample Book Preview */}
//                 <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-40 transition-opacity duration-300">
//                   <div className="w-8 h-12 bg-gradient-to-br from-amber-200 to-orange-300 rounded shadow-lg">
//                     <div className="w-full h-1 bg-amber-400 rounded-t"></div>
//                   </div>
//                 </div>
                
//                 <div className="relative z-10">
//                   <div className="text-amber-600 mb-6 group-hover:scale-110 transition-transform duration-300 flex justify-center">
//                     {service.icon}
//                   </div>
//                   <h3 className="text-xl font-bold text-slate-900 mb-4 text-center">{service.title}</h3>
//                   <p className="text-slate-600 leading-relaxed mb-6 text-center text-sm">{service.description}</p>
//                   <div className="space-y-2">
//                     {service.features.map((feature, idx) => (
//                       <div key={idx} className="flex items-center space-x-3 text-slate-700">
//                         <Book className="w-3 h-3 text-amber-600 flex-shrink-0" />
//                         <span className="text-sm">{feature}</span>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Enhanced Portfolio Section with More Books */}
//       <section id="portfolio" className="py-24 px-4 relative bg-white">
//         <div className="max-w-7xl mx-auto">
//           <div className="text-center mb-20">
//             <div className="inline-flex items-center space-x-2 bg-amber-100 border border-amber-200 rounded-full px-6 py-3 mb-6">
//               <Library className="w-4 h-4 text-amber-600" />
//               <span className="text-amber-800 text-sm font-medium">Book Portfolio</span>
//             </div>
//             <h2 className="text-5xl font-bold text-slate-900 mb-6">Our Book Design Showcase</h2>
//             <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
//               Discover our extensive collection of book designs spanning multiple genres and publishing formats
//             </p>
//           </div>

//           {/* Filter Buttons */}
//           <div className="flex flex-wrap justify-center gap-4 mb-16">
//             {categories.map((category) => (
//               <button
//                 key={category.id}
//                 onClick={() => setActiveFilter(category.id)}
//                 className={`px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 flex items-center space-x-2 ${
//                   activeFilter === category.id
//                     ? "bg-gradient-to-r from-amber-600 to-orange-600 text-white shadow-lg"
//                     : "bg-white text-slate-700 border border-slate-300 hover:border-amber-600 hover:text-amber-600"
//                 }`}
//               >
//                 <Book className="w-4 h-4" />
//                 <span>{category.name} ({category.count})</span>
//               </button>
//             ))}
//           </div>

//           {/* Portfolio Grid with Book Focus */}
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
//             {filteredItems.map((item) => (
//               <div
//                 key={item.id}
//                 className="group relative overflow-hidden rounded-xl bg-white border border-slate-200 hover:shadow-xl hover:shadow-amber-500/10 transition-all duration-500 transform hover:scale-105"
//               >
//                 <div className="aspect-[3/4] relative overflow-hidden">
//                   <img
//                     src={item.image}
//                     alt={item.title}
//                     className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
//                     loading="lazy"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
//                   <div className="absolute top-4 left-4 bg-amber-600 text-white px-2 py-1 rounded text-xs font-bold">
//                     BOOK
//                   </div>
//                   <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-amber-600 px-3 py-1 rounded-full text-xs font-semibold">
//                     {item.year}
//                   </div>
//                   <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
//                     <div className="flex items-center space-x-1 mb-2">
//                       {[...Array(item.rating)].map((_, i) => (
//                         <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
//                       ))}
//                     </div>
//                     <p className="text-white text-sm font-semibold">{item.sales}</p>
//                     <p className="text-amber-200 text-xs">by {item.client}</p>
//                   </div>
//                 </div>
//                 <div className="p-6">
//                   <div className="flex items-center space-x-2 mb-3">
//                     <BookOpen className="w-4 h-4 text-amber-600" />
//                     <span className="text-xs font-semibold text-amber-600 uppercase tracking-wider">
//                       {item.category}
//                     </span>
//                   </div>
//                   <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-amber-600 transition-colors duration-300">
//                     {item.title}
//                   </h3>
//                   <p className="text-slate-600 text-sm leading-relaxed mb-3">{item.description}</p>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* Extended Book Collection Display */}
//           <div className="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-8 gap-4">
//             {bookCollection.map((book, index) => (
//               <div
//                 key={book.id}
//                 className="group relative overflow-hidden rounded-lg bg-white border border-slate-200 hover:shadow-lg hover:shadow-amber-500/20 transition-all duration-300 transform hover:scale-105"
//               >
//                 <div className="aspect-[3/4] relative overflow-hidden">
//                   <img
//                     src={book.image}
//                     alt={book.title}
//                     className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
//                     loading="lazy"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
//                   <div className="absolute bottom-2 left-2 right-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
//                     <p className="text-white text-xs font-semibold truncate">{book.title}</p>
//                     <p className="text-amber-200 text-xs">{book.category}</p>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Client Reviews Section */}
//       <section className="py-20 px-4 bg-gradient-to-br from-slate-50 to-white">
//         <div className="max-w-7xl mx-auto">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl font-bold text-slate-900 mb-4">Your success is our top priority</h2>
//             <p className="text-xl text-slate-600">What our clients say about working with us</p>
//           </div>

//           <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-200 p-8 lg:p-12">
//             <div className="flex flex-col lg:flex-row items-center gap-12">
//               {/* Book Cover Display */}
//               <div className="flex-shrink-0">
//                 <div className="relative">
//                   <img
//                     src={reviews[currentReview].bookCover}
//                     alt="Book Cover"
//                     className="w-64 h-96 object-cover rounded-xl shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500"
//                   />
//                   <div className="absolute -bottom-4 -right-4 bg-amber-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
//                     Featured Work
//                   </div>
//                 </div>
//               </div>

//               {/* Review Content */}
//               <div className="flex-1 text-center lg:text-left">
//                 <div className="flex items-center justify-center lg:justify-start space-x-1 mb-6">
//                   {[...Array(reviews[currentReview].rating)].map((_, i) => (
//                     <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
//                   ))}
//                 </div>

//                 <blockquote className="text-xl lg:text-2xl text-slate-700 leading-relaxed mb-8 italic">
//                   "{reviews[currentReview].review}"
//                 </blockquote>

//                 <div className="flex items-center justify-center lg:justify-start space-x-4">
//                   <img
//                     src={reviews[currentReview].image}
//                     alt={reviews[currentReview].name}
//                     className="w-16 h-16 rounded-full object-cover border-4 border-amber-200"
//                   />
//                   <div>
//                     <h4 className="text-lg font-bold text-slate-900">{reviews[currentReview].name}</h4>
//                     <p className="text-slate-600">{reviews[currentReview].title}</p>
//                     <p className="text-amber-600 text-sm font-medium">{reviews[currentReview].project}</p>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Navigation */}
//             <div className="flex items-center justify-between mt-8">
//               <button
//                 onClick={prevReview}
//                 className="p-3 rounded-full bg-slate-100 hover:bg-amber-100 text-slate-600 hover:text-amber-600 transition-all duration-300"
//               >
//                 <ChevronLeft className="w-6 h-6" />
//               </button>

//               <div className="flex space-x-2">
//                 {reviews.map((_, index) => (
//                   <button
//                     key={index}
//                     onClick={() => setCurrentReview(index)}
//                     className={`w-3 h-3 rounded-full transition-all duration-300 ${
//                       index === currentReview
//                         ? 'bg-amber-600 shadow-lg shadow-amber-600/50'
//                         : 'bg-slate-300 hover:bg-slate-400'
//                     }`}
//                   />
//                 ))}
//               </div>

//               <button
//                 onClick={nextReview}
//                 className="p-3 rounded-full bg-slate-100 hover:bg-amber-100 text-slate-600 hover:text-amber-600 transition-all duration-300"
//               >
//                 <ChevronRight className="w-6 h-6" />
//               </button>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* FAQ Section */}
//       <section className="py-20 px-4 bg-white">
//         <div className="max-w-4xl mx-auto">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
//             <p className="text-xl text-slate-600">Everything you need to know about our book design services</p>
//           </div>

//           <div className="space-y-4">
//             {faqs.map((faq, index) => (
//               <div
//                 key={index}
//                 className="bg-white border border-slate-200 rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
//               >
//                 <button
//                   onClick={() => toggleFAQ(index)}
//                   className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-slate-50 transition-colors duration-300"
//                 >
//                   <h3 className="text-lg font-semibold text-slate-900 pr-4">{faq.question}</h3>
//                   <div className="flex-shrink-0">
//                     {openFAQ === index ? (
//                       <Minus className="w-5 h-5 text-amber-600" />
//                     ) : (
//                       <Plus className="w-5 h-5 text-slate-400" />
//                     )}
//                   </div>
//                 </button>
                
//                 {openFAQ === index && (
//                   <div className="px-6 pb-6">
//                     <div className="border-t border-slate-100 pt-4">
//                       <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
//                     </div>
//                   </div>
//                 )}
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Continuous Book Carousel */}
//       <section className="py-16 bg-gradient-to-r from-slate-900 to-slate-800 relative overflow-hidden">
//         <div className="absolute inset-0">
//           <div className="absolute inset-0 bg-gradient-to-r from-amber-600/20 to-orange-600/20"></div>
//         </div>
        
//         <div className="relative z-10">
//           <div className="text-center mb-12">
//             <h2 className="text-3xl font-bold text-white mb-4 flex items-center justify-center space-x-3">
//               <Book className="w-8 h-8 text-amber-400" />
//               <span>Featured Book Collection</span>
//               <Book className="w-8 h-8 text-amber-400" />
//             </h2>
//             <p className="text-slate-300">Continuously rotating showcase of our best work</p>
//           </div>
          
//           <div className="relative">
//             <div className="flex items-center justify-center space-x-6 mb-8">
//               {[0, 1, 2, 3, 4, 5, 6].map((offset) => {
//                 const bookIndex = (currentSlide + offset) % bookCollection.length;
//                 const book = bookCollection[bookIndex];
//                 return (
//                   <div 
//                     key={book.id} 
//                     className={`transition-all duration-1000 transform ${
//                       offset === 3 
//                         ? 'scale-125 z-30 shadow-2xl' 
//                         : offset === 2 || offset === 4
//                           ? 'scale-100 z-20 opacity-80' 
//                           : offset === 1 || offset === 5
//                             ? 'scale-85 z-10 opacity-60'
//                             : 'scale-70 z-0 opacity-40'
//                     }`}
//                   >
//                     <div className="bg-white rounded-xl shadow-2xl overflow-hidden border-4 border-amber-200">
//                       <img 
//                         src={book.image} 
//                         alt={book.title}
//                         className="w-20 h-30 object-cover"
//                       />
//                     </div>
//                   </div>
//                 );
//               })}
//             </div>

//             {/* Controls */}
//             <div className="flex justify-center items-center space-x-6">
//               <button 
//                 onClick={prevSlide}
//                 className="group p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300"
//               >
//                 <ChevronLeft className="w-6 h-6 text-white group-hover:text-amber-300" />
//               </button>
              
//               <div className="text-center">
//                 <h3 className="text-xl font-bold text-white mb-1">
//                   {bookCollection[currentSlide]?.title}
//                 </h3>
//                 <span className="inline-block bg-amber-500/20 text-amber-300 px-3 py-1 rounded-full text-sm font-medium border border-amber-500/30">
//                   {bookCollection[currentSlide]?.category}
//                 </span>
//               </div>

//               <button 
//                 onClick={nextSlide}
//                 className="group p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300"
//               >
//                 <ChevronRight className="w-6 h-6 text-white group-hover:text-amber-300" />
//               </button>
//             </div>

//             {/* Progress Indicators */}
//             <div className="flex justify-center space-x-2 mt-8">
//               {bookCollection.slice(0, 10).map((_, index) => (
//                 <button
//                   key={index}
//                   onClick={() => setCurrentSlide(index)}
//                   className={`w-3 h-3 rounded-full transition-all duration-300 ${
//                     index === currentSlide % 10
//                       ? 'bg-amber-500 shadow-lg shadow-amber-500/50' 
//                       : 'bg-white/30 hover:bg-white/50'
//                   }`}
//                 />
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Enhanced CTA Section with Book Elements */}
//       <section id="about" className="py-24 px-4 relative bg-gradient-to-r from-amber-600 to-orange-600 overflow-hidden">
//         {/* Book Background Pattern */}
//         <div className="absolute inset-0 opacity-10">
//           {[...Array(25)].map((_, i) => (
//             <div
//               key={i}
//               className="absolute transform rotate-12"
//               style={{
//                 left: `${Math.random() * 100}%`,
//                 top: `${Math.random() * 100}%`,
//                 animationDelay: `${Math.random() * 2}s`
//               }}
//             >
//               <div className="w-6 h-9 bg-white rounded shadow-lg animate-pulse">
//                 <div className="w-full h-1 bg-amber-200 rounded-t"></div>
//               </div>
//             </div>
//           ))}
//         </div>

//         <div className="max-w-5xl mx-auto text-center relative z-10">
//           <div className="inline-flex items-center space-x-3 bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 mb-8">
//             <BookOpen className="w-5 h-5 text-white" />
//             <span className="text-white font-medium">Ready to Design Your Book?</span>
//             <BookOpen className="w-5 h-5 text-white" />
//           </div>

//           <h2 className="text-5xl md:text-6xl font-bold text-white mb-8 leading-tight">
//             Transform Your Story into a
//             <span className="block text-amber-200">Beautiful Book</span>
//           </h2>

//           <p className="text-xl text-amber-100 mb-12 max-w-3xl mx-auto leading-relaxed">
//             From manuscript to masterpiece - let our expert designers create a book cover and layout that captures readers' attention and drives sales in today's competitive market.
//           </p>

//           <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
//             <button 
//               onClick={handleStartProject}
//               className="group bg-white text-amber-600 px-10 py-4 rounded-lg text-lg font-bold hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-3"
//             >
//               <Book className="w-5 h-5" />
//               <span>Start Your Book Project</span>
//               <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
//             </button>
//             <button className="group border-2 border-white text-white px-10 py-4 rounded-lg text-lg font-bold hover:bg-white hover:text-amber-600 transition-all duration-300 flex items-center justify-center space-x-3">
//               <Library className="w-5 h-5" />
//               <span>View Our Book Packages</span>
//             </button>
//           </div>

//           {/* Mini Book Showcase in CTA */}
//           <div className="flex justify-center space-x-3 opacity-80">
//             {bookCollection.slice(0, 7).map((book, index) => (
//               <div
//                 key={book.id}
//                 className="w-10 h-15 bg-white rounded shadow-lg overflow-hidden transform hover:scale-110 transition-transform duration-300"
//                 style={{ animationDelay: `${index * 0.1}s` }}
//               >
//                 <img 
//                   src={book.image} 
//                   alt={book.title}
//                   className="w-full h-full object-cover"
//                 />
//               </div>
//             ))}
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
          
//           {/* Tooltip */}
//           <div className="absolute bottom-16 right-0 bg-slate-900 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 pointer-events-none">
//             Chat with us on WhatsApp
//             <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-slate-900"></div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default HomePage


























// import { useState, useEffect } from "react"
// import AOS from 'aos'
// import { useNavigate } from "react-router-dom"
// import { Star, Award, BookOpen, Palette, Zap, ArrowRight, Sparkles, Eye, Users, FileText, RotateCcw, ChevronLeft, ChevronRight, Book, Library, MessageCircle, Plus, Minus, Headphones, Edit, DollarSign, Printer, Tablet } from "lucide-react"
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';






// const services = [
//   {
//     icon: <BookOpen className="w-16 h-16" />,
//     title: "eBook Formatting",
//     description: "Professional formatting that makes your content shine across all digital platforms",
//     features: [
//       "KDP eBook Formatting",
//       "Print PDF Layout",
//       "Children's Book Formatting",
//       "Complex Layout Matching",
//       "Clickable TOC / Internal Links"
//     ]
//   },
//   {
//     icon: <Palette className="w-16 h-16" />,
//     title: "Book Cover Design",
//     description: "Eye-catching covers that grab attention and drive sales in any genre",
//     features: [
//       "KDP Paperback Covers",
//       "Kindle eBook Covers",
//       "Romance Covers",
//       "Recipe Book Covers",
//       "Fantasy / Fiction Covers",
//       "Children's Book Covers",
//       "Non-Fiction Covers"
//     ]
//   },
//   {
//     icon: <Zap className="w-16 h-16" />,
//     title: "Lead Magnet Design",
//     description: "Compelling freebies that capture leads and build your audience effectively",
//     features: [
//       "PDF Checklists",
//       "Coaching Workbooks",
//       "Clickable Email Freebies",
//       "Course Materials",
//       "Interactive Designs"
//     ]
//   },
//   {
//     icon: <RotateCcw className="w-16 h-16" />,
//     title: "Conversion Services",
//     description: "Seamless format transitions that preserve quality across all platforms",
//     features: [
//       "PDF to KPF / Kindle Format",
//       "EPUB / MOBI Conversion",
//       "Layout Adjustment for Kindle",
//       "Print-to-Digital Transition"
//     ]
//   }
// ];

// const circularServices = [
//   {
//     id: 'book-printing',
//     icon: <Printer className="w-12 h-12" />,
//     title: "Book Printing",
//     path: "/book-printing"
//   },
//   {
//     id: 'ebook-publishing',
//     icon: <Tablet className="w-12 h-12" />,
//     title: "eBook Publishing",
//     path: "/ebook-publishing"
//   },
//   {
//     id: 'audiobook-creation',
//     icon: <Headphones className="w-12 h-12" />,
//     title: "Audiobook Creation",
//     path: "/audiobook-creation"
//   },
//   {
//     id: 'book-editing',
//     icon: <Edit className="w-12 h-12" />,
//     title: "Book Editing",
//     path: "/book-editing"
//   },
//   {
//     id: 'book-design',
//     icon: <Palette className="w-12 h-12" />,
//     title: "Book Design",
//     path: "/book-design"
//   },
//   {
//     id: 'sales-marketing',
//     icon: <DollarSign className="w-12 h-12" />,
//     title: "Sales & Marketing",
//     path: "/sales-marketing"
//   }
// ];

// const HomePage = () => {
//   const navigate = useNavigate()
//   const [isVisible, setIsVisible] = useState(false)
//   const [activeFilter, setActiveFilter] = useState("all")
//   const [currentSlide, setCurrentSlide] = useState(0)
//   const [heroSlide, setHeroSlide] = useState(0)
//   const [floatingSlide, setFloatingSlide] = useState(0)
//   const [infiniteSlide, setInfiniteSlide] = useState(0)
//   const [currentReview, setCurrentReview] = useState(0)
//   const [openFAQ, setOpenFAQ] = useState(null)

//   // Expanded book collection with more realistic book covers
//   const bookCollection = [
//     {
//       id: 1,
//       title: "The Ultimate Wrestling Coloring Book",
//       image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&h=600&fit=crop&crop=edges",
//       category: "Coloring Book",
//       genre: "Entertainment"
//     },
//     {
//       id: 2,
//       title: "Mudfall - Earth Hunter Jr.",
//       image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=600&fit=crop&crop=edges",
//       category: "Fantasy",
//       genre: "Fiction"
//     },
//     {
//       id: 3,
//       title: "The New Derivative",
//       image: "https://images.unsplash.com/photo-1589998059171-988d887df646?w=400&h=600&fit=crop&crop=edges",
//       category: "Business",
//       genre: "Non-Fiction"
//     },
//     {
//       id: 4,
//       title: "The Adventure of Little Feet",
//       image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=600&fit=crop&crop=edges",
//       category: "Children's",
//       genre: "Children"
//     },
//     {
//       id: 5,
//       title: "Juicing for Authentic Balance",
//       image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=600&fit=crop&crop=edges",
//       category: "Health & Wellness",
//       genre: "Lifestyle"
//     },
//     {
//       id: 6,
//       title: "Mystery of the Midnight Garden",
//       image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400&h=600&fit=crop&crop=edges",
//       category: "Mystery",
//       genre: "Fiction"
//     },
//     {
//       id: 7,
//       title: "Love in the Digital Age",
//       image: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=400&h=600&fit=crop&crop=edges",
//       category: "Romance",
//       genre: "Fiction"
//     },
//     {
//       id: 8,
//       title: "Galactic Warriors",
//       image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=600&fit=crop&crop=edges",
//       category: "Sci-Fi",
//       genre: "Fiction"
//     },
//     {
//       id: 9,
//       title: "Kitchen Mastery Guide",
//       image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=600&fit=crop&crop=edges",
//       category: "Cookbook",
//       genre: "Lifestyle"
//     },
//     {
//       id: 10,
//       title: "Mindful Meditation Practices",
//       image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=600&fit=crop&crop=edges",
//       category: "Self-Help",
//       genre: "Wellness"
//     },
//     {
//       id: 11,
//       title: "Digital Marketing Mastery",
//       image: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=400&h=600&fit=crop&crop=edges",
//       category: "Business",
//       genre: "Marketing"
//     },
//     {
//       id: 12,
//       title: "The Art of Photography",
//       image: "https://images.unsplash.com/photo-1516849841032-87cbac4d88f7?w=400&h=600&fit=crop&crop=edges",
//       category: "Art",
//       genre: "Creative"
//     },
//     {
//       id: 13,
//       title: "Healthy Living Guide",
//       image: "https://images.unsplash.com/photo-1505576399279-565b52d4ac71?w=400&h=600&fit=crop&crop=edges",
//       category: "Health",
//       genre: "Lifestyle"
//     },
//     {
//       id: 14,
//       title: "Space Adventures",
//       image: "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=400&h=600&fit=crop&crop=edges",
//       category: "Science Fiction",
//       genre: "Fiction"
//     },
//     {
//       id: 15,
//       title: "Cryptocurrency Explained",
//       image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=400&h=600&fit=crop&crop=edges",
//       category: "Finance",
//       genre: "Education"
//     },
//     {
//       id: 16,
//       title: "Modern Architecture",
//       image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=400&h=600&fit=crop&crop=edges",
//       category: "Architecture",
//       genre: "Design"
//     },
//     {
//       id: 17,
//       title: "Yoga for Beginners",
//       image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=600&fit=crop&crop=edges",
//       category: "Fitness",
//       genre: "Health"
//     },
//     {
//       id: 18,
//       title: "Travel Photography",
//       image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=400&h=600&fit=crop&crop=edges",
//       category: "Photography",
//       genre: "Travel"
//     }
//   ]

//   const portfolioItems = [
//     {
//       id: 1,
//       title: "Click Not Code",
//       category: "fantasy",
//       image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&h=600&fit=crop&crop=edges",
//       description: "Epic fantasy novel cover design with mystical elements",
//       year: "2024",
//       client: "Sarah Johnson",
//       rating: 5,
//       sales: "15,000+ copies"
//     },
//     {
//       id: 2,
//       title: "Your Ultimate Skylight Installation",
//       category: "business",
//       image: "https://images.unsplash.com/photo-1589998059171-988d887df646?w=400&h=600&fit=crop&crop=edges",
//       description: "Clean, professional design for business literature",
//       year: "2024",
//       client: "Mike Chen",
//       rating: 5,
//       sales: "8,500+ copies"
//     },
//     {
//       id: 3,
//       title: "The Reishi Sleep System",
//       category: "children",
//       image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=600&fit=crop&crop=edges",
//       description: "Colorful and playful design for young readers",
//       year: "2023",
//       client: "Emma Davis",
//       rating: 5,
//       sales: "12,000+ copies"
//     },
//     {
//       id: 4,
//       title: "Midnight in the Library",
//       category: "mystery",
//       image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400&h=600&fit=crop&crop=edges",
//       description: "Intriguing mystery novel with atmospheric design",
//       year: "2024",
//       client: "David Wilson",
//       rating: 5,
//       sales: "20,000+ copies"
//     }
//   ]

//   const categories = [
//     { id: "all", name: "All Projects", count: portfolioItems.length },
//     { id: "fantasy", name: "Fantasy", count: portfolioItems.filter((item) => item.category === "fantasy").length },
//     { id: "business", name: "Business", count: portfolioItems.filter((item) => item.category === "business").length },
//     { id: "children", name: "Children", count: portfolioItems.filter((item) => item.category === "children").length },
//     { id: "mystery", name: "Mystery", count: portfolioItems.filter((item) => item.category === "mystery").length },
//     { id: "romance", name: "Romance", count: portfolioItems.filter((item) => item.category === "romance").length },
//     { id: "sci-fi", name: "Sci-Fi", count: portfolioItems.filter((item) => item.category === "sci-fi").length },
//   ]

//   const filteredItems = activeFilter === "all" ? portfolioItems : portfolioItems.filter((item) => item.category === activeFilter)

//   const stats = [
//     { number: "500+", label: "Books Designed", icon: <BookOpen className="w-6 h-6" /> },
//     { number: "98%", label: "Client Satisfaction", icon: <Star className="w-6 h-6" /> },
//     { number: "5+", label: "Years Experience", icon: <Award className="w-6 h-6" /> },
//     { number: "50+", label: "Happy Authors", icon: <Users className="w-6 h-6" /> },
//   ]

//   const reviews = [
//     {
//       id: 1,
//       name: "Sarah Johnson",
//       title: "Author, The Mystic Chronicles",
//       image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
//       bookCover: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=300&h=450&fit=crop&crop=edges",
//       rating: 5,
//       review: "BookCraft Studio transformed my manuscript into a stunning masterpiece. Their attention to detail and creative vision exceeded all my expectations. The cover design perfectly captures the essence of my fantasy novel.",
//       project: "Fantasy Novel Design"
//     },
//     {
//       id: 2,
//       name: "Michael Chen",
//       title: "Business Author, Digital Success",
//       image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
//       bookCover: "https://images.unsplash.com/photo-1589998059171-988d887df646?w=300&h=450&fit=crop&crop=edges",
//       rating: 5,
//       review: "Professional, timely, and absolutely brilliant work. The team understood my vision immediately and delivered a cover that has significantly boosted my book sales. Highly recommended for any serious author.",
//       project: "Business Book Formatting"
//     },
//     {
//       id: 3,
//       name: "Emma Davis",
//       title: "Children's Author, Little Adventures",
//       image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
//       bookCover: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=450&fit=crop&crop=edges",
//       rating: 5,
//       review: "Working with BookCraft Studio was an absolute joy! They brought my children's book to life with vibrant colors and engaging illustrations. My young readers love the visual appeal, and parents appreciate the quality.",
//       project: "Children's Book Illustration"
//     },
//     {
//       id: 4,
//       name: "David Wilson",
//       title: "Mystery Writer, Dark Secrets",
//       image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
//       bookCover: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=300&h=450&fit=crop&crop=edges",
//       rating: 5,
//       review: "The atmospheric design they created for my mystery novel is absolutely perfect. It captures the dark, suspenseful mood I was aiming for. Sales have increased dramatically since the new cover launch.",
//       project: "Mystery Novel Cover"
//     }
//   ]

//   const faqs = [
//     {
//       question: "How long does the book design process take?",
//       answer: "Our typical turnaround time is 5-7 business days for cover design and 7-10 business days for complete formatting. Rush orders can be accommodated for an additional fee. We'll provide you with a detailed timeline based on your specific project requirements."
//     },
//     {
//       question: "Do you offer revisions if I'm not satisfied?",
//       answer: "Absolutely! We include up to 3 rounds of revisions with every project to ensure you're completely satisfied with the final result. Additional revisions can be made for a small fee. Your satisfaction is our top priority."
//     },
//     {
//       question: "What file formats do you provide?",
//       answer: "We provide all necessary formats including high-resolution print-ready PDFs, Kindle-optimized files (MOBI/KPF), EPUB for other e-readers, and source files (PSD/AI) upon request. You'll receive everything needed for both print and digital publishing."
//     },
//     {
//       question: "Can you work with my existing manuscript?",
//       answer: "Yes! We work with manuscripts in various formats including Word documents, PDFs, Google Docs, and more. Our team will review your content and recommend the best approach for formatting and design based on your genre and target audience."
//     },
//     {
//       question: "Do you offer package deals for multiple services?",
//       answer: "Yes, we offer comprehensive packages that combine cover design, formatting, and marketing materials at discounted rates. Our most popular package includes cover design, interior formatting, and basic marketing materials for a complete publishing solution."
//     },
//     {
//       question: "What makes your designs stand out from competitors?",
//       answer: "Our designs are created by experienced professionals who understand current market trends and genre expectations. We focus on creating covers that not only look beautiful but also drive sales by appealing to your target audience and standing out in crowded marketplaces."
//     }
//   ]

//   useEffect(() => {
//     AOS.refresh()
//     setIsVisible(true)
//     document.documentElement.style.scrollBehavior = 'smooth'
    
//     // Auto-advance main slideshow
//     const mainInterval = setInterval(() => {
//       setCurrentSlide((prev) => {
//         const next = prev + 1
//         return next >= bookCollection.length ? 0 : next
//       })
//     }, 3000)

//     // Auto-advance hero slideshow
//     const heroInterval = setInterval(() => {
//       setHeroSlide((prev) => {
//         const next = prev + 1
//         return next >= bookCollection.length ? 0 : next
//       })
//     }, 2500)

//     // Auto-advance floating slideshow
//     const floatingInterval = setInterval(() => {
//       setFloatingSlide((prev) => {
//         const next = prev + 1
//         return next >= bookCollection.length ? 0 : next
//       })
//     }, 3500)

//     // Auto-advance continuous slideshow
//     const infiniteInterval = setInterval(() => {
//       setInfiniteSlide((prev) => prev + 1)
//     }, 100) // Very smooth continuous movement

//     // Auto-advance reviews
//     const reviewInterval = setInterval(() => {
//       setCurrentReview((prev) => {
//         const next = prev + 1
//         return next >= reviews.length ? 0 : next
//       })
//     }, 5000)

//     return () => {
//       document.documentElement.style.scrollBehavior = 'auto'
//       clearInterval(mainInterval)
//       clearInterval(heroInterval)
//       clearInterval(floatingInterval)
//       clearInterval(infiniteInterval)
//       clearInterval(reviewInterval)
//     }
//   }, [])

//   const handleNavClick = (e, targetId) => {
//     e.preventDefault()
//     const element = document.getElementById(targetId)
//     if (element) {
//       element.scrollIntoView({ 
//         behavior: 'smooth',
//         block: 'start',
//         inline: 'nearest'
//       })
//     }
//   }

//   const nextSlide = () => {
//     setCurrentSlide((prev) => {
//       const next = prev + 1
//       return next >= bookCollection.length ? 0 : next
//     })
//   }

//   const prevSlide = () => {
//     setCurrentSlide((prev) => {
//       const next = prev - 1
//       return next < 0 ? bookCollection.length - 1 : next
//     })
//   }

//   const handleViewWork = () => {
//     document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })
//   }

//   const handleStartProject = () => {
//     document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })
//   }

//   const nextReview = () => {
//     setCurrentReview((prev) => {
//       const next = prev + 1
//       return next >= reviews.length ? 0 : next
//     })
//   }

//   const prevReview = () => {
//     setCurrentReview((prev) => {
//       const next = prev - 1
//       return next < 0 ? reviews.length - 1 : next
//     })
//   }

//   const toggleFAQ = (index) => {
//     setOpenFAQ(openFAQ === index ? null : index)
//   }

//   const handleServiceClick = (path) => {
//     navigate(path)
//   }

//   // Floating Book Cards Component
//   const FloatingBooks = () => (
//     <div className="absolute inset-0 overflow-hidden pointer-events-none">
//       {bookCollection.slice(0, 12).map((book, index) => (
//         <div
//           key={book.id}
//           className={`absolute transition-all duration-[4000ms] transform ${
//             index % 4 === 0 ? 'animate-pulse' : 
//             index % 4 === 1 ? 'animate-bounce' : 
//             index % 4 === 2 ? 'animate-pulse' : 'animate-bounce'
//           }`}
//           style={{
//             left: `${5 + (index * 8)}%`,
//             top: `${10 + (index % 4) * 20}%`,
//             animationDelay: `${index * 0.3}s`,
//             opacity: 0.08
//           }}
//         >
//           <div className="w-8 h-12 bg-gradient-to-br from-amber-200 to-orange-300 rounded shadow-lg transform rotate-12">
//             <div className="w-full h-1 bg-amber-400 rounded-t"></div>
//           </div>
//         </div>
//       ))}
//     </div>
//   )

//   return (
    
//     <div 
//       className="min-h-screen bg-gradient-to-br from-amber-25 via-orange-25 to-yellow-25 relative overflow-x-hidden"
//     >
      
//       {/* Floating Book Background */}
//       <div className="absolute inset-0 overflow-hidden pointer-events-none">
//         {/* Animated Background Elements */}
//         <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-br from-amber-200/30 to-orange-200/30 rounded-full animate-pulse"></div>
//         <div className="absolute top-32 right-20 w-24 h-24 bg-gradient-to-br from-orange-200/20 to-yellow-200/20 rounded-full animate-bounce-slow"></div>
//         <div className="absolute bottom-20 left-20 w-40 h-40 bg-gradient-to-br from-yellow-200/25 to-amber-200/25 rounded-full animate-pulse-glow"></div>
//         <div className="absolute bottom-40 right-10 w-28 h-28 bg-gradient-to-br from-amber-200/30 to-orange-200/30 rounded-full animate-float"></div>
        
//         {/* Floating Book Icons */}
//         {bookCollection.slice(0, 15).map((book, index) => (
//           <div
//             key={book.id}
//             className={`absolute transition-all duration-[4000ms] transform animate-float`}
//             style={{
//               left: `${5 + (index * 6)}%`,
//               top: `${10 + (index % 5) * 15}%`,
//               animationDelay: `${index * 0.4}s`,
//               opacity: 0.08
//             }}
//           >
//             <div className="w-10 h-14 bg-gradient-to-br from-amber-300/40 to-orange-300/40 rounded-lg shadow-lg transform rotate-12 hover:rotate-0 transition-transform duration-500">
//               <div className="w-full h-2 bg-amber-400/60 rounded-t-lg"></div>
//               <div className="p-1">
//                 <div className="w-full h-1 bg-amber-300/40 rounded mb-1"></div>
//                 <div className="w-3/4 h-1 bg-amber-300/30 rounded mb-1"></div>
//                 <div className="w-1/2 h-1 bg-amber-300/20 rounded"></div>
//               </div>
//             </div>
//           </div>
//         ))}
        
//         {/* Floating Sparkles */}
//         {[...Array(20)].map((_, i) => (
//           <div
//             key={i}
//             className="absolute animate-pulse"
//             style={{
//               left: `${Math.random() * 100}%`,
//               top: `${Math.random() * 100}%`,
//               animationDelay: `${Math.random() * 3}s`,
//               opacity: 0.3
//             }}
//           >
//             <Sparkles className="w-4 h-4 text-amber-400 animate-spin" style={{ animationDuration: '3s' }} />
//           </div>
//         ))}
//       </div>

//       {/* Navigation */}
//       <nav className="fixed top-0 w-full bg-cream-white/95 backdrop-blur-xl z-50 border-b border-amber-200/50 shadow-sm">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex justify-between items-center h-20">
//             {/* Logo */}
//             <div className="flex items-center space-x-3">
//               <div className="relative">
//                 <BookOpen className="w-10 h-10 text-amber-600" />
//                 <Sparkles className="w-4 h-4 text-amber-500 absolute -top-1 -right-1" />
//               </div>
//               <span className="text-2xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
//                 BookCraft Studio
//               </span>
//             </div>
            
//             {/* Centered Navigation Links */}
//             <div className="hidden md:flex items-center space-x-8 absolute left-1/2 transform -translate-x-1/2">
//               <a href="#home" onClick={(e) => handleNavClick(e, 'home')} className="text-slate-700 hover:text-amber-600 transition-colors duration-300 font-medium">Home</a>
//               <a href="#portfolio" onClick={(e) => handleNavClick(e, 'portfolio')} className="text-slate-700 hover:text-amber-600 transition-colors duration-300 font-medium">Portfolio</a>
//               <a href="#services" onClick={(e) => handleNavClick(e, 'services')} className="text-slate-700 hover:text-amber-600 transition-colors duration-300 font-medium">Services</a>
//               <a href="#about" onClick={(e) => handleNavClick(e, 'about')} className="text-slate-700 hover:text-amber-600 transition-colors duration-300 font-medium">About</a>
//             </div>
            
//             {/* Contact Information */}
//             <div className="hidden lg:flex flex-col text-right text-sm">
//               <a href="https://wa.me/+923085974310" target="_blank" className="text-slate-600 hover:text-amber-600 transition-colors duration-300">
//                 Contact us
//               </a>
//               <a href="mailto:shehayrar@gmail.com"  className="text-slate-600 hover:text-amber-600 transition-colors duration-300">
//                 shehayrar@gmail.com
//               </a>
//             </div>
//           </div>
//         </div>
//       </nav>

//       {/* Hero Section - Content First, then Slideshow Below */}
//       <section id="home" className="pt-24 pb-20 px-4 relative overflow-hidden">
//         <div className="max-w-7xl mx-auto">
//           {/* Content Section */}
//           <div className={`text-center mb-16 transform transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}>
//             <h1 className="text-5xl lg:text-7xl font-bold text-slate-900 mb-6 leading-tight">
//               Book publishing
//               <span className="block text-4xl lg:text-5xl text-slate-600 font-normal mt-2">
//                 made beautiful
//               </span>
//             </h1>

//             <p className="text-xl text-slate-600 mb-8 leading-relaxed max-w-4xl mx-auto">
//               From stunning cover designs to professional formatting, we transform your manuscript into a masterpiece that stands out in bookstores and online markets.
//             </p>

//             {/* <div className="flex flex-col sm:flex-row gap-6 justify-center">
//               <button 
//                 onClick={handleStartProject}
//                 className="group bg-gradient-to-r from-amber-600 to-orange-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:shadow-xl hover:shadow-amber-500/25 transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-3"
//               >
//                 <Book className="w-5 h-5" />
//                 <span>Start Your Project</span>
//                 <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
//               </button>
//               <button 
//                 onClick={handleViewWork}
//                 className="group border-2 border-amber-600 text-amber-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-amber-600 hover:text-white transition-all duration-300 flex items-center justify-center space-x-3"
//               >
//                 <Eye className="w-5 h-5" />
//                 <span>View Our Work</span>
//               </button>
//             </div> */}
//           </div>

//           {/* Main Continuous Slideshow Below Title */}
//           <div className={`transform transition-all duration-1000 delay-500 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}>
//             {/* <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-200"> */}
//             <div className="relative bg-white rounded-1xl shadow-3xl ">
//               <div className="absolute inset-0 bg-gradient-to-br from-slate-50/50 to-amber-50/30"></div>
              
//               {/* Continuous Infinite Slideshow */}
//               {/* <div className="relative z-10">
//                 <div className="text-center py-8 px-8">
//                   <h3 className="text-3xl font-bold text-slate-900 mb-3">Our Book Design Portfolio</h3>
//                   <p className="text-slate-600 mb-8">Continuously showcasing hundreds of professional book covers</p> */}
                  
//                   {/* Infinite Horizontal Scroll */}
//                   <div className="relative overflow-hidden">
//                     <div 
//                       className="flex space-x-6 transition-transform duration-100 ease-linear"
//                       style={{
//                         transform: `translateX(-${(infiniteSlide * 2) % (bookCollection.length * 200)}px)`,
//                         width: `${bookCollection.length * 400}px`
//                       }}
//                     >
//                       {/* Triple the books for seamless loop */}
//                       {[...bookCollection, ...bookCollection, ...bookCollection].map((book, index) => (
//                         <div
//                           key={`${book.id}-${Math.floor(index / bookCollection.length)}`}
//                           className="flex-shrink-0 group cursor-pointer"
//                         >
//                           <div className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 bg-white border border-slate-200">
//                             <div className="w-32 h-48 relative">
//                               <img
//                                 src={book.image}
//                                 alt={book.title}
//                                 className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
//                               />
//                               <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
//                               <div className="absolute bottom-2 left-2 right-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
//                                 <p className="text-white text-xs font-bold truncate">{book.title}</p>
//                                 <p className="text-amber-200 text-xs">{book.category}</p>
//                               </div>
//                             </div>
//                           </div>
//                         </div>
//                       ))}
//                     {/* </div>
//                   </div> */}
                  
//                   {/* Second Row - Opposite Direction */}
//                   {/* <div className="relative overflow-hidden mt-6">
//                     <div 
//                       className="flex space-x-6 transition-transform duration-100 ease-linear"
//                       style={{
//                         transform: `translateX(${(infiniteSlide * 1.5) % (bookCollection.length * 200)}px)`,
//                         width: `${bookCollection.length * 400}px`
//                       }}
//                     >
//                       {[...bookCollection.slice().reverse(), ...bookCollection.slice().reverse(), ...bookCollection.slice().reverse()].map((book, index) => (
//                         <div
//                           key={`reverse-${book.id}-${Math.floor(index / bookCollection.length)}`}
//                           className="flex-shrink-0 group cursor-pointer"
//                         >
//                           <div className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 bg-white border border-slate-200">
//                             <div className="w-28 h-42 relative">
//                               <img
//                                 src={book.image}
//                                 alt={book.title}
//                                 className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
//                               />
//                               <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
//                               <div className="absolute bottom-1 left-1 right-1 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
//                                 <p className="text-white text-xs font-bold truncate">{book.title}</p>
//                               </div>
//                             </div>
//                           </div>
//                         </div>
//                       ))}
//                     </div>
//                   </div>
                  
//                 //   {/* Third Row - Different Speed */}
//                   {/* <div className="relative overflow-hidden mt-6">
//                     <div 
//                       className="flex space-x-4 transition-transform duration-100 ease-linear"
//                       style={{
//                         transform: `translateX(-${(infiniteSlide * 2.5) % (bookCollection.length * 150)}px)`,
//                         width: `${bookCollection.length * 300}px`
//                       }}
//                     >
//                       {[...bookCollection, ...bookCollection, ...bookCollection].map((book, index) => (
//                         <div
//                           key={`third-${book.id}-${Math.floor(index / bookCollection.length)}`}
//                           className="flex-shrink-0 group cursor-pointer"
//                         >
//                           <div className="relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105 bg-white border border-slate-200">
//                             <div className="w-24 h-36 relative">
//                               <img
//                                 src={book.image}
//                                 alt={book.title}
//                                 className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
//                               />
//                               <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
//                             </div>
//                           </div>
//                         </div>
//                       ))}
//                     </div>
//                   </div> */}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
       












































//       <div className="bg-gradient-to-br from-slate-50 to-blue-50 py-16 px-8">
//         <div className="max-w-6xl mx-auto">
//           <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">
//             CreativeHub at a glance:
//           </h2>
          
//           {/* Stats Grid */}
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
//             {/* Stat 1 */}
//             <div className="relative group">
//               <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 text-center border-2 border-transparent hover:border-purple-200">
//                 <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
//                   <span className="text-3xl font-bold text-white">12K+</span>
//                 </div>
//                 <h3 className="text-lg font-semibold text-purple-600 mb-2">Creative Projects</h3>
//                 <p className="text-gray-600 text-sm">Successfully launched</p>
//               </div>
//             </div>
            
//             {/* Stat 2 */}
//             <div className="relative group">
//               <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 text-center border-2 border-transparent hover:border-emerald-200">
//                 <div className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
//                   <span className="text-3xl font-bold text-white">4.9★</span>
//                 </div>
//                 <h3 className="text-lg font-semibold text-emerald-600 mb-2">User Rating</h3>
//                 <p className="text-gray-600 text-sm">From 2800+ reviews</p>
//               </div>
//             </div>
            
//             {/* Stat 3 */}
//             <div className="relative group">
//               <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 text-center border-2 border-transparent hover:border-orange-200">
//                 <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
//                   <span className="text-3xl font-bold text-white">95+</span>
//                 </div>
//                 <h3 className="text-lg font-semibold text-orange-600 mb-2">Countries</h3>
//                 <p className="text-gray-600 text-sm">Worldwide reach</p>
//               </div>
//             </div>
//           </div>
          
//           {/* Featured In Section */}
//           <div className="text-center">
//             <div className="inline-block bg-white rounded-full px-6 py-2 shadow-sm mb-8">
//               <span className="text-gray-500 text-sm font-medium">Featured in</span>
//             </div>
            
//             <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-60">
//               {/* TechCrunch */}
//               <div className="text-center">
//                 <div className="text-2xl font-bold text-green-600 mb-1">TechCrunch</div>
//                 <div className="text-xs text-gray-400 uppercase tracking-wider">Tech News</div>
//               </div>
              
//               {/* Wired */}
//               <div className="text-center">
//                 <div className="text-2xl font-bold text-black mb-1">WIRED</div>
//                 <div className="text-xs text-gray-400 uppercase tracking-wider">Technology</div>
//               </div>
              
//               {/* Fast Company */}
//               <div className="text-center">
//                 <div className="text-2xl font-bold text-blue-600 mb-1">Fast Company</div>
//                 <div className="text-xs text-gray-400 uppercase tracking-wider">Business</div>
//               </div>
              
//               {/* VentureBeat */}
//               <div className="text-center">
//                 <div className="text-2xl font-bold text-purple-600 mb-1">VentureBeat</div>
//                 <div className="text-xs text-gray-400 uppercase tracking-wider">Innovation</div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Circular Services Section */}
//       <section className="py-20 px-4 bg-white">
//         <div className="max-w-7xl mx-auto">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl font-bold text-slate-900 mb-4">
//               Unlock your book's potential with our comprehensive services
//             </h2>
//             <p className="text-xl text-slate-600 mb-2">
//               <span className="italic">Everything you need</span> is all in one place:
//             </p>
//             <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-orange-400 mx-auto"></div>
//           </div>

//           <div className="grid grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
//             {circularServices.map((service, index) => (
//               <div
//                 key={service.id}
//                 onClick={() => handleServiceClick(service.path)}
//                 className="group flex flex-col items-center cursor-pointer transform hover:scale-105 transition-all duration-300"
//               >
//                 <div className="w-40 h-40 bg-gradient-to-br from-amber-50 to-orange-50 rounded-full flex items-center justify-center mb-4 border-4 border-amber-100 group-hover:border-amber-300 group-hover:shadow-xl group-hover:shadow-amber-500/20 transition-all duration-300">
//                   <div className="text-amber-600 group-hover:text-orange-600 transition-colors duration-300">
//                     {service.icon}
//                   </div>
//                 </div>
//                 <h3 className="text-lg font-semibold text-slate-900 text-center group-hover:text-amber-600 transition-colors duration-300">
//                   {service.title}
//                 </h3>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Distribution Partners Section */}
//       <section className="py-20 px-4 bg-white" data-aos="fade-up">
//         <div className="max-w-7xl mx-auto">
//           <div className="text-center mb-16" data-aos="fade-up" data-aos-delay="200">
//             <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
//               Sell your book <span className="italic text-amber-600 relative">
//                 everywhere
//                 <div className="absolute bottom-0 left-0 w-full h-1 bg-amber-400 rounded"></div>
//               </span>
//             </h2>
//             <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
//               The largest worldwide print and eBook distribution network is at your fingertips
//             </p>
//           </div>

//           {/* Partner Logos */}
//           <div className="flex flex-wrap justify-center items-center gap-12 mb-12" data-aos="fade-up" data-aos-delay="400">
//             <div className="group transition-all duration-300 hover:scale-110">
//               <div className="text-4xl font-bold text-slate-600 group-hover:text-slate-900 transition-colors">
//                 BARNES&NOBLE
//               </div>
//               <div className="text-sm text-slate-500 text-center mt-1">BOOKSELLERS</div>
//             </div>
//             <div className="group transition-all duration-300 hover:scale-110">
//               <div className="text-4xl font-bold text-slate-600 group-hover:text-slate-900 transition-colors">
//                 amazon
//               </div>
//               <div className="w-16 h-0.5 bg-amber-500 mx-auto mt-1"></div>
//             </div>
//             <div className="group transition-all duration-300 hover:scale-110">
//               <div className="text-4xl font-bold text-slate-600 group-hover:text-slate-900 transition-colors flex items-center">
//                 Walmart
//                 <div className="ml-2 text-amber-500">
//                   <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
//                     <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
//                   </svg>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="text-center" data-aos="fade-up" data-aos-delay="600">
//             <button className="bg-gradient-to-r from-amber-600 to-orange-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl hover:shadow-amber-500/25 transform hover:scale-105 transition-all duration-300">
//               See all retail partners
//             </button>
//           </div>
//         </div>
//       </section>

//       {/* Trustpilot Reviews Section */}
//       <section className="py-20 px-4 bg-slate-50" data-aos="fade-up">
//         <div className="max-w-7xl mx-auto">
//           <div className="text-center mb-12" data-aos="fade-up" data-aos-delay="200">
//             {/* Trustpilot Logo and Rating */}
//             <div className="flex items-center justify-center space-x-3 mb-6">
//               <div className="flex items-center space-x-2">
//                 <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
//                   <Star className="w-5 h-5 text-white fill-current" />
//                 </div>
//                 <span className="text-2xl font-bold text-slate-900">Trustpilot</span>
//               </div>
//             </div>
            
//             {/* Star Rating */}
//             <div className="flex justify-center space-x-1 mb-4" data-aos="fade-up" data-aos-delay="300">
//               {[1, 2, 3, 4, 5].map((star) => (
//                 <div key={star} className="w-12 h-12 bg-green-500 rounded flex items-center justify-center">
//                   <Star className="w-8 h-8 text-white fill-current" />
//                 </div>
//               ))}
//             </div>
            
//             <div className="text-lg text-slate-700 mb-8" data-aos="fade-up" data-aos-delay="400">
//               <span className="font-bold">TrustScore 4.4</span> | <span className="font-bold">5,329 reviews</span>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Satisfaction Guarantee Section */}
//       <section className="py-20 px-4 bg-gradient-to-r from-amber-100 to-orange-100 relative overflow-hidden" data-aos="fade-up">
//         <div className="max-w-7xl mx-auto">
//           <div className="flex flex-col lg:flex-row items-center justify-center space-y-8 lg:space-y-0 lg:space-x-12">
//             {/* Guarantee Badge */}
//             <div className="relative" data-aos="fade-right" data-aos-delay="200">
//               <div className="w-48 h-48 bg-gradient-to-br from-amber-600 to-orange-600 rounded-full flex items-center justify-center relative transform rotate-12 hover:rotate-0 transition-transform duration-500">
//                 <div className="text-center text-white">
//                   <div className="text-4xl font-bold mb-2">100%</div>
//                   <div className="text-lg font-semibold leading-tight">
//                     SATISFACTION<br />GUARANTEE
//                   </div>
//                 </div>
//                 {/* Decorative stars */}
//                 <div className="absolute top-4 left-4">
//                   <Star className="w-4 h-4 text-amber-200 fill-current" />
//                 </div>
//                 <div className="absolute bottom-4 right-4">
//                   <Star className="w-4 h-4 text-amber-200 fill-current" />
//                 </div>
//                 <div className="absolute top-8 right-8">
//                   <Star className="w-3 h-3 text-amber-200 fill-current" />
//                 </div>
//               </div>
//             </div>
            
//             {/* Guarantee Text */}
//             <div className="text-center lg:text-left max-w-2xl" data-aos="fade-left" data-aos-delay="400">
//               <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
//                 Satisfaction guaranteed
//               </h2>
//               <p className="text-xl text-slate-700 mb-6 leading-relaxed">
//                 If you're not thrilled with our work, we'll work with you until you are.
//               </p>
//               <button className="text-slate-900 font-semibold text-lg border-b-2 border-slate-900 hover:border-amber-600 hover:text-amber-600 transition-colors duration-300">
//                 Learn more about our promise
//               </button>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Continuous Moving Book Strip */}
//       <section className="py-12 bg-gradient-to-r from-amber-600 to-orange-600 relative overflow-hidden">
//         <div className="absolute inset-0 bg-black/10"></div>
//         <div className="relative z-10">
//           <div className="text-center mb-8">
//             <h2 className="text-3xl font-bold text-white mb-2">Infinite Book Gallery</h2>
//             <p className="text-amber-100">Endless showcase of professional book designs</p>
//           </div>
          
//           {/* Infinite Scroll Strip */}
//           <div className="relative overflow-hidden">
//             <div 
//               className="flex space-x-6 transition-transform duration-100 ease-linear"
//               style={{
//                 transform: `translateX(-${(infiniteSlide * 3) % (bookCollection.length * 200)}px)`,
//                 width: `${bookCollection.length * 400}px`
//               }}
//             >
//               {[...bookCollection, ...bookCollection, ...bookCollection].map((book, index) => (
//                 <div key={`strip-${book.id}-${Math.floor(index / bookCollection.length)}`} className="flex-shrink-0 transform hover:scale-110 transition-transform duration-300">
//                   <div className="w-24 h-36 bg-white rounded-lg shadow-xl overflow-hidden border-2 border-white/30">
//                     <img 
//                       src={book.image} 
//                       alt={book.title}
//                       className="w-full h-full object-cover"
//                     />
//                   </div>
//                   <div className="text-center mt-2">
//                     <p className="text-white text-xs font-medium truncate w-24">{book.title}</p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Book Grid Showcase */}
//       <section className="py-16 px-4 bg-white">
//         <div className="max-w-7xl mx-auto">
//           <div className="text-center mb-12">
//             <h2 className="text-4xl font-bold text-slate-900 mb-4">Book Design Gallery</h2>
//             <p className="text-xl text-slate-600">Explore hundreds of professionally designed book covers</p>
//           </div>
          
//           <div className="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-8 gap-4 mb-12">
//             {bookCollection.map((book, index) => (
//               <div
//                 key={book.id}
//                 className="group relative overflow-hidden rounded-lg bg-white border border-slate-200 hover:shadow-xl hover:shadow-amber-500/20 transition-all duration-300 transform hover:scale-105"
//               >
//                 <div className="aspect-[3/4] relative overflow-hidden">
//                   <img
//                     src={book.image}
//                     alt={book.title}
//                     className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
//                     loading="lazy"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
//                   <div className="absolute bottom-2 left-2 right-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
//                     <p className="text-white text-xs font-semibold truncate">{book.title}</p>
//                     <p className="text-amber-200 text-xs">{book.category}</p>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* View More Books Button */}
//           <div className="text-center">
//             <button 
//               onClick={handleViewWork}
//               className="group bg-gradient-to-r from-amber-600 to-orange-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:shadow-xl hover:shadow-amber-500/25 transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-3 mx-auto"
//             >
//               <Library className="w-5 h-5" />
//               <span>View Complete Portfolio</span>
//               <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
//             </button>
//           </div>
//         </div>
//       </section>

//       {/* Services Section with Book Cards */}
//       <section id="services" className="py-24 px-4 relative bg-slate-50">
//         <div className="max-w-7xl mx-auto">
//           <div className="text-center mb-20">
//             <div className="inline-flex items-center space-x-2 bg-amber-100 border border-amber-200 rounded-full px-6 py-3 mb-6">
//               <BookOpen className="w-4 h-4 text-amber-600" />
//               <span className="text-amber-800 text-sm font-medium">Book Design Services</span>
//             </div>
//             <h2 className="text-5xl font-bold text-slate-900 mb-6">What We Create for Authors</h2>
//             <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
//               Comprehensive book design solutions that transform your manuscript into a market-ready masterpiece
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//             {services.map((service, index) => (
//               <div
//                 key={index}
//                 className="group relative p-8 bg-white border border-slate-200 rounded-2xl hover:shadow-xl hover:shadow-amber-500/10 hover:border-amber-300 transition-all duration-500 transform hover:scale-105"
//               >
//                 <div className="absolute inset-0 bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
//                 {/* Sample Book Preview */}
//                 <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-40 transition-opacity duration-300">
//                   <div className="w-8 h-12 bg-gradient-to-br from-amber-200 to-orange-300 rounded shadow-lg">
//                     <div className="w-full h-1 bg-amber-400 rounded-t"></div>
//                   </div>
//                 </div>
                
//                 <div className="relative z-10">
//                   <div className="text-amber-600 mb-6 group-hover:scale-110 transition-transform duration-300 flex justify-center">
//                     {service.icon}
//                   </div>
//                   <h3 className="text-xl font-bold text-slate-900 mb-4 text-center">{service.title}</h3>
//                   <p className="text-slate-600 leading-relaxed mb-6 text-center text-sm">{service.description}</p>
//                   <div className="space-y-2">
//                     {service.features.map((feature, idx) => (
//                       <div key={idx} className="flex items-center space-x-3 text-slate-700">
//                         <Book className="w-3 h-3 text-amber-600 flex-shrink-0" />
//                         <span className="text-sm">{feature}</span>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Enhanced Portfolio Section with More Books */}
//       <section id="portfolio" className="py-24 px-4 relative bg-gradient-to-br from-slate-50 to-white">
//         <div className="max-w-7xl mx-auto">
//           <div className="text-center mb-20" data-aos="fade-up">
//             <div className="inline-flex items-center space-x-2 bg-amber-100 border border-amber-200 rounded-full px-6 py-3 mb-6">
//               <Library className="w-4 h-4 text-amber-600" />
//               <span className="text-amber-800 text-sm font-medium">Book Portfolio</span>
//             </div>
//             <h2 className="text-5xl font-bold text-slate-900 mb-6">
//               Our <span className="text-amber-600">Award-Winning</span> Book Designs
//             </h2>
//             <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
//               Discover our extensive collection of professionally designed books that have helped authors achieve bestseller status
//             </p>
//           </div>

//           {/* Filter Buttons */}
          

//           {/* Featured Portfolio Items */}
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16" data-aos="fade-up" data-aos-delay="400">
//             {filteredItems.map((item) => (
//               <div
//                 key={item.id}
//                 className="group relative overflow-hidden rounded-2xl bg-white border border-slate-200 hover:shadow-2xl hover:shadow-amber-500/20 transition-all duration-500 transform hover:scale-105"
//               >
//                 <div className="aspect-[3/4] relative overflow-hidden rounded-t-2xl">
//                   <img
//                     src={item.image}
//                     alt={item.title}
//                     className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-1"
//                     loading="lazy"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
//                   {/* Floating badges */}
//                   <div className="absolute top-4 left-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
//                     BESTSELLER
//                   </div>
//                   <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm text-amber-600 px-3 py-1 rounded-full text-xs font-semibold shadow-lg">
//                     {item.year}
//                   </div>
                  
//                   {/* Hover overlay with stats */}
//                   <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
//                     <div className="bg-white/95 backdrop-blur-sm rounded-lg p-3">
//                       <div className="flex items-center justify-between text-sm">
//                         <div className="flex items-center space-x-1">
//                           <Star className="w-4 h-4 text-yellow-400 fill-current" />
//                           <span className="font-semibold">4.8</span>
//                         </div>
//                         <div className="text-slate-600">
//                           <Eye className="w-4 h-4 inline mr-1" />
//                           2.3k views
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
                
//                 <div className="p-6">
//                   <div className="flex items-center space-x-2 mb-3">
//                     <BookOpen className="w-4 h-4 text-amber-600" />
//                     <span className="text-xs font-semibold text-amber-600 uppercase tracking-wider">
//                       {item.category}
//                     </span>
//                   </div>
//                   <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-amber-600 transition-colors duration-300">
//                     {item.title}
//                   </h3>
//                   <p className="text-slate-600 text-sm leading-relaxed mb-4">{item.description}</p>
                  
//                   {/* Action button */}
//                   <button className="w-full bg-gradient-to-r from-amber-600 to-orange-600 text-white py-2 rounded-lg text-sm font-semibold opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 hover:shadow-lg">
//                     View Details
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* Book Collection Masonry Grid */}
//           <div className="text-center mb-8" data-aos="fade-up" data-aos-delay="600">
//             <h3 className="text-2xl font-bold text-slate-900 mb-4">Complete Book Collection</h3>
//             <p className="text-slate-600">Over 500+ professionally designed books across all genres</p>
//           </div>
          
//           <div className="columns-2 md:columns-4 lg:columns-6 gap-4 space-y-4" data-aos="fade-up" data-aos-delay="800">
//             {bookCollection.map((book, index) => (
//               <div
//                 key={book.id}
//                 className="group relative overflow-hidden rounded-xl bg-white border border-slate-200 hover:shadow-xl hover:shadow-amber-500/20 transition-all duration-300 transform hover:scale-105 break-inside-avoid mb-4"
//               >
//                 <div className="relative overflow-hidden">
//                   <img
//                     src={book.image}
//                     alt={book.title}
//                     className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
//                     loading="lazy"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
//                   {/* Book info overlay */}
//                   <div className="absolute bottom-0 left-0 right-0 p-3 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
//                     <h4 className="text-white text-sm font-semibold truncate mb-1">{book.title}</h4>
//                     <div className="flex items-center justify-between">
//                       <span className="text-amber-200 text-xs font-medium">{book.category}</span>
//                       <div className="flex items-center space-x-1">
//                         <Star className="w-3 h-3 text-yellow-400 fill-current" />
//                         <span className="text-white text-xs">4.{Math.floor(Math.random() * 9) + 1}</span>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
          
//           {/* View More Button */}
//           <div className="text-center mt-12" data-aos="fade-up" data-aos-delay="1000">
//             <button className="group bg-gradient-to-r from-amber-600 to-orange-600 text-white px-10 py-4 rounded-full text-lg font-semibold hover:shadow-xl hover:shadow-amber-500/25 transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-3 mx-auto">
//               <Library className="w-5 h-5" />
//               <span>Explore Complete Portfolio</span>
//               <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
//             </button>
//           </div>
//         </div>
//       </section>

//       {/* Client Reviews Section */}
//       <section className="py-20 px-4 bg-gradient-to-br from-slate-50 to-white">
//         <div className="max-w-7xl mx-auto">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl font-bold text-slate-900 mb-4">Your success is our top priority</h2>
//             <p className="text-xl text-slate-600">What our clients say about working with us</p>
//           </div>

//           <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-200 p-8 lg:p-12">
//             <div className="flex flex-col lg:flex-row items-center gap-12">
//               {/* Book Cover Display */}
//               <div className="flex-shrink-0">
//                 <div className="relative">
//                   <img
//                     src={reviews[currentReview].bookCover}
//                     alt="Book Cover"
//                     className="w-64 h-96 object-cover rounded-xl shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500"
//                   />
//                   <div className="absolute -bottom-4 -right-4 bg-amber-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
//                     Featured Work
//                   </div>
//                 </div>
//               </div>

//               {/* Review Content */}
//               <div className="flex-1 text-center lg:text-left">
//                 <div className="flex items-center justify-center lg:justify-start space-x-1 mb-6">
//                   {[...Array(reviews[currentReview].rating)].map((_, i) => (
//                     <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
//                   ))}
//                 </div>

//                 <blockquote className="text-xl lg:text-2xl text-slate-700 leading-relaxed mb-8 italic">
//                   "{reviews[currentReview].review}"
//                 </blockquote>

//                 <div className="flex items-center justify-center lg:justify-start space-x-4">
//                   <img
//                     src={reviews[currentReview].image}
//                     alt={reviews[currentReview].name}
//                     className="w-16 h-16 rounded-full object-cover border-4 border-amber-200"
//                   />
//                   <div>
//                     <h4 className="text-lg font-bold text-slate-900">{reviews[currentReview].name}</h4>
//                     <p className="text-slate-600">{reviews[currentReview].title}</p>
//                     <p className="text-amber-600 text-sm font-medium">{reviews[currentReview].project}</p>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Navigation */}
//             <div className="flex items-center justify-between mt-8">
//               <button
//                 onClick={prevReview}
//                 className="p-3 rounded-full bg-slate-100 hover:bg-amber-100 text-slate-600 hover:text-amber-600 transition-all duration-300"
//               >
//                 <ChevronLeft className="w-6 h-6" />
//               </button>

//               <div className="flex space-x-2">
//                 {reviews.map((_, index) => (
//                   <button
//                     key={index}
//                     onClick={() => setCurrentReview(index)}
//                     className={`w-3 h-3 rounded-full transition-all duration-300 ${
//                       index === currentReview
//                         ? 'bg-amber-600 shadow-lg shadow-amber-600/50'
//                         : 'bg-slate-300 hover:bg-slate-400'
//                     }`}
//                   />
//                 ))}
//               </div>

//               <button
//                 onClick={nextReview}
//                 className="p-3 rounded-full bg-slate-100 hover:bg-amber-100 text-slate-600 hover:text-amber-600 transition-all duration-300"
//               >
//                 <ChevronRight className="w-6 h-6" />
//               </button>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* FAQ Section */}
//       <section className="py-20 px-4 bg-white">
//         <div className="max-w-4xl mx-auto">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
//             <p className="text-xl text-slate-600">Everything you need to know about our book design services</p>
//           </div>

//           <div className="space-y-4">
//             {faqs.map((faq, index) => (
//               <div
//                 key={index}
//                 className="bg-white border border-slate-200 rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
//               >
//                 <button
//                   onClick={() => toggleFAQ(index)}
//                   className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-slate-50 transition-colors duration-300"
//                 >
//                   <h3 className="text-lg font-semibold text-slate-900 pr-4">{faq.question}</h3>
//                   <div className="flex-shrink-0">
//                     {openFAQ === index ? (
//                       <Minus className="w-5 h-5 text-amber-600" />
//                     ) : (
//                       <Plus className="w-5 h-5 text-slate-400" />
//                     )}
//                   </div>
//                 </button>
                
//                 {openFAQ === index && (
//                   <div className="px-6 pb-6">
//                     <div className="border-t border-slate-100 pt-4">
//                       <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
//                     </div>
//                   </div>
//                 )}
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Interactive Book Showcase */}
//       <section className="py-24 px-4 bg-gradient-to-br from-slate-900 to-slate-800 relative overflow-hidden" data-aos="fade-up">
//         <div className="absolute inset-0">
//           <div className="absolute inset-0 bg-gradient-to-r from-amber-600/20 to-orange-600/20"></div>
//           {/* Animated Background Elements */}
//           {[...Array(10)].map((_, i) => (
//             <div
//               key={i}
//               className="absolute animate-float"
//               style={{
//                 left: `${Math.random() * 100}%`,
//                 top: `${Math.random() * 100}%`,
//                 animationDelay: `${Math.random() * 3}s`,
//                 opacity: 0.1
//               }}
//             >
//               <div className="w-16 h-24 bg-gradient-to-br from-amber-400 to-orange-400 rounded-lg shadow-lg transform rotate-12">
//                 <div className="w-full h-2 bg-amber-300 rounded-t-lg"></div>
//               </div>
//             </div>
//           ))}
//         </div>
        
//         <div className="relative z-10">
//           <div className="text-center mb-12" data-aos="fade-up" data-aos-delay="200">
//             <h2 className="text-4xl font-bold text-white mb-4 flex items-center justify-center space-x-3">
//               <Book className="w-8 h-8 text-amber-400" />
//               <span>Interactive Book Showcase</span>
//               <Book className="w-8 h-8 text-amber-400" />
//             </h2>
//             <p className="text-slate-300 text-lg">Explore our premium book designs with interactive preview</p>
//           </div>
          
//           <div className="relative" data-aos="fade-up" data-aos-delay="400">
//             {/* Interactive Book Grid */}
//             <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 mb-12 max-w-6xl mx-auto">
//               {bookCollection.slice(0, 12).map((book, index) => (
//                 <div
//                   key={book.id}
//                   className="group relative cursor-pointer transform hover:scale-110 transition-all duration-500"
//                   data-aos="zoom-in"
//                   data-aos-delay={`${500 + index * 50}`}
//                   onClick={() => setCurrentSlide(index)}
//                 >
//                   <div className="relative overflow-hidden rounded-xl shadow-2xl border-4 border-white/20 group-hover:border-amber-400/50">
//                     <img
//                       src={book.image}
//                       alt={book.title}
//                       className="w-full h-32 object-cover transition-transform duration-500 group-hover:scale-110"
//                     />
//                     <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
//                     <div className="absolute bottom-2 left-2 right-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
//                       <p className="text-white text-xs font-bold truncate">{book.title}</p>
//                       <p className="text-amber-200 text-xs">{book.category}</p>
//                     </div>
//                     {index === currentSlide && (
//                       <div className="absolute inset-0 border-4 border-amber-400 rounded-xl animate-pulse"></div>
//                     )}
//                   </div>
//                 </div>
//               ))}
//             </div>

//             {/* Featured Book Display */}
//             <div className="flex items-center justify-center space-x-6 mb-8">
//               {[0, 1, 2, 3, 4, 5, 6].map((offset) => {
//                 const bookIndex = (currentSlide + offset) % bookCollection.length;
//                 const book = bookCollection[bookIndex];
//                 return (
//                   <div 
//                     key={book.id} 
//                     className={`transition-all duration-1000 transform cursor-pointer ${
//                       offset === 3 
//                         ? 'scale-125 z-30 shadow-2xl' 
//                         : offset === 2 || offset === 4
//                           ? 'scale-100 z-20 opacity-80' 
//                           : offset === 1 || offset === 5
//                             ? 'scale-85 z-10 opacity-60'
//                             : 'scale-70 z-0 opacity-40'
//                     }`}
//                     onClick={() => setCurrentSlide(bookIndex)}
//                   >
//                     <div className="bg-white rounded-xl shadow-2xl overflow-hidden border-4 border-amber-200 hover:border-amber-400 transition-colors duration-300">
//                       <img 
//                         src={book.image} 
//                         alt={book.title}
//                         className="w-20 h-30 object-cover hover:scale-105 transition-transform duration-300"
//                       />
//                     </div>
//                   </div>
//                 );
//               })}
//             </div>

//             {/* Controls */}
//             <div className="flex justify-center items-center space-x-6">
//               <button 
//                 onClick={prevSlide}
//                 className="group p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300"
//               >
//                 <ChevronLeft className="w-6 h-6 text-white group-hover:text-amber-300" />
//               </button>
              
//               <div className="text-center">
//                 <h3 className="text-xl font-bold text-white mb-1">
//                   {bookCollection[currentSlide]?.title}
//                 </h3>
//                 <span className="inline-block bg-amber-500/20 text-amber-300 px-3 py-1 rounded-full text-sm font-medium border border-amber-500/30">
//                   {bookCollection[currentSlide]?.category}
//                 </span>
//               </div>

//               <button 
//                 onClick={nextSlide}
//                 className="group p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300"
//               >
//                 <ChevronRight className="w-6 h-6 text-white group-hover:text-amber-300" />
//               </button>
//             </div>

//             {/* Progress Indicators */}
//             <div className="flex justify-center space-x-2 mt-8">
//               {bookCollection.slice(0, 10).map((_, index) => (
//                 <button
//                   key={index}
//                   onClick={() => setCurrentSlide(index)}
//                   className={`w-3 h-3 rounded-full transition-all duration-300 ${
//                     index === currentSlide % 10
//                       ? 'bg-amber-500 shadow-lg shadow-amber-500/50' 
//                       : 'bg-white/30 hover:bg-white/50'
//                   }`}
//                 />
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Enhanced CTA Section with Book Elements */}
//       <section id="about" className="py-24 px-4 relative bg-gradient-to-r from-amber-600 to-orange-600 overflow-hidden">
//         {/* Book Background Pattern */}
//         <div className="absolute inset-0 opacity-10">
//           {[...Array(25)].map((_, i) => (
//             <div
//               key={i}
//               className="absolute transform rotate-12"
//               style={{
//                 left: `${Math.random() * 100}%`,
//                 top: `${Math.random() * 100}%`,
//                 animationDelay: `${Math.random() * 2}s`
//               }}
//             >
//               <div className="w-6 h-9 bg-white rounded shadow-lg animate-pulse">
//                 <div className="w-full h-1 bg-amber-200 rounded-t"></div>
//               </div>
//             </div>
//           ))}
//         </div>

//         <div className="max-w-5xl mx-auto text-center relative z-10">
//           <div className="inline-flex items-center space-x-3 bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 mb-8">
//             <BookOpen className="w-5 h-5 text-white" />
//             <span className="text-white font-medium">Ready to Design Your Book?</span>
//             <BookOpen className="w-5 h-5 text-white" />
//           </div>

//           <h2 className="text-5xl md:text-6xl font-bold text-white mb-8 leading-tight">
//             Transform Your Story into a
//             <span className="block text-amber-200">Beautiful Book</span>
//           </h2>

//           <p className="text-xl text-amber-100 mb-12 max-w-3xl mx-auto leading-relaxed">
//             From manuscript to masterpiece - let our expert designers create a book cover and layout that captures readers' attention and drives sales in today's competitive market.
//           </p>

//           <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
//             <button 
//               onClick={handleStartProject}
//               className="group bg-white text-amber-600 px-10 py-4 rounded-lg text-lg font-bold hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-3"
//             >
//               <Book className="w-5 h-5" />
//               <span>Start Your Book Project</span>
//               <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
//             </button>
//             <button className="group border-2 border-white text-white px-10 py-4 rounded-lg text-lg font-bold hover:bg-white hover:text-amber-600 transition-all duration-300 flex items-center justify-center space-x-3">
//               <Library className="w-5 h-5" />
//               <span>View Our Book Packages</span>
//             </button>
//           </div>

//           {/* Mini Book Showcase in CTA */}
//           <div className="flex justify-center space-x-3 opacity-80">
//             {bookCollection.slice(0, 7).map((book, index) => (
//               <div
//                 key={book.id}
//                 className="w-10 h-15 bg-white rounded shadow-lg overflow-hidden transform hover:scale-110 transition-transform duration-300"
//                 style={{ animationDelay: `${index * 0.1}s` }}
//               >
//                 <img 
//                   src={book.image} 
//                   alt={book.title}
//                   className="w-full h-full object-cover"
//                 />
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Floating WhatsApp Button */}
//       <div className="fixed bottom-6 right-6 z-50 animate-bounce" >
//         <div className="group relative">
//           <a
//             href="https://wa.me/+923085974310"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="flex items-center justify-center w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300"
//           >
//             {/* <MessageCircle className="w-7 h-7" /> */}
//             <FontAwesomeIcon icon={faWhatsapp} />

//           </a>
          
//           {/* Tooltip */}
//           <div className="absolute bottom-16 right-0 bg-slate-900 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 pointer-events-none">
//             Chat with us on WhatsApp
//             <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-slate-900"></div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default HomePage























"use client"

import { useState, useEffect, useRef } from "react"
import AOS from "aos"
import { useNavigate } from "react-router-dom"
import {
  Star,
  Award,
  BookOpen,
  Palette,
  Zap,
  ArrowRight,
  Sparkles,
  Eye,
  Users,
  RotateCcw,
  ChevronLeft,
  ChevronRight,
  Book,
  Library,
  Plus,
  Minus,
  Headphones,
  Edit,
  DollarSign,
  Printer,
  Tablet,
} from "lucide-react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons"

const services = [
  {
    icon: <BookOpen className="w-16 h-16" />,
    title: "eBook Formatting",
    description: "Professional formatting that makes your content shine across all digital platforms",
    features: [
      "KDP eBook Formatting",
      "Print PDF Layout",
      "Children's Book Formatting",
      "Complex Layout Matching",
      "Clickable TOC / Internal Links",
    ],
  },
  {
    icon: <Palette className="w-16 h-16" />,
    title: "Book Cover Design",
    description: "Eye-catching covers that grab attention and drive sales in any genre",
    features: [
      "KDP Paperback Covers",
      "Kindle eBook Covers",
      "Romance Covers",
      "Recipe Book Covers",
      "Fantasy / Fiction Covers",
      "Children's Book Covers",
      "Non-Fiction Covers",
    ],
  },
  {
    icon: <Zap className="w-16 h-16" />,
    title: "Lead Magnet Design",
    description: "Compelling freebies that capture leads and build your audience effectively",
    features: [
      "PDF Checklists",
      "Coaching Workbooks",
      "Clickable Email Freebies",
      "Course Materials",
      "Interactive Designs",
    ],
  },
  {
    icon: <RotateCcw className="w-16 h-16" />,
    title: "Conversion Services",
    description: "Seamless format transitions that preserve quality across all platforms",
    features: [
      "PDF to KPF / Kindle Format",
      "EPUB / MOBI Conversion",
      "Layout Adjustment for Kindle",
      "Print-to-Digital Transition",
    ],
  },
]

const circularServices = [
  {
    id: "book-printing",
    icon: <Printer className="w-12 h-12" />,
    title: "Book Printing",
    path: "/book-printing",
  },
  {
    id: "ebook-publishing",
    icon: <Tablet className="w-12 h-12" />,
    title: "eBook Publishing",
    path: "/ebook-publishing",
  },
  {
    id: "audiobook-creation",
    icon: <Headphones className="w-12 h-12" />,
    title: "Audiobook Creation",
    path: "/audiobook-creation",
  },
  {
    id: "book-editing",
    icon: <Edit className="w-12 h-12" />,
    title: "Book Editing",
    path: "/book-editing",
  },
  {
    id: "book-design",
    icon: <Palette className="w-12 h-12" />,
    title: "Book Design",
    path: "/book-design",
  },
  {
    id: "sales-marketing",
    icon: <DollarSign className="w-12 h-12" />,
    title: "Sales & Marketing",
    path: "/sales-marketing",
  },
]

const HomePage = () => {
  const navigate = useNavigate()
  const [isVisible, setIsVisible] = useState(false)
  const [activeFilter, setActiveFilter] = useState("all")
  const [currentSlide, setCurrentSlide] = useState(0)
  const [heroSlide, setHeroSlide] = useState(0)
  const [floatingSlide, setFloatingSlide] = useState(0)
  const [infiniteSlide, setInfiniteSlide] = useState(0)
  const [currentReview, setCurrentReview] = useState(0)
  const [openFAQ, setOpenFAQ] = useState(null)

  // GetInTouch section state
  const [isGetInTouchVisible, setIsGetInTouchVisible] = useState(false)
  const getInTouchSectionRef = useRef(null)

  const teamMembers = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      name: "Sarah Johnson",
      role: "Publishing Specialist",
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      name: "Michael Chen",
      role: "Editorial Expert",
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop&crop=face",
      name: "Aisha Patel",
      role: "Author Relations",
    },
  ]

  // Expanded book collection with more realistic book covers
  const bookCollection = [
    {
      id: 1,
      title: "The Ultimate Wrestling Coloring Book",
      image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&h=600&fit=crop&crop=edges",
      category: "Coloring Book",
      genre: "Entertainment",
    },
    {
      id: 2,
      title: "Mudfall - Earth Hunter Jr.",
      image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=600&fit=crop&crop=edges",
      category: "Fantasy",
      genre: "Fiction",
    },
    {
      id: 3,
      title: "The New Derivative",
      image: "https://images.unsplash.com/photo-1589998059171-988d887df646?w=400&h=600&fit=crop&crop=edges",
      category: "Business",
      genre: "Non-Fiction",
    },
    {
      id: 4,
      title: "The Adventure of Little Feet",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=600&fit=crop&crop=edges",
      category: "Children's",
      genre: "Children",
    },
    {
      id: 5,
      title: "Juicing for Authentic Balance",
      image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=600&fit=crop&crop=edges",
      category: "Health & Wellness",
      genre: "Lifestyle",
    },
    {
      id: 6,
      title: "Mystery of the Midnight Garden",
      image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400&h=600&fit=crop&crop=edges",
      category: "Mystery",
      genre: "Fiction",
    },
    {
      id: 7,
      title: "Love in the Digital Age",
      image: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=400&h=600&fit=crop&crop=edges",
      category: "Romance",
      genre: "Fiction",
    },
    {
      id: 8,
      title: "Galactic Warriors",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=600&fit=crop&crop=edges",
      category: "Sci-Fi",
      genre: "Fiction",
    },
    {
      id: 9,
      title: "Kitchen Mastery Guide",
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=600&fit=crop&crop=edges",
      category: "Cookbook",
      genre: "Lifestyle",
    },
    {
      id: 10,
      title: "Mindful Meditation Practices",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=600&fit=crop&crop=edges",
      category: "Self-Help",
      genre: "Wellness",
    },
    {
      id: 11,
      title: "Digital Marketing Mastery",
      image: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=400&h=600&fit=crop&crop=edges",
      category: "Business",
      genre: "Marketing",
    },
    {
      id: 12,
      title: "The Art of Photography",
      image: "https://images.unsplash.com/photo-1516849841032-87cbac4d88f7?w=400&h=600&fit=crop&crop=edges",
      category: "Art",
      genre: "Creative",
    },
    {
      id: 13,
      title: "Healthy Living Guide",
      image: "https://images.unsplash.com/photo-1505576399279-565b52d4ac71?w=400&h=600&fit=crop&crop=edges",
      category: "Health",
      genre: "Lifestyle",
    },
    {
      id: 14,
      title: "Space Adventures",
      image: "https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=400&h=600&fit=crop&crop=edges",
      category: "Science Fiction",
      genre: "Fiction",
    },
    {
      id: 15,
      title: "Cryptocurrency Explained",
      image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=400&h=600&fit=crop&crop=edges",
      category: "Finance",
      genre: "Education",
    },
    {
      id: 16,
      title: "Modern Architecture",
      image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=400&h=600&fit=crop&crop=edges",
      category: "Architecture",
      genre: "Design",
    },
    {
      id: 17,
      title: "Yoga for Beginners",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=600&fit=crop&crop=edges",
      category: "Fitness",
      genre: "Health",
    },
    {
      id: 18,
      title: "Travel Photography",
      image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=400&h=600&fit=crop&crop=edges",
      category: "Photography",
      genre: "Travel",
    },
  ]

  const portfolioItems = [
    {
      id: 1,
      title: "Click Not Code",
      category: "fantasy",
      image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=400&h=600&fit=crop&crop=edges",
      description: "Epic fantasy novel cover design with mystical elements",
      year: "2024",
      client: "Sarah Johnson",
      rating: 5,
      sales: "15,000+ copies",
    },
    {
      id: 2,
      title: "Your Ultimate Skylight Installation",
      category: "business",
      image: "https://images.unsplash.com/photo-1589998059171-988d887df646?w=400&h=600&fit=crop&crop=edges",
      description: "Clean, professional design for business literature",
      year: "2024",
      client: "Mike Chen",
      rating: 5,
      sales: "8,500+ copies",
    },
    {
      id: 3,
      title: "The Reishi Sleep System",
      category: "children",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=600&fit=crop&crop=edges",
      description: "Colorful and playful design for young readers",
      year: "2023",
      client: "Emma Davis",
      rating: 5,
      sales: "12,000+ copies",
    },
    {
      id: 4,
      title: "Midnight in the Library",
      category: "mystery",
      image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400&h=600&fit=crop&crop=edges",
      description: "Intriguing mystery novel with atmospheric design",
      year: "2024",
      client: "David Wilson",
      rating: 5,
      sales: "20,000+ copies",
    },
  ]

  const categories = [
    { id: "all", name: "All Projects", count: portfolioItems.length },
    { id: "fantasy", name: "Fantasy", count: portfolioItems.filter((item) => item.category === "fantasy").length },
    { id: "business", name: "Business", count: portfolioItems.filter((item) => item.category === "business").length },
    { id: "children", name: "Children", count: portfolioItems.filter((item) => item.category === "children").length },
    { id: "mystery", name: "Mystery", count: portfolioItems.filter((item) => item.category === "mystery").length },
    { id: "romance", name: "Romance", count: portfolioItems.filter((item) => item.category === "romance").length },
    { id: "sci-fi", name: "Sci-Fi", count: portfolioItems.filter((item) => item.category === "sci-fi").length },
  ]

  const filteredItems =
    activeFilter === "all" ? portfolioItems : portfolioItems.filter((item) => item.category === activeFilter)

  const stats = [
    { number: "500+", label: "Books Designed", icon: <BookOpen className="w-6 h-6" /> },
    { number: "98%", label: "Client Satisfaction", icon: <Star className="w-6 h-6" /> },
    { number: "5+", label: "Years Experience", icon: <Award className="w-6 h-6" /> },
    { number: "50+", label: "Happy Authors", icon: <Users className="w-6 h-6" /> },
  ]

  const reviews = [
    {
      id: 1,
      name: "Sarah Johnson",
      title: "Author, The Mystic Chronicles",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
      bookCover: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=300&h=450&fit=crop&crop=edges",
      rating: 5,
      review:
        "BookCraft Studio transformed my manuscript into a stunning masterpiece. Their attention to detail and creative vision exceeded all my expectations. The cover design perfectly captures the essence of my fantasy novel.",
      project: "Fantasy Novel Design",
    },
    {
      id: 2,
      name: "Michael Chen",
      title: "Business Author, Digital Success",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      bookCover: "https://images.unsplash.com/photo-1589998059171-988d887df646?w=300&h=450&fit=crop&crop=edges",
      rating: 5,
      review:
        "Professional, timely, and absolutely brilliant work. The team understood my vision immediately and delivered a cover that has significantly boosted my book sales. Highly recommended for any serious author.",
      project: "Business Book Formatting",
    },
    {
      id: 3,
      name: "Emma Davis",
      title: "Children's Author, Little Adventures",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
      bookCover: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=450&fit=crop&crop=edges",
      rating: 5,
      review:
        "Working with BookCraft Studio was an absolute joy! They brought my children's book to life with vibrant colors and engaging illustrations. My young readers love the visual appeal, and parents appreciate the quality.",
      project: "Children's Book Illustration",
    },
    {
      id: 4,
      name: "David Wilson",
      title: "Mystery Writer, Dark Secrets",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      bookCover: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=300&h=450&fit=crop&crop=edges",
      rating: 5,
      review:
        "The atmospheric design they created for my mystery novel is absolutely perfect. It captures the dark, suspenseful mood I was aiming for. Sales have increased dramatically since the new cover launch.",
      project: "Mystery Novel Cover",
    },
  ]

  const faqs = [
    {
      question: "How long does the book design process take?",
      answer:
        "Our typical turnaround time is 5-7 business days for cover design and 7-10 business days for complete formatting. Rush orders can be accommodated for an additional fee. We'll provide you with a detailed timeline based on your specific project requirements.",
    },
    {
      question: "Do you offer revisions if I'm not satisfied?",
      answer:
        "Absolutely! We include up to 3 rounds of revisions with every project to ensure you're completely satisfied with the final result. Additional revisions can be made for a small fee. Your satisfaction is our top priority.",
    },
    {
      question: "What file formats do you provide?",
      answer:
        "We provide all necessary formats including high-resolution print-ready PDFs, Kindle-optimized files (MOBI/KPF), EPUB for other e-readers, and source files (PSD/AI) upon request. You'll receive everything needed for both print and digital publishing.",
    },
    {
      question: "Can you work with my existing manuscript?",
      answer:
        "Yes! We work with manuscripts in various formats including Word documents, PDFs, Google Docs, and more. Our team will review your content and recommend the best approach for formatting and design based on your genre and target audience.",
    },
    {
      question: "Do you offer package deals for multiple services?",
      answer:
        "Yes, we offer comprehensive packages that combine cover design, formatting, and marketing materials at discounted rates. Our most popular package includes cover design, interior formatting, and basic marketing materials for a complete publishing solution.",
    },
    {
      question: "What makes your designs stand out from competitors?",
      answer:
        "Our designs are created by experienced professionals who understand current market trends and genre expectations. We focus on creating covers that not only look beautiful but also drive sales by appealing to your target audience and standing out in crowded marketplaces.",
    },
  ]

  useEffect(() => {
    AOS.refresh()
    setIsVisible(true)
    document.documentElement.style.scrollBehavior = "smooth"

    // Auto-advance main slideshow
    const mainInterval = setInterval(() => {
      setCurrentSlide((prev) => {
        const next = prev + 1
        return next >= bookCollection.length ? 0 : next
      })
    }, 3000)

    // Auto-advance hero slideshow
    const heroInterval = setInterval(() => {
      setHeroSlide((prev) => {
        const next = prev + 1
        return next >= bookCollection.length ? 0 : next
      })
    }, 2500)

    // Auto-advance floating slideshow
    const floatingInterval = setInterval(() => {
      setFloatingSlide((prev) => {
        const next = prev + 1
        return next >= bookCollection.length ? 0 : next
      })
    }, 3500)

    // Auto-advance continuous slideshow
    const infiniteInterval = setInterval(() => {
      setInfiniteSlide((prev) => prev + 1)
    }, 100) // Very smooth continuous movement

    // Auto-advance reviews
    const reviewInterval = setInterval(() => {
      setCurrentReview((prev) => {
        const next = prev + 1
        return next >= reviews.length ? 0 : next
      })
    }, 5000)

    // GetInTouch intersection observer
    const getInTouchObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsGetInTouchVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (getInTouchSectionRef.current) {
      getInTouchObserver.observe(getInTouchSectionRef.current)
    }

    return () => {
      document.documentElement.style.scrollBehavior = "auto"
      clearInterval(mainInterval)
      clearInterval(heroInterval)
      clearInterval(floatingInterval)
      clearInterval(infiniteInterval)
      clearInterval(reviewInterval)

      // Cleanup GetInTouch observer
      if (getInTouchSectionRef.current) {
        getInTouchObserver.unobserve(getInTouchSectionRef.current)
      }
    }
  }, [])

  const handleNavClick = (e, targetId) => {
    e.preventDefault()
    const element = document.getElementById(targetId)
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      })
    }
  }

  const nextSlide = () => {
    setCurrentSlide((prev) => {
      const next = prev + 1
      return next >= bookCollection.length ? 0 : next
    })
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => {
      const next = prev - 1
      return next < 0 ? bookCollection.length - 1 : next
    })
  }

  const handleViewWork = () => {
    document.getElementById("portfolio")?.scrollIntoView({ behavior: "smooth" })
  }

  const handleStartProject = () => {
    document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })
  }

  const nextReview = () => {
    setCurrentReview((prev) => {
      const next = prev + 1
      return next >= reviews.length ? 0 : next
    })
  }

  const prevReview = () => {
    setCurrentReview((prev) => {
      const next = prev - 1
      return next < 0 ? reviews.length - 1 : next
    })
  }

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index)
  }

  const handleServiceClick = (path) => {
    navigate(path)
  }

  // Floating Book Cards Component
  const FloatingBooks = () => (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {bookCollection.slice(0, 12).map((book, index) => (
        <div
          key={book.id}
          className={`absolute transition-all duration-[4000ms] transform ${
            index % 4 === 0
              ? "animate-pulse"
              : index % 4 === 1
                ? "animate-bounce"
                : index % 4 === 2
                  ? "animate-pulse"
                  : "animate-bounce"
          }`}
          style={{
            left: `${5 + index * 8}%`,
            top: `${10 + (index % 4) * 20}%`,
            animationDelay: `${index * 0.3}s`,
            opacity: 0.08,
          }}
        >
          <div className="w-8 h-12 bg-gradient-to-br from-amber-200 to-orange-300 rounded shadow-lg transform rotate-12">
            <div className="w-full h-1 bg-amber-400 rounded-t"></div>
          </div>
        </div>
      ))}
    </div>
  )

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-25 via-orange-25 to-yellow-25 relative overflow-x-hidden">
      {/* Floating Book Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Animated Background Elements */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-br from-amber-200/30 to-orange-200/30 rounded-full animate-pulse"></div>
        <div className="absolute top-32 right-20 w-24 h-24 bg-gradient-to-br from-orange-200/20 to-yellow-200/20 rounded-full animate-bounce-slow"></div>
        <div className="absolute bottom-20 left-20 w-40 h-40 bg-gradient-to-br from-yellow-200/25 to-amber-200/25 rounded-full animate-pulse-glow"></div>
        <div className="absolute bottom-40 right-10 w-28 h-28 bg-gradient-to-br from-amber-200/30 to-orange-200/30 rounded-full animate-float"></div>

        {/* Floating Book Icons */}
        {bookCollection.slice(0, 15).map((book, index) => (
          <div
            key={book.id}
            className={`absolute transition-all duration-[4000ms] transform animate-float`}
            style={{
              left: `${5 + index * 6}%`,
              top: `${10 + (index % 5) * 15}%`,
              animationDelay: `${index * 0.4}s`,
              opacity: 0.08,
            }}
          >
            <div className="w-10 h-14 bg-gradient-to-br from-amber-300/40 to-orange-300/40 rounded-lg shadow-lg transform rotate-12 hover:rotate-0 transition-transform duration-500">
              <div className="w-full h-2 bg-amber-400/60 rounded-t-lg"></div>
              <div className="p-1">
                <div className="w-full h-1 bg-amber-300/40 rounded mb-1"></div>
                <div className="w-3/4 h-1 bg-amber-300/30 rounded mb-1"></div>
                <div className="w-1/2 h-1 bg-amber-300/20 rounded"></div>
              </div>
            </div>
          </div>
        ))}

        {/* Floating Sparkles */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              opacity: 0.3,
            }}
          >
            <Sparkles className="w-4 h-4 text-amber-400 animate-spin" style={{ animationDuration: "3s" }} />
          </div>
        ))}
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-cream-white/95 backdrop-blur-xl z-50 border-b border-amber-200/50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="relative">
                <BookOpen className="w-10 h-10 text-amber-600" />
                <Sparkles className="w-4 h-4 text-amber-500 absolute -top-1 -right-1" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
                BookCraft Studio
              </span>
            </div>

            {/* Centered Navigation Links */}
            <div className="hidden md:flex items-center space-x-8 absolute left-1/2 transform -translate-x-1/2">
              <a
                href="#home"
                onClick={(e) => handleNavClick(e, "home")}
                className="text-slate-700 hover:text-amber-600 transition-colors duration-300 font-medium"
              >
                Home
              </a>
              <a
                href="#portfolio"
                onClick={(e) => handleNavClick(e, "portfolio")}
                className="text-slate-700 hover:text-amber-600 transition-colors duration-300 font-medium"
              >
                Portfolio
              </a>
              <a
                href="#services"
                onClick={(e) => handleNavClick(e, "services")}
                className="text-slate-700 hover:text-amber-600 transition-colors duration-300 font-medium"
              >
                Services
              </a>
              <a
                href="#about"
                onClick={(e) => handleNavClick(e, "about")}
                className="text-slate-700 hover:text-amber-600 transition-colors duration-300 font-medium"
              >
                About
              </a>
            </div>

            {/* Contact Information */}
            <div className="hidden lg:flex flex-col text-right text-sm">
              <a
                href="https://wa.me/+923085974310"
                target="_blank"
                className="text-slate-600 hover:text-amber-600 transition-colors duration-300"
                rel="noreferrer"
              >
                Contact us
              </a>
              <a
                href="mailto:shehayrar@gmail.com"
                className="text-slate-600 hover:text-amber-600 transition-colors duration-300"
              >
                shehayrar@gmail.com
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section - Content First, then Slideshow Below */}
      <section id="home" className="pt-24 pb-20 px-4 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          {/* Content Section */}
          <div
            className={`text-center mb-16 transform transition-all duration-1000 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
          >
            <h1 className="text-5xl lg:text-7xl font-bold text-slate-900 mb-6 leading-tight">
              Book publishing
              <span className="block text-4xl lg:text-5xl text-slate-600 font-normal mt-2">made beautiful</span>
            </h1>

            <p className="text-xl text-slate-600 mb-8 leading-relaxed max-w-4xl mx-auto">
              From stunning cover designs to professional formatting, we transform your manuscript into a masterpiece
              that stands out in bookstores and online markets.
            </p>

            {/* <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button 
                onClick={handleStartProject}
                className="group bg-gradient-to-r from-amber-600 to-orange-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:shadow-xl hover:shadow-amber-500/25 transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-3"
              >
                <Book className="w-5 h-5" />
                <span>Start Your Project</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button 
                onClick={handleViewWork}
                className="group border-2 border-amber-600 text-amber-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-amber-600 hover:text-white transition-all duration-300 flex items-center justify-center space-x-3"
              >
                <Eye className="w-5 h-5" />
                <span>View Our Work</span>
              </button>
            </div> */}
          </div>

          {/* Main Continuous Slideshow Below Title */}
          <div
            className={`transform transition-all duration-1000 delay-500 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
          >
            {/* <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-200"> */}
            <div className="relative bg-white rounded-1xl shadow-3xl ">
              <div className="absolute inset-0 bg-gradient-to-br from-slate-50/50 to-amber-50/30"></div>

              {/* Continuous Infinite Slideshow */}
              {/* <div className="relative z-10">
                <div className="text-center py-8 px-8">
                  <h3 className="text-3xl font-bold text-slate-900 mb-3">Our Book Design Portfolio</h3>
                  <p className="text-slate-600 mb-8">Continuously showcasing hundreds of professional book covers</p> */}

              {/* Infinite Horizontal Scroll */}
              <div className="relative overflow-hidden">
                <div
                  className="flex space-x-6 transition-transform duration-100 ease-linear"
                  style={{
                    transform: `translateX(-${(infiniteSlide * 2) % (bookCollection.length * 200)}px)`,
                    width: `${bookCollection.length * 400}px`,
                  }}
                >
                  {/* Triple the books for seamless loop */}
                  {[...bookCollection, ...bookCollection, ...bookCollection].map((book, index) => (
                    <div
                      key={`${book.id}-${Math.floor(index / bookCollection.length)}`}
                      className="flex-shrink-0 group cursor-pointer"
                    >
                      <div className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 bg-white border border-slate-200">
                        <div className="w-32 h-48 relative">
                          <img
                            src={book.image || "/placeholder.svg"}
                            alt={book.title}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                          <div className="absolute bottom-2 left-2 right-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
                            <p className="text-white text-xs font-bold truncate">{book.title}</p>
                            <p className="text-amber-200 text-xs">{book.category}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                  {/* </div>
                  </div> */}

                  {/* Second Row - Opposite Direction */}
                  {/* <div className="relative overflow-hidden mt-6">
                    <div 
                      className="flex space-x-6 transition-transform duration-100 ease-linear"
                      style={{
                        transform: `translateX(${(infiniteSlide * 1.5) % (bookCollection.length * 200)}px)`,
                        width: `${bookCollection.length * 400}px`
                      }}
                    >
                      {[...bookCollection.slice().reverse(), ...bookCollection.slice().reverse(), ...bookCollection.slice().reverse()].map((book, index) => (
                        <div
                          key={`reverse-${book.id}-${Math.floor(index / bookCollection.length)}`}
                          className="flex-shrink-0 group cursor-pointer"
                        >
                          <div className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 bg-white border border-slate-200">
                            <div className="w-28 h-42 relative">
                              <img
                                src={book.image || "/placeholder.svg"}
                                alt={book.title}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                              <div className="absolute bottom-1 left-1 right-1 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
                                <p className="text-white text-xs font-bold truncate">{book.title}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                //   {/* Third Row - Different Speed */}
                  {/* <div className="relative overflow-hidden mt-6">
                    <div 
                      className="flex space-x-4 transition-transform duration-100 ease-linear"
                      style={{
                        transform: `translateX(-${(infiniteSlide * 2.5) % (bookCollection.length * 150)}px)`,
                        width: `${bookCollection.length * 300}px`
                      }}
                    >
                      {[...bookCollection, ...bookCollection, ...bookCollection].map((book, index) => (
                        <div
                          key={`third-${book.id}-${Math.floor(index / bookCollection.length)}`}
                          className="flex-shrink-0 group cursor-pointer"
                        >
                          <div className="relative overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105 bg-white border border-slate-200">
                            <div className="w-24 h-36 relative">
                              <img
                                src={book.image || "/placeholder.svg"}
                                alt={book.title}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>




<section
        ref={getInTouchSectionRef}
        className="h-[500px] flex items-center justify-center py-16 px-4"
        style={{
          background: "linear-gradient(135deg, #f5f1eb 0%, #e8ddd4 50%, #f0e6db 100%)",
        }}
      >
        <div className="max-w-4xl mx-auto text-center">
          {/* Header */}
          <div
            className={`mb-16 transition-all duration-1000 transform ${
              isGetInTouchVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
            }`}
          >
            <h2 className="text-5xl md:text-6xl font-bold text-gray-800 mb-8 tracking-tight">Get in touch</h2>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              When you work with <span className="font-semibold text-orange-600">BookCraft Studio</span>, you can expect
              help at every step of the journey. There's a lot to learn, but you can rest assured that our team will
              take care of everything and anything your book might need. When your manuscript is ready, reach out to a
              friendly, helpful Publishing Specialist.
            </p>
          </div>

          

          {/* CTA Section */}
          <div
            className={`transition-all duration-1000 delay-700 transform ${
              isGetInTouchVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
            }`}
          >
            

            {/* Or Call Section */}
            <div className="flex items-center justify-center gap-4">
              <div className="h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent w-16"></div>
              <span className="text-gray-600 font-medium">Call</span>
              <div className="h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent w-16"></div>
            </div>

            <a
              href="tel:+923085974310"
              className="inline-flex items-center mt-4 text-2xl font-bold text-orange-600 hover:text-orange-700 transition-colors duration-300 group"
            >
              <svg
                className="w-7 h-7 mr-3 transform group-hover:rotate-12 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              <span className="border-b-2 border-transparent group-hover:border-orange-600 transition-colors duration-300">
                +92 308 5974310
              </span>
            </a>
          </div>

          {/* Floating elements for visual interest */}
          <div
            className="absolute top-20 left-10 w-20 h-20 bg-orange-200 rounded-full opacity-20 animate-bounce"
            style={{ animationDelay: "0s", animationDuration: "3s" }}
          ></div>
          <div
            className="absolute bottom-20 right-10 w-16 h-16 bg-orange-300 rounded-full opacity-20 animate-bounce"
            style={{ animationDelay: "1s", animationDuration: "4s" }}
          ></div>
          <div
            className="absolute top-1/2 left-5 w-12 h-12 bg-orange-400 rounded-full opacity-15 animate-bounce"
            style={{ animationDelay: "2s", animationDuration: "5s" }}
          ></div>
        </div>
      </section>


















      {/* Circular Services Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Bring Your Book to Life with Our Complete Publishing Solutions
            </h2>
            <p className="text-xl text-slate-600 mb-2">
              <span className="italic">All the tools you need — 

</span> together, in one seamless platform.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-orange-400 mx-auto"></div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {circularServices.map((service, index) => (
              <div
                key={service.id}
                onClick={() => handleServiceClick(service.path)}
                className="group flex flex-col items-center cursor-pointer transform hover:scale-105 transition-all duration-300"
              >
                <div className="w-40 h-40 bg-gradient-to-br from-amber-50 to-orange-50 rounded-full flex items-center justify-center mb-4 border-4 border-amber-100 group-hover:border-amber-300 group-hover:shadow-xl group-hover:shadow-amber-500/20 transition-all duration-300">
                  <div className="text-amber-600 group-hover:text-orange-600 transition-colors duration-300">
                    {service.icon}
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-slate-900 text-center group-hover:text-amber-600 transition-colors duration-300">
                  {service.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>











      <div className="bg-gradient-to-br from-slate-50 to-blue-50 py-16 px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">CreativeHub at a glance:</h2>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
            {/* Stat 1 */}
            <div className="relative group">
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 text-center border-2 border-transparent hover:border-purple-200">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl font-bold text-white">12K+</span>
                </div>
                <h3 className="text-lg font-semibold text-purple-600 mb-2">Creative Projects</h3>
                <p className="text-gray-600 text-sm">Successfully launched</p>
              </div>
            </div>

            {/* Stat 2 */}
            <div className="relative group">
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 text-center border-2 border-transparent hover:border-emerald-200">
                <div className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl font-bold text-white">4.9★</span>
                </div>
                <h3 className="text-lg font-semibold text-emerald-600 mb-2">User Rating</h3>
                <p className="text-gray-600 text-sm">From 2800+ reviews</p>
              </div>
            </div>

            {/* Stat 3 */}
            <div className="relative group">
              <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 text-center border-2 border-transparent hover:border-orange-200">
                <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl font-bold text-white">95+</span>
                </div>
                <h3 className="text-lg font-semibold text-orange-600 mb-2">Countries</h3>
                <p className="text-gray-600 text-sm">Worldwide reach</p>
              </div>
            </div>
          </div>

          {/* Featured In Section */}
          <div className="text-center">
            <div className="inline-block bg-white rounded-full px-6 py-2 shadow-sm mb-8">
              <span className="text-gray-500 text-sm font-medium">Featured in</span>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-60">
              {/* TechCrunch */}
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600 mb-1">TechCrunch</div>
                <div className="text-xs text-gray-400 uppercase tracking-wider">Tech News</div>
              </div>

              {/* Wired */}
              <div className="text-center">
                <div className="text-2xl font-bold text-black mb-1">WIRED</div>
                <div className="text-xs text-gray-400 uppercase tracking-wider">Technology</div>
              </div>

              {/* Fast Company */}
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600 mb-1">Fast Company</div>
                <div className="text-xs text-gray-400 uppercase tracking-wider">Business</div>
              </div>

              {/* VentureBeat */}
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600 mb-1">VentureBeat</div>
                <div className="text-xs text-gray-400 uppercase tracking-wider">Innovation</div>
              </div>
            </div>
          </div>
        </div>
      </div>






<section className="py-12 bg-gradient-to-r from-amber-600 to-orange-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative z-10">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-2">Infinite Book Gallery</h2>
            <p className="text-amber-100">Endless showcase of professional book designs</p>
          </div>

          {/* Infinite Scroll Strip */}
          <div className="relative overflow-hidden">
            <div
              className="flex space-x-6 transition-transform duration-100 ease-linear"
              style={{
                transform: `translateX(-${(infiniteSlide * 3) % (bookCollection.length * 200)}px)`,
                width: `${bookCollection.length * 400}px`,
              }}
            >
              {[...bookCollection, ...bookCollection, ...bookCollection].map((book, index) => (
                <div
                  key={`strip-${book.id}-${Math.floor(index / bookCollection.length)}`}
                  className="flex-shrink-0 transform hover:scale-110 transition-transform duration-300"
                >
                  <div className="w-24 h-36 bg-white rounded-lg shadow-xl overflow-hidden border-2 border-white/30">
                    <img
                      src={book.image || "/placeholder.svg"}
                      alt={book.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="text-center mt-2">
                    <p className="text-white text-xs font-medium truncate w-24">{book.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>











      {/* Distribution Partners Section */}
      <section className="py-20 px-4 bg-white" data-aos="fade-up">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16" data-aos="fade-up" data-aos-delay="200">
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              Sell your book{" "}
              <span className="italic text-amber-600 relative">
                everywhere
                <div className="absolute bottom-0 left-0 w-full h-1 bg-amber-400 rounded"></div>
              </span>
            </h2>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
              The largest worldwide print and eBook distribution network is at your fingertips
            </p>
          </div>

          {/* Partner Logos */}
          <div
      className="flex flex-wrap justify-center items-center gap-12 mb-12"
      data-aos="fade-up"
      data-aos-delay="400"
    >
      {/* Original logos */}
      <div className="group transition-all duration-300 hover:scale-110">
        <div className="text-4xl font-bold text-slate-600 group-hover:text-slate-900 transition-colors">
          BARNES&NOBLE
        </div>
        <div className="text-sm text-slate-500 text-center mt-1">BOOKSELLERS</div>
      </div>
      
      <div className="group transition-all duration-300 hover:scale-110">
        <div className="text-4xl font-bold text-slate-600 group-hover:text-slate-900 transition-colors">
          amazon
        </div>
        <div className="w-16 h-0.5 bg-amber-500 mx-auto mt-1"></div>
      </div>
      
      <div className="group transition-all duration-300 hover:scale-110">
        <div className="text-4xl font-bold text-slate-600 group-hover:text-slate-900 transition-colors flex items-center">
          Walmart
          <div className="ml-2 text-amber-500">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
          </div>
        </div>
      </div>

      {/* New partner logos */}
      <div className="group transition-all duration-300 hover:scale-110">
        <div className="text-4xl font-bold text-slate-600 group-hover:text-slate-900 transition-colors flex items-center">
          Target
          <div className="ml-2 w-6 h-6 rounded-full border-2 border-red-500 flex items-center justify-center">
            <div className="w-2 h-2 rounded-full bg-red-500"></div>
          </div>
        </div>
      </div>

      <div className="group transition-all duration-300 hover:scale-110">
        <div className="text-4xl font-bold text-slate-600 group-hover:text-slate-900 transition-colors">
          COSTCO
        </div>
        <div className="w-20 h-0.5 bg-blue-600 mx-auto mt-1"></div>
      </div>

      <div className="group transition-all duration-300 hover:scale-110">
        <div className="text-4xl font-bold text-slate-600 group-hover:text-slate-900 transition-colors font-mono">
          Best Buy
        </div>
        <div className="text-xs text-blue-600 text-center mt-1 font-semibold">TECH</div>
      </div>

      <div className="group transition-all duration-300 hover:scale-110">
        <div className="text-3xl font-bold text-slate-600 group-hover:text-slate-900 transition-colors flex items-center">
          <div className="w-8 h-8 bg-green-500 rounded mr-2 flex items-center justify-center text-white text-lg">
            S
          </div>
          Shopify
        </div>
      </div>

      <div className="group transition-all duration-300 hover:scale-110">
        <div className="text-4xl font-bold text-slate-600 group-hover:text-slate-900 transition-colors">
          eBay
        </div>
        <div className="flex gap-1 justify-center mt-1">
          <div className="w-2 h-2 bg-red-500 rounded-full"></div>
          <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
          <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
        </div>
      </div>

      <div className="group transition-all duration-300 hover:scale-110">
        <div className="text-4xl font-bold text-slate-600 group-hover:text-slate-900 transition-colors flex items-center">
          Home Depot
          <div className="ml-2 w-6 h-6 bg-orange-600 transform rotate-45"></div>
        </div>
      </div>

      <div className="group transition-all duration-300 hover:scale-110">
        <div className="text-4xl font-bold text-slate-600 group-hover:text-slate-900 transition-colors">
          IKEA
        </div>
        <div className="w-12 h-0.5 bg-blue-600 mx-auto mt-1"></div>
        <div className="w-6 h-0.5 bg-yellow-500 mx-auto mt-0.5"></div>
      </div>

      <div className="group transition-all duration-300 hover:scale-110">
        <div className="text-4xl font-bold text-slate-600 group-hover:text-slate-900 transition-colors flex items-center">
          CVS
          <div className="ml-2 text-red-600">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
            </svg>
          </div>
        </div>
        <div className="text-sm text-slate-500 text-center mt-1">PHARMACY</div>
      </div>

      <div className="group transition-all duration-300 hover:scale-110">
        <div className="text-4xl font-bold text-slate-600 group-hover:text-slate-900 transition-colors">
          Kroger
        </div>
        <div className="w-16 h-0.5 bg-blue-500 mx-auto mt-1"></div>
      </div>

      <div className="group transition-all duration-300 hover:scale-110">
        <div className="text-3xl font-bold text-slate-600 group-hover:text-slate-900 transition-colors flex items-center">
          <div className="w-8 h-8 bg-purple-600 rounded-full mr-2 flex items-center justify-center text-white text-sm font-bold">
            E
          </div>
          Etsy
        </div>
      </div>
    </div>

          <div className="text-center" data-aos="fade-up" data-aos-delay="600">
            <button className="bg-gradient-to-r from-amber-600 to-orange-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl hover:shadow-amber-500/25 transform hover:scale-105 transition-all duration-300">
              See all retail partners
            </button>
          </div>
        </div>
      </section>





 


 <section id="home" className="pt-24 pb-20 px-4 relative overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-800">
  <div className="max-w-7xl mx-auto">
    

    {/* Main Continuous Slideshow Below Title */}
    <div
      className={`transform transition-all duration-1000 delay-500 ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
      }`}
    >
      <div className="relative bg-gradient-to-br from-gray-900 to-black rounded-3xl shadow-2xl overflow-hidden border border-orange-500/20">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-800/50 to-orange-900/20"></div>

        {/* Continuous Infinite Slideshow */}
        <div className="relative z-10">
          <div className="text-center py-8 px-8">
            <h3 className="text-3xl font-bold text-white mb-3">Our Book Design Portfolio</h3>
            <p className="text-orange-200 mb-8">Continuously showcasing hundreds of professional book covers</p>

            {/* Infinite Horizontal Scroll - Faster Speed */}
            <div className="relative overflow-hidden">
              <div
                className="flex space-x-6 transition-transform duration-50 ease-linear"
                style={{
                  transform: `translateX(-${(infiniteSlide * 3) % (bookCollection.length * 200)}px)`,
                  width: `${bookCollection.length * 400}px`,
                }}
              >
                {/* Triple the books for seamless loop */}
                {[...bookCollection, ...bookCollection, ...bookCollection].map((book, index) => (
                  <div
                    key={`${book.id}-${Math.floor(index / bookCollection.length)}`}
                    className="flex-shrink-0 group cursor-pointer"
                  >
                    <div className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl hover:shadow-orange-500/20 transition-all duration-300 transform hover:scale-105 bg-gray-800 border border-orange-400/30">
                      <div className="w-32 h-48 relative">
                        <img
                          src={book.image || "/placeholder.svg"}
                          alt={book.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-orange-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <div className="absolute bottom-2 left-2 right-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
                          <p className="text-white text-xs font-bold truncate">{book.title}</p>
                          <p className="text-orange-300 text-xs">{book.category}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Second Row - Opposite Direction - Faster Speed */}
            <div className="relative overflow-hidden mt-6">
              <div
                className="flex space-x-6 transition-transform duration-50 ease-linear"
                style={{
                  transform: `translateX(${(infiniteSlide * 2.5) % (bookCollection.length * 200)}px)`,
                  width: `${bookCollection.length * 400}px`,
                }}
              >
                {[...bookCollection.slice().reverse(), ...bookCollection.slice().reverse(), ...bookCollection.slice().reverse()].map(
                  (book, index) => (
                    <div
                      key={`reverse-${book.id}-${Math.floor(index / bookCollection.length)}`}
                      className="flex-shrink-0 group cursor-pointer"
                    >
                      <div className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl hover:shadow-orange-500/20 transition-all duration-300 transform hover:scale-105 bg-gray-800 border border-orange-400/30">
                        <div className="w-28 h-42 relative">
                          <img
                            src={book.image || "/placeholder.svg"}
                            alt={book.title}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-orange-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                          <div className="absolute bottom-1 left-1 right-1 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
                            <p className="text-white text-xs font-bold truncate">{book.title}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                )}
              </div>
            </div>

            {/* Third Row - Different Speed - Faster */}
            <div className="relative overflow-hidden mt-6">
              <div
                className="flex space-x-4 transition-transform duration-50 ease-linear"
                style={{
                  transform: `translateX(-${(infiniteSlide * 4) % (bookCollection.length * 150)}px)`,
                  width: `${bookCollection.length * 300}px`,
                }}
              >
                {[...bookCollection, ...bookCollection, ...bookCollection].map((book, index) => (
                  <div
                    key={`third-${book.id}-${Math.floor(index / bookCollection.length)}`}
                    className="flex-shrink-0 group cursor-pointer"
                  >
                    <div className="relative overflow-hidden rounded-lg shadow-md hover:shadow-xl hover:shadow-orange-500/20 transition-all duration-300 transform hover:scale-105 bg-gray-800 border border-orange-400/30">
                      <div className="w-24 h-36 relative">
                        <img
                          src={book.image || "/placeholder.svg"}
                          alt={book.title}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-orange-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>











      {/* Trustpilot Reviews Section */}
      <section className="py-20 px-4 bg-slate-50" data-aos="fade-up">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12" data-aos="fade-up" data-aos-delay="200">
            {/* Trustpilot Logo and Rating */}
            <div className="flex items-center justify-center space-x-3 mb-6">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                  <Star className="w-5 h-5 text-white fill-current" />
                </div>
                <span className="text-2xl font-bold text-slate-900">Trustpilot</span>
              </div>
            </div>

            {/* Star Rating */}
            <div className="flex justify-center space-x-1 mb-4" data-aos="fade-up" data-aos-delay="300">
              {[1, 2, 3, 4, 5].map((star) => (
                <div key={star} className="w-12 h-12 bg-green-500 rounded flex items-center justify-center">
                  <Star className="w-8 h-8 text-white fill-current" />
                </div>
              ))}
            </div>

            <div className="text-lg text-slate-700 mb-8" data-aos="fade-up" data-aos-delay="400">
              <span className="font-bold">TrustScore 4.4</span> | <span className="font-bold">5,329 reviews</span>
            </div>
          </div>
        </div>
      </section>

      {/* Satisfaction Guarantee Section */}
      <section
        className="py-20 px-4 bg-gradient-to-r from-amber-100 to-orange-100 relative overflow-hidden"
        data-aos="fade-up"
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-center space-y-8 lg:space-y-0 lg:space-x-12">
            {/* Guarantee Badge */}
            <div className="relative" data-aos="fade-right" data-aos-delay="200">
              <div className="w-48 h-48 bg-gradient-to-br from-amber-600 to-orange-600 rounded-full flex items-center justify-center relative transform rotate-12 hover:rotate-0 transition-transform duration-500">
                <div className="text-center text-white">
                  <div className="text-4xl font-bold mb-2">100%</div>
                  <div className="text-lg font-semibold leading-tight">
                    SATISFACTION
                    <br />
                    GUARANTEE
                  </div>
                </div>
                {/* Decorative stars */}
                <div className="absolute top-4 left-4">
                  <Star className="w-4 h-4 text-amber-200 fill-current" />
                </div>
                <div className="absolute bottom-4 right-4">
                  <Star className="w-4 h-4 text-amber-200 fill-current" />
                </div>
                <div className="absolute top-8 right-8">
                  <Star className="w-3 h-3 text-amber-200 fill-current" />
                </div>
              </div>
            </div>

            {/* Guarantee Text */}
            <div className="text-center lg:text-left max-w-2xl" data-aos="fade-left" data-aos-delay="400">
              <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">Satisfaction guaranteed</h2>
              <p className="text-xl text-slate-700 mb-6 leading-relaxed">
                If you're not thrilled with our work, we'll work with you until you are.
              </p>
              <button className="text-slate-900 font-semibold text-lg border-b-2 border-slate-900 hover:border-amber-600 hover:text-amber-600 transition-colors duration-300">
                Learn more about our promise
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Continuous Moving Book Strip */}
      
      
      {/* Client Reviews Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-slate-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Your success is our top priority</h2>
            <p className="text-xl text-slate-600">What our clients say about working with us</p>
          </div>

          <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-200 p-8 lg:p-12">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              {/* Book Cover Display */}
              <div className="flex-shrink-0">
                <div className="relative">
                  <img
                    src={reviews[currentReview].bookCover || "/placeholder.svg"}
                    alt="Book Cover"
                    className="w-64 h-96 object-cover rounded-xl shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500"
                  />
                  <div className="absolute -bottom-4 -right-4 bg-amber-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                    Featured Work
                  </div>
                </div>
              </div>

              {/* Review Content */}
              <div className="flex-1 text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start space-x-1 mb-6">
                  {[...Array(reviews[currentReview].rating)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                  ))}
                </div>

                <blockquote className="text-xl lg:text-2xl text-slate-700 leading-relaxed mb-8 italic">
                  "{reviews[currentReview].review}"
                </blockquote>

                <div className="flex items-center justify-center lg:justify-start space-x-4">
                  <img
                    src={reviews[currentReview].image || "/placeholder.svg"}
                    alt={reviews[currentReview].name}
                    className="w-16 h-16 rounded-full object-cover border-4 border-amber-200"
                  />
                  <div>
                    <h4 className="text-lg font-bold text-slate-900">{reviews[currentReview].name}</h4>
                    <p className="text-slate-600">{reviews[currentReview].title}</p>
                    <p className="text-amber-600 text-sm font-medium">{reviews[currentReview].project}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between mt-8">
              <button
                onClick={prevReview}
                className="p-3 rounded-full bg-slate-100 hover:bg-amber-100 text-slate-600 hover:text-amber-600 transition-all duration-300"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <div className="flex space-x-2">
                {reviews.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentReview(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentReview
                        ? "bg-amber-600 shadow-lg shadow-amber-600/50"
                        : "bg-slate-300 hover:bg-slate-400"
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={nextReview}
                className="p-3 rounded-full bg-slate-100 hover:bg-amber-100 text-slate-600 hover:text-amber-600 transition-all duration-300"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </section>






















      {/* FAQ Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-slate-600">Everything you need to know about our book design services</p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white border border-slate-200 rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-slate-50 transition-colors duration-300"
                >
                  <h3 className="text-lg font-semibold text-slate-900 pr-4">{faq.question}</h3>
                  <div className="flex-shrink-0">
                    {openFAQ === index ? (
                      <Minus className="w-5 h-5 text-amber-600" />
                    ) : (
                      <Plus className="w-5 h-5 text-slate-400" />
                    )}
                  </div>
                </button>

                {openFAQ === index && (
                  <div className="px-6 pb-6">
                    <div className="border-t border-slate-100 pt-4">
                      <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Book Showcase */}
      <section
        className="py-24 px-4 bg-gradient-to-br from-slate-900 to-slate-800 relative overflow-hidden"
        data-aos="fade-up"
      >
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-amber-600/20 to-orange-600/20"></div>
          {/* Animated Background Elements */}
          {[...Array(10)].map((_, i) => (
            <div
              key={i}
              className="absolute animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                opacity: 0.1,
              }}
            >
              <div className="w-16 h-24 bg-gradient-to-br from-amber-400 to-orange-400 rounded-lg shadow-lg transform rotate-12">
                <div className="w-full h-2 bg-amber-300 rounded-t-lg"></div>
              </div>
            </div>
          ))}
        </div>

        <div className="relative z-10">
          <div className="text-center mb-12" data-aos="fade-up" data-aos-delay="200">
            <h2 className="text-4xl font-bold text-white mb-4 flex items-center justify-center space-x-3">
              <Book className="w-8 h-8 text-amber-400" />
              <span>Interactive Book Showcase</span>
              <Book className="w-8 h-8 text-amber-400" />
            </h2>
            <p className="text-slate-300 text-lg">Explore our premium book designs with interactive preview</p>
          </div>

          <div className="relative" data-aos="fade-up" data-aos-delay="400">
            {/* Interactive Book Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 mb-12 max-w-6xl mx-auto">
              {bookCollection.slice(0, 12).map((book, index) => (
                <div
                  key={book.id}
                  className="group relative cursor-pointer transform hover:scale-110 transition-all duration-500"
                  data-aos="zoom-in"
                  data-aos-delay={`${500 + index * 50}`}
                  onClick={() => setCurrentSlide(index)}
                >
                  <div className="relative overflow-hidden rounded-xl shadow-2xl border-4 border-white/20 group-hover:border-amber-400/50">
                    <img
                      src={book.image || "/placeholder.svg"}
                      alt={book.title}
                      className="w-full h-32 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-2 left-2 right-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
                      <p className="text-white text-xs font-bold truncate">{book.title}</p>
                      <p className="text-amber-200 text-xs">{book.category}</p>
                    </div>
                    {index === currentSlide && (
                      <div className="absolute inset-0 border-4 border-amber-400 rounded-xl animate-pulse"></div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Featured Book Display */}
            <div className="flex items-center justify-center space-x-6 mb-8">
              {[0, 1, 2, 3, 4, 5, 6].map((offset) => {
                const bookIndex = (currentSlide + offset) % bookCollection.length
                const book = bookCollection[bookIndex]
                return (
                  <div
                    key={book.id}
                    className={`transition-all duration-1000 transform cursor-pointer ${
                      offset === 3
                        ? "scale-125 z-30 shadow-2xl"
                        : offset === 2 || offset === 4
                          ? "scale-100 z-20 opacity-80"
                          : offset === 1 || offset === 5
                            ? "scale-85 z-10 opacity-60"
                            : "scale-70 z-0 opacity-40"
                    }`}
                    onClick={() => setCurrentSlide(bookIndex)}
                  >
                    <div className="bg-white rounded-xl shadow-2xl overflow-hidden border-4 border-amber-200 hover:border-amber-400 transition-colors duration-300">
                      <img
                        src={book.image || "/placeholder.svg"}
                        alt={book.title}
                        className="w-20 h-30 object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Controls */}
            <div className="flex justify-center items-center space-x-6">
              <button
                onClick={prevSlide}
                className="group p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                <ChevronLeft className="w-6 h-6 text-white group-hover:text-amber-300" />
              </button>

              <div className="text-center">
                <h3 className="text-xl font-bold text-white mb-1">{bookCollection[currentSlide]?.title}</h3>
                <span className="inline-block bg-amber-500/20 text-amber-300 px-3 py-1 rounded-full text-sm font-medium border border-amber-500/30">
                  {bookCollection[currentSlide]?.category}
                </span>
              </div>

              <button
                onClick={nextSlide}
                className="group p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                <ChevronRight className="w-6 h-6 text-white group-hover:text-amber-300" />
              </button>
            </div>

            {/* Progress Indicators */}
            <div className="flex justify-center space-x-2 mt-8">
              {bookCollection.slice(0, 10).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide % 10
                      ? "bg-amber-500 shadow-lg shadow-amber-500/50"
                      : "bg-white/30 hover:bg-white/50"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section with Book Elements */}
      <section id="about" className="py-24 px-4 relative bg-gradient-to-r from-amber-600 to-orange-600 overflow-hidden">
        {/* Book Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          {[...Array(25)].map((_, i) => (
            <div
              key={i}
              className="absolute transform rotate-12"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
              }}
            >
              <div className="w-6 h-9 bg-white rounded shadow-lg animate-pulse">
                <div className="w-full h-1 bg-amber-200 rounded-t"></div>
              </div>
            </div>
          ))}
        </div>

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center space-x-3 bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 mb-8">
            <BookOpen className="w-5 h-5 text-white" />
            <span className="text-white font-medium">Ready to Design Your Book?</span>
            <BookOpen className="w-5 h-5 text-white" />
          </div>

          <h2 className="text-5xl md:text-6xl font-bold text-white mb-8 leading-tight">
            Transform Your Story into a<span className="block text-amber-200">Beautiful Book</span>
          </h2>

          <p className="text-xl text-amber-100 mb-12 max-w-3xl mx-auto leading-relaxed">
            From manuscript to masterpiece - let our expert designers create a book cover and layout that captures
            readers' attention and drives sales in today's competitive market.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <button
              onClick={handleStartProject}
              className="group bg-white text-amber-600 px-10 py-4 rounded-lg text-lg font-bold hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-3"
            >
              <Book className="w-5 h-5" />
              <span>Start Your Book Project</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="group border-2 border-white text-white px-10 py-4 rounded-lg text-lg font-bold hover:bg-white hover:text-amber-600 transition-all duration-300 flex items-center justify-center space-x-3">
              <Library className="w-5 h-5" />
              <span>View Our Book Packages</span>
            </button>
          </div>

          {/* Mini Book Showcase in CTA */}
          <div className="flex justify-center space-x-3 opacity-80">
            {bookCollection.slice(0, 7).map((book, index) => (
              <div
                key={book.id}
                className="w-10 h-15 bg-white rounded shadow-lg overflow-hidden transform hover:scale-110 transition-transform duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <img src={book.image || "/placeholder.svg"} alt={book.title} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Get In Touch Section */}
      
      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-50 animate-bounce">
        <div className="group relative">
          <a
            href="https://wa.me/+923085974310"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300"
          >
            {/* <MessageCircle className="w-7 h-7" /> */}
            <FontAwesomeIcon icon={faWhatsapp} />
          </a>

          {/* Tooltip */}
          <div className="absolute bottom-16 right-0 bg-slate-900 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 pointer-events-none">
            Chat with us on WhatsApp
            <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-slate-900"></div>
          </div>
        </div>
      </div>


      
    </div>
  )
}

export default HomePage



