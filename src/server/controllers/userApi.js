const router=require('koa-router')();
const SQL_API=require('../lib/sql.js');
const svgCaptcha=require('svg-captcha');

const writeBack=(ctx,params)=>{
    ctx.body=params;
}
//登录
router.post('/user/login',async (ctx,next)=>{
    console.log("user/login");
    const postData=await parsePostData(ctx);
    const phoneNum=postData['phonenum'];
    const psw=postData['psw'];
    const captcha=postData['captcha'];
    console.log("phoneNum is "+phoneNum+" and psw is "+psw);
    console.log("captcha is "+ctx.session.captcha);
    if(captcha && captcha!=ctx.session.captcha){
      ctx.body={
        message:'验证码错误',
        result:-1,
        data:null,
      };
      return;
    }
    await SQL_API.findPerson([phoneNum]).then((res)=>{
      console.log("res is "+JSON.stringify(res));
      if(res && res[0]){
         const db_psw=res[0]['FPASSWORD'];
         if(db_psw==psw){
            ctx.body={
              message:'登录成功!',
              result:1,
              data:null
            } 
         }else{
            ctx.body={
              message:'登录失败，用户密码不匹配!',
              result:-1,
              data:null
            }
         }
      }else{
        ctx.body={
          message:'登录失败，该手机用户不存在!',
          result:-1,
          data:null
        }
      }
    }).catch(err=>{
      ctx.body={
        message:'异常:'+err,
        result:-1,
        data:null,
      }
    })
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
    const postData=await parsePostData(ctx);
    const phoneNum=postData['phoneNum'];
    const oldPsw=postData['oldPsw'];
    const newPsw=postData['newPsw'];
    const rePsw=postData['rePsw'];

    let result=await SQL_API.findPerson([phoneNum]);
    result=result && result[0];
    console.log("result is "+JSON.stringify(result));
    if(result){
      if(result['FPASSWORD']!=oldPsw){
        ctx.body={
          result:-1,
          message:'密码错误!',
          data:null,
        }
        return;
      }
    }
    await SQL_API.changePsw([newPsw,phoneNum]).then(res=>{
        ctx.body={
          result:1,
          message:'修改密码成功!',
          data:null,
        }
    }).catch(err=>{
        ctx.body={
          result:-1,
          message:err,
          data:null,
        }
    })
})

//修改个人资料
router.post('/user/changePerson',async(ctx,next)=>{

})

router.post('/user/getPerson',async (ctx,next)=>{
    const postData=await parsePostData(ctx);
    const phonenum=postData['phoneNum'];
    console.log("phonenum is "+phonenum);
    await SQL_API.findPerson([phonenum]).then(res=>{
        console.log("res is "+JSON.stringify(res));
        writeBack(ctx,{message:'获取人员信息成功!',result:1,data:res});
    }).catch(err=>{
        writeBack(ctx,{message:err,result:-1,data:null})
    })
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

router.get("/user/getcaptcha",async ctx=>{
    const captcha=svgCaptcha.create();
    //ctx.session.captch=captcha.text;
    ctx.session.captcha=captcha.text;
    console.log("get captcha is "+ctx.session.captcha);
    ctx.type="svg";
    ctx.status=200;
    ctx.body=captcha.data;
})

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