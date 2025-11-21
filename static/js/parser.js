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
            return '<span class="text-red">parameter 1 invalid</span>';
        }
      }
      else location.href = 'about.html';
      break;
    case "projects":
      if (command.length > 1) {
        switch(command[1]) {
          case 'zh':
          case '中文':
            location.href = `zh/projects.html`;
            break;
          case 'de':
          case 'deutsch':
            location.href = 'de/projects.html';
            break;
          case 'en':
          case 'english':
            location.href = 'projects.html';
            break;
          default:
            return '<span class="text-red">parameter 1 invalid</span>';
        }
      }
      else location.href = 'projects.html';
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
            return '<span class="text-red">parameter 1 invalid</span>';
        }
      }
      else location.href = 'contact.html';
      break;
    case "reboot":
      location.href = "/redirecter.html?msg=Rebooting&redirect=/index.html";
      break;
    case "clear":
      document.getElementById("term-output").innerText = "";
      return '';
    default:
      return '<span class="text-red">Command not found</span>'
  }
}

function command() {
  let box = document.getElementById("cmd-input");
  let cmd = box.value;
  let ret = parse(cmd.split(' '));
  document.getElementById("term-output").innerHTML += 'visitor@0x62.me: <span class="text-green">~</span> $ ' + cmd + "<br/>";
  document.getElementById("term-output").innerHTML += (ret + "\n") + "<br/>";
  box.value = "";
}