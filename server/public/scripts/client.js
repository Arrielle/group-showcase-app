console.log('client.js is sourced!');

$(document).ready(function () {
  console.log('jquery.js is sourced!');
  $.ajax({
    type: 'GET',
    url: '/bios',
    success: function(response){
      console.log('response: ', response);
      $('#container').append(
        '<div class="phish"><img src="image.jpg" alt=""><h2>name</h2><p>bio</p></div>'
      );

    }
  })

});
