async function updateContent(lang) {
  const req = await fetch(`/localisation/${lang}.json`);
  const data = JSON.parse(await req.text());
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        element.innerHTML = data[key];
    });
}

document.addEventListener('DOMContentLoaded', () => {
  updateContent(new URLSearchParams(window.location.search).get("lang"));
})