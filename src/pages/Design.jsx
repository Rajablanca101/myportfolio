import React, { useState, useEffect, useRef } from 'react';
import portfolioItems1 from '../../data/portfolio.json';
import portfolioItems2 from '../../data/logos.json'; // Import for Logo tab
import portfolioItems3 from '../../data/web.json'; // Import for Web tab
import PortfolioImages from '../components/PortfolioImages';

const tabs = ['Print', 'Logo', 'Web'];

const Design = () => {
  const [activeTab, setActiveTab] = useState('Print');
  const [selectedItem, setSelectedItem] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const inputRef = useRef(null);

  // Automatically switch tabs if query matches tags in another tab
  useEffect(() => {
    if (!searchQuery.trim()) return;

    const lowerQuery = searchQuery.toLowerCase();

    for (const tab of tabs) {
      const items =
        tab === 'Logo' ? portfolioItems2 : tab === 'Web' ? portfolioItems3 : portfolioItems1;
      const matching = items.filter(
        (item) =>
          item.category.toLowerCase() === tab.toLowerCase() &&
          item.tags &&
          Array.isArray(item.tags) &&
          item.tags.some((tag) => tag.toLowerCase().includes(lowerQuery))
      );

      if (matching.length > 0) {
        setActiveTab(tab);
        break;
      }
    }
  }, [searchQuery]);

  // Click outside resets the search
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (inputRef.current && !inputRef.current.contains(event.target)) {
        setSearchQuery('');
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Select data source based on active tab
  const currentItems =
    activeTab === 'Logo' ? portfolioItems2 : activeTab === 'Web' ? portfolioItems3 : portfolioItems1;

  // Filter items based on current tab and search query
  const filteredItems = currentItems
    .filter((item) => item.category.toLowerCase() === activeTab.toLowerCase())
    .filter((item) => {
      if (!searchQuery.trim()) return true;
      return item.tags && Array.isArray(item.tags)
        ? item.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()))
        : false;
    });

  return (
    <div className="Main-wrapper">
      {/* Intro Section */}
      <section className="designintro">
        <h2>Branding & DESIGN</h2>
        <p className="gradient-text2">
        Design is the final visual stage of a larger process. Before reaching it, several key steps must be taken to ensure the result is balanced and aligned with the brand’s goals. These are the steps I follow in my process.

        </p>
      </section>

      {/* Image Section */}
      <section className="banner-section process">
        <img
          src="../dist/images/Design/Branding-process.png"
          alt="Skills Overview"
          className="full-width-image"
        />
      </section>

      {/* Redbox Section */}
      <section className="redbox">
        <h2 className="redbox-heading">
          <span>DANCING TO COLORS AND SHAPES</span>
        </h2>
        <p className="redbox-paragraph">
        In the vibrant world of  design, my expertise brings colors and shapes to life. With a passion for visual storytelling and a keen eye for detail, I create compelling designs that captivate and communicate effectively.
        </p>
      </section>

      {/* Elephant Message */}
     

      {/* Tabs */}
      <div className="portfolio-tabs">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={activeTab === tab ? 'active' : ''}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Gallery */}
      <div className={`portfolio-gallery ${activeTab.toLowerCase()}-tab`}>
        {filteredItems.length > 0 ? (
          filteredItems.map((item) => (
            <div key={item.id} className="gallery-item">
              <img
                src={item.image}
                alt={item.title || 'Portfolio Item'}
                onClick={() => setSelectedItem(item)}
              />
              <p className="item-title">{item.title || 'Untitled'}</p>
            </div>
          ))
        ) : searchQuery.trim() ? (
          <p className="no-results">No items match your search.</p>
        ) : (
          <p className="no-results">No items available for this category.</p>
        )}
      </div>

      {/* Search Input */}
      <div className="search-wrapper">
        <input
          ref={inputRef}
          type="text"
          placeholder="Search by tag..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="search-input"
          aria-label="Search portfolio items by tag"
        />
        <span className="tagexamples">e.g., flyer, logo, brochure, Book, handout </span>
      </div>

      {/* Modal */}
      {selectedItem && (
        <PortfolioImages
          item={selectedItem}
          onClose={() => setSelectedItem(null)}
        />
      )}
    </div>
  );
};

export default Design;