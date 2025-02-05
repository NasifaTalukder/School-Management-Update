import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// import './styles.css';

const events = [
  { title: 'DUET TECHFEST 2K23 – Grand Festival for Technology Enthusiasts', date: 'July 14, 2023' },
  { title: 'International Conference on Emerging Technologies', date: 'June 13, 2023' },
];

const notices = [
  { date: '27 JAN 2025', title: 'ভর্তির নতুন বিজ্ঞপ্তি', category: 'Others' },
  { date: '26 JAN 2025', title: 'NOC/GO Notice', category: 'NOC/GO Notices' },
  { date: '26 JAN 2025', title: 'e-GP Tender Notice', category: 'Tender Notices' },
];

const news = [
  { date: '25 JAN 2025', title: 'University Ranked Top in Research' },
  { date: '24 JAN 2025', title: 'New Engineering Lab Inaugurated' },
];

const LatestNotice = () => {
  const [activeTab, setActiveTab] = useState('notices');

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <div className="container mx-auto p-4 bg-white rounded-lg shadow-lg">
      <h2 className="text-lg font-semibold text-center mb-4">Events</h2>
      <Slider {...settings} className="mb-4">
        {events.map((event, index) => (
          <div key={index} className="p-4 text-center">
            <h3 className="text-main-color font-bold">{event.title}</h3>
            <p className="text-gray-500">{event.date}</p>
          </div>
        ))}
      </Slider>

      <div className="tabs mt-4 border-b flex">
        <button
          className={`flex-1 p-2 text-center ${activeTab === 'notices' ? 'border-b-2 border-main-color font-bold' : ''}`}
          onClick={() => setActiveTab('notices')}
        >
          Notices
        </button>
        <button
          className={`flex-1 p-2 text-center ${activeTab === 'news' ? 'border-b-2 border-main-color font-bold' : ''}`}
          onClick={() => setActiveTab('news')}
        >
          News
        </button>
      </div>

      <div className="content h-40 overflow-y-auto mt-2 p-2 border rounded">
        {activeTab === 'notices' && notices.map((item, index) => (
          <div key={index} className="p-2 border-b">
            <span className="text-green-600 font-bold">{item.date}</span> - {item.title} ({item.category})
          </div>
        ))}
        {activeTab === 'news' && news.map((item, index) => (
          <div key={index} className="p-2 border-b">
            <span className="text-main-color font-bold">{item.date}</span> - {item.title}
          </div>
        ))}
      </div>
    </div>
  );
};

export default LatestNotice;
