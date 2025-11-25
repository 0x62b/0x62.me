export async function redirect(page, command=null) {
  if (command.length > 1) {
    switch(command[1]) {
      case 'zh':
      case '中文':
        location.href = `zh/${page}`;
        break;
      case 'de':
      case 'deutsch':
        location.href = `de/${page}`;
        break;
      case 'en':
      case 'english':
        location.href = page;
        break;
      default:
        return '<span class="text-red">parameter 1 invalid</span>';
    }
  }
  else location.href = page;
}