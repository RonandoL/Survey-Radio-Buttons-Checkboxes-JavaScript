$(document).ready(function() {
  $('form').submit(function(event) {
    event.preventDefault();

    var sexChoice = $('input[name=sex]:checked').val();
    var foodInput = [];
    var count = 0;

    $.each($('input[name=food]'),function() {
      if ($(this).is(':checked')) {
        foodInput[count] = " " + $(this).val();
        count +=1;
      }
    });
console.log(foodInput);
    $('#sex').text(sexChoice);
    $('#food').text(foodInput);
    $('.results').show();
  });

});






// $(document).ready(function() {
//   $('form').submit(function(event) {
//     event.preventDefault();
//
//     var sexChoice = $('input[name="sex"]:checked').val();
//     var foodInput = [];
//     var count = 0;
//
//     $.each($('input[name=food]'), function() {
//       if ($(this).is(':checked')) {
//         foodInput[count] = $(this).val();
//         count +=1;
//       }
//     });
//
//     $('#sex').text(sexChoice);
//     $('#food').text(foodInput);
//     $('.results').show();
//
//   });
// });
