interface Movie {
  date: Date;
  name: string;
  rating: number;
  comment?: string;
  composer?: string;
}
const moviesDone: Movie[] = [
  { date: new Date("14.04.2020"), name: "Ford v Ferarri", rating: 7 },
  { date: new Date("19.04.2020"), name: "Klaus", rating: 10 },
  { date: new Date("20.04.2020"), name: "Toy Story 4", rating: 6 },
  {
    date: new Date("20.04.2020"),
    name: "300",
    rating: 10,
    comment: "THIS IS SPAAAARTA",
  },
  {
    date: new Date("02.05.2020"),
    name: "Isle of dogs",
    rating: 6,
    comment: "only for music (alexandre desplat)",
  },
  {
    date: new Date("02.05.2020"),
    name: "Isle of dogs",
    rating: 6,
    comment: "only for music (alexandre desplat)",
  },
  {
    date: new Date("25.05.2020"),
    name: "Elysium",
    rating: 5,
    comment:
      "nice soundtrack (Ryan Amon), nice world design, variations of avatar plot",
  },
  {
    date: new Date("25.05.2020"),
    name: "The Las of Us 2",
    rating: 5,
    comment: "плохо что в конце игроку не дали выбор за элли",
  },
];

const moviesTodo: Movie[] = [
  { date: new Date("02.05.2020"), "name": "Knives Out", "rating": 0 },
  {
    date: new Date("16.05.2020"),
    name: "the good the bad and the ugly (sergo leone) ",
    rating: 0,
  },
  { date: new Date("16.05.2020"), "name": "insomnia (k nolan)", "rating": 0 },
  {
    date: new Date("16.05.2020"),
    name: "revolver (2005) (guy ritchie)",
    rating: 0,
  },
  {
    date: new Date("26.05.2020"),
    name: "Equilibrium",
    rating: 0,
  },
  {
    date: new Date("24.05.2020"),
    name: "Blade Runner",
    rating: 0,
  },
  {
    date: new Date("26.05.2020"),
    name: "Good Life (Benny Safdie)",
    composer: "Daniel Lopatin",
    rating: 0,
  },
  {
    date: new Date("26.05.2020"),
    name: "Uncut Gems (Benny Safdie)",
    composer: "Daniel Lopatin",
    rating: 0,
  },
  {
    date: new Date("26.05.2020"),
    name: "Law Abiding Citizen",
    composer: "Brian Tyler",
    rating: 0,
  },
  {
    date: new Date("16.05.2020"),
    name: "The Fountain (2006)",
    rating: 0,
  },
  {
    date: new Date("26.06.2020"),
    name: "Black Swan",
    rating: 0,
  },
  {
    date: new Date("16.05.2020"),
    name: "Milarepa (2006)",
    rating: 0,
  },
];
