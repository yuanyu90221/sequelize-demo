var Sequelize = require('sequelize');
var sequelize = new Sequelize('test','postgres','dob770407',{
	host: '127.0.0.1',
	port: 5432,
	dialect: 'postgres'
});

var User = sequelize.define('User',{
	username: Sequelize.STRING,
	birthday: Sequelize.DATE
});

sequelize.sync().then(function(){
	var trueMonth = 5;
	User.create({
		username: '梁元宇',
		birthday: new Date(1988, trueMonth-1,22)
	}).then(function(user){
		console.log(user.dataValues);
	});
});