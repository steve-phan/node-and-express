const http = require('http');

const app = http.createServer((req, res) => {
  //   res.write('Hello world\n');
  //   res.write('This is 2nd line \n');
  //   res.end('This is a text', () => {
  //     console.log('Response is1 done1');
  //   });

  /** Routing basic */
  switch (req.url) {
    case '/':
      return res.end('Welcome to our homepage');
    case '/contact':
      return res.end('Email to me lebenistcode@gmail.com');
    default:
      return res.end('Page not found ...');
  }
});

app.listen(2021);
