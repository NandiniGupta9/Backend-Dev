const http = require('http');

const server = http.createServer((req, res) => {
    const baseUrl = "http://localhost:3000";
    const parsedUrl = new URL(req.url, baseUrl);
    const path = parsedUrl.pathname;

    if (req.method === 'GET') {

        if (path === "/") {
            res.writeHead(200, { "Content-Type": "text/plain" });
            res.end("Welcome to the Node.js HTTP Server");
        } 
        
        else if (path === "/about") {
            res.writeHead(200, { "Content-Type": "text/html" });
            res.end(`
                <html>
                    <head><title>About</title></head>
                    <body>
                        <h1>Welcome About Page</h1>
                        <p>This is about page</p>
                    </body>
                </html>
            `);
        } 
        
        else if (path === "/user") {
            const name = parsedUrl.searchParams.get("name");
            const age = parsedUrl.searchParams.get("age");

            res.writeHead(200, { "Content-Type": "application/json" });
            res.end(JSON.stringify({
                name: name || "Unknown",
                age: age || "Not provided"
            }));
        }

        else {
            res.writeHead(404, { "Content-Type": "text/plain" });
            res.end("404 Page Not Found");
        }

    } else {
        res.writeHead(405, { "Content-Type": "text/plain" });
        res.end("Method Not Allowed");
    }
});

server.listen(3000, () => {
    console.log("server running at 3000 port");
});