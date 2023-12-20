
const test = require('ava')
const { ResponsePayload, respondWithCode, writeJson } = require('../utils/writer')

test.before(async t => {
    t.context.response = body => ({
        writeHead: (code, headers) => {
            t.is(code, body.code)
            t.is(headers['Content-Type'], 'application/json')
        },
        end: payload => {
            t.deepEqual(JSON.parse(payload), body.payload)
        }
    })
})


test('ResponsePayload constructor Test', t => {
    let code = 200, payload = { key: 'value' }
    let response_obj = new ResponsePayload(code, payload)

    t.true(response_obj instanceof ResponsePayload)
    t.is(response_obj.code, code)
    t.is(response_obj.payload, payload)
})

test('ReponsePayload factory Test', t => {
    let code = 200, payload = { key: 'value' }

    let respond = respondWithCode(code, payload)
    t.true(respond instanceof ResponsePayload)
    t.is(respond.code, code)
    t.is(respond.payload, payload)

})

test('writeJSON Test', t => {
    let code = 200
    let payload = { ...t.context.expected }

    let body = respondWithCode(code, payload)
    const response = { ...t.context.response(body) }
    const response_code = {
        ...response, end: payload => {
            t.is(payload, body.code)
        }
    }
    writeJson(response, body)
    writeJson(response_code, 200, { message: 'status code in first arg' })
    writeJson(response, body.payload)
})
