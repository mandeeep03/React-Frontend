const movies = [
  {
    id: 1,
    title: "Inception",
    release_date: "2010-07-16",
    poster_url:
      "https://image.tmdb.org/t/p/w500/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg",
  },
  {
    id: 2,
    title: "Interstellar",
    release_date: "2014-11-07",
    poster_url:
      "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
  },
  {
    id: 3,
    title: "The Dark Knight",
    release_date: "2008-07-18",
    poster_url:
      "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
  },
  {
    id: 4,
    title: "Parasite",
    release_date: "2019-05-30",
    poster_url:
      "https://image.tmdb.org/t/p/w500/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg",
  },
  {
    id: 5,
    title: "Avengers: Endgame",
    release_date: "2019-04-26",
    poster_url:
      "https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg",
  },
  {
    id: 6,
    title: "Dune: Part Two",
    release_date: "2024-03-01",
    poster_url:
      "https://image.tmdb.org/t/p/w500/1pdfLvkbY9ohJlCjQH2CZjjYVvJ.jpg",
  },
  {
    id: 7,
    title: "The Shawshank Redemption",
    release_date: "1994-09-23",
    poster_url:
      "https://image.tmdb.org/t/p/w500/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg",
  },
  {
    id: 8,
    title: "The Godfather",
    release_date: "1972-03-24",
    poster_url:
      "https://image.tmdb.org/t/p/w500/3bhkrj58Vtu7enYsRolD1fZdja1.jpg",
  },
  {
    id: 9,
    title: "Pulp Fiction",
    release_date: "1994-10-14",
    poster_url:
      "https://image.tmdb.org/t/p/w500/d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg",
  },
  {
    id: 10,
    title: "The Matrix",
    release_date: "1999-03-31",
    poster_url:
      "https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg",
  },
  {
    id: 11,
    title: "Forrest Gump",
    release_date: "1994-07-06",
    poster_url:
      "https://image.tmdb.org/t/p/w500/arw2vcBveWOVZr6pxd9XTd1TdQa.jpg",
  },
  {
    id: 12,
    title: "Fight Club",
    release_date: "1999-10-15",
    poster_url:
      "https://image.tmdb.org/t/p/w500/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg",
  },
  {
    id: 13,
    title: "The Lord of the Rings: The Return of the King",
    release_date: "2003-12-17",
    poster_url:
      "https://image.tmdb.org/t/p/w500/rCzpDGLbOoPwLjy3OAm5NUPOTrC.jpg",
  },
  {
    id: 14,
    title: "Goodfellas",
    release_date: "1990-09-19",
    poster_url:
      "https://image.tmdb.org/t/p/w500/aKuFiU82s5ISJpGZp7YkIr3kCUd.jpg",
  },
  {
    id: 15,
    title: "Oppenheimer",
    release_date: "2023-07-21",
    poster_url:
      "https://image.tmdb.org/t/p/w500/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg",
  },
  {
    id: 16,
    title: "Spider-Man: No Way Home",
    release_date: "2021-12-17",
    poster_url:
      "https://image.tmdb.org/t/p/w500/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg",
  },
  {
    id: 17,
    title: "Joker",
    release_date: "2019-10-04",
    poster_url:
      "https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
  },
  {
    id: 18,
    title: "The Silence of the Lambs",
    release_date: "1991-02-14",
    poster_url:
      "https://image.tmdb.org/t/p/w500/uS9m8OBk1A8eM9I042bx8XXpqAq.jpg",
  },
  {
    id: 19,
    title: "Gladiator",
    release_date: "2000-05-05",
    poster_url:
      "https://image.tmdb.org/t/p/w500/ty8TGRuvJLPUmAR1H1nRIsgwvim.jpg",
  },
  {
    id: 20,
    title: "Schindler's List",
    release_date: "1993-12-15",
    poster_url:
      "https://image.tmdb.org/t/p/w500/sF1U4EUQS8YHUYjNl3pMGNIQyr0.jpg",
  },
  {
    id: 21,
    title: "The Green Mile",
    release_date: "1999-12-10",
    poster_url:
      "https://image.tmdb.org/t/p/w500/velWPhVMQeQKcxggNEU8YmIo52R.jpg",
  },
  {
    id: 23,
    title: "The Prestige",
    release_date: "2006-10-20",
    poster_url:
      "https://image.tmdb.org/t/p/w500/tRNlZbgNCNOpLpbPEz5L8G8A0JN.jpg",
  },
  {
    id: 24,
    title: "The Departed",
    release_date: "2006-10-06",
    poster_url:
      "https://image.tmdb.org/t/p/w500/nT97ifVT2J1yMQmeq20Qblg61T.jpg",
  },
  {
    id: 25,
    title: "Whiplash",
    release_date: "2014-10-10",
    poster_url:
      "https://image.tmdb.org/t/p/w500/7fn624j5lj3xTme2SgiLCeuedmO.jpg",
  },
  {
    id: 26,
    title: "The Lion King",
    release_date: "1994-06-24",
    poster_url:
      "https://image.tmdb.org/t/p/w500/sKCr78MXSLixwmZ8DyJLrpMsd15.jpg",
  },
  {
    id: 27,
    title: "Back to the Future",
    release_date: "1985-07-03",
    poster_url:
      "https://image.tmdb.org/t/p/w500/fNOH9f1aA7XRTzl1sAOx9iF553Q.jpg",
  },
  {
    id: 28,
    title: "The Truman Show",
    release_date: "1998-06-05",
    poster_url:
      "https://image.tmdb.org/t/p/w500/vuza0WqY239yBXOadKlGwJsZJFE.jpg",
  },
  {
    id: 29,
    title: "Coco",
    release_date: "2017-11-22",
    poster_url:
      "https://image.tmdb.org/t/p/w500/gGEsBPAijhVUFoiNpgZXqRVWJt2.jpg",
  },
  {
    id: 30,
    title: "Django Unchained",
    release_date: "2012-12-25",
    poster_url:
      "https://image.tmdb.org/t/p/w500/7oWY8VDWW7thTzWh3OKYRkWUlD5.jpg",
  },
  {
    id: 31,
    title: "WALL-E",
    release_date: "2008-06-27",
    poster_url:
      "https://image.tmdb.org/t/p/w500/hbhFnRzzg6ZDmm8YAmxBnQpQIPh.jpg",
  },
  {
    id: 32,
    title: "Avatar",
    release_date: "2009-12-18",
    poster_url:
      "https://image.tmdb.org/t/p/w500/kyeqWdyUXW608qlYkRqosgbbJyK.jpg",
  },
  {
    id: 33,
    title: "The Avengers",
    release_date: "2012-05-04",
    poster_url:
      "https://image.tmdb.org/t/p/w500/RYMX2wcKCBAr24UyPD7xwmjaTn.jpg",
  },
  {
    id: 34,
    title: "Toy Story",
    release_date: "1995-11-22",
    poster_url:
      "https://image.tmdb.org/t/p/w500/uXDfjJbdP4ijW5hWSBrPrlKpxab.jpg",
  },
  {
    id: 35,
    title: "Jurassic Park",
    release_date: "1993-06-11",
    poster_url:
      "https://image.tmdb.org/t/p/w500/oU7Oq2kFAAlGqbU4VoAE36g4hoI.jpg",
  },
  {
    id: 36,
    title: "Titanic",
    release_date: "1997-12-19",
    poster_url:
      "https://image.tmdb.org/t/p/w500/9xjZS2rlVxm8SFx8kPC3aIGCOYQ.jpg",
  },
  {
    id: 37,
    title: "The Social Network",
    release_date: "2010-10-01",
    poster_url:
      "https://image.tmdb.org/t/p/w500/n0ybibhJtQ5icDqTp8eRytcIHJx.jpg",
  },
  {
    id: 38,
    title: "La La Land",
    release_date: "2016-12-09",
    poster_url:
      "https://image.tmdb.org/t/p/w500/uDO8zWDhfWwoFdKS4fzkUJt0Rf0.jpg",
  },
  {
    id: 39,
    title: "The Grand Budapest Hotel",
    release_date: "2014-03-28",
    poster_url:
      "https://image.tmdb.org/t/p/w500/eWdyYQreja6JGCzqHWXpWHDrrPo.jpg",
  },
  {
    id: 40,
    title: "Eternal Sunshine of the Spotless Mind",
    release_date: "2004-03-19",
    poster_url:
      "https://image.tmdb.org/t/p/w500/5MwkWH9tYHv3mV9OdYTMR5qreIz.jpg",
  },
  {
    id: 41,
    title: "Spirited Away",
    release_date: "2001-07-20",
    poster_url:
      "https://image.tmdb.org/t/p/w500/39wmItIWsg5sZMyRUHLkWBcuVCM.jpg",
  },
  {
    id: 42,
    title: "Barbie",
    release_date: "2023-07-21",
    poster_url:
      "https://image.tmdb.org/t/p/w500/iuFNMS8U5cb6xfzi51Dbkovj7vM.jpg",
  },
  {
    id: 43,
    title: "Everything Everywhere All at Once",
    release_date: "2022-03-25",
    poster_url:
      "https://image.tmdb.org/t/p/w500/w3LxiVYdWWRvEVdn5RYq6jIqkb1.jpg",
  },
  {
    id: 44,
    title: "Top Gun: Maverick",
    release_date: "2022-05-27",
    poster_url:
      "https://image.tmdb.org/t/p/w500/62HCnUTziyWcpDaBO2i1DX17ljH.jpg",
  },
  {
    id: 45,
    title: "Black Panther",
    release_date: "2018-02-16",
    poster_url:
      "https://image.tmdb.org/t/p/w500/uxzzxijgPIY7slzFvMotPv8wjKA.jpg",
  },
  {
    id: 46,
    title: "Mad Max: Fury Road",
    release_date: "2015-05-15",
    poster_url:
      "https://image.tmdb.org/t/p/w500/hA2ple9q4qnwxp3hKVNhroipsir.jpg",
  },
  {
    id: 47,
    title: "1917",
    release_date: "2019-12-25",
    poster_url:
      "https://image.tmdb.org/t/p/w500/iZf0KyrE25z1sage4SYFLCCrMi9.jpg",
  },
  {
    id: 48,
    title: "The Batman",
    release_date: "2022-03-04",
    poster_url:
      "https://image.tmdb.org/t/p/w500/74xTEgt7R36Fpooo50r9T25onhq.jpg",
  },
  {
    id: 49,
    title: "Get Out",
    release_date: "2017-02-24",
    poster_url:
      "https://image.tmdb.org/t/p/w500/tFXcEccSQMf3lfhfXKSU9iRBpa3.jpg",
  },
  {
    id: 50,
    title: "A Quiet Place",
    release_date: "2018-04-06",
    poster_url:
      "https://image.tmdb.org/t/p/w500/nAU74GmpUk7t5iklEp3bufwDq4n.jpg",
  },
];
export default movies