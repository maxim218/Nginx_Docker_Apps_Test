"use strict";

let express = require("express");
let app = express();

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Cache-Control", "no-cache, no-store, must-revalidate");
    res.header("My-Header-First", "F-F-F");
    res.header("My-Header-Second", "S-S-S");
    res.header("My-Header-Third", "T-T-T");
    next();
});

/*
*
*   GET: curl -vv 'http://localhost:5020/api/get/sum?a=12&b=5'
*
*/

app.get('/api/get/sum', (request, response) => {
    console.log("GET");
    const dict = request.query;
    const a = dict['a'];
    const b = dict['b'];
    const c = parseInt(a) + parseInt(b);
    response.status(200);
    response.end(c.toString());
});

/*
*
*   POST: curl -d '{"a":4, "b":25}' -vv 'http://localhost:5020/api/post/mul'
*
*/

app.post('/api/post/mul', (request, response) => {
    console.log("POST");
    const buffer = [];
    request.on('data', (data) => {
        buffer.push(data);
    }).on('end', () => {
        let bodyString = buffer.join("");
        let bodyObject = null;
        try {
            bodyObject = JSON.parse(bodyString);
        } catch (err) {
            bodyObject = null;
        }
        if(bodyObject === null) {
            response.status(400);
            response.end("");
        } else {
            const a = bodyObject.a;
            const b = bodyObject.b;
            const c = a * b;
            response.status(200);
            response.end(c.toString());
        }
    });
});

let port = 5020;
app.listen(port);
console.log("OK");
