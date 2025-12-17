export async function redirect(page, command=null) {
  if (command.length > 1) {
    switch(command[1]) {
      case 'zh':
      case '中文':
        location.href = `/reader.html?page=zh/${page}`;
        break;
      case 'de':
      case 'deutsch':
        location.href = `/reader.html?page=de/${page}`;
        break;
      case 'en':
      case 'english':
        location.href = `/reader.html?page=en/${page}`;
        break;
      default:
        return '<span class="text-red">parameter 1 invalid</span>';
    }
  }
  else location.href = `/reader.html?page=en/${page}`;
}