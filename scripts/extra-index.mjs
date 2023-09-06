import fs from 'fs/promises'

async function main() {
  const text = await fs.readFile('/Users/ocavue/Downloads/data.json', {
    encoding: 'utf-8',
  })
  let json = JSON.parse(JSON.parse(text)['test01-b-embeddings-index-v9'])

  await fs.writeFile(
    '/Users/ocavue/code/play/voy-issue-50/data/value.json',
    JSON.stringify(json, null, 2),
  )
}

main()
