// import { start } from './start'
import { Voy } from 'voy-search'

function addButton(text: string, callback: VoidFunction) {
  const button = document.createElement('button')
  button.addEventListener('click', callback)
  button.textContent = text
  document.body.append(button)
}

function inspect(name: string, val: any) {
  if (!val) {
    console.log(name, val)
    return
  }

  if (Array.isArray(val)) {
    console.log(`${name} is an array with length ${val.length}`)
    return
  }

  console.log(`${name} is a ${typeof val}`)

  if (typeof val === 'object') {
    console.log(`${name} has keys`, Object.keys(val).slice(0, 10))
  }
}

async function start() {
  const mod = await import('../data/value.json')
  inspect('mod', mod)

  const value = mod.default
  inspect('value', value)

  const index = value[0]
  inspect('index', index)

  const voy = Voy.deserialize(index)
  voy.clear()
}

addButton('Click to start', () => void start())
