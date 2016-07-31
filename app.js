var Sequelize = require('sequelize');
var sequelize = new Sequelize('test','postgres','dob770407',{
	host: '127.0.0.1',
	port: 5432,
	dialect: 'postgres'
});

var User = sequelize.define('User',{
		username: {
			field: 'username',
			type: Sequelize.STRING,
			primaryKey : true,
			allowNull : false
		},
		birthday: {
			field: 'birthday',
			type: Sequelize.DATE
		}
	},
	{
        tableName: 'User',
        timestamps: false,
        freezeTableName: true
    }
);


sequelize.sync().then(function(){
	var trueMonth = 5;
	User.create({
		username: '梁元宇',
		birthday: new Date(1988, trueMonth-1,22)
	}).then(function(user){
		console.log(user.dataValues);
	});
});

