// let gameSeq = [];
// let userSeq = [];
// let h2 = document.querySelector("h2");
// let btns = ["yellow", "red", "blue", "green"];
// let started = false;
// let level = 0;
// let highestScore = 0;
// document.addEventListener("keypress", function () {
//    if (started == false) {
//       console.log("Game is started");
//       started = true;
//       levelUp();
//    }
// });

// function btnFlash(btn) {
//    btn.classList.add("flash");
//    setTimeout(function () {
//       btn.classList.remove("flash");

//    }, 250);
// }
// function userFlash(btn) {
//    btn.classList.add("userflash");
//    setTimeout(function () {
//       btn.classList.remove("userflash");

//    }, 250);
// }


// function levelUp() {
//    userSeq = [];
//    level++;
//    h2.innerText = `Level ${level}`;
//    let randIdx = Math.floor(Math.random() * 3);
//    let rendColor = btns[randIdx];
//    let randBtn = document.querySelector(`.${rendColor}`)
//    gameSeq.push(rendColor);
//    console.log(gameSeq);
//    btnFlash(randBtn);
// }

// function checkAns(idx) {
//    // console.log("curr level :",level);
//    // let idx = level-1;
//    if (userSeq[idx] === gameSeq[idx]) {
//       console.log("same value");
//       if (userSeq.length == gameSeq.length) {
//          setTimeout(levelUp, 1000);
//       }
//    }
//    else {
//       if (level > highestScore) {
//          highestScore = level - 1; // Subtract 1 because level is incremented before the check
//       }
//       h2.innerHTML = `Game Over! Your current score was <b>${level}</b> and Highest score is <b>${highestScore}</b> <br> Press any key to start.`;
//       const lastScore = level;
      

//       // Print the highest score
//       console.log("The highest score is:", highestScore);

//       document.querySelector("body").style.backgroundColor = "red";
//       setTimeout(function () {
//          document.querySelector("body").style.backgroundColor = "white";

//       }, 150)
//       reset();
//    }

// }

// function btnPress() {
//    // console.log("btn was pressed");
//    // console.log(this);
//    let btn = this;
//    userFlash(btn);
//    let userColor = btn.getAttribute("id");
//    console.log(userColor);
//    userSeq.push(userColor);
//    checkAns(userSeq.length - 1);

// }

// let allBtns = document.querySelectorAll(".btn");
// for (btn of allBtns) {
//    btn.addEventListener("click", btnPress);
// }
// function reset() {
//    started = false;
//    gameSeq = [];
//    userSeq = [];
//    level = 0;

// }



let gameSeq = [];
let userSeq = [];
let h2 = document.querySelector("h2");
let btns = ["yellow", "red", "blue", "green"];
let started = false;
let level = 0;
let highestScore = 0; // Variable to store the highest score

document.addEventListener("keypress", function () {
   if (started == false) {
      console.log("Game is started");
      started = true;
      levelUp();
   }
});

function btnFlash(btn) {
   btn.classList.add("flash");
   setTimeout(function () {
      btn.classList.remove("flash");
   }, 250);
}

function userFlash(btn) {
   btn.classList.add("userflash");
   setTimeout(function () {
      btn.classList.remove("userflash");
   }, 250);
}

function levelUp() {
   userSeq = [];
   level++;
   h2.innerText = `Level ${level}`;
   let randIdx = Math.floor(Math.random() * 4); // Fixed range for random index
   let rendColor = btns[randIdx];
   let randBtn = document.querySelector(`.${rendColor}`);
   gameSeq.push(rendColor);
   console.log(gameSeq);
   btnFlash(randBtn);
}

function checkAns(idx) {
   if (userSeq[idx] === gameSeq[idx]) {
      console.log("Correct button!");
      if (userSeq.length == gameSeq.length) {
         setTimeout(levelUp, 1000);
      }
   } else {
      // Update the highest score if the current score exceeds it
      if (level > highestScore) {
         highestScore = level - 1; // Subtract 1 because level increments before the check
      }
      h2.innerHTML = `Game Over! Your score was <b>${level - 1}</b> <br> Press any key to start.<br>Highest Score: <b>${highestScore}</b>`;
      
      // Print the highest score to the console
      console.log("Game Over! The highest score is:", highestScore);

      document.querySelector("body").style.backgroundColor = "red";
      setTimeout(function () {
         document.querySelector("body").style.backgroundColor = "white";
      }, 150);

      reset();
   }
}

function btnPress() {
   let btn = this;
   userFlash(btn);
   let userColor = btn.getAttribute("id");
   console.log("User pressed:", userColor);
   userSeq.push(userColor);
   checkAns(userSeq.length - 1);
}

let allBtns = document.querySelectorAll(".btn");
for (btn of allBtns) {
   btn.addEventListener("click", btnPress);
}

function reset() {
   started = false;
   gameSeq = [];
   userSeq = [];
   level = 0;
}
