"use strict";
function christianSpam() {
    let username = window.prompt("What's your name? ");
    alert("Jesus loves you, " + username);
    let text;
    if (confirm("Do you love Jesus?  Press okay if yes.") == true) {
        text = "We love Him because He first loved us. - 1 John 4:19   ";
    } else {
        text = "Whoever will deny Me before men, him will I also deny before My Father who is in heaven. - Matthew 10:33   ";
    }
    alert(text + username + ", hope to see you at church this Sunday!");
}

christianSpam();



let answer = false;
let jesus = 0;
while (!answer) {
    let response = prompt("Which of the original twelve disciples wrote two out of the four gospels?")
    if (response === "Matthew and John" || "John and Matthew" || "John, Matthew" || "Matthew, John" || "Matthew John" || "John Matthew") {
        alert("You are right!  Great Job!");
        jesus += 4;
        break;
    } else if (response === "Matthew" || "John") {
        alert("You are half right.  Matthew and John is the answer.");
        jesus += 2;
        break;
    } else {
        alert("Nope, try again.")
    }
}

function rating() {
let output = "";
for (let i = 1; i <= tu; i++) {
    output += "<img class='score' src='images/tujesus.png'/>";
}
return document.write(output); 
}
