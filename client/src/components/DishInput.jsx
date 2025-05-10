import React, { useState } from 'react';
import { estimateNutrition } from '../services/api';

function DishInput({ setResult }) {
  const [dish, setDish] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const res = await estimateNutrition(dish);
    setResult(res);
    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
  <input
    type="text"
    className="input"
    placeholder="Enter dish name"
    value={dish}
    onChange={(e) => setDish(e.target.value)}
  />
  <button type="submit">
    {loading ? 'Estimating...' : 'Estimate Nutrition'}
  </button>
</form>

  );
}

export default DishInput;