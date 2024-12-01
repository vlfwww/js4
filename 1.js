//1
// const userInput = prompt("Введите строку:");

// if (userInput.trim() !== "" && !isNaN(userInput) && userInput.length > 0) {
//     const number = Number(userInput);
//     if (number % 2 === 0) {
//         console.log(`${number} - четное число.`);
//     } else {
//         console.log(`${number} - нечетное число.`);
//     }
// } else {
//     const charArray = userInput.split('');
//     console.log("Массив символов:", charArray);
// }

//2
// const inputString = ' Full StaCK DevELoper ';
// const result = inputString.trim().toLowerCase() .split(/\s+/);

// console.log(result);

//3
// const userInput = prompt("Введите строку:");
// if (!isNaN(userInput) && userInput.trim() !== "") {
//     console.log("Ошибка: введено число.");
// } else {
//     const trimmedString = userInput.trim(); 
//     const lowerCaseString = trimmedString.toLowerCase(); 
//     const length = lowerCaseString.length; 

//     console.log("Длина строки:", length);
//     console.log("Строка в нижнем регистре:", lowerCaseString);
// }

//4
// const inputString = "HTML JavaScript PHP";
// const resultString = inputString
//     .split(' ')           
//     .map(word => word.toUpperCase()) 
//     .join('-');         
// console.log(resultString);

//5
// const userInput = prompt("Введите строку:");
// if (!isNaN(userInput) && userInput.trim() !== "") {
//     console.log("Ошибка: введено число.");
// } else {
//     const t = userInput.trim();
//     const result = trimmedString.charAt(0).toUpperCase() + trimmedString.slice(1); 

//     console.log("Результат:", result);
// }

//6
// const userInput = prompt("Введите строку:");
// const containsCom = userInput.includes('.com');
// const containsRu = userInput.includes('.ru');
// const result = containsCom || containsRu;
// console.log(result);

//7
// const userInput = prompt("Введите строку:");
// const endsWithCom = userInput.endsWith('.com');
// const endsWithRu = userInput.endsWith('.ru');
// const result = endsWithCom || endsWithRu;
// console.log(result);

//8
// const userInput = prompt("Введите строку:");
// const resultString = userInput.replaceAll('@', '!');
// console.log(resultString);

//9
// const str = "aaa bbb ccc";
// const word = "bbb";
// const index = str.indexOf(word);
// console.log(index); 

//10
// const str = "aaa bbb ccc";
// const word = "bbb";
// const index = str.lastIndexOf(word);
// console.log(index);

//11
// const str = "aaa bbb ccc";
// const word = "bbb";
// const resultString = str.replace(word, '').trim();
// console.log(resultString);

//12
// const dateInput = "2023-12-01"; 
// const formattedDate = dateInput.replaceAll('-', '/');
// console.log(formattedDate);

//13
// const userInput = prompt("Введите строку:");
// const result = userInput.trim().toLowerCase().repeat(3);
// console.log(result);

//14
// const userInput = prompt("Введите строку:");
// const words = userInput.trim().split(' ');
// const wordCount = words.filter(word => word !== '').length;
// console.log("Количество слов в строке:", wordCount);

//15
// const userInput = prompt("Введите строку из трех слов:");
// const wordsArray = userInput.split(' ');
// const resultString = wordsArray[0] + ' ' + wordsArray[3] || '';
// console.log(resultString);\

//16
// const userInput = prompt("Введите дату");
// const resultString = userInput.replaceAll('-', '!');
// console.log(resultString);

//17
// const dateInput = prompt("Введите дату");
// const formattedDate = dateInput.replaceAll('-', '.');
// const result = formattedDate.split('.').reverse().join('.');
// console.log(result);

//18
// const array = ['я', 'учу', 'javascript', '!'];
// const resultString = array.join('+');
// console.log(resultString);

//19
// const userInput = prompt("Введите имя и фамилию:");
// const names = userInput.split(' ');
// const isValid = names.length === 2 && names[0].charAt(0) === names[0].charAt(0).toUpperCase() && names[1].charAt(0) === names[1].charAt(0).toUpperCase();
// console.log(isValid);

//20
const userInput = prompt("Введите строку:");
const result = userInput.toLowerCase().includes("хорош");
console.log(result);
