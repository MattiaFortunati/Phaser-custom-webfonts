var gameState = function(game){
  
};

gameState.prototype = {
  create: function(){
    this.game.stage.backgroundColor = "#4488FA";

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

    var text = this.game.add.text(50, 100, "Junction Regular", style);
    text.setShadow(3, 3, 'rgba(0,0,0,0.5)', 2);
    
    var text2 = this.game.add.text(50, 200, "Ostrich Medium", style2);
    text2.setShadow(3, 3, 'rgba(0,0,0,0.5)', 2);

    }
}