# NodeJS Basic examples

Introduction to NodeJs middleware concepts. For testing the whole example, use ejemplo9.js as main file, the previous are just setp-by-step functions declaration.

### Installation
---
````
$ git clone https://github.com/JairAviles/node-middleware.git
$ cd node-middleware
$ npm install
````

### Usage
---
````
$ node ejercicio9.js
````

### Test cases
---
````
$ curl http://localhost:3000/admin
$ curl --user jair:back http://localhost:3000/admin
$ curl --user jair:backend http://localhost:3000/admin
$ curl --user jair:backend http://localhost:3000/admin/users
````

### Acknowledges
As being an introduction to node middleware usage, this examples do not take into account how a proper structure a node application may have. It is just for education matters.

Taught by [Juan Pablo Buritica](https://github.com/buritica)