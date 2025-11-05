function parse(command) {
  switch(command) {
    case "help":
    case "?":
      return "Available commands: help ? ls about";
    case "ls":
      return "about.html index.html";
    case "about":
      location.href = 'about.html';
    default:
      return "Command does not exist."
  }
}

function command() {
  let box = document.getElementById("cmd-input");
  let cmd = box.value;
  let ret = parse(cmd);
  document.getElementById("term-output").innerText += "visitor@0x62.me ~ $ " + cmd + "\n";
  document.getElementById("term-output").innerHTML += (ret + "<br/>");
  box.value = "";
}