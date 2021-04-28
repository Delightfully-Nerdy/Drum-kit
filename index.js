var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    var buttonInnerHTML = this.innerHTML;

    switch (buttonInnerHTML) {
      case "w":
        var tom1 = new audio("sounds/tom-1.mp3");
        tom1.play();

        break;

      case "a":
        var tom2 = new audio("sounds/tom-2.mp3");
        tom2.play();

        break;

      case "s":
        var tom3 = new audio("sounds/tom-3.mp3");
        tom3.play();

        break;

      case "d":
        var tom4 = new audio("sounds/tom-4.mp3");
        tom4.play();

        break;

      case "j":
        var crash = new audio("sounds/crash.mp3");
        crash.play();

        break;

      case "k":
        var kick = new audio("sounds/kick-bass.mp3");
        kick.play();

        break;

      case "l":
        var snare = new audio("sounds/snare.mp3");
        snare.play();

        break;
      default:
        break;
    }
  });
}
