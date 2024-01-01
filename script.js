const calculateButton = document.getElementById("calculate");
const resultsDiv = document.getElementById("results");

calculateButton.addEventListener("click", calculateBMI);

function calculateBMI() {
    const height = parseFloat(document.getElementById("height").value);
    const weight = parseFloat(document.getElementById("weight").value);

    if (height > 0 && weight > 0) {
        const bmi = weight / (height * height);
        const bmiCategory = getBMICategory(bmi);
        const feedback = getBMIFeedback(bmiCategory);

        resultsDiv.innerHTML = `
            <p>Your BMI is: ${bmi.toFixed(2)}</p>
            <p>BMI Category: ${bmiCategory}</p>
            <p>Feedback: ${feedback}</p>
        `;
    } else {
        resultsDiv.innerHTML = "Please enter valid height and weight.";
    }
}

function getBMICategory(bmi) {
    if (bmi < 18.5) {
        return "Underweight";
    } else if (bmi < 25) {
        return "Normal weight";
    } else if (bmi < 30) {
        return "Overweight";
    } else {
        return "Obese";
    }
}

function getBMIFeedback(bmiCategory) {
    switch (bmiCategory) {
        case "Underweight":
            return "Your BMI is below the healthy range. Consider consulting a healthcare professional for advice on healthy weight gain.";
        case "Normal weight":
            return "Congratulations! Your BMI is within the healthy range. Continue maintaining a healthy lifestyle.";
        case "Overweight":
            return "Your BMI is above the healthy range. Consider making healthy lifestyle changes to manage your weight.";
        case "Obese":
            return "Your BMI is categorized as obese. It's important to seek guidance from a healthcare professional to address weight management and potential health risks.";
        default:
            return "An error occurred. Please try again.";
    }
}
