var rating = document.getElementById("rating");

rating.addEventListener("click",function(){
    rating.style.color = "#66c144";
});

function vote () {
}


// Set a random position for the left and right lines
var windowHeight = window.innerHeight;
var leftPosition = Math.random() * (windowHeight - 100) + 50; // range from 50 to windowHeight - 50
var rightPosition = Math.random() * (windowHeight - 100) + 50; // range from 50 to windowHeight - 50
document.querySelector('.left').style.top = leftPosition + 'px';
document.querySelector('.right').style.top = rightPosition + 'px';

// Set a random delay for the left and right lines
var leftDelay = Math.random() * 4 + 1; // range from 1 to 5
var rightDelay = Math.random() * 4 + 1; // range from 1 to 5
document.querySelector('.left').style.animationDelay = '-' + leftDelay + 's';
document.querySelector('.right').style.animationDelay = '-' + rightDelay + 's';
