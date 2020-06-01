import http from 'k6/http';
import { sleep } from 'k6';

export let options = {
  vus: 35,
  duration: '60s'
};

export default function() {
  // const product_id = Math.floor(Math.random() * 10000000);
  http.get(`http://localhost:3001/api/products/9999999`);
  sleep(0.008);
}

/*
execution: local
     output: -
     script: k6.js

    duration: 1m0s, iterations: -
         vus: 35,   max: 35

    done [==========================================================] 1m0s / 1m0s

    data_received..............: 102 MB 1.7 MB/s
    data_sent..................: 2.5 MB 41 kB/s
    http_req_blocked...........: avg=5.99µs  min=1µs     med=3µs     max=2.99ms   p(90)=4µs     p(95)=6µs
    http_req_connecting........: avg=1.32µs  min=0s      med=0s      max=1.17ms   p(90)=0s      p(95)=0s
    http_req_duration..........: avg=76.67ms min=31.37ms med=61.74ms max=792.01ms p(90)=85.58ms p(95)=104.2ms
    http_req_receiving.........: avg=44.65µs min=14µs    med=40µs    max=1.23ms   p(90)=66µs    p(95)=78µs
    http_req_sending...........: avg=15.53µs min=5µs     med=14µs    max=532µs    p(90)=22µs    p(95)=28µs
    http_req_tls_handshaking...: avg=0s      min=0s      med=0s      max=0s       p(90)=0s      p(95)=0s
    http_req_waiting...........: avg=76.61ms min=31.32ms med=61.68ms max=791.96ms p(90)=85.53ms p(95)=104.11ms
    http_reqs..................: 24643  410.715296/s
    iteration_duration.........: avg=84.9ms  min=39.63ms med=69.97ms max=800.39ms p(90)=93.82ms p(95)=112.38ms
    iterations.................: 24643  410.715296/s
    vus........................: 35     min=35 max=35
    vus_max....................: 35     min=35 max=35 */