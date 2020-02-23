'use strict'

/**
 * All stream can use the same API.
 * いろいろなStreamを同じAPIで使うことができる。
 */

const { createReadStream } = require('fs')
const { promisify } = require('util')
const sleep = promisify(setTimeout)


async function run () {
  const rs = createReadStream(__filename)
  rs.setEncoding('utf8')
  
  for await (let chunk of rs) {
    await sleep(1000)
    console.log(chunk)
  }
}

run()

