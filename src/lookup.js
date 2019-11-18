const Reader = require('mmdb-reader')

const run = (event, ctx, callback) => {
  if (!event) {
    callback(
      new Error('Invalid event data, requires IP address')
    )
    return
  }
  
  let ip = event.ip
  if (!ip) {
    ip = event.identity.sourceIp
  }

  Reader.open(__dirname + '/../data/GeoLite2-City.mmdb',
    (error, reader) => callback(error, !error && reader.lookup(ip))
  )
}

module.exports = { run }