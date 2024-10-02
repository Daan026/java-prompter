console.log(departments);
// opdacht 1A
console.log("De afdeling Sales heeft ", departments.sales.numberOfEmployees, " medewerkers");
// opdacht 1B
console.log("Marketing is een leuke afdeling om te werken.", departments.marketing.description);
// opdacht 1C
console.log("De afdeling Customer Service heeft", departments["customer-service"].numberOfEmployees, "medewerkers");
// opdacht 1D
console.log("Sales is een uitdagende afdeling om te werken als Verkoopmanager.", departments.sales.jobs[1].description);

// opdracht 2a
const userInput = prompt("Over welke afdeling wil je meer informatie? Kies uit: [marketing / sales / customer-service]");
console.log(userInput);

// opdracht 2B
if (userInput.toLowerCase() === "marketing") {
    console.log("Je koos " + userInput + ": " + departments.marketing.description);
} else if (userInput.toLowerCase() === "sales") {
    console.log("Je koos " + userInput + ": " + departments.sales.description);
} else if (userInput.toLowerCase() === "customer-service") {
    console.log("Je koos " + userInput + ": " + departments["customer-service"].description);
} else {
    console.error("Ongeldige keuze.");
}

//opdracht 2C --  het werkt

//opdracht 3

// const userInput = prompt("Je koos marketing. Over welke functie wil je meer weten? Voer een getal tussen 0.Marketingmanager 1.Digital Marketing Specialist 2.Contentmarketeer 3.Branding Agent.");
//
//
// console.log("userInput", userInput);
//
// if (userInput === "0") {
//     console.log("Je koos " + departments.marketing.jobs[0].title + ".", "Een uitdagende rol!", departments.marketing.jobs[0].description);
// } else if (userInput === "1") {
//     console.log("Je koos " + departments.marketing.jobs[1].title + ".", "Een uitdagende rol!", departments.marketing.jobs[1].description);
// } else if (userInput === "2") {
//     console.log("Je koos " + departments.marketing.jobs[2].title + ".", "Een uitdagende rol!", departments.marketing.jobs[2].description);
// } else if (userInput === "3") {
//     console.log("Je koos " + departments.marketing.jobs[3].title + ".", "Een uitdagende rol!", departments.marketing.jobs[3].description);
// }