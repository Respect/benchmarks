<?php

require_once __DIR__.'/../../vendor/autoload.php';

$router = new Respect\Rest\Router();

$router->get('/hello/*', function ($name)  {
    return "Hello " . filter_var($name, FILTER_SANITIZE_STRING);
});

print $router->run();
