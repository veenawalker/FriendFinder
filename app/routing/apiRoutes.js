
// Pull in required dependencies
var path = require('path');

// Import the list of friend entries
var friends = require('../data/friends.js');

// Export API routes
module.exports = function(app) {
	app.get("/api/friends", function(req, res) {
		var result = JSON.stringify(friends, null, 2) + "   " + JSON.stringify(friends[0], null, 2);
	
		return res.send(result);
	});
	app.post("/api/friends", function(req, res){
	console.log(req.body)
	var userInput = req.body.scores;
	var scoreDifferenceArray = [];
	var match = 0;

	// friend comparison logic
	//loop to compare with each person

	for(var i = 0; i < friends.length; i++) {
		var scoreDifference = 0;
		for( var j = 0; j < userInput.length; j++) {
			scoreDifference += Math.abs(parseInt(friends[i].scores[j]) - parseInt(userInput[j]))
			scoreDifferenceArray.push(scoreDifference);
		}

			for(var i = 0; i < scoreDifferenceArray.length; i++) {
				if (scoreDifferenceArray[i]<=scoreDifferenceArray[match]) {
					match = i;
				}
			
		}
	}
	var best = friends[match]
	res.json(best)

	
	


	//if else difference is low best match
	// push in matchname & match image 

	
	friends.push(req.body)
	res.json({
		matchName: "somebody",
		matchImage: 'https://static.boredpanda.com/blog/wp-content/uploads/2016/10/fb_image_5808c83fa24c1__700.jpg'
	})
	});

}



// 	// console.log('___ENTER apiRoutes.js___');

// 	// Total list of friend entries
// 	app.get('/api/friends', function(req, res) {
// 		res.json(friends);
//     });
    
//     // Add new friend entry
// 	app.post('/api/friends', function(req, res) {
// 		// Capture the user input object
// 		var userInput = req.body;
//         // console.log('userInput = ' + JSON.stringify(userInput));
        
//         var userResponses = userInput.scores;
// 		// console.log('userResponses = ' + userResponses);

//         // Compute best friend match
// 		var matchName = '';
// 		var matchImage = '';
//         var totalDifference = 10000; // Make the initial value big for comparison
        
//         // Examine all existing friends in the list
// 		for (var i = 0; i < friends.length; i++) {
//             // console.log('friend = ' + JSON.stringify(friends[i]));
            
//             // Compute differenes for each question
// 			var diff = 0;
// 			for (var j = 0; j < userResponses.length; j++) {
// 				diff += Math.abs(friends[i].scores[j] - userResponses[j]);
//             }
//             // console.log('diff = ' + diff);

// 			// If lowest difference, record the friend match
// 			if (diff < totalDifference) {
// 				// console.log('Closest match found = ' + diff);
// 				// console.log('Friend name = ' + friends[i].name);
// 				// console.log('Friend image = ' + friends[i].photo);

// 				totalDifference = diff;
// 				matchName = friends[i].name;
// 				matchImage = friends[i].photo;
// 			}
//         }
//         // Add new user
// 		friends.push(userInput);

// 		// Send appropriate response
// 		res.json({status: 'OK', matchName: matchName, matchImage: matchImage});
// 	});
// };