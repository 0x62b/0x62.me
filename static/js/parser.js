function parse(command) {
  switch(command[0]) {
    case "help":
    case "?":
      return '<span class="text-green">Available commands</span><br/>\
              help ? - show this help<br/>\
              about [language: optional] - show my about page in en, zh, or de<br/>\
              projects [language: optional] - show my projects page in en, zh, or de<br/>\
              contact [language: optional] - show my contact page in en, zh, or de';
    case "about":
      if (command.length > 1) {
        switch(command[1]) {
          case 'zh':
          case '中文':
            location.href = `zh/about.html`;
            break;
          case 'de':
          case 'deutsch':
            location.href = 'de/about.html';
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
            location.href = `zh/contact.html`;
            break;
          case 'de':
          case 'deutsch':
            location.href = 'de/contact.html';
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
  document.getElementById("term-output").innerHTML += "visitor@0x62.me ~ $ " + cmd + "<br/>";
  document.getElementById("term-output").innerHTML += (ret + "\n") + "<br/>";
  box.value = "";
}