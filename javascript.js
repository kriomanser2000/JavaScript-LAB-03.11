/*
Створіть об’єкт, що описує прямокутник (зберігає координа-
ти лівої верхньої та правої нижньої точок), і напишіть наступні
функції для роботи з таким об’єктом
1. Функція приймає об’єкт-прямокутник і виводить інфор-
мацію про нього (де яка точка розташована).
2. Функція приймає об’єкт-прямокутник і повертає його
ширину.
3. Функція приймає об’єкт-прямокутник і повертає його
висоту.
4. Функція приймає об’єкт-прямокутник і повертає його
площу.
5. Функція приймає об’єкт-прямокутник і повертає його
периметр.
6. Функція зміни ширини прямокутника. Вона приймає
об’єкт-прямокутник і на скільки одиниць змінити шири-
ну.
7. Функція зміни висоти прямокутника. Вона приймає
об’єкт-прямокутник і на скільки одиниць змінити висоту. 8. Функція зміни ширини та висоти прямокутника. Вона
приймає об’єкт-прямокутник та два значення для зміни
ширини та висоти.
9. Функція зміщення прямокутника по осі X. Вона приймає
об’єкт-прямокутник і на скільки одиниць його зрушити.
10. Функція зміщення прямокутника по осі Y. Вона приймає
об’єкт-прямокутник і на скільки одиниць його зрушити.
11. Функція зміщення прямокутника по осі X та Y. Вона при-
ймає об’єкт-прямокутник і два значення: зсув по осі X і
зсув по осі Y.
12. Функція для перевірки, чи знаходиться точка всередині
прямокутника. Вона приймає об’єкт-прямокутник і коор-
динати точки.
*/
//--
//Rectangle
const rectangle = 
{
    topLeft: { x: 0, y: 0 },
    bottomRight: { x: 0, y: 0 }
};

//1.
function printRectangleInfo(rect) 
{
    console.log("Top Left Point: ", rect.topLeft);
    console.log("Bottom Right Point: ", rect.bottomRight);
}

//2.
function getWidth(rect) 
{
    return rect.bottomRight.x - rect.topLeft.x;
}

//3.
function getHeight(rect) 
{
    return rect.bottomRight.y - rect.topLeft.y;
}

//4.
function getArea(rect) 
{
    const width = getWidth(rect);
    const height = getHeight(rect);
    return width * height;
}

//5.
function getPerimeter(rect) 
{
    const width = getWidth(rect);
    const height = getHeight(rect);
    return 2 * (width + height);
}

//6.
function changeWidth(rect, deltaWidth) 
{
    rect.bottomRight.x += deltaWidth;
}

//7.
function changeHeight(rect, deltaHeight) 
{
    rect.bottomRight.y += deltaHeight;
}

//8.
function changeWidthAndHeight(rect, deltaWidth, deltaHeight) 
{
    changeWidth(rect, deltaWidth);
    changeHeight(rect, deltaHeight);
}

//9.
function translateX(rect, deltaX) 
{
    rect.topLeft.x += deltaX;
    rect.bottomRight.x += deltaX;
}

//10.
function translateY(rect, deltaY) 
{
    rect.topLeft.y += deltaY;
    rect.bottomRight.y += deltaY;
}

//11.
function translateXY(rect, deltaX, deltaY) 
{
    translateX(rect, deltaX);
    translateY(rect, deltaY);
}

//12.
function isPointInsideRectangle(rect, point) 
{
    return point.x >= rect.topLeft.x && point.x <= rect.bottomRight.x &&
           point.y >= rect.topLeft.y && point.y <= rect.bottomRight.y;
}
console.log("Rectangle info: ");
printRectangleInfo(rectangle);
console.log("Width: ", getWidth(rectangle));
console.log("Height: ", getHeight(rectangle));
console.log("Area: ", getArea(rectangle));
console.log("Perimeter: ", getPerimeter(rectangle));
changeWidth(rectangle, 5);
changeHeight(rectangle, 3);
console.log("Rectangle info after changing width and height: ");
printRectangleInfo(rectangle);
console.log("Area after changing width and height: ", getArea(rectangle));
translateXY(rectangle, 2, 2);
console.log("Rectangle info after translation: ");
printRectangleInfo(rectangle);
const point = { x: 3, y: 3 };
console.log("Is point ", point, "inside the rectangle?", isPointInsideRectangle(rectangle, point));
