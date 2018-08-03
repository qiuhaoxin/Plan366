const router=require('koa-router')();
const planSql=require('../lib/sql.js');
const SQL_API=require('../lib/sql.js');

//登录
router.get('/user/login',async (ctx,next)=>{
	const params=ctx.query;
	console.log("params is "+JSON.stringify(params));
    ctx.body="hello World to qiuhaoxin";
})
//注册用户
router.post('/user/register',async (ctx,next)=>{
	// console.log("regis params is "+JSON.stringify(ctx.request.body));
	// const {userName,password}=ctx.request.body;
	// console.log("userName is "+userName);
	// console.log("password is "+password);
	const postData=await parsePostData(ctx);
	const userName=postData.name;
	const psw=postData.psw;
	const phone=postData.phonenum;
	await SQL_API.register([userName,psw,phone])
	.then(res=>{
		console.log("注册成功!");
		ctx.body={
			message:'注册成功!',
			result:1,
			data:{userName},
		}
	}).catch(err=>{
		console.log("注册失败"+err);
	});

})

router.get('/user/register',async (ctx,next)=>{
	console.log("sdf");
	ctx.body="successfully!";
})

//修改密码
router.post('/user/changePsw',async(ctx,next)=>{

})

//修改个人资料
router.post('/user/changePerson',async(ctx,next)=>{

})


function parsePostData( ctx ) {
  return new Promise((resolve, reject) => {
    try {
      let postdata = "";
      ctx.req.addListener('data', (data) => {
        postdata += data
      })
      ctx.req.addListener("end",function(){
        //let parseData = //parseQueryStr( postdata )
        resolve( JSON.parse(postdata) )
      })
    } catch ( err ) {
      reject(err)
    }
  })
}

function parseQueryStr( queryStr ) {
  console.log("queryStr is "+queryStr);	
  let queryData = {}
  let queryStrList = queryStr.split('&')
  console.log( queryStrList )
  for (  let [ index, queryStr ] of queryStrList.entries()  ) {
    let itemList = queryStr.split('=')
    queryData[ itemList[0] ] = decodeURIComponent(itemList[1])
  }
  return queryData
}
module.exports=router;