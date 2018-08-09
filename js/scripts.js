$(document).ready(function() {


  $(".picture").click(function() {
    if ($(this).attr("id") === "batPic") {
      $("#batInfo").slideDown();
      $("#sharkInfo").hide();
      $("#hammerInfo").hide();
    } else if ($(this).attr("id") === "sharkPic") {
      $("#batInfo").hide();
      $("#sharkInfo").slideDown();
      $("#hammerInfo").hide();
    } else if ($(this).attr("id") === "hammerPic") {
      $("#batInfo").hide();
      $("#sharkInfo").hide();
      $("#hammerInfo").slideDown();
    }
    event.preventDefault();
  });


});
