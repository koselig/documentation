'use strict';

import elixir from 'laravel-elixir';

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */

elixir((mix) => {
    mix.sass('./src/sass/app.sass')
        .browserify('./src/js/app.es6');
});
