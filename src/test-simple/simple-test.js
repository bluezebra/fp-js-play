export const assert = (value, desc) => {
  const li = document.createElement('li')
  li.className = value ? 'pass' : 'fail'
  li.appendChild(document.createTextNode(desc))
  document.getElementById('results').appendChild(li)
}

export const report = (desc) => {
  const li = document.createElement('li')
  li.appendChild(document.createTextNode(desc))
  document.getElementById('results').appendChild(li)
}

export const title = (desc) => {
  const liSpacer = document.createElement('li')
  document.getElementById('results').appendChild(liSpacer)
  const li = document.createElement('li')
  document.getElementById('results').appendChild(li)
  li.className = 'pass'
  li.appendChild(document.createTextNode(desc))
  document.getElementById('results').appendChild(li)
}

export const reportObject = (obj) => {
  report(JSON.stringify(obj, null, 4))
}

export const printMessage = (elementId, format, message) => {
  document.querySelector(`#${elementId}`).innerHTML = `<${format}>${message}</${format}>`
}

export const infoLogger = (v) => console.log(`InfoLogger [INFO] ${v}`)
