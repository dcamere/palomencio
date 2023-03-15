const userInput = document.querySelector(".user");
const passwordInput = document.querySelector(".password");
const button = document.querySelector(".button");
const result = document.querySelector(".result");

const n1 = document.querySelector(".n1");
const n2 = document.querySelector(".n2");
const n3 = document.querySelector(".n3");
const n4 = document.querySelector(".n4");
const n5 = document.querySelector(".n5");
const buttonTwo = document.querySelector(".buttonTwo");
const resultTwo = document.querySelector(".resultTwo");

// console.log(userInput);
// console.log(passwordInput);
// console.log(button);

const onClick = () => {
    // console.log(userInput.value);
    // console.log(passwordInput.value);

    let user = "palomencio69";
    let password = "123456";

    if (user === userInput.value && 
        password === passwordInput.value) {
            result.style.color = "green";
            result.innerHTML = "Login success"
    } else {
        result.style.color = "red";
        result.innerHTML = "Login failed";
    }
}

const onClickTwo = () => {
    if (n1.value !== "" && n2.value !== "" && n3.value !== "" && n4.value !== "" && n5.value !== "") {
        resultTwo.style.color = "green";
        resultTwo.innerHTML = "El promedio es: " +  (parseInt(n1.value) + 
        parseInt(n2.value) + 
        parseInt(n3.value) + 
        parseInt(n4.value) + 
        parseInt(n5.value)) / 5
    } else {
        resultTwo.style.color = "red";
        resultTwo.innerHTML = "Por favor llenar todos los números"
    }

}

button.addEventListener("click", onClick);
buttonTwo.addEventListener("click", onClickTwo);


