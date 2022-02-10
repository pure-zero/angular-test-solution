export interface Log {
  response_time: number;
  method: string;
  path: number;
  code: string;
}

export const logs = [
  {
    response_time: '1004ms',
    method: 'GET',
    path: '/hello_world',
    code: 200,
  },
  {
    response_time: '1209ms',
    method: 'GET',
    path: '/home',
    code: 200,
  },
  {
    response_time: '1.12s',
    method: 'GET',
    path: '/home',
    code: 200,
  },
  {
    response_time: '1425ms',
    method: 'GET',
    path: '/hello_world',
    code: 500,
  },
  {
    response_time: '1.13s',
    method: 'GET',
    path: '/about',
    code: 401,
  },
  {
    response_time: '1759ms',
    method: 'GET',
    path: '/home',
    code: 200,
  },
  {
    response_time: '1.20s',
    method: 'GET',
    path: '/home',
    code: 200,
  },
  {
    response_time: '519ms',
    method: 'GET',
    path: '/about',
    code: 401,
  },
  {
    response_time: '1081ms',
    method: 'GET',
    path: '/login',
    code: 200,
  },
];

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
