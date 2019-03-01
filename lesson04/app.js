const Koa = require("koa");
const app = new Koa();

console.log( app.inspect() );

app.on("error",(err)=>{
    console.log("err",err);
})

app.use(async (ctx,next)=>{
    console.log(ctx.inspect());
    ctx.throw(400,"出错了",{
        user:{
            user:"山地人"
        }
    })
    ctx.body = "你好，山地人！";

    
});

app.listen(3000);

