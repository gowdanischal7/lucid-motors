// function initialize() {

//   var options = {
//     types: ['(cities)'],
//     componentRestrictions: { country: "us" }
//   };

//   var input = document.getElementById('searchTextField');
//   var autocomplete = new google.maps.places.Autocomplete(input, options);
// }
// google.maps.event.addDomListener(window, 'load', initialize);

$(document).ready(function () {
  $('.title-effect').fadeIn(3000);

  $('.btn').click(function () {
    var fn = $('#firstname').val();
    var ln = $('#lastname').val();
    var country = $('#searchTextField option:selected').val();
    var em = $('#email').val();

    if (fn !== '' && ln !== '' && country !== '' && em !== '') {
      $('#form-container').fadeOut(5000).html("Thank you. We will be in touch shortly.").css({ 'font-size': '24px', 'font-weight': 'bold' });
    }
  });
});