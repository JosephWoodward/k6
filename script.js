import http from 'k6/http';

export default function () {
  const resp = http.get('https://httpbin.test.k6.io/brotli');
  console.log(resp.body);
}


