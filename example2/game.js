/*

code base:
https://phaser.io/examples/v2/text/google-webfonts

Solution by Lord_Garfield from:
http://www.html5gamedevs.com/topic/14633-google-fonts-once-and-for-all/

*/

var game = new Phaser.Game(320, 480, Phaser.CANVAS, 'phaser-example', {
  create: create
});

function create() {

  game.stage.backgroundColor = "#4488FA";

  var style = {
    font: "25px junctionregular",
    fill: "#fff",
    boundsAlignH: "center",
    boundsAlignV: "middle"
  };
  
  var style2 = {
    font: "35px ostrich_sansmedium",
    fill: "#fff",
    boundsAlignH: "center",
    boundsAlignV: "middle"
  };

  var text = game.add.text(50, 100, "Junction Regular", style);
  text.setShadow(3, 3, 'rgba(0,0,0,0.5)', 2);
  
  var text2 = game.add.text(50, 200, "Ostrich Medium", style2);
  text2.setShadow(3, 3, 'rgba(0,0,0,0.5)', 2);

}

