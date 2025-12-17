export async function redirect(page, command=null) {
  if (command.length > 1) {
    switch(command[1]) {
      case 'zh':
      case '中文':
        location.href = `/reader.html?page=content/${page}&lang=zh`;
        break;
      case 'de':
      case 'deutsch':
        location.href = `/reader.html?page=content/${page}&lang=de`;
        break;
      case 'en':
      case 'english':
        location.href = `/reader.html?page=content/${page}&lang=en`;
        break;
      default:
        return '<span class="text-red">parameter 1 invalid</span>';
    }
  }
  else location.href = `/reader.html?page=content/${page}&lang=en`;
}