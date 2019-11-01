const Koa = require("koa");
const Router = require("koa-router")
const koaViews = require("koa-views");
const koaStatic = require("koa-static");

const app = new Koa()
const router = new Router()


// app.use(koaBodyParser())
app.use(koaStatic(__dirname + "/public"))
app.use(koaViews(__dirname + "/ejs", {
    extension: "ejs"
}))

router.get("/", async ctx => {
// router.get("/zbj", async ctx => {
    ctx.body = "兄弟们好"
    await ctx.render("index", {
        name: "马西梅",
        arr: [{ a: 1, b: 2 }, { a: 2, b: 3 }, { a: 3, b: 4 }],
        html: "<h1>哈哈哈哈哈哈哈</h1>"
    })
})
//注册路由
app
    .use(router.routes())
    .use(router.allowedMethods())



app.listen(3000,_=>{
    console.log(111)
})