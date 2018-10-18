//Biz Logic


function Ticket (movieName, movieTime, rating) {
  this.movieName = movieName;
  this.movieTime = movieTime;
  this.price = 0;
  this.rating = rating;
}

var PriceFind = function(age, time) {
  if (age < 18 && time < 1400) {
    console.log("You're under 18, and it's matinee");
  } else if (age >= 18 && time < 1400 && age < 65) {
    console.log("You're between 18 and 65, and it's matinee");
  } else if (age >= 65 && time < 1400) {
    console.log("you're a senior and it's matinee");
  } else if (age < 18 && time > 1400) {
    console.log("You're under 18, and it's not matinee");
  } else if (age >= 18 && time > 1400 && age < 65) {
    console.log("You're between 18 and 65, and it's not matinee");
  } else if (age >= 65 && time > 1400) {
    console.log("you're a senior and it's not matinee");
  } else {
    console.log("All else failed");
  }
}

var TicketPrice = {
  youth: 5.00,
  senior: 5.00,
  regular: 7.00,
}

Movie.prototype.NewMovie = function(status) {
  if (status="New") {
  return Ticket.price += 2;
  }
}

function checkAge(ageInput) {
  if (ageInput < 18 && rating === "R") {
    console.log("Hey you can't see a rated R movie");
  }
}

function Movie (movieName, MovieTimes, Rating, newOld) {
  this.movieName = movieName;
  this.movieTimes = [];
  this.rating = Rating;
  this.newOld = newOld;
}

var sleepingBeauty = new Movie("Sleeping Beauty", [1000,1315,1720], "G", "Old");
var Solo = new Movie("Solo, A Star Wars Story", [1000,1315,1720, 2030], "PG-13", "New");
var Shrek = new Movie("Shrek", [1315,1720, 2030], "PG", "Old");
var Deadpool = new Movie ("Deadpool", [1000,1315,1720, 2030], "R", "New");

Movie.prototype.checkTime = function(time) {
  if (time < 1400) {
    Ticket.price -= 1.00;
  }
}

//UI Logic

$(document).ready(function() {
  $("form").submit(function(event){
    event.preventDefault();
    var movie = $("#movie-name").val();
    var age = parseInt($("#age").val());
    var showtime = parseInt($("#showtime").val())
    PriceFind(age, showtime);
  });
});
