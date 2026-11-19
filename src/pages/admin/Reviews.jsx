import React, { useState, useEffect } from 'react';
import { FiMessageSquare, FiX, FiStar, FiClock, FiTrash2, FiCornerUpLeft, FiFilter } from 'react-icons/fi';
import { FaStar } from 'react-icons/fa';
import { useOutletContext } from 'react-router-dom';

// 1. Mock Data: Used as the default when localStorage is empty
const initialReviews = [
    { id: "REV-001", customerName: "Sok San", foodName: "Beef Lok Lak", rating: 5, comment: "Absolutely delicious! The meat was so tender and the sauce was perfect.", date: "Nov 17, 2026", status: "Pending" },
    { id: "REV-002", customerName: "Chan Dara", foodName: "Seafood Amok", rating: 4, comment: "Very good taste, but the portion was a bit small for the price.", date: "Nov 16, 2026", status: "Replied" },
    { id: "REV-003", customerName: "Ly Hour", foodName: "Grilled Pork Rice", rating: 5, comment: "My go-to breakfast spot. Always fresh and served hot. Highly recommend!", date: "Nov 16, 2026", status: "Pending" },
    { id: "REV-004", customerName: "Sim Sreyrath", foodName: "Khmer Red Curry", rating: 3, comment: "It was okay, but a little too spicy for my liking. Fast delivery though.", date: "Nov 15, 2026", status: "Replied" },
    { id: "REV-005", customerName: "Chea Vuthy", foodName: "Beef Lok Lak", rating: 5, comment: "Best Lok Lak in town! Will definitely order again next week.", date: "Nov 14, 2026", status: "Pending" },
    { id: "REV-006", customerName: "Ouk Sovann", foodName: "Fried Spring Rolls", rating: 2, comment: "Arrived a bit cold and soggy. Usually it's better.", date: "Nov 12, 2026", status: "Pending" },
];

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    const [filterRating, setFilterRating] = useState('All');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedReviewId, setSelectedReviewId] = useState(null);
    const [replyText, setReplyText] = useState('');
    const { search = '' } = useOutletContext() || {};

    //Fetch data from LocalStorage on component mount
    useEffect(() => {
        const storedReviews = localStorage.getItem('admin_reviews');

        if (storedReviews === null) {
            // If no data exists, save the initial mock data to LocalStorage
            localStorage.setItem('admin_reviews', JSON.stringify(initialReviews));
            setReviews(initialReviews);
        } else {
            // If data exists, parse and use it
            setReviews(JSON.parse(storedReviews));
        }
    }, []);

    //  Handle Delete Action
    const handleDelete = (id) => {
        const updatedReviews = reviews.filter(review => review.id !== id);

        // Update state
        setReviews(updatedReviews);
        // Instantly update LocalStorage so it persists after refresh
        localStorage.setItem('admin_reviews', JSON.stringify(updatedReviews));
    };

    // Handle Reply Action
    const handleReply = (id) => {
        const updatedReviews = reviews.map(review =>
            review.id === id ? { ...review, status: "Replied" } : review
        );

        // Update state
        setReviews(updatedReviews);
        // Instantly update LocalStorage so the status change persists
        localStorage.setItem('admin_reviews', JSON.stringify(updatedReviews));
    };

    // Filter reviews based on selected dropdown value
    const filteredReviews = reviews.filter((review) => {
        const searchTerm = (search || '').toLowerCase();
        const matchesSearch = 
            review.customerName.toLowerCase().includes(searchTerm) ||
            review.foodName.toLowerCase().includes(searchTerm);
        const matchesRating = filterRating === 'All' || review.rating === parseInt(filterRating);
        return matchesSearch && matchesRating;
    });

    // Calculate Metrics dynamically based on the current state
    const totalReviews = reviews.length;
    const avgRating = totalReviews > 0
        ? (reviews.reduce((acc, curr) => acc + curr.rating, 0) / totalReviews).toFixed(1)
        : "0.0";
    const pendingReplies = reviews.filter(r => r.status === 'Pending').length;

    const stats = [
        { title: "Total Reviews", value: totalReviews, icon: <FiMessageSquare />, color: "text-blue-500", bg: "bg-blue-100 dark:bg-blue-500/20" },
        { title: "Average Rating", value: `${avgRating} Stars`, icon: <FiStar />, color: "text-orange-500", bg: "bg-orange-100 dark:bg-orange-500/20" },
        { title: "Pending Replies", value: pendingReplies, icon: <FiClock />, color: "text-red-500", bg: "bg-red-100 dark:bg-red-500/20" }
    ];

    // Helper function to render stars visually
    const renderStars = (rating) => {
        return [...Array(5)].map((_, index) => (
            <FaStar key={index} className={`w-4 h-4 ${index < rating ? 'text-orange-400' : 'text-gray-300 dark:text-gray-600'}`} />
        ));
    };

    const openReplyModal = (id) => {
        setSelectedReviewId(id);
        setIsModalOpen(true);
    };

    const submitReply = () => {
        if (!replyText.trim()) return; // បើអត់មានវាយអក្សរ កុំទាន់អោយ Send

        const updatedReviews = reviews.map(review =>
            review.id === selectedReviewId
                ? { ...review, status: "Replied", adminReply: replyText }
                : review
        );

        setReviews(updatedReviews);
        localStorage.setItem('admin_reviews', JSON.stringify(updatedReviews));

        // close Modal and Clear text
        setIsModalOpen(false);
        setReplyText('');
        setSelectedReviewId(null);
    };

    return (
        <div className="space-y-8">

            {/* Header Section */}
            <div className="relative rounded-3xl p-2 overflow-hidden flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div className="relative z-10">
                    <h1 className="text-3xl font-extrabold text-[#1B254B] dark:text-white">
                        Customer Reviews
                    </h1>
                    <hr className="w-[100px] border-t-4 border-orange-500 mt-1" />
                    <p className="text-gray-500 mt-2">
                        Monitor customer feedback and respond to comments.
                    </p>
                </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {stats.map((stat, index) => (
                    <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-sm flex items-center justify-between transition-colors duration-200">
                        <div>
                            <p className="text-sm font-medium text-gray-500 dark:text-gray-400">{stat.title}</p>
                            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mt-1">{stat.value}</h3>
                        </div>
                        <div className={`p-4 rounded-xl ${stat.bg} ${stat.color}`}>
                            <span className="text-2xl">{stat.icon}</span>
                        </div>
                    </div>
                ))}
            </div>

            {/* Review List & Filter Header */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-sm overflow-hidden transition-colors duration-200">

                <div className="px-6 py-4 border-b border-gray-100 dark:border-gray-700 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                    <div className='flex items-center'>
                        <div className='flex justify-center items-center text-2xl text-orange-500 border-l-4 border-orange-500 px-4'>
                            <FiMessageSquare />
                        </div>
                        <h2 className="text-lg font-bold text-gray-800 dark:text-white">Recent Feedback</h2>
                    </div>

                    {/* Filter Dropdown */}
                    <div className="flex items-center space-x-2 bg-gray-50 dark:bg-gray-700/50 border border-gray-200 dark:border-gray-600 rounded-lg px-3 py-2">
                        <FiFilter className="text-gray-500 dark:text-gray-400" />
                        <select
                            value={filterRating}
                            onChange={(e) => setFilterRating(e.target.value)}
                            className="bg-transparent text-sm font-medium text-gray-700 dark:text-gray-200 outline-none cursor-pointer"
                        >
                            <option value="All">All Ratings</option>
                            <option value="5">5 Stars Only</option>
                            <option value="4">4 Stars Only</option>
                            <option value="3">3 Stars Only</option>
                            <option value="2">2 Stars Only</option>
                            <option value="1">1 Star Only</option>
                        </select>
                    </div>
                </div>

                {/* Review List Content */}
                <div className="divide-y divide-gray-100 dark:divide-gray-700">
                    {filteredReviews.length > 0 ? (
                        filteredReviews.map((review) => (
                            <div key={review.id} className="p-6 hover:bg-gray-50 dark:hover:bg-gray-700/30 transition-colors duration-150">
                                <div className="flex flex-col md:flex-row gap-6">

                                    {/* Left: Avatar & Customer Info */}
                                    <div className="flex items-start gap-4 md:w-1/4 shrink-0">
                                        <img
                                            src={`https://ui-avatars.com/api/?name=${encodeURIComponent(review.customerName)}&background=f97316&color=fff&rounded=true`}
                                            alt={review.customerName}
                                            className="w-12 h-12 rounded-full border-2 border-white dark:border-gray-700 shadow-sm"
                                        />
                                        <div>
                                            <h4 className="text-sm font-bold text-gray-900 dark:text-white">{review.customerName}</h4>
                                            <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">{review.date}</p>
                                            <span className={`inline-block mt-2 px-2.5 py-0.5 rounded-full text-[10px] font-semibold uppercase tracking-wide
                                                ${review.status === 'Replied' ? 'bg-green-100 text-green-700 dark:bg-green-500/20 dark:text-green-400' : 'bg-orange-100 text-orange-700 dark:bg-orange-500/20 dark:text-orange-400'}`}>
                                                {review.status}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Middle: Rating, Food Item, and Comment */}
                                    <div className="flex-1">
                                        <div className="flex items-center gap-2 mb-2">
                                            <div className="flex">{renderStars(review.rating)}</div>
                                            <span className="text-xs font-medium text-gray-400">• Ordered: <span className="text-gray-700 dark:text-gray-300">{review.foodName}</span></span>
                                        </div>
                                        <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                                            "{review.comment}"
                                        </p>
                                    </div>

                                    {/* Right: Actions */}
                                    <div className="flex md:flex-col justify-end gap-2 md:w-32 shrink-0">
                                        {/* Reply Button */}
                                        <button
                                            onClick={() => openReplyModal(review.id)}
                                            disabled={review.status === 'Replied'}
                                            className={`inline-flex items-center justify-center px-3 py-2 rounded-lg text-sm font-medium transition-colors cursor-pointer
                                                ${review.status === 'Replied'
                                                    ? 'bg-gray-100 text-gray-400 cursor-not-allowed dark:bg-gray-800 dark:text-gray-600'
                                                    : 'bg-orange-50 text-orange-600 hover:bg-orange-100 dark:bg-orange-500/10 dark:text-orange-400 dark:hover:bg-orange-500/20'}`}
                                        >
                                            <FiCornerUpLeft className="mr-2" />
                                            {review.status === 'Replied' ? 'Replied' : 'Reply'}
                                        </button>

                                        {/* Delete Button */}
                                        <button
                                            onClick={() => handleDelete(review.id)}
                                            className="inline-flex items-center cursor-pointer justify-center px-3 py-2 bg-red-50 text-red-600 hover:bg-red-100 dark:bg-red-500/10 dark:text-red-400 dark:hover:bg-red-500/20 rounded-lg text-sm font-medium transition-colors"
                                        >
                                            <FiTrash2 className="mr-2" />
                                            Delete
                                        </button>
                                    </div>
                                </div>

                            </div>
                        ))
                    ) : (
                        <div className="text-center py-16">
                            <FiStar className="mx-auto h-12 w-12 text-gray-300 dark:text-gray-600 mb-4" />
                            <p className="text-gray-500 dark:text-gray-400 text-lg">No reviews found for this rating.</p>
                        </div>
                    )}
                </div>
            </div>

            {isModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm transition-opacity">
                    <div className="bg-white dark:bg-gray-800 rounded-2xl w-full max-w-md p-6 shadow-2xl relative animate-fade-in-up">

                        <button
                            onClick={() => setIsModalOpen(false)}
                            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors"
                        >
                            <FiX className="text-2xl" />
                        </button>

                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                            Reply to Review
                        </h2>

                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                    Your Response
                                </label>
                                <textarea
                                    rows="4"
                                    value={replyText}
                                    onChange={(e) => setReplyText(e.target.value)}
                                    className="w-full px-4 py-3 bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl focus:ring-2 focus:ring-orange-500 outline-none text-gray-900 dark:text-white resize-none transition-all"
                                    placeholder="Type your response to the customer..."
                                ></textarea>
                            </div>
                        </div>

                        <div className="mt-6 flex gap-3 pt-4 border-t border-gray-100 dark:border-gray-700">
                            <button
                                type="button"
                                onClick={() => setIsModalOpen(false)}
                                className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-800 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-white py-2.5 rounded-xl font-medium transition-colors"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={submitReply}
                                className="flex-1 bg-orange-500 hover:bg-orange-600 text-white py-2.5 rounded-xl font-medium shadow-md shadow-orange-500/30 transition-all"
                            >
                                Send Reply
                            </button>
                        </div>

                    </div>
                </div>
            )}
        </div>
    );
};

export default Reviews;