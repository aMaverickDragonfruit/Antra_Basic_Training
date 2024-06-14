# Client & Server
## browser (client): render HTML file
## make sure not sensitive info in client side
## DNS: Domain Name System
- like a contact book manages the mapping between hostname and server ip address
## Protocol == Rule
### HTTP: Hypertext Transfer Protocol
- An application-layer protocol for transmitting hypermedia documents, such as HTML.
- It was designed for communication between web browsers and web servers, but also for other purpose.
- It is a stateless protocol
  - It means server doesn't store any data(state) from previous request
  - It allows server completes each request independently
### HTTP Status Code
- why: simple and clean, easy to understand by reading code
- 200s: successful response
  - 200: OK
  - 201: Create
- 400s: client error response
  - 400: bad request
  - 401: unauthorized, don't know who you are
  - 403: forbidden, don't have permission
  - 404: non found, invalid url/request
- 500s: server wrong
  - 500: internal server, don't know what is exactly wrong
  - 503: service unavailable
### HTTP methods: desired action to be performed for a given resource
- GET: request data from a specific resource
- POST: send data to a server to create a resource
- PUT: send data to a server to update a resource
- PATCH: applies partial modifications to a resource
- DELETE: send data to a server to delete resource(s)
### PUT VS PATCH
- PUT: updates everything
- PATCH: updates part of endpoint data
## API: Application Programming Interface
- Interface can be thought of as a contract/rules that clearly define how two applications communicate with each other using requests and response
## RESTful api: Representational State Transfer
- The most popular and flexible API architecture style that follows REST principles
- stateless
- 4 kinds operations: CRUD
  - Create
  - Read
  - Update
  - Delete
## Browser Storage
- local storage: doesn't expire, stay forever
- session storage: is cleared after page session ends
- cookies: smaller piece of data, used to store information about user 

# HTML
## \<head>: define meta data in head
## self closing tag: 
- ex. \<input />
## attribute: define html element behavior
## Common Elements
- div
- button
- a
- form
- label, input
- table
### why do we need labels with input
## HTML VS HTML5
## Semantic HTML element: elements described by their tag names
- introduces in HTML5
- e.x. \<header>, \<footer>
### Why semantic html important
### \<article>: identical structure elements


