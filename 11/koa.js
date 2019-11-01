const Koa = require("koa");
const aboutError = require("./aboutError")
const app = new Koa();


app.use(aboutError)

app.use(async (ctx,next)=>{
    ctx.body = "123"
})
app.on("error",(err)=>{
    console.log(err.message)
})
app.listen(3000,_=>{
    console.log( "running" )
})