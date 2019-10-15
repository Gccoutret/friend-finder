// var connection = require('../connection');

// module.exports=function(app){
// app.get("/api/friends", function(req, res) {
//   res.sendFile(path.join(__dirname, "../public/survey.html"));
// });

// app.post("/api/survey", function(req, res) {
//   console.log(req.body)
//   console.log('o we in the api')
//   var query= "INSERT INTO friends (name, photo_link, question1, quesiton2, question3, question4, question5, question6, question7, question8, question9, question10,)VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?)"
//   connection.query(query, [req.body.name, req.body.photo_link, req.body.question1, req.body.question2, req.body.question3, req.body.question4, req.body.question5, req.body.question6, req.body.question7, req.body.question8, req.body.question9, req.body.question10], function (error, results) {
//     console.log('o we in the db')
//     if (error) throw error;
//     res.json(results);
//     console.log(req.body)
 
// });
// })
// }

var friendTable = require('../friends/folks');

module.exports = function(app){

  app.get('/api/friends', function(req, res){
    res.json(allFriends);
  })

  app.post('/api/friends', function(req, res){
    console.log('Posting...')
    friendTable.push(req.body);
    console.log(allFriends);
    res.json(true);
  });
}