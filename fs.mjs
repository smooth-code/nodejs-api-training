import fs from 'fs'
import util from 'util'

const exists = util.promisify(fs.exists)
const writeFile = util.promisify(fs.writeFile)

export async function safeWrite(fileName, content) {
  if (await exists(fileName)) {
    throw new Error('File already exists')
  }
  return writeFile(fileName, content)
}
