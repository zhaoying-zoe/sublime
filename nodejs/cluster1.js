const cluster = require("cluster")
const http = require("http")
const numCPUs = require("os").cpus().length
console.log('numCPUs', numCPUs);
const port = 8000;

let server = null;

if (cluster.isMaster) {
    for (var i = 0; i < numCPUs; i++) {
        cluster.fork()
    }
    cluster.on("exit", (worker, code, signal) => {
        console.log(`worker ${worker.process.pid} died`)
    })
} else {
    http.createServer((req, res) => {
        res.writeHead(200)
        res.end("hello world\n")
    }).listen(port)
}


