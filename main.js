//1. Типы данные и переменные//
//1.1//
const name = "Islam";
const age = 18;
const isStudent = true;
const hobbies = ["Баскетбол", "Шахматы", "Рисование"];

console.log("Имя:", name);
console.log("Возраст:", age);
console.log("Студент:", isStudent);
console.log("Хобби:", hobbies);
//1.2//
const num1 = 50;
const num2 = 10;

console.log("Сумма:", num1 + num2);
console.log("Разность:", num1 - num2);
console.log("Произведение:", num1 * num2);
console.log("Частное:", num1 / num2);
//1.3//
const name_1 = "John";
const age_1 = 20;

console.log(name_1 + " is " + age_1 + " years old");
//2. Условные конструкции//
//2.1//
const age_2 = 18;

if (age_2 < 13) {
    console.log("Ребенок");
} else if (age_2>= 13 && age_2 <= 17) {
    console.log("Подросток");
} else if (age_2 >= 18 && age_2 <= 65) {
    console.log("Взрослый");
} else {
    console.log("Пенсионер");
}
//2.2//
function checkEvenOdd(number) {
    if (number % 2 === 0) {
        console.log("Четное");
    } else {
        console.log("Нечетное");
    }
}
checkEvenOdd(4);
checkEvenOdd(11);
checkEvenOdd(32);
//2.3//
const age_3 = 18;
const height = 172;

if (age < 5) {
    console.log("Слишком мал");
} else if (age >= 5 && age <= 12) {
    console.log("Добро пожаловать");
} else if (age >= 13 && age <= 18 && height > 160) {
    console.log("Добро пожаловать");
} else {
    console.log("Не разрешено");
}
//3.Циклы//
//3.1//
for (let i = 1; i <= 10; i++) {
    console.log(`7 × ${i} = ${7 * i}`);
}
//3.2//
function sumNumbers(n) {
    let sum = 0;

    for (let i = 1; i <= n; i++) {
        sum += i;
    }

    return sum;
}

console.log(sumNumbers(5));
//3.3//
let number = 20;

while (number >= 1) {
    console.log(number);
    number--;
}
//4.Работа с массивами //
//4.1//
const grades = [5, 4, 3, 5, 2, 4, 5];

let sum_1 = 0;
let maxGrade = grades[0];

for (let i = 0; i < grades.length; i++) {
    console.log("Оценка:", grades[i]);

    sum_1 += grades[i];

    if (grades[i] > maxGrade) {
        maxGrade = grades[i];
    }
}

const average = sum_1 / grades.length;

console.log("Сумма оценок:", sum_1);
console.log("Средняя оценка:", average);
console.log("Максимальная оценка:", maxGrade);
//4.2//
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
        console.log(numbers[i]);
    }
}
//4.3//
const cities = ["Бишкек", "Ош", "Каракол", "Токмок"];

function findCity(arr, city) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === city) {
            return i;
        }
    }

    return -1;
}

console.log(findCity(cities, "Ош"));
console.log(findCity(cities, "Баткен"));
//5.Объекты в JavaScript//
//5.1//
const student = {
    name: "Islam",
    age: 18,
    courses: ["JavaScript", "HTML", "CSS"],
    isActive: true
};

// Вывод всей информации
console.log(student);

// Обновление возраста
student.age = student.age + 1;

console.log("Новый возраст:", student.age);

// Вывод курсов через цикл
console.log("Курсы:");

for (let i = 0; i < student.courses.length; i++) {
    console.log(student.courses[i]);
}
//5.2//
const product = {
    name: "Айпад",
    price: 25000,
    quantity: 1
};

function getTotalCost(product) {
    const totalCost = product.price * product.quantity;

    console.log("Общая стоимость:", totalCost);
}

getTotalCost(product);
//5.3//
const books = [
    {
        title: "Оно",
        author: "Стивенг Кинг",
        year: 1986
    },
    {
        title: "Кто идет?",
        author: "Джон Вуд Кемпбелл",
        year: 1938
    },
    {
        title: "Мастер и Маргарита",
        author: "Михаил Булгаков",
        year: 1967
    }
];

// Вывод информации о каждой книге
for (let i = 0; i < books.length; i++) {
    console.log(
        "Название:", books[i].title,
        "| Автор:", books[i].author,
        "| Год:", books[i].year
    );
}

// Поиск самой старой книги
let oldestBook = books[0];

for (let i = 1; i < books.length; i++) {
    if (books[i].year < oldestBook.year) {
        oldestBook = books[i];
    }
}

console.log("Самая старая книга:");
console.log(oldestBook);
//6.Функции//
//6.1//
const calculateDiscount = (price, discount) => {
    return price - (price * discount / 100);
};

console.log(calculateDiscount(1500, 10));
console.log(calculateDiscount(5800, 80));
console.log(calculateDiscount(3000, 60));
//6.2//
function getGrade(score) {
    if (score >= 80 && score <= 100) {
        return "A";
    } else if (score >= 60 && score <= 79) {
        return "B";
    } else if (score >= 40 && score <= 59) {
        return "C";
    } else if (score >= 0 && score <= 39) {
        return "F";
    } else {
        return "Некорректный балл";
    }
}

console.log(getGrade(95));
console.log(getGrade(75));
console.log(getGrade(50));
console.log(getGrade(20));
//6.3//
function getMaxNumber(arr) {
    let max = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }

    return max;
}

console.log(getMaxNumber([1, 5, 3, 9, 2]));
console.log(getMaxNumber([10, 25, 7, 18]));
console.log(getMaxNumber([-5, -2, -10, -1]));
//7.DOM и обработка событий//
//7.1//
const taskInput = document.querySelector("#taskInput");
const addBtn = document.querySelector("#addBtn");
const taskList = document.querySelector("#taskList");

addBtn.addEventListener("click", function () {
    const taskText = taskInput.value;
    if (taskText !== "") {
        const li = document.createElement("li");
        li.textContent = taskText;
        taskList.appendChild(li);
        taskInput.value = "";
    }
});
//7.2//
const themeBtn = document.querySelector("#themeBtn");
const mainContent = document.querySelector("#mainContent");

let isDark = false;

themeBtn.addEventListener("click", function () {
    if (isDark === false) {
        mainContent.style.backgroundColor = "black";
        mainContent.style.color = "white";
        themeBtn.textContent = "Светлая тема";
        isDark = true;
    } else {
        mainContent.style.backgroundColor = "white";
        mainContent.style.color = "black";
        themeBtn.textContent = "Темная тема";
        isDark = false;
    }
});