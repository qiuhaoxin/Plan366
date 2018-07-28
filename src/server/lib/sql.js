const config=require('./config.js');
const mysql=require('mysql');

const env=(process.env.NODE_ENV || 'production');

const pool=mysql.createPool({
	host:config.db.dev.HOST,
	user:config.db.dev.USERNAME,
	password:config.db.dev.PASSWORD,
	port:config.db.dev.PORT,
})
