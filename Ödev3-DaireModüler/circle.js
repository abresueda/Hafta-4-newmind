//Daire alanını hesaplamak için.
const circleArea = (radius) => {
    return Math.PI * Math.pow(radius, 2);
};

//Daire çevresini hesaplamak için.
const circleCircumference = (radius) => {
    return 2 * Math.PI * radius;
};

module.exports = { circleArea, circleCircumference };