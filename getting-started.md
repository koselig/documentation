---
layout: documentation
current_menu: getting-started
---

# Getting Started

Welcome! This guide will help you get started with a working install of Koselig.

First things first, it is recommended that you get yourself familiar with [Laravel](https://laravel.com/docs/5.3/installation). Koselig is built on top of Laravel to provide a Wordpress administration panel on the backend, Laravel knowledge is assumed throughout the documentation.



## Installing Koselig

The recommended (and only supported) way of installing Koselig is by cloning the main repository:

```sh
git clone https://github.com/koselig/koselig
```

This will pull down a skeleton install of Koselig, you will then need to configure your environment variables. First copy `.env.example` to `.env` and fill out your database details, then fill in your [Advanced Custom Fields](https://www.advancedcustomfields.com/) Pro key, if you don't have an ACF key, you will have to remove the `advanced-custom-fields/advanced-custom-fields-pro` dependency from your `composer.json` file.

Generate your application keys [here](https://api.wordpress.org/secret-key/1.1/salt/) and paste them in your environment file. Then generate an application key using `php artisan key:generate`.

Now you're ready to install your dependencies! Use composer to do this:

```sh
composer install
```

Now visit your site, you will automatically be prompted to install the Wordpress database.

Congratulations, you're ready to use Koselig now!

<div class="alert alert-info" role="alert"><strong>Heads up!</strong> Koselig rids Wordpress of frontend responsibilites altogether, this means theme support in Wordpress is dropped completely. Don't worry though, any functions you can run in vanilla Wordpress you can run in Koselig!</div>