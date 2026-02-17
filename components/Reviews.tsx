
import React from 'react';
import { Star, Quote, Wind } from 'lucide-react';

const reviewsData = [
  {
    author: "Ellaine",
    role: "Local Guide",
    content: "Burton was scheduled to come to my rental property to check out my AC units that we had installed 6 months ago. Not only did he provide excellent service, he also went above and beyond.",
    stars: 5,
    gradient: "from-lime-400 to-lime-600"
  },
  {
    author: "Noel Lair",
    role: "Verified Customer",
    content: "When we started this journey to install an air conditioner into our home, quite overwhelming to say the least. From day 1 we were happy with the install crew, very knowledgeable.",
    stars: 5,
    gradient: "from-lime-500 to-cyan-500"
  },
  {
    author: "Recent Client",
    role: "Happy Resident",
    content: "Abel provides excellent service at a great price. This is the second time Abel has responded to our call quickly. Highly recommended for any AC needs!",
    stars: 5,
    gradient: "from-cyan-500 to-blue-500"
  }
];

const Reviews: React.FC = () => {
  return (
    <section id="reviews" className="py-32 bg-lime-50/30 text-gray-900 overflow-hidden relative">
      <div className="absolute top-0 right-0 p-20 opacity-5 pointer-events-none">
        <Wind size={600} className="text-lime-400" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-center mb-20 gap-12 text-center lg:text-left">
          <div className="max-w-2xl">
            <span className="text-lime-600 font-black uppercase tracking-[0.3em] text-sm mb-4 block">Trusted Reviews</span>
            <h2 className="text-5xl md:text-6xl font-black mb-6 leading-tight">Hear From Your Neighbors</h2>
            <p className="text-gray-600 text-xl font-medium">
              Join the 88+ satisfied customers in Van Nuys who trust AG Heating & Air for their home comfort.
            </p>
          </div>
          <div className="flex flex-col items-center bg-white px-10 py-8 rounded-[2.5rem] shadow-xl border border-lime-100">
            <div className="flex text-yellow-400 mb-2">
              {[...Array(5)].map((_, i) => <Star key={i} size={28} fill="currentColor" />)}
            </div>
            <span className="text-5xl font-black text-gray-900">4.3</span>
            <span className="text-lime-600 font-bold uppercase tracking-widest text-xs mt-2">Overall Google Score</span>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {reviewsData.map((review, i) => (
            <div key={i} className="bg-white p-10 rounded-[2.5rem] shadow-lg border border-gray-100 flex flex-col h-full relative group hover:shadow-2xl hover:shadow-lime-200/50 transition-all duration-500">
              <Quote className="text-lime-500/10 absolute bottom-10 right-10" size={80} strokeWidth={1} />
              
              <div className="flex text-lime-500 mb-6">
                {[...Array(review.stars)].map((_, j) => <Star key={j} size={18} fill="currentColor" />)}
              </div>
              
              <p className="text-gray-700 text-lg mb-10 flex-grow italic font-medium leading-relaxed relative z-10">
                "{review.content}"
              </p>
              
              <div className="flex items-center pt-6 border-t border-gray-100">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${review.gradient} flex items-center justify-center text-white font-black text-xl mr-5 shadow-lg`}>
                  {review.author[0]}
                </div>
                <div>
                  <h4 className="font-black text-gray-900 text-lg">{review.author}</h4>
                  <p className="text-lime-600 font-bold text-xs uppercase tracking-widest">{review.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
