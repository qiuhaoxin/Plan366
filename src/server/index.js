const Koa=require('koa');
const app=new Koa();
const json=require('koa-json');
const http=require('http');
const bodyparser=require('koa-bodyparser')();
const logger=require('koa-logger');
const cors=require('koa2-cors');
const convert=require('koa-convert');
const session=require('koa-session');


// app.use(json())
app.keys=['qiuhaoxin'];
app.use(logger())
app.use(cors({
	origin:function(ctx){
       return 'http://localhost:3008';
	},
	exposeHeaders:['WWW-Authenticate','Server-Authorization'],
	maxAge:5,
	credentials:true,//credentials
	allowMethods:['POST','GET','OPTIONS','PUT','DELETE'],
	allowHeaders:['Content-Type','Authorization','Accept','Content-Length','X-Request-With'],
}))
const SESSION_CONFIG={
	key:'koa:sess',
	maxAge:86400000,
	overwrite:true,
	httpOnly:true,
	signed:true,
	rolling:false,
	renew:false,
}
app.use(session(SESSION_CONFIG,app));
app.use(bodyparser);
app.use(require('./controllers/userApi').routes());

const PORT=process.env.port || 8099;
const server=http.createServer(app.callback());

server.listen(PORT);

server.on('error',error=>{
	if(error.syscall=='listen')throw error;
	let bind=typeof port==='string' ? 'Pipe'+PORT : 'Port'+PORT;
	switch(error.code){
		case 'EACCES':
		console.error(bind+"require elevated privileges");
            process.exit(1);
		break;
		case 'EADDRINUSE':
		   console.error(bind+"is already in use!");
           process.exit(1);
		brea;
		default:
           throw error;
		break;
	}
})
server.on('listening',()=>{
	const address=server.address();
	const bind=typeof address==='string' ? 'pipe'+address : 'port '+address.port;
	console.log("listening on "+bind);
})