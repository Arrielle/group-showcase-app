console.log('client.js is sourced!');

$(document).ready(function () {
  console.log('jquery.js is sourced!');
  $.ajax({
    type: 'GET',
    url: '/bios',
    success: function(response){
      console.log('response: ', response);
      for (var i = 0; i < response.length; i++) {
        var personName = response[i].name;
        $('#container').append(
          '<div class="phish">' + '<img src="'+ response[i].image + '"/>' + '<h2>' + personName + '</h2><p>'
         + response[i].bio + '</p><button class="likeButton" data-name="' + personName +'">LIKES &#128077;<span id="'+ personName +'Likes"></span></button></div>'

        );
      }//ends our for loop


    }//ends success
  })
  $('#container').on('click', '.likeButton', function() {
    console.log('Person was clicked: ' + $(this).data('name'));
  });
});

// $.ajax
// type: 'GET'
// url: '/likes'
// button click
