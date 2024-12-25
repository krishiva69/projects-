class Quiz {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play(){
question.hide();
  
background("yellow");

textSize(35);
text("Quiz Result" ,350, 70)

Contestant.getPlayerInfo();  

if(allContestants !== undefined){
var yp = 220;
fill("blue");
textSize(20)
text("*Note: Contestants who answered correct are highlighted in green" ,130, 230)

for(var plr in allContestants){
var correctAnse = "2"
if(correntAnse === allContestants[plr].answer)
fill("green")

else
fill("red")
yp = yp + 30
textSize(20)
text(allContestants[plr].name + ":" + allContestants[plr].answer, 270, yp)
}


}
    
    
  }

}
