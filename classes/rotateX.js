import Circle from "./circle.js";

export const rotateCoordinatesClockwiseX = function(coordinates) {
    const center = new Circle(50, 50); // Assuming the center of rotation is (50, 50)

    // Iterate through each coordinate and calculate the new position
    const rotatedCoordinates = coordinates.map(circle => {
        // Translate the coordinate relative to the center of rotation
        const translatedX = circle.x - center.x;
        const translatedY = circle.y - center.y;

        // Apply rotation formula: x' = cos(theta) * x - sin(theta) * y, y' = sin(theta) * x + cos(theta) * y
        const rotatedX = Math.cos(Math.PI / 2) * translatedX - Math.sin(Math.PI / 2) * translatedY;
        const rotatedY = Math.sin(Math.PI / 2) * translatedX + Math.cos(Math.PI / 2) * translatedY;

        // Translate the coordinate back to its original position
        const newX = rotatedX + center.x;
        const newY = rotatedY + center.y;

        // Return the new Circle object with rotated coordinates
        circle.x = newX;
        circle.y = newY;
    });

    return rotatedCoordinates;
}