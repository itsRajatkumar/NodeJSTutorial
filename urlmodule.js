import url, { URL } from 'url';

const myurl = new URL('https://rajatkumar.tech:8080');
myurl.pathname = '/a/b/c';
myurl.search = '?d=e';
myurl.hash = '#fgh';

console.log(myurl.href)
console.log(myurl)