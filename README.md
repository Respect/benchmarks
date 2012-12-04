Respect Benchmarks
==================

Just out of curiosity.

Configuration used on file php-i.txt. APC on and PHP 5.4.9.

Everything installed and autoloaded via composer.

Hello World
-----------

Bench folder: hello-world
Server: php -S localhost:8080 
ab line: ab -c 100 -n 30000 http://localhost:8080/hello/alganet > bench.txt

  * Respect/Rest
  * Silex

Bench results on the bench.txt file in each project folder.

