//UI LOGIC
var choices=['question1:chocolate','question2:vanilla']//STORES CONCACTED FORM OF ANSWER AND QUESTION ID 
var questionids=[];//CONTAINS ALL PULLED QUESTION IDS
var answers=[];//CONTAINS ALL INPUT ANSWERS
var results=[];//CONTAINS CONCATED USER ANSWERS AND QUESTION IDS


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
  concantenate();
  alert(results);
  compare(results,choices)
  alert(marks);
  


})

//BUSINESS LOGIC
//get values from pages submitted.

//for every qn id,check the value selected and compare with answer stored in variable array here, else continue after submission
//pass in qestion id then traverse and check input if checked, if its checked return value


function traverse(){

  for(item=0;item<questionids.length;item+=1){
    if(($("li#"+questionids[item]+" input").is(":checked")===true)){//
      
      var answer=($("li#"+questionids[item]+" input:checked").val())
      answers.push(answer)//ANSWERS GLOBAL VARIABLE
    }
    else{
      alert("no selections made") 

    }
    
      
      }

}


function concantenate(){//FUNCTION TO CONCAT QUESTIONID AND ANSWER
  for(x=0,y=0;x<answers.length,y<questionids.length;x+=1,y+=1){
    try{
      if(answers[x]===undefined) throw "You must select value"

      else{
        var result= questionids[y] + ":" + answers[x];
        results.push(result)//RESULTS GLOBAL VARIABLE
      }
    }
    catch(err){
      alert(err)
    }

    }
}

marks=0;
function compare(list1,list2){///FUNCTION TO COMPARE ENTITIES IN TWO DIFFERENT ARRAYS AND COUNT TOTAL MARKS
  
  for(x=0;x<list1.length;x+=1){
    do{
      
      marks+=parseInt('1');

    }
    while(list1[x] in list2)
    
    }
    
}



  





