const Koa=require('koa');
const app=new Koa();
const json=require('koa-json');
const http=require('http');
const bodyparser=require('koa-bodyparser');



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