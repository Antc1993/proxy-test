const express = require('express')
const cors = require('cors')
const middleware = require('@warren-bank/hls-proxy/hls-proxy/proxy')({
    is_secure:                false,
    host:                     null,
    copy_req_headers:         false,
    req_headers:              null,
    req_options:              null,
    hooks:                    null,
    cache_segments:           true,
    max_segments:             20,
    cache_timeout:            60,
    cache_key:                0,
    cache_storage:            null,
    cache_storage_fs_dirpath: null,
    debug_level:              3,
    acl_ip:                   null,
    acl_pass:                 null,
    http_proxy:               null,
    manifest_extension:       null,
    segment_extension:        null
  })

const app = express()
app.use(cors())
const port = 8080


app.get('/proxy/*', middleware.request)

app.listen(port, function () {
  console.log(`Express.js HTTP server is listening on port: ${port}`)
})
