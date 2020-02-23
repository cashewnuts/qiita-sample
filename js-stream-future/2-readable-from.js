'use strict'

/**
 * Readable From syntax
 * ただArrayを渡してStreamを返してもらうだけ
 * シンプルなのでテストに便利
 */

const { Readable } = require('stream')

const array = []
for (let i = 1; i < 1025; i++) {
  array.push(i)
}

const rs = Readable.from(array)

rs.on('data', console.log)

