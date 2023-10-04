
//get values
const weight = Number(prompt("Your weight here in kilograms"));
const height = Number(prompt("Your height here in centimeters"));

//formula
const formula = function(weight, height){
    return weight / (height*height/10000);
}

const bmi = function(weight, height){
    const calc = formula(weight, height);

    if (calc < 18.5) {
        return "You smol smol, let me give you a free all you can eat buffet ticket";
    }
    else if (calc >= 18.5 && calc <25) { // if calc value is from 18.5 and under 25, displays following message
        return "Thats very healthy, you do you";
    }
    else if (calc >= 25 && calc <30) {
        return "Maybe you should cut back on those bags of chips in the pantry";
    }
    else {
        return "I think it's time for some cardio at the gym";
    }
}

const valueBMI = formula(weight, height);
alert(`Your BMI result: ${valueBMI.toFixed(2)}`); //displays result, .toFixed(2) round to 2 decimals
alert(bmi(weight, height));