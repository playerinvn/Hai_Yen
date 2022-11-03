// change section
var section1 = document.querySelector(".start-box");
var section2 = document.querySelector(".box-like");
var section3 = document.querySelector(".box-why");

function showSection2() {
  section1.classList.add("hidden");
  section2.classList.remove("hidden");
}

// switch button position
function switchButton() {
  var leftNo = $("#no").css("left");
  var topNO = $("#no").css("top");
  var leftY = $("#yes").css("left");
  var topY = $("#yes").css("top");
  $("#no").css("left", leftY);
  $("#no").css("top", topY);
  $("#yes").css("left", leftNo);
  $("#yes").css("top", topNO);
  var audio = new Audio("sound/sound.mp3");
  audio.loop = true;
  audio.play();
  $("#yes").click(function () {
    audio.pause();
    audio.currentTime = 0;
  });
}
// move random button position
function moveButton() {
  if (screen.width <= 600) {
    var x = Math.random() * 300;
    var y = Math.random() * 300;
  } else {
    var x = Math.random() * 500;
    var y = Math.random() * 500;
  }
  var left = x + "px";
  var top = y + "px";
  $("#no").css("left", left);
  $("#no").css("top", top);
}

var n = 0;
$("#no").mousemove(function () {
  if (n < 1) switchButton();
  if (n > 1) moveButton();
  n++;
});
$("#no").click(() => {
  if (screen.width >= 900) switchButton();
});

// generate text in input
function textGenerate() {
  var n = "";
  var text =
    " Bởi vì anh tốt bụng, dễ thương, chăm chỉ, lãng mạng ... Haha, thực ra chính em cũng cảm thấy khó hiểu lắm nhưng tình yêu vốn là cái gì đó không thể giải thích..................... ";
  var a = Array.from(text);
  var textVal = $("#txtReason").val() ? $("#txtReason").val() : "";
  var count = textVal.length;
  if (count > 0) {
    for (let i = 1; i <= count; i++) {
      n = n + a[i];
      if (i == text.length + 1) {
        $("#txtReason").val("");
        n = "";
        break;
      }
    }
  }

  $("#txtReason").val(n);

  $("#txtReason").focus(function () {
    var handleWriteText = setInterval(function () {
      textGenerate();
    }, 10);
    $("#txtReason").blur(function () {
      clearInterval(handleWriteText);
    });
  });
}

textGenerate();

// transition
gsap.registerPlugin(ScrollTrigger);

if (document.querySelector(".start-box .item")) {
  gsap.from(".start-box .item", {
    scrollTrigger: ".start-box .item",
    opacity: 0,
    duration: 2,
    stagger: 0.5,
    y: 100,
  });
}

if (document.querySelector(".box-why .item")) {
  gsap.from(".box-why .item", {
    scrollTrigger: ".box-why .item",
    opacity: 0,
    duration: 2,
    stagger: 0.5,
    y: 100,
  });
}

if (document.querySelector(".box-agree .item")) {
  gsap.from(".box-agree .item", {
    scrollTrigger: ".box-agree .item",
    opacity: 0,
    duration: 2,
    stagger: 0.5,
    y: 100,
  });
}

if (document.querySelector(".box-agree .item2")) {
  gsap.from(".box-agree .item2", {
    scrollTrigger: ".box-agree .item2",
    opacity: 0,
    duration: 2,
    x: -200,
  });
}

if (document.querySelector(".box-agree .item3")) {
  gsap.from(".box-agree .item3", {
    scrollTrigger: ".box-agree .item3",
    opacity: 0,
    duration: 2,
    x: 200,
  });
}

if (document.querySelector(".box-finish .item")) {
  gsap.from(".box-finish .item", {
    scrollTrigger: ".box-finish .item",
    opacity: 0,
    duration: 2,
    stagger: 0.5,
    y: 100,
  });
}

if (document.querySelector(".box-finish .item2")) {
  gsap.from(".box-finish .item2", {
    scrollTrigger: ".box-finish .item2",
    opacity: 0,
    duration: 6,
    x: -200,
  });
}

if (document.querySelector(".box-finish .item3")) {
  gsap.from(".box-finish .item3", {
    scrollTrigger: ".box-finish .item3",
    opacity: 0,
    duration: 9,
    x: 300,
  });
}
