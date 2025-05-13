import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from './components/Header';
import PortfolioImages from './components/PortfolioImages';
import Home from './pages/Home';
import UX from './pages/UX';

import Accessibility from './pages/Accessibility';
import Design from './pages/Design'; // ✅ NEW DESIGN PAGE
import Footer from './components/Footer';

const App = () => {
  const [portfolioItems, setPortfolioItems] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    fetch('/portfolio.json')
      .then((res) => res.json())
      .then((data) => setPortfolioItems(data));
  }, []);

  const filteredItems = portfolioItems.filter((item) => {
    const query = searchQuery.toLowerCase();
    const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
    const matchesSearch = item.tags?.some((tag) => tag.toLowerCase().includes(query));
    return matchesCategory && matchesSearch;
  });

  return (
    <Router>
      <div className="app">
        <Header
          setSearchQuery={setSearchQuery}
          setSelectedCategory={setSelectedCategory}
          searchQuery={searchQuery}
        />
        <div className="main">
          <div className="content-container">
            <Routes>
              <Route
                path="/"
                element={<Home items={filteredItems} onSelectItem={setSelectedItem} />}
              />
              <Route
                path="/UX"
                element={<UX items={filteredItems} onSelectItem={setSelectedItem} />}
              />
         
              <Route
                path="/Accessibility"
                element={<Accessibility items={filteredItems} onSelectItem={setSelectedItem} />}
              />
              <Route
                path="/Design"
                element={<Design />}
              />
            </Routes>
          </div>
        </div>

        {selectedItem && (
          <PortfolioImages item={selectedItem} onClose={() => setSelectedItem(null)} />
        )}

        <Footer />
      </div>
    </Router>
  );
};

export default App;