// ResponsePayload variable
var ResponsePayload = exports.ResponsePayload = function(code, payload) {
  this.code = code;
  this.payload = payload;
}

// respondWithCode variable
exports.respondWithCode = function(code, payload) {
    return new ResponsePayload(code, payload);
}

// writeJson Variable
var writeJson = exports.writeJson = function(response, arg1, arg2) {
    var code;
    var payload;

    // Write Json if arg1 exists and is an instance of ResponsePayload
    if (arg1 && arg1 instanceof ResponsePayload) {
        writeJson(response, arg1.payload, arg1.code);
        return;
    }

    // Set code = arg2 if arg2 exists and is an integer
    if (arg2 && Number.isInteger(arg2)) {
        code = arg2;
    }

    else {
        // set code = arg1 if arg1 exists and is an integer
        if (arg1 && Number.isInteger(arg1)) {
            code = arg1;
        }
    }

    // if code and arg1 exist set payload = arg1
    if (code && arg1) {
        payload = arg1;
    }
    else if (arg1) {
        payload = arg1;
    }

    // If code does not exist set it equal to default 200
    if (!code) {
        // if no response code given, we return default 200
        code = 200;
    }
    if (typeof payload === 'object') {
        payload = JSON.stringify(payload, null, 2);
    }
    response.writeHead(code, { 'Content-Type': 'application/json' });
    response.end(payload);
}
