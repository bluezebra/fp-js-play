export function assert(value, desc) {
  const li = document.createElement('li');
  li.className = value ? 'pass' : 'fail';
  li.appendChild(document.createTextNode(desc));
  document.getElementById('results').appendChild(li);
}

export function report(desc) {
  const li = document.createElement('li');
  li.appendChild(document.createTextNode(desc));
  document.getElementById('results').appendChild(li);
}

export function printMessage(elementId, format, message) {
  document.querySelector(`#${elementId}`).innerHTML = `<${format}>${message}</${format}>`;
}
