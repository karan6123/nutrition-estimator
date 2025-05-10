const calculateNutrition = (ingredient, grams, db) => {
    const data = db[ingredient];
    if (!data) return null;
    const factor = grams / 100;
    return {
        calories: data.calories * factor,
        protein: data.protein * factor,
        fat: data.fat * factor,
        carbs: data.carbs * factor
    };
};
module.exports = { calculateNutrition };