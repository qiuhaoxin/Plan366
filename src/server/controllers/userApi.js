const router=require('koa-router')();

router.get('/user/login',async (ctx,next)=>{
	const params=ctx.query;
	console.log("params is "+JSON.stringify(params));
    ctx.body="hello World to qiuhaoxin";
})

router.post('/user/register',async (ctx,next)=>{
	const params=ctx.request.body;
	
})

module.exports=router;