const routes = [
  { path: '/', page: 'index.html' },
  { path: '/Carnaval/home', page: '/app/src/home/home.html' },
];

function handleRoute() {
  const path = window.location.pathname;
  const route = routes.find((r) => r.path === path);

  if (route) {
    fetch(route.page)
      .then((response) => response.text())
      .then((html) => {
        const container = document.getElementById('container');
        container.innerHTML = html;
      })
      .catch((error) => {
        console.error(`Failed to load page: ${route.page}. Error: ${error}`);
      });
  } else {
    console.error(`No route found for path: ${path}`);
  }
}

window.addEventListener('popstate', handleRoute);

handleRoute();