const Koa=require('koa');
const app=new Koa();
const json=require('koa-json');
const http=require('http');
const bodyparser=require('koa-bodyparser')();
const logger=require('koa-logger');
const cors=require('koa2-cors');
const convert=require('koa-convert');



// app.use(json())
app.use(logger())
app.use(cors({
	origin:function(ctx){
       return '*';
	},
	exposeHeaders:['WWW-Authenticate','Server-Authorization'],
	maxAge:5,
	credentials:true,
	allowMethods:['POST','GET','OPTIONS','PUT','DELETE'],
	allowHeaders:['Content-Type','Authorization','Accept','Content-Length','X-Request-With'],
}))
app.use(convert(bodyparser));
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