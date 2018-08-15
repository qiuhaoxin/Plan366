const router=require('koa-router')();
const SQL_API=require('../lib/sql');

router.post('/dayplan/list',async (ctx,next)=>{
	 const postData=await parsePostData(ctx);
   const type=postData['type'];
})
 
router.post('/dayplan/submitPlan',async (ctx,next)=>{
    const postData=await parsePostData(ctx);
    const title=postData['title'];
    //const userID=postData['userID'];
    const contentList=postData['planList'];
    console.log("title is "+title+" and contentList is "+JSON.stringify(contentList))
    await SQL_API.addPaln(['0','5',title]).then(res=>{
         console.log("insert id is "+res.insertId);
         const id=res && res.insertId;
         if(id>0){
            contentList.forEach(item=>{
              SQL_API.addPlanDetial([item.content,id]).then(res=>{

              }).catch(err=>{
                console.log("addPlanDetial error is "+err);
              })
            }) 
         }
    }).catch(err=>{
      console.log("add plan error is "+err);
    })
    ctx.body={
      message:'提交成功!',
      result:1,
      data:null,
    }
})

router.post('/plantype/new',async ctx=>{
     const postData=await parsePostData(ctx);
     const name=postData['name'];//计划类型名称
     const mark=postData['mark'];//计划类型备注

     await SQL_API.newPlanType([name,mark]).then(res=>{
         ctx.body={
            result:1,
            message:'新增计划类型成功!',
            data:null,
         }
     }).catch(err=>{
         ctx.body={
            result:1,
            message:'新增计划类型失败:'+err,
            data:null,
         }
     })
})

router.post("/plantype/getlist",async ctx=>{
  const postData=await parsePostData(ctx);
  const pagination=postData['pagination'];
  const currentPage=pagination.currentPage;
  const pageSize=pagination.pageSize;
  const start=(currentPage - 1) * pageSize;
  await SQL_API.getPlanTypeList([start,pageSize]).then(res=>{
      ctx.body={
        result:1,
        message:'获取计划类型列表成功!',
        data:{list:res,pagination},
      }
  }).catch(err=>{
      ctx.body={
        result:-1,
        message:"获取计划类型列表失败："+err,
        data:null,
      }
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
module.exports=router;