var movies = [
  {
    title: 'Blade Runner',
    rating: 8.2,
    hasWatched: true
  },
  {
    title: 'The Boss Baby',
    rating: 5.9,
    hasWatched: false
  },
  {
    title: 'Anomalisa',
    rating: 7.2,
    hasWatched: false
  }
]

a = [1, 2, 3];


movies.forEach(function(movie) {
  var not = ' ';
  if (movie.hasWatched === false) {
    not = ' not ';
  }
  console.log("You have" + not + "seen \"" + movie.title + "\" - " + movie.rating + ' stars');
});
