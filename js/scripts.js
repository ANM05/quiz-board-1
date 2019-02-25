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



})

$('#nextpage').click(function(){//ONCLICK, PERFORM CHECK IF ANY LI ITEM IS UNCHECKED, IF SO ALERT NEED TO ANSWER QUESTION ELSE GO TO NEXT PAGE
  var pageids=[]

  $("li").each(function(listitem){       //

    var qnid=(($(this).attr('id')))
    pageids.push(qnid)

  })
  for(item=0;item<pageids.length;item+=1){
    try{
    if($("li#"+pageids[item]+" input").is(":checked")===false)

      throw "You must answer all questions :)"
      else{
        location.replace(this.href)
        $('#page1').hide();
        $('#page2').show();
      }
    }

    catch(err){
      $('.alert').show()
      $('.alert').text(err)
      return null
    }
  }


})

$('#previouspage1').click(function(){//ONCLICK TAKES YOU BACK TO PREVIOUS PAGE 1
  location.replace(this.href)
  $('#page1').show();
  $('#page2').hide();
  $('.alert').hide();

})
$('#previouspage').click(function(){//ONCLICK TAKES YOU BACK TO PREVIOUS INTRODUCTION PAGE
  location.replace(this.href)
  $('#introduction').show();
  $('#page1').hide();

})

$("#next").click(function(){//TAKE YOU NEXT PAGE TO PAGE1
  location.replace(this.href)
  $('#page1').show();
  $('#introduction').hide();

})


function traverse(){//FUNCTION TO TRAVERSE THROUGH PAGE LAYOUT AND FIND SPECIFIC ELEMENT PROPERTIES

  for(item=0;item<questionids.length;item+=1){
    if(($("li#"+questionids[item]+" input").is(":checked")===true)){//FOR ANY LIST ITEM WITH ID FIND INPUT ELEMENT THATS CHECKED AND RETURN VALUE

      var answer=($("li#"+questionids[item]+" input:checked").val())
      answers.push(answer)//ANSWERS GLOBAL VARIABLE

    }

}
concantenate()
}

function output(){//FUNCTION TO OUTPUT RESULTS
  if (marks<=4){
    $('#marks').text('Total Marks: = '+marks)
  }
  else{
    $('#marks').text('you cannot re submit marks')
  }

}

//BUSINESS LOGIC
//get values from pages submitted.

//for every qn id,check the value selected and compare with answer stored in variable array here, else continue after submission
//pass in qestion id then traverse and check input if checked, if its checked return value





function concantenate(){//FUNCTION TO CONCAT QUESTIONID AND ANSWER
  for(x=0,y=0;x<answers.length,y<questionids.length;x+=1,y+=1){

    try{
      if(answers[x]===undefined) throw "You must answer each question"///TRY THE FOLLOWING CODE TO REMOVE BUG AT  CONCANTENATE FUNC THAT CONCATS ELEMENT WITH AN UNDEFINED VALUE ANG GIVES A MARK
        //  return
      else if(answers[x]!==undefined){
        var result= questionids[y] + ":" + answers[x];
      results.push(result)//RESULTS IS A GLOBAL VARIABLE
      }

    }
    catch(err){

      $('#marks').text(err)
      results.splice(0,3)//EMPTY ARRAY RESULTS
      return null
    }



    }


      compare(results,choices)

}

var marks=0;
function compare(list1,list2){///FUNCTION TO COMPARE ENTITIES IN TWO DIFFERENT ARRAYS AND COUNT TOTAL MARKS

  for(x=0;x<list1.length;x+=1,marks<=4){
    do{

      marks+=1;

    }
    while(list1[x] in list2)


    }
    output();
}
