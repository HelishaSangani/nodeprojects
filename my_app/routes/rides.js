var express = require('express');
var router = express.Router();
var path = require('path');
var ridesController = require('./../controllers/ridescontroller');

/* GET users listing. */
router.get('/bookride', function (req, res, next) {
  res.sendFile(path.join(__dirname + "/../views/bookride.html"));
});

//page who ask for email-id to fetch rides--- GET
router.get('/editride', function (req, res) {
  res.sendFile(path.join(__dirname + '/../views/editride.html'));
});

//ride details page for re-entering the details--- GET
router.get('/updaterideform', function (req, res) {
  res.sendFile(path.join(__dirname + '/../views/updateride.html'));
});

//allrides--- POST
router.get('/allride', ridesController.allRide);

router.post('/allride', ridesController.allRide);




// addRide--- POST
router.post('/addride', ridesController.addRide)

//fetchride--- POST
router.post('/fetchride', ridesController.fetchRide);

//selectRide--- POST
router.post('/selectride', ridesController.selectRide)

//updateride--POST
router.post('/update', ridesController.updateRide)

//fetch update page--- GET
router.get('/updaterideform', function (req, res) {
  res.sendFile(path.join(__dirname + '/../view/updateride.html'));
});

//Delete ride--- POST
router.post('/deleteride', ridesController.deleteRide)


module.exports = router;
