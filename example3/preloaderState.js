var preloaderState = function(game){
  
};
  
preloaderState.prototype = {
    create: function(){
    var t1 = this.game.add.text(0, 0, "mock text", {font:"1px junctionregular", fill:"#FFFFFF"});
    t1.visible = false
    var t2 = this.game.add.text(0, 0, "mock text", {font:"1px ostrich_sansmedium", fill:"#FFFFFF"});
    t2.visible = false

    this.game.state.start("gameState");
  }
}