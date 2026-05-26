async function loadComponent(id, path) {
  const el = document.getElementById(id);
  if (!el) return;

  try {
    const response = await fetch(path);
    if (response.ok) {
      el.innerHTML = await response.text();
    }
  } catch (err) {
    console.error('Failed to load component:', path, err);
  }
}

// Injects your components relative to the GitHub Pages repository path
loadComponent('nav', '/the-iterative-being/components/nav.html');
loadComponent('footer', '/the-iterative-being/components/footer.html');
