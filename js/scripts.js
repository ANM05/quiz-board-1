//UI LOGIC

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

  });

  function traverse(){
    var allListElements = $( "li" );
    alert($("input","label","div",allListElements).is(":checked"));//traverses tree from all li elements and check if input value is checked
    alert($("input","label","div").closest(".question").attr("id"));//returns the question id after traversing inversely from input memory pointer

  }


//BUSINESS LOGIC
//get values from pages submitted.

//for every qn id,check the value selected and compare with answer stored in variable array here, else continue after submission
//pass in qestion id then traverse and check input if checked, if its checked return value
