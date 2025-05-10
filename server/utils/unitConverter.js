const convertUnits = (quantity, unit, ingredient, measurements) => {
    unit = unit.toLowerCase();
    if (unit === 'g' || unit === 'gram') return quantity;
    const ref = measurements[unit];
    if (ref && ref[ingredient]) {
        return quantity * ref[ingredient];
    } else if (ref && ref['default']) {
        return quantity * ref['default'];
    } else {
        return quantity * 100; // fallback
    }
};
module.exports = { convertUnits };