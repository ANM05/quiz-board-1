//UI LOGIC
var choices=['question1 : chocolate','question2 : vanilla']
var questionids=[]
var answers=[]
var results=[]

$(document).ready(function(){
  $("#intronav").click(function(){
    $("#introduction").show();
    $("#page1").hide();
    $("#page2").hide();
  })
  $("#page1nav").click(function(){
    $("#page1").show();
    $("#introduction").hide();
    $("#page2").hide();

  })
  $("#page2nav").click(function(){
    $("#page2").show();
    $("#introduction").hide();
    $("#page1").hide();
  });

  
  $("li").each(function(listitem){       //POINTS TO LIST ELEMENTS MEMORY LOCATION
    var questionid=(($(this).attr('id')))          //THIS KEYWORD QUERRYS PARTICULAR ELEMENT AT THAT MEMORY LOCATION AND RETURNS THE PARTICULAR ATTRIBUTE REQUIRED ID
    questionids.push(questionid)
  }) 

  traverse();
  alert(answers)
  compare();
  alert(results);
  


})

function traverse(){

  for(item=0;item<questionids.length;item+=1){
    if(($("li#"+questionids[item]+" input").is(":checked")===false)){//
      alert("no selections made")
    }
    else{
      var answer=($("li#"+questionids[item]+" input:checked").val())
      answers.push(answer)
      

    }
    
      
      }

}
function compare(){
  for(x=0,y=0;x<answers.length,y<questionids.length;x+=1,y+=1){
    var result= questionids[y] + " : " + answers[x];
    results.push(result)

    }
}





  





//BUSINESS LOGIC
//get values from pages submitted.

//for every qn id,check the value selected and compare with answer stored in variable array here, else continue after submission
//pass in qestion id then traverse and check input if checked, if its checked return value
