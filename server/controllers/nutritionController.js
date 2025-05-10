const nutritionDB = require('../data/nutritionDB.json');
const measurements = require('../data/measurements.json');
const recipes = require('../data/recipeMockDB.json');
const synonyms = require('../data/synonyms.json');
const { convertUnits } = require('../utils/unitConverter');
const { mapIngredient } = require('../utils/ingredientMapper');
const { calculateNutrition } = require('../utils/nutritionCalculator');
const { logAssumptions } = require('../utils/logger');

exports.estimateNutrition = async (req, res) => {
    const { dish } = req.body;
    if (!dish) return res.status(400).json({ error: 'Dish name required' });

    let assumptions = [];
    const recipe = recipes[dish.toLowerCase()] || null;

    if (!recipe) {
        assumptions.push(`Recipe for "${dish}" not found. Using fallback ingredients.`);
        return res.status(404).json({ error: 'Recipe not found', assumptions });
    }

    let totalNutrition = { calories: 0, protein: 0, fat: 0, carbs: 0 };
    let totalWeight = 0;

    for (let item of recipe.ingredients) {
        const mapped = mapIngredient(item.name, synonyms);
        const grams = convertUnits(item.quantity, item.unit, mapped, measurements);
        const nutrition = calculateNutrition(mapped, grams, nutritionDB);

        if (nutrition) {
            totalNutrition.calories += nutrition.calories;
            totalNutrition.protein += nutrition.protein;
            totalNutrition.fat += nutrition.fat;
            totalNutrition.carbs += nutrition.carbs;
            totalWeight += grams;
        } else {
            assumptions.push(`No nutrition data found for ${item.name}`);
        }
    }

    const servingSize = 180; // 1 katori
    const scalingFactor = servingSize / totalWeight;
    for (let key in totalNutrition) {
        totalNutrition[key] = +(totalNutrition[key] * scalingFactor).toFixed(2);
    }

    logAssumptions(dish, assumptions);

    res.json({
        dish,
        nutritionPer180g: totalNutrition,
        dishType: recipe.dishType || 'Unknown',
        assumptions
    });
};