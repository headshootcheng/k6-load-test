import http from 'k6/http';
import { check  } from 'k6';

const date = new Date();
export const options = {
  tags:{
    "testid": `loadTest-${date}`,
    "name":"loadTest"
  },
  stages: [
    { duration: '30s', target: 20 },
    { duration: '1m30s', target: 10 },
    { duration: '20s', target: 0 },
  ],
};

export default function () {
  const res = http.get('https://httpbin.test.k6.io/');
  check(res, { 'status was 200': (r) => r.status == 200 });
}