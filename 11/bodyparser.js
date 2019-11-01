module.exports = function bodyparser(ctx) {
    return new Promise((reslove, reject) => {

        try {
            var str = ''
            ctx.req.on("data", data => {
                str += data
            })

            ctx.req.on("end", _ => {
                reslove(str)
            })
        } catch (err) {
            reject(err)
        }

    })
}