import http from 'k6/http';
import { sleep } from 'k6';

export let options = {
  vus: 5,
  duration: '30s',
};

export default function() {
  http.get('http://localhost:3001/api/products/9999999');
  sleep(0.01);
}