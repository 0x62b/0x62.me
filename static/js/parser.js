function parse(command) {
  switch(command[0]) {
    case "help":
    case "?":
      return "Available commands: help ? ls about projects";
    case "ls":
      return "about.html about-de.html about-zh.html index.html projects.html";
    case "about":
      if (command.length > 1) {
        switch(command[1]) {
          case 'zh':
          case '中文':
            location.href = `about-zh.html`;
            break;
          case 'de':
          case 'deutsch':
            location.href = 'about-de.html';
            break;
          case 'en':
          case 'english':
            location.href = 'about.html';
            break;
          default:
            return "parameter 1 invalid";
        }
      }
      else location.href = 'about.html';
      break;
    case "projects":
      location.href = 'projects.html';
      break;
    case "contact":
      if (command.length > 1) {
        switch(command[1]) {
          case 'zh':
          case '中文':
            location.href = `contact-zh.html`;
            break;
          case 'de':
          case 'deutsch':
            location.href = 'contact-de.html';
            break;
          case 'en':
          case 'english':
            location.href = 'contact.html';
            break;
          default:
            return "parameter 1 invalid";
        }
      }
      else location.href = 'contact.html';
      break;
    default:
      return "Command does not exist."
  }
}

function command() {
  let box = document.getElementById("cmd-input");
  let cmd = box.value;
  let ret = parse(cmd.split(' '));
  document.getElementById("term-output").innerText += "visitor@0x62.me ~ $ " + cmd + "\n";
  document.getElementById("term-output").innerText += (ret + "\n");
  box.value = "";
}