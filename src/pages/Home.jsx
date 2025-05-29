import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ConcertCard from '../components/ConcertCard';
import image1 from '../assets/image1.png';
import image2 from '../assets/image2.png';
import image3 from '../assets/image3.png';
import image4 from '../assets/image4.png';
import image5 from '../assets/image5.png';
import image6 from '../assets/image6.png';

const dummyConcerts = [
  {
    id: 1,
    title: "Night of Jazz",
    image: image1,
    desc: "Jakarta Jazz Ensemble",
    date: "Sunday, 15 June 2025",
    location: "Grand Amphitheater, Jakarta",
    price: "Rp 350.000",
    ticketsLeft: 245,
  },
  {
    id: 2,
    title: "Classical Melodies",
    image: image2,
    desc: "Surabaya Symphony Orchestra",
    date: "Saturday, 28 June 2025",
    location: "Heritage Hall, Surabaya",
    price: "Rp 300.000",
    ticketsLeft: 430,
  },
  {
    id: 3,
    title: "Rock Revolution",
    image: image3,
    desc: "Thunder Strike",
    date: "Saturday, 5 July 2025",
    location: "Mountain View Arena, Bandung",
    price: "Rp 400.000",
    ticketsLeft: 320,
  },
  {
    id: 4,
    title: "Indie Folk Night",
    image: image4,
    desc: "Forest Whispers",
    date: "Friday, 11 July 2025",
    location: "The Garden Stage, Yogyakarta",
    price: "Rp 250.000",
    ticketsLeft: 180,
  },
  {
    id: 5,
    title: "Electronic Vibes",
    image: image5,
    desc: "Neon Dreams",
    date: "Saturday, 19 July 2025",
    location: "Skyline Club, Jakarta",
    price: "Rp 450.000",
    ticketsLeft: 95,
  },
  {
    id: 6,
    title: "Pop Sensation",
    image: image6,
    desc: "StarLight",
    date: "Sunday, 27 July 2025",
    location: "Arena Mega, Surabaya",
    price: "Rp 500.000",
    ticketsLeft: 67,
  }
];

const categories = ['All', 'Jazz', 'Classical', 'Rock', 'Indie', 'Electronic', 'Pop'];

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredConcerts = dummyConcerts.filter(concert => {
    const matchesCategory = selectedCategory === 'All' || concert.title.toLowerCase().includes(selectedCategory.toLowerCase());
    const matchesSearch = concert.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         concert.desc.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         concert.location.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/5 to-pink-600/5"></div>
        <div className="relative max-w-7xl mx-auto px-4 py-20 sm:py-24">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light text-gray-900 mb-6 tracking-tight">
             
              <span className="block font-medium bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                senandung.id
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed">
              Karena Musik Lebih Indah Saat Di Lihat Langsung
            </p>
            
            {/* Search Bar */}
            <div className="max-w-lg mx-auto mb-8">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search concerts, artists, or venues..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-6 py-4 rounded-2xl border border-gray-200 focus:border-purple-400 focus:ring-4 focus:ring-purple-100 outline-none transition-all duration-300 text-gray-700 bg-white/80 backdrop-blur-sm shadow-sm"
                />
                <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                  <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
                      : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200 hover:border-purple-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Concerts Section */}
      <section className="max-w-7xl mx-auto px-4 pb-20">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-10">
          <div>
            <h2 className="text-3xl font-light text-gray-900 mb-2">
              {selectedCategory === 'All' ? 'All Concerts' : `${selectedCategory} Concerts`}
            </h2>
            <p className="text-gray-600">
              {filteredConcerts.length} {filteredConcerts.length === 1 ? 'concert' : 'concerts'} available
            </p>
          </div>
          
          {/* View Toggle */}
          <div className="hidden sm:flex bg-white border border-gray-200 rounded-xl p-1">
            <button className="px-4 py-2 rounded-lg bg-purple-50 text-purple-600 text-sm font-medium">
              Grid
            </button>
            <button className="px-4 py-2 rounded-lg text-gray-600 text-sm font-medium hover:bg-gray-50">
              List
            </button>
          </div>
        </div>

        {/* Concert Grid */}
        {filteredConcerts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredConcerts.map((item) => (
              <Link 
                to={`/konser/${item.id}`} 
                key={item.id}
                className="group block transform transition-all duration-300 hover:scale-105"
              >
                <ConcertCard concert={item} />
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="w-24 h-24 mx-auto mb-6 bg-gray-100 rounded-full flex items-center justify-center">
              <svg className="w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.5-.785-6.25-2.109m12.5 0A7.962 7.962 0 0012 15c2.34 0 4.5-.785 6.25-2.109M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z" />
              </svg>
            </div>
            <h3 className="text-xl font-medium text-gray-900 mb-2">No concerts found</h3>
            <p className="text-gray-600 mb-6">
              Try adjusting your search or filter to find what you're looking for.
            </p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('All');
              }}
              className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-medium hover:shadow-lg transition-all duration-300"
            >
              Clear Filters
            </button>
          </div>
        )}
      </section>

      {/* Newsletter Section */}
      <section className="bg-gradient-to-r from-purple-50 to-pink-50 border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 py-16 text-center">
          <h3 className="text-2xl font-light text-gray-900 mb-4">
            Never Miss a Concert
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter and be the first to know about upcoming concerts, 
            exclusive presales, and special offers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-xl border border-gray-200 focus:border-purple-400 focus:ring-4 focus:ring-purple-100 outline-none transition-all duration-300"
            />
            <button className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-medium hover:shadow-lg transition-all duration-300 whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;