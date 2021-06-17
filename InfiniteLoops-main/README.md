# InfiniteLoops
EquityMultiple Technical Assessment for Engineering

### TLDR
```
$ docker-compose up --build # rebuild the service
```

**InfiniteLoops** 

### Docker
This project is run using Docker containers. You will need to have the Docker
engine installed on your machine to continue. Instructions are linked below

On Windows and OS X, (you should install the Docker Desktop)[https://docs.docker.com/engine/install/]. It's easy to set up, and includes the Docker Engine, along
with some other tools for managing local containers.


[Install Docker Desktop on Windows](https://docs.docker.com/docker-for-windows/install/)

[Install Docker Desktop on OS X](https://docs.docker.com/docker-for-mac/install/)


Some popular Linux distributions, such as CentOS, Debian, and Gentoo,
include the Docker Engine in their bundled package repositories.
It is _highly_ recommended to set up Docker's own repositories, and to install the
latest version directly from them.

For more information, follow the instructions on [Install Docker Engine](https://docs.docker.com/engine/install/) for Linux distributions.

If you installed the Docker Desktop app, you may alread have Docker Compose installed. If not, please follow the instructions [here to install the utility](https://docs.docker.com/compose/install/).

With the Docker Engine and Docker Compose installed, you should be able to start 
the project by calling `$ docker-compose up --build` from the repo. No
configuration should be required. Note that it may take a few minutes for Docker
to pull and build the images needed to run the project.

## Project Outline
The **InfiniteLoops** project is divided into distinct services that provide
specific functions. You can reference the [docker-compose.yml](https://github.com/equitymultiple/InfiniteLoops/blob/main/docker-compose.yml) for more details about
the project's dependencies. This project was created solely for testing purposes.
It lacks many of the features that would be _required_ in a Production-ready
environment, such as auth, validation, linting, and automated test cases.

### Products Service
#### Environment
`no environment-settings are currently available`

The Products Service is a rudimentary CMS implemented in Golang. It exposes 
a REST API endpoint that exposes Product metadata. That is:
`GET http://localhost:9090/products`

Some sample output:
```bash
$ curl -X GET -H 'Content-type: application/json' -H 'Accept: application/json' localhost:9090/products
[{"id":0,"title":"Lost in the Woods","description":"A nice afternoon","price":0,"img_url":"loop0.gif"},{"id":1,"title":"The Favorite One","description":"Time for something new","price":3,"img_url":"loop1.gif"},{"id":2,"title":"Sharks and Aliens II","description":"How about a book?","price":6,"img_url":"loop2.gif"},{"id":3,"title":"Before It's Over","description":"Nice music","price":9,"img_url":"loop3.gif"},{"id":4,"title":"Maybe?","description":"Surprising!","price":12,"img_url":"loop4.gif"},{"id":5,"title":"Precious Stones","description":"Get's better each time","price":15,"img_url":"loop5.gif"},{"id":6,"title":"Road to An Intersection","description":"About time","price":18,"img_url":"loop6.gif"},{"id":7,"title":"Washing Dishes","description":"Family friendly","price":21,"img_url":"loop7.gif"}]
```

**Note** that port `9090` must be available in order to run the service as-is.
### Orders Service
#### Environment
```
/* ./orders/.env */

RAILS_ENV=development`
```
The Orders Service is a simple Rails 5.2 application that provides basic storage
and edit features for orders submitted by the `Vue.js Client`.

On launch, the Orders Service will execute [start.sh](https://github.com/equitymultiple/InfiniteLoops/blob/main/orders/start.sh), which will reset and seed the 
`PostgreSQL-11` database with illustrative records.

This service exposes _one_ REST API endpoint, through which API consumers can
**create** new Order records
`POST http://localhost:1234/api/v1/orders`

This example also highlights the required payload structure and expected OK response:
```
$ curl 'http://localhost:1234/api/v1/orders' 'Accept: application/json' -H 'Content-Type: application/json' --data-raw '{"order":{"first_name":"a","last_name":"s","email":"d","products":{"6":{"itemCount":3}}}}'

{"order":{"id":5,"total":"100.0","customer_id":3,"created_at":"2021-02-03T03:56:41.705Z","updated_at":"2021-02-03T03:56:41.705Z","status":"processing"}}

A simple administrative web interface is exposed at `http://localhost:1234` that
displays the stored orders, and provides some simple edit/update features.
```
### Load Balancer
The Vue.js Client is compiled and delivered by an NGINX reverse proxy listening
for requests on `http://localhost:8080`. See the [NGINX config file](https://github.com/equitymultiple/InfiniteLoops/blob/main/client/.nginx/nginx.conf) for more
details.

### Vue.js Client
#### Environment
```
/* ./client/.env */

/* set to 'test' to use stubbed
 * service helpers instead of
 * calling the actual order / 
 * product services
 */
VUE_APP_PRODUCT_ENV=production
```
The Vue.js Client integrates with the separate services to provide a single-page
interface for a shopping app. Users are able to add items to their shopping cart,
review the contents of their cart, and place an order.

Session storage has not been implemented in this project. Refreshing the page,
or restarting the docker containers _will_ delete your shopping-cart contents.

The Vue.js assets are rebuilt each time the service is restarted. Any changes
you make _may_ require a restart to appear in your browser.

We make use of the [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) to make REST requests. Please see this [Browser Compatibility chart](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) to 
confirm that your browser is recent enough to run the Client.

#### General Workflow
1. Add an item to your cart
2. Click the shopping-cart icon in the header
3. Click the button inside the shopping cart to complete your purchase
4. Enter your contact information and submit

If all fields were completed, a new order record should exist in the Rails app

### PostgreSQL Database
#### Environment
`No environment variable configs are available at this time`

The Postgres database provides persistence for the Ruby on Rails Orders service.

It is rebuilt each time the Orders service is restarted (your order records
will be lost)
