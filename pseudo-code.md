Setup
Start a new Node project
npm init
npm install express --save
install body-parser
Create server--using Express--in an app.js file
3000 port
routes folder/directory-store your Express routes.
public folder-subdirectories for assets, and scripts.
images directory-under the assets directory
photos of each team member-images directory
vendors directory-under the assets directory-place-jQuery

Functionality
localhost:3000 loads-displays a heading-group's name-index.html-public directory.
rest of the page will be populated via AJAX calls to the server.
On page load-two requests:
Request 1
Make a GET request to a /bios route. This route will return an array of objects. You'll have as many objects as you have team members. Each object will include

the name of a team member
a 1-2 sentence bio of the team member
the relative url for the team member's image
Append each object's data to the DOM. And under each image include a Like button.

Request 2
GET request to a /likes route, will return an object.
Object has team member's name=property, like count=value

Like Button
Click on the Like button-update a server route-keeps track number of likes received

. For example, if you have a team member named Kris, you might have a server route that takes POST requests to the url /likes/kris. Thus, you'll need each button to trigger an AJAX call to each specific route. Upon success of your AJAX call, make another request to GET /likes to update the like count. Display this like count on, next to, or near the Like button.

Submission
Use the assignment app to submit one repo URL per team. Include each team member's name in the comments. Other team members may submit the same repo, or they may submit the names of their team members (so that we can find it).
