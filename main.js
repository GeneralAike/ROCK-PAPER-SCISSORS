let botchoice = [
  '<img src="./toppng.com-rock-png-393x229.png" alt="" width="50px"/>',
  '<img src="./—Pngtree—torn notebook paper white coil_8243304.png" alt="" width="50px"/>',
  '<img src="./PngItem_533588.png" alt="" width="50px"/>',
];
// somewhere at the top would be a good place to declare those variables

function tryme() {
  window.testr = async function () {
    disp = '<span class = "dotsload">....</span>'; //loading dots
    /* This part shows the loading dots for 2 secs */
    document.querySelector("#botresult").innerHTML = disp;
    await new Promise((resolve) => setTimeout(resolve, 1500));
    rockyvalue =
      '<img src="./toppng.com-rock-png-393x229.png" alt="" width="50px"/>';

    /* This part displays the coisce of the bot */
    display = document.querySelector("#rock").value;
    var index = Math.floor(Math.random() * botchoice.length);
    document.querySelector("#botresult").innerHTML = botchoice[index];

    /* this place is used to compare what the bot picked to what i picked to return a score */
    /* testing something */

    if (botchoice[index] == rockyvalue) {
      document.querySelector("#bounce").innerHTML = "BOUNCED";
      await new Promise((resolve) => setTimeout(resolve, 1500));
      document.querySelector("#bounce").innerHTML = "";
    } else if (
      botchoice[index] ==
      '<img src="./—Pngtree—torn notebook paper white coil_8243304.png" alt="" width="50px"/>'
    ) {
      let value;
      value = document.querySelector("#bot1");
      let currentvalue;
      currentvalue = parseInt(value.innerHTML);
      value.innerHTML = currentvalue + 1;
      document.querySelector("#bounce").innerHTML = "I WON";
      await new Promise((resolve) => setTimeout(resolve, 1500));
      document.querySelector("#bounce").innerHTML = "";
    } else if (
      botchoice[index] ==
      '<img src="./PngItem_533588.png" alt="" width="50px"/>'
    ) {
      let value;
      value = document.querySelector("#you1");
      let currentvalue;
      currentvalue = parseInt(value.innerHTML);
      value.innerHTML = currentvalue + 1;
      document.querySelector("#bounce").innerHTML = "YOU WON";
      await new Promise((resolve) => setTimeout(resolve, 1500));
      document.querySelector("#bounce").innerHTML = "";
    }

    valueyou = document.querySelector("#you1").innerHTML;
    valuebot = document.querySelector("#bot1").innerHTML;

    if (parseInt(valueyou) > 4) {
      dull = document.querySelector(".blur");
      pic = document.querySelector(".holder");
      dull.style.display = "block";
      pic.style.display = "block";
      document.querySelector(".whowon").innerHTML = "YOU WON";
    } else if (parseInt(valuebot) > 4) {
      dull = document.querySelector(".blur");
      pic = document.querySelector(".holder");
      dull.style.display = "block";
      pic.style.display = "block";
      document.querySelector(".whowon").innerHTML = "BOT WON";
    }
  };

  window.testp = async function () {
    disp = '<span class = "dotsload">....</span>';

    document.querySelector("#botresult").innerHTML = disp;
    await new Promise((resolve) => setTimeout(resolve, 2000));
    papervalue =
      '<img src="./—Pngtree—torn notebook paper white coil_8243304.png" alt="" width="50px"/>';

    display = document.querySelector("#paper").value;
    var index = Math.floor(Math.random() * botchoice.length);
    document.querySelector("#botresult").innerHTML = botchoice[index];

    if (botchoice[index] == papervalue) {
      document.querySelector("#bounce").innerHTML = "BOUNCED";
      await new Promise((resolve) => setTimeout(resolve, 1500));
      document.querySelector("#bounce").innerHTML = "";
    } else if (
      botchoice[index] ==
      '<img src="./toppng.com-rock-png-393x229.png" alt="" width="50px"/>'
    ) {
      let value;
      value = document.querySelector("#you1");
      let currentvalue;
      currentvalue = parseInt(value.innerHTML);
      value.innerHTML = currentvalue + 1;
      document.querySelector("#bounce").innerHTML = "YOU WON";
      await new Promise((resolve) => setTimeout(resolve, 1500));
      document.querySelector("#bounce").innerHTML = "";
    } else if (
      botchoice[index] ==
      '<img src="./PngItem_533588.png" alt="" width="50px"/>'
    ) {
      let value;
      value = document.querySelector("#bot1");
      let currentvalue;
      currentvalue = parseInt(value.innerHTML);
      value.innerHTML = currentvalue + 1;
      document.querySelector("#bounce").innerHTML = "I WON";
      await new Promise((resolve) => setTimeout(resolve, 1500));
      document.querySelector("#bounce").innerHTML = "";
    }

    valueyou = document.querySelector("#you1").innerHTML;
    valuebot = document.querySelector("#bot1").innerHTML;

    if (parseInt(valueyou) > 4) {
      dull = document.querySelector(".blur");
      pic = document.querySelector(".holder");
      dull.style.display = "block";
      pic.style.display = "block";
      document.querySelector(".whowon").innerHTML = "YOU WON";
    } else if (parseInt(valuebot) > 4) {
      dull = document.querySelector(".blur");
      pic = document.querySelector(".holder");
      dull.style.display = "block";
      pic.style.display = "block";
      document.querySelector(".whowon").innerHTML = "BOT WON";
    }
  };
}

window.tests = async function () {
  disp = '<span class = "dotsload">....</span>';

  document.querySelector("#botresult").innerHTML = disp;
  await new Promise((resolve) => setTimeout(resolve, 2000));
  scissorsvalue = '<img src="./PngItem_533588.png" alt="" width="50px"/>';

  display = document.querySelector("#scissors").value;
  var index = Math.floor(Math.random() * botchoice.length);
  document.querySelector("#botresult").innerHTML = botchoice[index];

  if (botchoice[index] == scissorsvalue) {
    document.querySelector("#bounce").innerHTML = "BOUNCED";
    await new Promise((resolve) => setTimeout(resolve, 1500));
    document.querySelector("#bounce").innerHTML = "";
  } else if (
    botchoice[index] ==
    '<img src="./toppng.com-rock-png-393x229.png" alt="" width="50px"/>'
  ) {
    let value;
    value = document.querySelector("#bot1");
    let currentvalue;
    currentvalue = parseInt(value.innerHTML);
    value.innerHTML = currentvalue + 1;
    document.querySelector("#bounce").innerHTML = "I WON";
    await new Promise((resolve) => setTimeout(resolve, 1500));
    document.querySelector("#bounce").innerHTML = "";
  } else if (
    botchoice[index] ==
    '<img src="./—Pngtree—torn notebook paper white coil_8243304.png" alt="" width="50px"/>'
  ) {
    let value;
    value = document.querySelector("#you1");
    let currentvalue;
    currentvalue = parseInt(value.innerHTML);
    value.innerHTML = currentvalue + 1;
    document.querySelector("#bounce").innerHTML = "YOU WON";
    await new Promise((resolve) => setTimeout(resolve, 1500));
    document.querySelector("#bounce").innerHTML = "";
  }

  valueyou = document.querySelector("#you1").innerHTML;
  valuebot = document.querySelector("#bot1").innerHTML;

  if (parseInt(valueyou) > 4) {
    dull = document.querySelector(".blur");
    pic = document.querySelector(".holder");
    dull.style.display = "block";
    pic.style.display = "block";
    document.querySelector(".whowon").innerHTML = "YOU WON";
  } else if (parseInt(valuebot) > 4) {
    dull = document.querySelector(".blur");
    pic = document.querySelector(".holder");
    dull.style.display = "block";
    pic.style.display = "block";
    document.querySelector(".whowon").innerHTML = "BOT WON";
  }
};

tryme();

function hider(rulesheet) {
  rulesheet = document.querySelector(".rules");
  rulesheet.classList.add("hide");
}

const div = document.querySelector(".rules");
const otherElements = document.querySelectorAll("body *:not(.rules)");

otherElements.forEach((el) => {
  el.addEventListener("click", function () {
    div.style.display = "none";
  });
});

/* CLOSE THE BLUR AND TROPHY AND RESET THE SCORES */
function hideblur(div, pic) {
  div = document.querySelector(".blur");
  pic = document.querySelector(".holder");
  div.style.display = "none";
  pic.style.display = "none";
  document.querySelector("#you1").innerHTML = 0;
  document.querySelector("#bot1").innerHTML = 0;
}
