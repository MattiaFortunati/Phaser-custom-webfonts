/*

code base:
https://phaser.io/examples/v2/text/google-webfonts

and a little improvement to remove the 1 second waiting time from:
http://thoughts.amphibian.com/2015/08/custom-fonts-with-phaser.html

*/


//global object for font loading
webFontLoading = {
  //call rungame when fonts are loaded
  active: function() {
		runGame()
  },
  custom: {
    //array of family names, the ones written within the stylesheet.css coming
    //in the fontSquirrel's webfont kit 
    families: ['junctionregular','ostrich_sansmedium'],
    //local path to stylesheet.css
    urls: ["fonts/stylesheet.css"]
  }
};


//runGame will setup the game
var runGame = function(){

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

}



//load fonts using the object created above
WebFont.load(webFontLoading);
