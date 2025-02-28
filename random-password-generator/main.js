

// Random Password Generate

const passwordBox = document.getElementById('password');

const lenght = 8;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "!@#$%&*()_+=-?><";


const allChars = upperCase + lowerCase + number + symbol;

const createPassword = () => {
    let password = '';
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += number[Math.floor(Math.random() * number.length)];
    password += symbol[Math.floor(Math.random() * symbol.length)];


    while (lenght > password.length) {
        password += allChars[Math.floor(Math.random() * allChars.length)];
    }

    passwordBox.value = password;
};


const copyPassword = () => {
    passwordBox.select();
    navigator.clipboard.writeText(passwordBox.value);
};



// dark theme 

const darkThemeicon = document.getElementById("icon");

const darkTheme = () => {
    document.body.classList.toggle("dark-theme");
    if(document.body.classList.contains("dark-theme")){
        darkThemeicon.src = "img/sun.png";
    } else {
        darkThemeicon.src = "img/moon.png";
    }
};

