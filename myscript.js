
/* Button Notification */
const myButton = document.getElementById("myButton");

myButton.addEventListener("click", function() {
  if (Notification.permission === "granted") {
    const notification = new Notification("Hello, how are you doing?");
  } else if (Notification.permission !== "denied") {
    Notification.requestPermission().then(function (permission) {
      if (permission === "granted") {
        const notification = new Notification("Hello, how are you doing?");
      }
    });
  }
});

/* Button event handler */

function myFunction() {
    var txt;
    if (confirm("Follow me @jeff_wong_88!")) {
      txt = "You pressed OK!";
    } else {
      txt = "You pressed Cancel!";
    }
    document.getElementById("demo").innerHTML = txt;
  }


  // select the three buttons using their IDs
const colorButton1 = document.getElementById("color1");
const colorButton2 = document.getElementById("color2");
const colorButton3 = document.getElementById("color3");

// add event listeners to each button
colorButton1.addEventListener("click", function() {
  document.body.style.backgroundColor = "red";
});

colorButton2.addEventListener("click", function() {
  document.body.style.backgroundColor = "green";
});

colorButton3.addEventListener("click", function() {
  document.body.style.backgroundColor = "blue";
});

  