async function loadComponent(id, path) {
  const el = document.getElementById(id);
  if (!el) return;

  try {
    const response = await fetch(path);

    if (response.ok) {
      el.innerHTML = await response.text();
    } else {
      console.error('Component not found:', path);
    }

  } catch (err) {
    console.error('Failed to load component:', path, err);
  }
}

loadComponent('nav', '/components/nav.html');
loadComponent('footer', '/components/footer.html');
