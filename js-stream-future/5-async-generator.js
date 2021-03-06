'use strict'

/**
 * for-await syntax
 */

const { Readable } = require('stream')

async function * generate () {
  for (let i = 1; i < 1025; i++) {
    yield i
  }
}

async function run () {
  const rs = Readable.from(generate())
  
  for await (let chunk of rs) {
    console.log(chunk)
  }
}

run()

