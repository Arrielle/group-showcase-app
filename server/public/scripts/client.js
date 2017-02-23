console.log('client.js is sourced!');

$(document).ready(function () {
  console.log('jquery.js is sourced!');
  $.ajax({
    type: 'GET',
    url: '/people',
    success: function(response){
      console.log('response: ', response);
    }
  })

});
