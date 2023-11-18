let url_object = new URL(window.location.href);
let params = url_object.searchParams;

console.log(params.get('redirected'))
