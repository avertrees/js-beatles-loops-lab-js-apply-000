// add solution here


function theBeatlesPlay(musicians, instruments){
 var beatlesPlay = [];
 for (var i = 0; i<musicians.length; i++){
   beatlesPlay[i] = musicians[i] + " plays " + instruments[i];
 }
 
 return beatlesPlay;
}

function johnLennonFacts(facts){
  var lennonFacts = [];
  var i = 0;
  while(i<facts.length){
    lennonFacts[i] = facts[i] + "!!!";
    i++;
  }
  //for( var i = 0; i < facts.length; i++){
  //  lennonFacts[i] = facts[i] + "!!!";
  //}
  return lennonFacts;
}

function iLoveTheBeatles(n){
  return 0;
}