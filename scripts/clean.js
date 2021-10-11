'use strict'

const path = require('path')
const fs = require('fs-extra')

/**
 * 清理临时目录
 */
async function clean() {
  // const tempDirPath = path.resolve(__dirname, '../', 'temp')
  // console.log('clean', `正在清理目录：${tempDirPath}`)
  // await fs.remove(tempDirPath)

  const docsDistPath = path.resolve(__dirname, '../', 'docs', '.vuepress', 'dist')
  console.log('clean', `正在清理目录：${docsDistPath}`)
  await fs.remove(docsDistPath)
}

clean().catch(e => {
  console.error(e)
  process.exit(1)
})