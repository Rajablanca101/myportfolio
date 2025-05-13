import React from 'react';
import './PortfolioImages.css';

const PortfolioImages = ({ item, onClose }) => (
  <div className="modal" onClick={onClose}>
    <div className="modal-content" onClick={e => e.stopPropagation()}>
      <img src={item.image} alt={item.title} style={{ width: '100%' }} />
    </div>
  </div>
);

export default PortfolioImages;