const projects = [
  {"name": "MCServer++", "description": "Next.js based Minecraft server manager", "hackatime": "https://hackatime-badge.hackclub.com/U092839T3A7/mc_server_plus_plus", "github": "https://github.com/0x62entity/mc_server_plus_plus"},
  {"name": "print_mate", "description": "A next.js based manager for Bambu Lab 3D printers.", "hackatime": "https://hackatime-badge.hackclub.com/U092839T3A7/print_mate", "github": "https://github.com/0x62entity/print_mate"},
  {"name": "crx-to-xpi", "description": "A Firefox extension with native app to install extensions from the Chrome Web Store.", "hackatime": "https://hackatime-badge.hackclub.com/U092839T3A7/crx-to-xpi", "github": "https://github.com/0x62entity/crx-to-xpi"}
]

function displayProjects() {
  const div = document.getElementById('projects-display');

  projects.forEach(project => {
    const sect = createDiv(project);
    div.appendChild(sect);
  });
}

function createDiv(project) {
  const sect = document.createElement('div');
  sect.className = 'project-card';

  sect.innerHTML = `
    <h3>${project.name}</h3>
    <p>${project.description}</p>
    <div>
      <a href="${project.github}">GitHub</a>
      <a href="${project.demo}">Demo</a>
    </div>
  `
  return sect;
}

document.addEventListener('DOMContentLoaded', displayProjects);