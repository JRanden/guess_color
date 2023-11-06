
wrapper = document.querySelector(".wrapper")
document.getElementById("startGame").addEventListener("click", colorPicker);
function colorPicker() {
    
    document.getElementById("startGame").classList.add("hidden");

    makeColor()
    x = Math.ceil(Math.random () * 6)
    correctAnswerColor = document.getElementById(`div${x}`).style.backgroundColor
    correctAnswer = `div${x}` 
    console.log(correctAnswer) 
    document.getElementById("header").textContent = `${correctAnswerColor}`
    getId(x);
}

function makeColor() {
    for (let i = 1; i <= 6; ) {
        let red = Math.floor(Math.random () * 255)
        let green = Math.floor(Math.random () * 255)
        let blue = Math.floor(Math.random () * 255)
        let color = 'rgb(' + red + ',' + green + ',' + blue + ')'
        document.getElementById(`div${i}`).style.backgroundColor = color;
        i++
    }
}
 
 
var divElementer = document.querySelectorAll(".divElementer");
function getId(x) {
    var pickedColor = document.querySelector(`#div${x}`).style.backgroundColor;
	for (var i = 0; i < divElementer.length; i++) {
		divElementer[i].addEventListener("click", function() {
			var clickedColor = this.style.backgroundColor;
            console.log(x)
            console.log(i);

            console.log(clickedColor);
			if(clickedColor === pickedColor) {
				(alert('Du vant! Spille igjen?'))
                 window.location.reload(); 
			}
			else {
				this.style.backgroundColor = "#fff";
				console.log("try again");
			}
		});
	}
}