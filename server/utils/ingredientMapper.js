const mapIngredient = (name, synonyms) => {
    name = name.toLowerCase();
    for (let key in synonyms) {
        if (synonyms[key].includes(name)) {
            return key;
        }
    }
    return name; // fallback to original
};
module.exports = { mapIngredient };