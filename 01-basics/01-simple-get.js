import http from 'k6/http';

export const options = {
  vus: 1,
  duration: '30s',
};

export default function () {
  const response = http.get('https://dummyjson.com/products/1');

  console.log('status=' + response.status + ', duration=' + response.timings.duration + ' ms');
}
