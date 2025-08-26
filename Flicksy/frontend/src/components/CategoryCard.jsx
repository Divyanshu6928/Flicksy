import React from 'react';
import '../styles/CategoryCard.css';

const cardname = [
  "FlickBox",
  "ExamPick",
  "Emergency Kit",
  "Party Pack",
  "Instant Foods",
  "Gifts & Surprises",
  "Essentials",
  "Electronics"
];

const CategoryCard = () => {
  return (
    <div className="category-container">
      {cardname.map((name, index) => (
        <div key={index} className="category-card">
          {name}
        </div>
      ))}      
    </div>
  );
};

export default CategoryCard;
