const router=require('koa-router')();
const planSql=require('../lib/sql.js');

//登录
router.get('/user/login',async (ctx,next)=>{
	const params=ctx.query;
	console.log("params is "+JSON.stringify(params));
    ctx.body="hello World to qiuhaoxin";
})
//注册用户
router.post('/user/register',async (ctx,next)=>{
	console.log("regis params is "+JSON.stringify(ctx.request.body));
	const {userName,password}=ctx.request.body;
	console.log("userName is "+userName);
	console.log("password is "+password);
	ctx.body={
		message:'注册成功!',
		code:1,
		data:"test",
	}
})

//修改密码
router.post('/user/changePsw',async(ctx,next)=>{

})

//修改个人资料
router.post('/user/changePerson',async(ctx,next)=>{

})

module.exports=router;