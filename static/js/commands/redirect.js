export async function redirect(page, command=null) {
  const iframe = document.getElementById("term-iframe");
  const embed = document.getElementById("term-embed");
  if (command.length > 1) {
    switch(command[1]) {
      case 'zh':
      case '中文':
        iframe = `/reader.html?page=content/${page}&lang=zh`;
        embed.style.display = "block";
        break;
      case 'de':
      case 'deutsch':
        iframe.src = `/reader.html?page=content/${page}&lang=de`;
        embed.style.display = "block";
        break;
      case 'en':
      case 'english':
        iframe.src = `/reader.html?page=content/${page}&lang=en`;
        embed.style.display = "block";
        break;
      default:
        return '<span class="text-red">parameter 1 invalid</span>';
    }
  }
  else {
    iframe.src = `/reader.html?page=content/${page}&lang=en`;
    embed.style.display = "block";
  }
}