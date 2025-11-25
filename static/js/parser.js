async function parse(command) {
  switch(command[0]) {
    case "help":
    case "?":
      return '<span class="text-green">Available commands</span><br/>\
              help ? - show this help<br/>\
              about [language: optional] - show my about page in en, zh, or de<br/>\
              projects [language: optional] - show my projects page in en, zh, or de<br/>\
              contact [language: optional] - show my contact page in en, zh, or de';
    case "about":
      return import('./commands/redirect.js').then(redirect => {
        return redirect.redirect('about.html', command);
      });
    case "projects":
      return import('./commands/redirect.js').then(redirect => {
        return redirect.redirect('projects.html', command);
      });
    case "contact":
      return import('./commands/redirect.js').then(redirect => {
        return redirect.redirect('contact.html', command);
      });
    case "reboot":
      location.href = "/redirecter.html?msg=Rebooting&redirect=/index.html";
      break;
    case "clear":
      document.getElementById("term-output").innerText = "";
      return '';
    case "curl":
      if (command.length != 2) return '<span class="text-red">Need 1 arg</span>';
      return import('./commands/curl.js').then(async curl => {
        return (await curl.curl(command[1])).trim();
      });
    default:
      return '<span class="text-red">Command not found</span>';
  }
}

async function command() {
  let box = document.getElementById("cmd-input");
  let cmd = box.value;
  let ret = await parse(cmd.split(' '));
  document.getElementById("term-output").innerHTML += 'visitor@0x62.me: <span class="text-green">~</span> $ ' + cmd + "<br/>";
  document.getElementById("term-output").innerHTML += (ret + "\n") + "<br/>";
  box.value = "";
}