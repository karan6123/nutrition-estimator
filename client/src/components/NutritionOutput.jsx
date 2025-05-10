import React from 'react';

function NutritionOutput({ data }) {
  const { dish, dishType, nutritionPer180g } = data;

  return (
    <div className="my-4">
      <h2 className="text-xl font-semibold mb-2">Nutrition for: {dish}</h2>
      <p><strong>Dish Type:</strong> {dishType}</p>
      <div className="grid grid-cols-2 gap-4 mt-2">
  {Object.entries(nutritionPer180g).map(([key, value]) => (
    <div key={key} className="nutrition-box">
      <strong>{key.toUpperCase()}</strong>: {value} g
    </div>
  ))}
      </div>
    </div>
  );
}

export default NutritionOutput;