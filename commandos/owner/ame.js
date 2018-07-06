const Discord = require("discord.js");
const admin = require('firebase-admin');
var db = admin.database();


exports.run = async (auru, message, args) => {
	var ref = db.ref();
    var usersRef = ref.child("userDb");
	usersRef.set({
	  alanisawesome: {
		date_of_birth: "June 23, 1912",
		full_name: "Alan Turing"
	  },
	  gracehop: {
		date_of_birth: "December 9, 1906",
		full_name: "Grace Hopper"
	  }
	});
};

exports.help = {
    name: "",
    category: "",
    desc: "",
    use: "",
    param: "",
};

