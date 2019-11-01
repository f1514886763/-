module.exports = async (ctx,next)=>{
    try{
        await next()
    }catch(err){
        ctx.status = err.status || err.statusCode || 500
        // console.log( err.message )

        ctx.app.emit("error",err)
    }
}