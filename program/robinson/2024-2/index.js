import { Game } from "../../../library/game.js";

const game = new Game(
  { name: "Robinson", year: 2024, version: 2, versionTitle: "Höst" },
  ["robinson", "rounded"],
  ["🌴", "🥥", "🔥"]
);

game.contestant("Maxim");
game.contestant("Amanda R").eliminate();
game.contestant("Natalie");
game.contestant("Alva");
game.contestant("Roger").eliminate();
game.contestant("Viktor");
game.contestant("Gertrud");

game.contestant("Monireh");
game.contestant("Emmeli");
game.contestant("Nabaz");
game.contestant("Oliver");
game.contestant("Thomas").eliminate();
game.contestant("Elsa");
game.contestant("Ramia");

game.contestant("Ali");
game.contestant("Tommy");
game.contestant("Ida");
game.contestant("Ludvig");
game.contestant("Lena").eliminate();
game.contestant("Amanda B");
game.contestant("Chris").eliminate();

game.contestant("Tove");
game.contestant("Patrik");

export { game };
