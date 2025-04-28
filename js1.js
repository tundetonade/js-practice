
const testDiv = document.getElementById("testDiv");
    const changeToBlue = document.getElementById("changeToBlue");
    const changeToRed = document.getElementById("changeToRed");

    changeToBlue.addEventListener('click', function (){
        testDiv.style.backgroundColor = "Blue";
        console.log("you have changed the div to blue");
    });

    changeToRed.addEventListener('click', function (){
testDiv.style.backgroundColor = "Red";
console.log("you have changed the div to red");
    });
