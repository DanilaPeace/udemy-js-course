"use strict";

let numberOfFilms;

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function start() {
    do {
        numberOfFilms = +prompt("How many films have you watched?", 0);
        console.log(numberOfFilms);
    }
    while (
        !isNumber(numberOfFilms)
    );

    // rememberMyFilms()
    writeYourGenres();
    showMyDB();
}

start();

function isNumber(number) {
    return !isNaN(number);
}

function hasThisFilm(movieName) {
    return personalMovieDB.movies.hasOwnProperty(movieName);
}

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        let movieName = String(prompt("Movie: ", '')),
            movieEstimate = +prompt("Estimate: ", 0);

        if (
            hasThisFilm(movieName) ||
            movieName == null ||
            movieName === '' ||
            movieEstimate == null ||
            movieEstimate == '' ||
            Number.isNaN(movieEstimate) ||
            movieName.length >= 50 ||
            personalMovieDB.movies.hasOwnProperty(movieName)
        ) {
            console.log(`Input error!`);
            i--;
        } else {
            personalMovieDB.movies[movieName] = movieEstimate;
        }
    }
}

function showMyDB() {
    if(!personalMovieDB.privat) {
        console.dir(personalMovieDB);
    }
}

function writeYourGenres() {
    let userGenres = [];
    for (let attempt = 0; attempt < 3; attempt++) {
        let generName = prompt(`your love genre number ${attempt + 1} is?`, '')
        userGenres[attempt] = generName;
    }

    personalMovieDB.genres = userGenres;
}