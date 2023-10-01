$(document).ready(function () {
    // $('.dttt').datepicker({
    //   dateFormat: "yy-mm-dd",
    //   changeMonth: true,
    //   changeYear: true,
    //   maxDate: '3d',
    //   minDate: '-2y'
    // });


    $('#kick').click(function () {
      $('.green').css('background-color', 'yellow');
    });
    $('#kick').dblclick(function () {
      $('.yellow').css('background-color', 'aquamarine');
    });
    $('#hide').click(function () {
      $('.main').toggle('slow');
    });


    $('#kick,#hide').mouseover(function () {
      $(this).css('background-color', 'aquamarine');
    });
    $('#kick,#hide').mouseleave(function () {
      $(this).css('background-color', 'white');
    });

   
  });
  $(document).ready(function(){
    $("#flip").click(function(){
      $("#panel").slideDown("slow");
    });
  });
