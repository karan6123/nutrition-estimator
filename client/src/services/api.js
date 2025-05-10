import axios from 'axios';

const API_URL = 'http://localhost:5000/api/estimate';

export const estimateNutrition = async (dish) => {
  try {
    const res = await axios.post(API_URL, { dish });
    return res.data;
  } catch (err) {
    return {
      dish,
      dishType: 'Unknown',
      nutritionPer180g: {},
      assumptions: ['Failed to fetch data from API. Dish may not exist.']
    };
  }
};