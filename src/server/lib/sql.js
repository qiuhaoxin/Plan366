const config=require('./config.js');
const mysql=require('mysql');

const env=(process.env.NODE_ENV || 'production');

const pool=mysql.createPool({
	host:config.db.dev.HOST,
	user:config.db.dev.USERNAME,
	password:config.db.dev.PASSWORD,
	port:config.db.dev.PORT,
	database:config.db.dev.DATABASE,
})

const query=(sql,params)=>{
   return new Promise((resolve,reject)=>{
   		pool.getConnection((err,connection)=>{
		if(err){
			reject(err);
		}else{
			connection.query(sql,params,(err,rows)=>{
				if(err){
					reject(err);
				}else{
					resolve(rows);
				}
				connection.release();
			})
		}
	})
   })
}

//创建用户表
const users=`create table if not exists t_users(
     FID INT NOT NULL AUTO_INCREMENT,
     FNAME VARCHAR(100) NOT NULL COMMENT '用户名',
     FREALNAME VARCHAR(100) NOT NULL DEFAULT 'realname' COMMENT '真实姓名',
     FPASSWORD VARCHAR(200) NOT NULL COMMENT '密码',
     FAVATOR VARCHAR(100) NOT NULL COMMENT '头像',
     FCREATTIME TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '注册时间',
     PRIMARY KEY(FID)
);`;


const createTable=(sql)=>{
	return query(sql,[]);
}

//建表

createTable(users);

//注册
exports.register=(value)=>{
	const _sql="insert into t_user set FNAME=?,FREALNAME=?,FPASSWORD=?,FAVATOR=?";
	return query(_sql,value)
}
//删除用户
exports.delUser=(value)=>{
	const  _sql=`delete from t_user where FID=${value}`;
}



