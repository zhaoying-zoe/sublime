// http是nodejs内置模块
const http = require("http")

const server = http.createServer((req, res) => {
    res.write("hello http!")
    res.end()
})

const cluster = require("cluster")
// 开启的子进程数
const workerNum = 3
// 如果是主进程
if (cluster.isMaster) {
    // 创建子进程
    for (let i = 0; i < workerNum; i++) {
        // 通过cluster.fork创建子进程
        cluster.fork()
    }
    // 如果有子进程，就启动相关服务,这里会使用三个进程来执行http服务演示
} else {
    require("./http-server")
}

server.listen(3030, () => {
    console.log("server is listening on http://localhost:3030")
})

// process是node的进程模块，可以从这个模块获取进程的信息，以及控制进程的
console.log(`worker ${process.pid} start`)
