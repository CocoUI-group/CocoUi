/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path')
const chalk = require('chalk')
const fs = require('fs')
const args = process.argv
const red = (msg: string) => console.log(chalk.red(msg))
const green = (msg: string) => console.log(chalk.green(msg))

const packageName = args.filter((i) => /^Co[A-Z].*$/.test(i))[0]

if (!packageName) {
  red('please input Co${PACKAGE_NAME} and PACKAGE_NAME should capitalize the first letter')
  process.exit(1)
}
const dir = path.resolve(__dirname, '../../src/package', packageName)
const touchFile = (example: string, file: string) => {
  const target = path.resolve(dir, file)
  fs.copyFileSync(path.resolve(__dirname, example), target)
  const str = fs.readFileSync(target, { encoding: 'utf8' })
  fs.writeFileSync(target, str.replace(/\$\$\$/g, packageName), { encoding: 'utf8' })
  green(file + ' success')
}
fs.stat(dir, (err: NodeJS.ErrnoException) => {
  if (err) {
    fs.mkdirSync(dir)
    touchFile('./jest.example', 'index.spec.ts')
    touchFile('./stories.example', 'index.stories.ts')
    touchFile('./vue.example', 'index.vue')
  } else {
    red(`${packageName} already exists `)
  }
})
