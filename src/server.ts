import http from 'node:http'

const server = http.createServer((req, res) => {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/plain')
    res.end('Hello from server')
})

server.listen(3000, () => {
    console.log('server listening on http://localhost:3000')
})
