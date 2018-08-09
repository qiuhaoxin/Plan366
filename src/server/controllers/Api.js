const router=require('koa-router')();
const SQL_API=require('../lib/sql');

router.post('/dayplan/list',async (ctx,next)=>{
	 const postData=await parsePostData(ctx);
   const type=postData['type'];

   await SQL_API.addPaln([]).then(res=>{

   })
})

router.post('/dayplan/submitPlan',async (ctx,next)=>{
    const postData=await parsePostData(ctx);
    const title=postData['title'];
    //const userID=postData['userID'];
    const contentList=postData['planList'];
    console.log("title is "+title+" and contentList is "+JSON.stringify(contentList))


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
return router;