export function assert(value, desc) {
  var li = document.createElement("li");
  li.className = value ? "pass" : "fail";
  li.appendChild(document.createTextNode(desc));
  document.getElementById("results").appendChild(li);
}


export function report(desc) {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(desc));
    document.getElementById("results").appendChild(li);
  }
