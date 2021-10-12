'use strict'

const execa = require('execa')
const fs = require('fs-extra')
const path = require('path')

const GH_PAGE_BRANCH = 'gh-page'
const GH_PAGE_DIR = path.join(__dirname, '../', '../', `ark-admin-docs-${GH_PAGE_BRANCH}`)
const DOCS_DIST_PATH = path.resolve(__dirname, '../', 'docs', '.vuepress', 'dist')

/**
 * 文档上传至gh-page分支
 */
async function checkoutghpage() {
  console.log('gh-page', '清理旧构建...')
  await execa('npm', ['run', 'clean'], { stdio: 'inherit' })

  console.log('gh-page', '开始执行文档构建...')
  await execa('npm', ['run', 'docs:build'], { stdio: 'inherit' })

  // 临时文件夹
  fs.ensureDirSync(GH_PAGE_DIR)
  fs.emptyDirSync(GH_PAGE_DIR)

  // git clone
  console.log('git', '执行git clone...')
  await execa(
    'git',
    [
      'clone',
      '-b',
      GH_PAGE_BRANCH,
      'git@github.com:Ark-Link/docs.arklnk.com.git',
      '.'
    ],
    { cwd: GH_PAGE_DIR, stdio: 'inherit' }
  )
  // 清空上次的构建
  console.log('gh-page', '清理上次构建...')
  const files = fs.readdirSync(GH_PAGE_DIR)
  for (let i = 0; i < files.length; i++) {
    if (files[i] !== '.git' && files[i] !== 'CNAME') {
      fs.removeSync(path.join(GH_PAGE_DIR, files[i]))
    }
  }

  console.log('gh-page', '拷贝构建目录...')
  fs.copySync(DOCS_DIST_PATH, GH_PAGE_DIR, { overwrite: true })

  console.log('git', '提交中...')
  const options = { stdio: 'inherit', cwd: GH_PAGE_DIR }
  
  // 创建临时 gh-temp 分支，清空git commit记录
  await execa('git', ['checkout', '--orphan', 'gh-temp'], options)
  await execa('git', ['add', '-A'], options)
  await execa('git', ['commit', '-m', 'update docs', '--no-verify'], options)
  // 删除原分支
  await execa('git', ['branch', '-D', GH_PAGE_BRANCH], options)
  // 重命名分支
  await execa('git', ['branch', '-m', GH_PAGE_BRANCH], options)
  await execa('git', ['push', 'origin', GH_PAGE_BRANCH, '-f'], options)
  console.log('git', '文档已更新...')

  console.log('gh-page', '清理构建...')
  await execa('npm', ['run', 'clean'])
  await fs.remove(GH_PAGE_DIR)
}

checkoutghpage().catch((err) => {
  fs.removeSync(GH_PAGE_DIR)
  console.error('gh-page', err)
  process.exit(1)
})