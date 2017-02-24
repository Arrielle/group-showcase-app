// console.log('client.js is sourced!');
// var pageLikes = {};
$(document).ready(function () {
  // console.log('jquery.js is sourced!');

  bioLoad();

  $.ajax({
    type: 'GET',
    url: '/likes',
    success: function(response){
      console.log('response: /likes ', response);
      var pageLikes = response;

      $('#container').on('click', '.likeButton', function() {
        var clickedName = $(this).data('name');
        console.log('Person was clicked: ' + clickedName);
        var likeCount = pageLikes[clickedName];
        console.log(likeCount);
        likeCount++;
        console.log('pageLikes object logs: ', pageLikes);
        $('#' + clickedName +'Likes').text(likeCount);
        pageLikes[clickedName] = likeCount;
        console.log('new object?', pageLikes);

        // $.ajax({
        //   type: 'POST',
        //   url: '/likes',
        //   data: pageLikes
        //   success: function(response){
        //     //post updated object
        //     console.log();
        //   } // end POST /likes function success
        // }) // end ajax

      }); // end #container.on(click)
    } // end GET /likes function success
  }); // end ajax

});

function bioLoad() {
  $.ajax({
    type: 'GET',
    url: '/bios',
    success: function(response){
      console.log('Bio response: ', response);
      for (var i = 0; i < response.length; i++) {
        var personName = response[i].name;
        $('#container').append(
          '<div class="phish">' + '<img src="'+ response[i].image + '"/>' + '<h2>' + personName + '</h2><p>'
          + response[i].bio + '</p><button class="likeButton" data-name="' + personName +'">LIKES &#128077;<span id="'+ personName +'Likes"></span></button></div>'
        );
      }//ends our for loop
    }//ends success
  }); // NOTE: FOR: $.ajax({
  }


  function getLikes() {

  }
