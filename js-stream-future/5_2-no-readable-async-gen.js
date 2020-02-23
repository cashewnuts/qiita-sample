'use strict'

/**
 * No readable
 * async generatorをIterableとして使う。
 * Readable.fromの場合と全く同じように利用できるが、一度にどれだけデータを取ってくるかが異なる。
 */

const { Readable } = require('stream')

async function * generate () {
  for (let i = 1; i < 1025; i++) {
    yield i
  }
}

async function run () {
  // const rs = Readable.from(generate())
  
  for await (let chunk of generate()) {
    console.log(chunk)
  }
}

run()

