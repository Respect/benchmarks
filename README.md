Respect Benchmarks
==================

Just out of curiosity.

### PHP Config

Configuration used on file php-i.txt. APC on and PHP 5.4.9.

Everything installed and autoloaded via composer.

### node.js Config

node.js 0.8.15

Node.js 

Hello World
-----------

Info:

  * Bench folder: hello-world
  * PHP Server: php -S localhost:8080 
  * node.js Server: nodejs
  * ab line: ab -c 100 -n 30000 http://localhost:8080/hello/alganet > bench.txt

Tested Projects:

  * Respect/Rest (PHP)
  * Silex (PHP)
  * Slim (PHP)
  * Restify (node.js)

Bench results on the bench.txt file in each project folder.

