const http = require('http');

const server = http.createServer((req, res)=>{
    
    if(req.url ==='/'){
        res.end('welcome to our home page')
    }
    if(req.url ==='/about'){
        res.end('about us')
    }
    res.end(`
        <p>tsest</p>`
    )
        
   
})

server.listen(3000)