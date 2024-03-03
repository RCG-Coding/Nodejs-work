const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    let path = req.url;
    const html = fs.readFileSync('./files/my.html', 'utf-8');

    if(path.toLocaleLowerCase() === '/' || path.toLocaleLowerCase() === '/home'){
        res.writeHead(200,{
            "content-type" : "text/html",
            "Document": "my-first-document"       
        })
        res.end(html.replace('{{%CONTENT%}}', 'you are in the HOME page now'));
    }else if(path.toLocaleLowerCase() === '/login'){
        res.writeHead(200,{
            "content-type" : "text/html",
            "Document": "my-first-document"       
        })
        res.end(html.replace('{{%CONTENT%}}', 'you are in the LOGIN page now'));
    }else if(path.toLocaleLowerCase() === '/register'){
        res.writeHead(200,{
            "content-type" : "text/html",
            "Document": "my-first-document"       
        })
        res.end(html.replace('{{%CONTENT%}}', 'you are in the REGISTER page now'));
    }else{
        res.writeHead(404,{
            "content-type" : "text/html",
            "Document": "my-first-document"       
        })
        res.end(html.replace('{{%CONTENT%}}', 'Error 404 : The page is not FOUND'));
    }
    console.log("got a one request from a client");
});

server.listen(2000,() => {
    console.log("App is running on port 2000")
});

