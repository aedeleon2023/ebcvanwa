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




