<?php

require_once __DIR__.'/../vendor/autoload.php';

$router = new Respect\Rest\Router();

$router->get('/hello/*', function ($name)  {
    return "Hello $name";
});
