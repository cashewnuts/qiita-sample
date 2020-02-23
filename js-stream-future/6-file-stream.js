'use strict'

/**
 * All stream can use the same API.
 * いろいろなStreamを同じAPIで使うことができる。
 */

const { createReadStream } = require('fs')


async function run () {
  const rs = createReadStream(__filename)
  rs.setEncoding('utf8')
  
  for await (let chunk of rs) {
    console.log(chunk)
  }
}

run()

