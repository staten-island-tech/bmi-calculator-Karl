function checkBMI(height, weight){
    return ((weight/(height*height))*10000);
}
let username = (prompt("Enter your Name"));
let weight = Number(prompt("Enter your weight in kg"));
let height = Number(prompt("Enter your height in cm"));
const user = checkBMI(height,weight)

function BMI (checkBMI){
    if(checkBMI < 18.5){
        return ("You smol smol, let me give you a free all you can eat buffet ticket");
    }
    else if(checkBMI >= 18.5 && calc <25){
        return ("Thats very healthy, you do you");
    }
    else if(checkBMI >= 25 && calc <30){
        return ("Maybe you should cut back on those bags of chips in the pantryz");
    }
    else {
        return ("I think it's time for some cardio at the gym");
    }
}

BMI(checkBMI(height, weight))

console.log(username);
console.log("BMI= " + checkBMI(height, weight));
console.log("You are " + BMI (checkBMI));