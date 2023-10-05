function checkBMI(height, weight){
    return ((weight/(height*height))*10000);
}
const username = (prompt("Enter your Name"));
const weight = Number(prompt("Enter your weight in kg"));
const height = Number(prompt("Enter your height in cm"));

function BMI (checkBMI){
    if(checkBMI < 18.5){
        return ("You smol smol, let me give you a free all you can eat buffet ticket");
    }
    else if(checkBMI >= 18.5 && checkBMI < 25){
        return ("Thats very healthy, you do you");
    }
    else if(checkBMI >= 25 && checkBMI < 30){
        return ("Maybe you should cut back on those bags of chips in the pantrys");
    }
    else {
        return ("I think it's time for some cardio at the gym");
    }
}

const bmi = checkBMI(height, weight);
console.log(username);
console.log("BMI= " + bmi);
console.log("" + BMI(bmi));