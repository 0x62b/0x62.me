function addText(text) {
  document.getElementById("term-output").innerHTML += text;
}

async function parse(command) {
  switch(command[0]) {
    case "help":
    case "?":
      return '<span class="text-green">Available commands</span><br/>\
              help ? - show this help<br/>\
              about [language: optional] - show my about page in en, zh, or de<br/>\
              projects [language: optional] - show my projects page in en, zh, or de<br/>\
              contact [language: optional] - show my contact page in en, zh, or de<br/>\
              status - show my status (currently en only)\
              blog - read my yappery (en only)\
              curl [url] - curl command (it works) that i made when i was bored<br/>\
              ...and a few basic terminal commands, figure it out (or look at the code)';
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
    case "status":
      return import('./commands/redirect.js').then(redirect => {
        return redirect.redirect('status.html', command);
      });
    case "blog":
      location.href = '/blog/';
      return;
    case "reboot":
      addText('System will reboot now.<br/>');
      await new Promise(res => setTimeout(res, 2000));
      addText('[ <span class="text-green">OK</span> ] Reached target System Reboot.<br/>');
      await new Promise(res => setTimeout(res, 500));
      location.reload();
      return '';
    case "clear":
      document.getElementById("term-output").innerText = "";
      return '';
    case "curl":
      if (command.length != 2) return '<span class="text-red">Need 1 arg</span>';
      return import('./commands/curl.js').then(async curl => {
        return (await curl.curl(command[1])).trim();
      });
    case "echo":
      let text = command;
      text[0] = '';
      return text.join(' ').replaceAll('<', '&lt;').replaceAll('>', '&gt;');
    default:
      return '<span class="text-red">Command not found</span>';
  }
}

async function command() {
  let box = document.getElementById("cmd-input");
  let cmd = box.value.replaceAll('<', '&lt;').replaceAll('>', '&gt;');
  box.value = "";
  box.setAttribute('disabled', 'true');
  document.getElementById('term-input').style.visibility = 'hidden';
  addText('visitor@0x62.me: <span class="text-green">~</span> $ ' + cmd + "<br/>");
  let ret = await parse(cmd.split(' '));
  addText((ret + "\n") + "<br/>");
  document.getElementById('term-input').style.visibility = 'visible';
  box.removeAttribute('disabled');
  box.click();
}