exports.addEmployee = function (req, res) {

  var user = {
    "name": req.body.name,
    "email": req.body.email,
    "phone": req.body.phone
  }

  //here add database adding 
  res.send(" " + user.name + " " + user.email + " " + user.phone);

}