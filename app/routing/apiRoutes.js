// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on table-data, waitinglist, etc.
// ===============================================================================

var friendsData = require("../data/friends");



// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
  // API GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases when a user visits a link
  // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
  // ---------------------------------------------------------------------------

  app.get("/data/friends", function(req, res) {
    res.json(friendsData);
  });

  // API POST Requests
  // Below code handles when a user submits a form and thus submits data to the server.
  // In each of the below cases, when a user submits form data (a JSON object)
  // ...the JSON is pushed to the appropriate JavaScript array
  // (ex. User fills out a reservation request... this data is then sent to the server...
  // Then the server saves the data to the friendsData array)
  // ---------------------------------------------------------------------------

  app.post("/data/friends", function(req, res) {
    console.log("Inside Post Method");

    var newFriend = req.body;
    console.log("new friend: "+ JSON.stringify(newFriend));
    var scoresArray = [];
    var friendCount = 0;
    var bestMatch = 0;

    for(var i=0;i<friendsData.length;i++){
      var diff = 0;

      for(var j=0;j<newFriend.scores.length;j++){
         diff = diff + (Math.abs(parseInt(friendsData[i].scores[j]) - parseInt(newFriend.scores[j])));
      }

      scoresArray.push(diff);
    }

    for(var i=0; i<scoresArray.length;i++){
      if(scoresArray[i] < scoresArray[bestMatch]){
        bestMatch = i;
      }
    }

    var bff = friendsData[bestMatch];
    res.json(bff);

    friendsData.push(newFriend);




        // Note the code here. Our "server" will respond to requests and let users know if they have a table or not.
    // It will do this by sending out the value "true" have a table
    // req.body is available since we're using the body parsing middleware
    // if (friendsData.length < 5) {
    //   friendsData.push(req.body);
    //   res.json(true);
    // }
    // else {
    //     res.json(false);
    // }
  });

  // ---------------------------------------------------------------------------
  // I added this below code so you could clear out the table while working with the functionality.
  // Don"t worry about it!

  app.post("/data/clear", function(req, res) {
    // Empty out the arrays of data
    friendsData.length = 0;

    res.json({ ok: true });
  });
};
