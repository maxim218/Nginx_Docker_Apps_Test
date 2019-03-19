"use strict";

function sendPost(url, body, callback) {
    let r = new XMLHttpRequest();
    r.open("POST", url, true);
    r.send(body);
    r.onreadystatechange = function() {
        if(r.readyState === 4 && r.status === 200) {
            const answer = r.responseText;
            r = null;
            callback(answer);
        }
    }
}

function sendGet(url, callback) {
    let r = new XMLHttpRequest();
    r.open("GET", url, true);
    r.send(null);
    r.onreadystatechange = function() {
        if(r.readyState === 4 && r.status === 200) {
            const answer = r.responseText;
            r = null;
            callback(answer);
        }
    }
}