'use strict';
/**
 * CURL -> Command
 * Command URL
 * curl -v
 * curl --help
 * https://pokeapi.co/ -> Resource used for an example during the class
 * https://http.cat/ -> Used to Explain the HTTP Codes
 */

const http = require('http');

const host = 'localhost';

const port = 8000;

const writeHTMLResponse = (response, htmlCode) => {
  response.setHeader('Content-Type', 'text/html');
  response.writeHead(200);
  response.end(htmlCode);
};

const server = http.createServer((request, response) => {
  const url = request.url;
  console.log('Url is: ', url);
  //writeHTMLResponse(response, '<p>This is an HTML Response</p>');

  if (url === '/other') {
    writeHTMLResponse(
      response,
      '<h1>This is another route</h1> </br> <p>Second Line</p> </br> <p style="margin:130px">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi non quis exercitationem culpa nesciunt nihil aut nostrum explicabo reprehenderit optio amet ab temporibus asperiores quasi cupiditate. Voluptatum ducimus voluptates voluptas?</p>'
    );
  } else {
    writeHTMLResponse(response, '<p> HTML Text</p>');
  }
});

server.listen(port, host, () => {
  console.log(`Server running on http://${host}:${port}`);
});
