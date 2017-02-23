console.log('client.js is sourced!');

$(document).ready(function () {
  console.log('jquery.js is sourced!');
  $.ajax({
    type: 'GET',
    url: '/bios',
    success: function(response){
      console.log('response: ', response);
      for (var i = 0; i < response.length; i++) {
        $('#container').append(
          '<div class="phish">' + response[i].image + '<h2>' + response[i].name + '</h2><p>' + response[i].bio + '</p></div>'
        );
      }//ends our for loop


    }//ends success
  })

});
