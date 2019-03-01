const Koa = require("koa");
const app = new Koa();

console.log( app.inspect() );

app.on("error",(err)=>{
    console.log("err",err);
})

app.use(async (ctx,next)=>{
    ctx.body = "你好，山地人！"
    
});

app.listen(3000);

