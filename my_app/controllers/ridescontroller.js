var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

//add ride
exports.addRide = function (req, res) {
  var rideDetails = {
    "id": req.body.name + "@" + new Date().getTime(),
    "name": req.body.name,
    "email": req.body.email,
    "cno": req.body.cno,
    "cartype": req.body.cartype,
    "extra": {
      "babyseat": req.body.babyseat,
      "wheelchair": req.body.wheelchair,
      "stocktip": req.body.stocktip
    },
    "date": req.body.date,
    "pickup": req.body.pickup,
    "dropoff": req.body.dropoff,
    "instruction": req.body.instruction
  }

  //Add document to our ridedetails collection when user book ride...
  MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db("mydb");
    dbo.collection("ridedetails").insertOne(rideDetails, function (err, res) {
      if (err) throw err;
      console.log("1 document inserted : " + rideDetails);
      db.close();

    });
  });
  res.redirect("/rides/allride");
}


//fetch allrides or searched rides
exports.allRide = function (req, res) {
  var query = req.body.search;
  var date = req.body.date;

  console.log("in controller allride  " + query + "  " + date);

  MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db("mydb");
    if (date == undefined || date == "") {
      // console.log("date undefined   :   " + date + " query : " + query);
      if ((query == undefined || query == "")) {
        dbo.collection("ridedetails").find({}).toArray(function (err, result) {
          if (err) throw err;
          res.render('allrides.ejs', { rides: result });
        });
      }
      else {
        dbo.collection("ridedetails").find({ $or: [{ name: { $regex: new RegExp(query) } }, { cartype: { $regex: new RegExp(query) } }, { email: { $regex: new RegExp(query) } }, { pickup: { $regex: new RegExp(query) } }, { dropoff: { $regex: new RegExp(query) } }] }).toArray(function (err, result) {
          if (err) throw err;
          console.log(result);
          res.render('allrides.ejs', { rides: result });
        });
      }
    }
    else {
      // console.log("date defined  :  " + date + " query : " + query);
      if ((query == undefined || query == "")) {
        dbo.collection("ridedetails").find({ "date": date }).toArray(function (err, result) {
          if (err) throw err;
          res.render('allrides.ejs', { rides: result });
        });
      }
      else {

        dbo.collection("ridedetails").find({ $and: [{ "date": date }, { $or: [{ name: { $regex: new RegExp(query) } }, { cartype: { $regex: new RegExp(query) } }, { email: { $regex: new RegExp(query) } }, { pickup: { $regex: new RegExp(query) } }, { dropoff: { $regex: new RegExp(query) } }] }] }).toArray(function (err, result) {
          if (err) throw err;
          console.log(result);
          res.render('allrides.ejs', { rides: result });
        });
      }

    }
    db.close();
  });
}


//fetch rides by particular email-id
exports.fetchRide = function (req, res) {
  var useremail = req.body.email;
  MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db("mydb");
    dbo.collection("ridedetails").find({ "email": useremail }).toArray(function (err, result) {
      if (err) throw err;
      res.render('fetchrides.ejs', { rides: result });
    });
    db.close();
  });
}

//fetch ride details by id
exports.selectRide = function (req, res) {
  var id = req.body.id;
  console.log("in select ride id is " + id);

  MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db("mydb");
    dbo.collection("ridedetails").find({ "id": id }).toArray(function (err, result) {
      if (err) throw err;
      res.render('updateform.ejs', { rideDetail: result })
    });
    db.close();
  });

}

//update ride details by id  
exports.updateRide = function (req, res) {
  var id = req.body.id;
  var newValues = {
    $set:
    {
      "name": req.body.name,
      "email": req.body.email,
      "cno": req.body.cno,
      "cartype": req.body.cartype,
      "extra": {
        "babyseat": req.body.babyseat,
        "wheelchair": req.body.wheelchair,
        "stocktip": req.body.stocktip
      },
      "select": req.body.select,
      "date": req.body.date,
      "pickup": req.body.pickup,
      "dropoff": req.body.dropoff,
      "instruction": req.body.instruction
    }
  };
  MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db("mydb");

    dbo.collection("ridedetails").update({ "id": id }, newValues, function (err, res) {
      if (err) throw err;
      console.log("Document updated with id : " + id);
      db.close();
    });
  });
  res.redirect("/");
}

//delete ride by id
exports.deleteRide = function (req, res) {
  var id = req.body.id;
  var selectedemail = req.body.email;
  MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db("mydb");
    dbo.collection("ridedetails").deleteOne({ "id": id }, function (err, result) {
      if (err) throw err;
      console.log("ride with id " + id + "is deleted!!");
      res.redirect(307, "/rides/fetchride?email=" + selectedemail);
    });
    db.close();
  });

}