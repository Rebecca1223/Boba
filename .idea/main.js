var calorie = 0;
(function() {
    calorie = 10;
    document.getElementById("final").setAttribute("href",strLink);
})();

function myFunction() {
    document.getElementById("calories").innerHTML = calorie;
}
document.querySelector('.calories').innerHTML = calorie;