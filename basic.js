let url = new URL(window.location.href);
let params = url.searchParams;

console.log(params.get('redirected'))
