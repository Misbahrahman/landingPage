import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

const industries = [
    {
        title: "Retail and Wholesale",
        description: "Streamline operations and enhance customer experiences with AI-driven inventory, personalization, and stock management.",
        icon: "shopping-bag"
    },
    {
        title: "Government and Public Services",
        description: "Improve safety, efficiency, and citizen engagement using data-driven solutions.",
        icon: "landmark"
    },
    {
        title: "Media and Telecommunication",
        description: "Boost audience engagement with AI-powered recommendations, targeted ads, and real-time analytics.",
        icon: "radio"
    },
    {
        title: "Smart Cities",
        description: "Build sustainable urban solutions with AI for traffic, resources, and public services.",
        icon: "building-2"
    },
    {
        title: "Transportation and Logistics",
        description: "Optimize routes, reduce costs, and improve supply chain efficiency with AI-driven tools.",
        icon: "truck"
    },
    {
        title: "Resources and Utilities",
        description: "Enhance resource management, predict failures, and reduce environmental impact with AI.",
        icon: "fuel"
    },
    {
        title: "Manufacturing and Industrials",
        description: "Automate quality control, boost productivity, and prevent downtime with AI-powered solutions.",
        icon: "factory"
    },
    {
        title: "Food and Agriculture",
        description: "Increase yields, improve food safety, and automate agriculture processes with AI.",
        icon: "wheat"
    },
    {
        title: "Real Estate & Urbanism",
        description: "Leverage AI for market forecasting, property analysis, and smarter urban planning.",
        icon: "home"
    },
    {
        title: "Hospitality and Entertainment",
        description: "Personalize guest experiences and optimize bookings with AI-driven insights.",
        icon: "hotel"
    },
    {
        title: "Health and Biotechnology",
        description: "Revolutionize healthcare with AI for diagnostics, research, and patient care.",
        icon: "heart-pulse"
    },
    {
        title: "Finance and Investment",
        description: "Gain insights with AI for fraud detection, financial planning, and market predictions.",
        icon: "banknote"
    }
];

const IndustriesSection = () => {
    const [currentPage, setCurrentPage] = useState(0);
    const [selectedIndustry, setSelectedIndustry] = useState(null);
    const cardsPerPage = 3;
    const totalPages = Math.ceil(industries.length / cardsPerPage);

    const startIndex = currentPage * cardsPerPage;
    const visibleIndustries = industries.slice(startIndex, startIndex + cardsPerPage);

    const nextPage = () => {
        setCurrentPage((prev) => (prev + 1) % totalPages);
    };

    const prevPage = () => {
        setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
    };

    return (
        <section id="industries" className="py-8 md:py-32 min-h-screen flex items-center relative">
            <div className="w-full max-w-7xl mx-auto px-4 md:px-8">
                <h2 className="text-3xl md:text-5xl font-bold mb-8 md:mb-16 opacity-0 animate-[fadeIn_1s_ease-out_forwards] text-center">
                    Transforming Industries with AI-Driven Precision
                </h2>

                {/* Mobile View */}
                <div className="md:hidden flex flex-col h-[60vh] justify-between">
                    <div className="flex-1 grid grid-cols-1 gap-4">
                        {visibleIndustries.map((industry, index) => (
                            <div 
                                key={`${industry.title}-${currentPage}-${index}`}
                                className="w-full opacity-0 animate-zoomInRotate"
                                style={{ animationDelay: `${index * 0.15}s` }}
                                onClick={() => setSelectedIndustry(industry)}
                            >
                                <div className="industry-card">
                                    <i data-lucide={industry.icon} className="w-6 h-6 mb-2"></i>
                                    <h3 className="text-base font-medium">
                                        {industry.title}
                                    </h3>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Navigation Controls */}
                    <div className="mt-6 flex items-center justify-between px-4">
                        <button onClick={prevPage} className="nav-button">
                            <ChevronLeft size={24} />
                        </button>

                        <div className="flex gap-2">
                            {Array.from({ length: totalPages }, (_, i) => (
                                <button
                                    key={i}
                                    onClick={() => setCurrentPage(i)}
                                    className={`pagination-dot ${currentPage === i ? 'active' : ''}`}
                                />
                            ))}
                        </div>

                        <button onClick={nextPage} className="nav-button">
                            <ChevronRight size={24} />
                        </button>
                    </div>
                </div>

                {/* Desktop Grid View */}
                <div className="hidden md:grid grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-6">
                    {industries.map((industry, index) => (
                        <div 
                            key={industry.title}
                            className="w-full opacity-0 animate-zoomInRotate cursor-pointer"
                            style={{ animationDelay: `${index * 0.15}s` }}
                            onClick={() => setSelectedIndustry(industry)}
                        >
                            <div className="industry-card">
                                <i data-lucide={industry.icon} className="w-8 h-8 mb-3 text-orange-500"></i>
                                <h3 className="text-lg font-medium">
                                    {industry.title}
                                </h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Modal */}
            {selectedIndustry && (
                <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4">
                    <div className="modal-content text-center">
                        <button 
                            className="absolute top-4 right-4 p-2 hover:bg-white/10 rounded-full"
                            onClick={() => setSelectedIndustry(null)}
                        >
                            <X size={24} />
                        </button>
                        
                        <div className="flex flex-col items-center gap-4 mb-6">
                            <i data-lucide={selectedIndustry.icon} className="w-8 h-8 text-orange-500 mb-2"></i>
                            <h3 className="text-2xl font-bold">{selectedIndustry.title}</h3>
                        </div>
                        
                        <p className="text-gray-300 text-lg leading-relaxed">
                            {selectedIndustry.description}
                        </p>
                        
                        <div className="flex justify-center mt-8">
                            <button 
                                 onClick={() => window.open('https://www.linkedin.com/company/alzairai/', '_blank')}
                                className="px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full
                                         hover:from-orange-600 hover:to-orange-700 transition-all duration-300
                                         flex items-center gap-2 text-white font-medium"
                            >
                                Learn More
                                <ChevronRight size={20} />
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default IndustriesSection;