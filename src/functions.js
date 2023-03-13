function play(str) {

    let string = arguments[0]
    document.getElementById("display").innerText = string

    let audio = document.getElementById(str);
    audio.currentTime = 0;
    audio.play();
  }

  document.addEventListener("keydown", function (event) {
    if (event.key === "q" || event.key === "Q") {
      document.getElementById("drum-0").click();

    } else if (event.key === "w" || event.key === "W") {
      document.getElementById("drum-1").click();

    } else if (event.key === "e" || event.key === "E") {
      document.getElementById("drum-2").click();

    } else if (event.key === "a" || event.key === "A") {
      document.getElementById("drum-3").click();

    } else if (event.key === "s" || event.key === "S") {
      document.getElementById("drum-4").click();

    } else if (event.key === "d" || event.key === "D") {
      document.getElementById("drum-5").click();

    } else if (event.key === "z" || event.key === "Z") {
      document.getElementById("drum-6").click();

    } else if (event.key === "x" || event.key === "X") {
      document.getElementById("drum-7").click();

    } else if (event.key === "c" || event.key === "C") {
      document.getElementById("drum-8").click();

    }
  });