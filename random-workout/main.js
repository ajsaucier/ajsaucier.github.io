// Getting started to send data from form to JSON
// https://blog.garstasio.com/you-dont-need-jquery/ajax/#sending-and-receiving-json
// https://www.w3schools.com/xml/tryit.asp?filename=tryxml_httprequest
// Maybe one day :(
  
var armsInput = document.getElementById("arm");
var legsInput = document.getElementById("leg");
var absInput = document.getElementById("abs");
var cardioInput = document.getElementById("cardio");

function saveWorkout(e) {
    // stop the regular form submission
    e.preventDefault();

    // var xhr = new XMLHttpRequest();
    // xhr.open('GET', 'workouts.json');
    // xhr.setRequestHeader('Content-Type', 'application/json');
    // xhr.onload = function() {
    //     if (xhr.status === 200) {
    //         var userInfo = JSON.parse(xhr.responseText);
    //     }
    // };
    // xhr.send(JSON.stringify({
    //     arms: workouts.arms.push(armsInput.value),
    //     legs: workouts.legs.push(legsInput.value),
    //     abs: workouts.abs.push(absInput.value),
    //     cardio: workouts.cardio.push(cardioInput.value)
    // }));

    // // collect the form data while iterating over the inputs
    // var data = {};
    // for (var i = 0, ii = form.length; i < ii; ++i) {
    //     var input = form[i];
    //     if (input.name) {
    //     data[input.name] = input.value;
    //     console.log(input);
    //     }
    // }

    // // construct an HTTP request
    // var xhr = new XMLHttpRequest();
    // xhr.open(form.method, form.action, true);
    // xhr.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');

    // // send the collected data as JSON
    // xhr.send(JSON.stringify(data));
};
  
// End of sending data from form to JSON

var exerciseDiv = document.getElementById("randos");

(function() {
const headings = document.querySelectorAll('h2')

Array.prototype.forEach.call(headings, heading => {
    let btn = heading.querySelector('button')
    let target = heading.nextElementSibling
    
    btn.onclick = () => {
    let expanded = btn.getAttribute('aria-expanded') === 'true' || false
    
    btn.setAttribute('aria-expanded', !expanded)
    target.hidden = expanded    
    }
})
})()

let cnt = 0;
function generateWorkouts() {
    cnt++;
    var newArmsDiv = document.createElement("div");
    newArmsDiv.setAttribute("id", `arms-${cnt}`);
    newArmsDiv.setAttribute("class", "arms");
    newArmsDiv.textContent = "💪 ";
    exerciseDiv.appendChild(newArmsDiv);

    var newLegsDiv = document.createElement("div");
    newLegsDiv.setAttribute("id", `legs-${cnt}`);
    newLegsDiv.setAttribute("class", "legs");
    newLegsDiv.textContent = "🏃‍  ";
    exerciseDiv.appendChild(newLegsDiv);

    var newAbsDiv = document.createElement("div");
    newAbsDiv.setAttribute("id", `abs-${cnt}`);
    newAbsDiv.setAttribute("class", "abs");
    newAbsDiv.textContent = "🏋️‍  ";
    exerciseDiv.appendChild(newAbsDiv);

    var newCardioDiv = document.createElement("div");
    newCardioDiv.setAttribute("id", `cardio-${cnt}`);
    newCardioDiv.setAttribute("class", "cardio");
    newCardioDiv.textContent = "🚴‍ ";
    exerciseDiv.appendChild(newCardioDiv);

    var xhttp = new XMLHttpRequest();
    xhttp.responseType = 'json';
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var randomArms = this.response.arms[Math.floor(Math.random()*this.response.arms.length)];
            var randomLegs = this.response.legs[Math.floor(Math.random()*this.response.legs.length)];
            var randomAbs = this.response.abs[Math.floor(Math.random()*this.response.abs.length)];
            var randomCardio = this.response.cardio[Math.floor(Math.random()*this.response.cardio.length)];

            document.getElementById(`arms-${cnt}`).textContent += randomArms;
            document.getElementById(`legs-${cnt}`).textContent += randomLegs;
            document.getElementById(`abs-${cnt}`).textContent += randomAbs;
            document.getElementById(`cardio-${cnt}`).textContent += randomCardio;
        }
    };
    xhttp.open("GET", "workouts.json", true);
    xhttp.send();
}

function eraseExercises() {
    while (exerciseDiv.firstChild) {
        exerciseDiv.removeChild(exerciseDiv.firstChild);
    }
}

//document.querySelector("input").addEventListener("click", saveWorkout);
document.getElementById("generate-workout").addEventListener("click", generateWorkouts);
document.getElementById("erase").addEventListener("click", eraseExercises);