---
layout: documentation
current_menu: getting-started
---

# Getting Started

Welcome! This guide will help you get started with a working install of Koselig.

First things first, it is recommended that you get yourself familiar with [Laravel](https://laravel.com/docs/5.3/installation). Koselig is built on top of Laravel to provide a WordPress administration panel on the backend, Laravel knowledge is assumed throughout the documentation.



## Installing Koselig

The recommended (and only supported) way of installing Koselig is by cloning the main repository:

```bash
$ git clone https://github.com/koselig/koselig
```

This will pull down a skeleton install of Koselig, you will then need to configure your environment variables. First copy `.env.example` to `.env` and fill out your database details, then fill in your [Advanced Custom Fields](https://www.advancedcustomfields.com/) Pro key, if you don't have an ACF key, you will have to remove the `advanced-custom-fields/advanced-custom-fields-pro` dependency from your `composer.json` file.

Now you're ready to install your dependencies! Use composer to do this:

```bash
$ composer install
```

Generate your application keys [here](https://roots.io/salts.html) and paste them in your environment file, alternatively you can use [wp-cli-dotenv-command](https://github.com/aaemnnosttv/wp-cli-dotenv-command) to automatically do this for you:

```bash
$ wp package install aaemnnosttv/wp-cli-dotenv-command
$ wp dotenv salts regenerate
```

 Then generate an application key using `php artisan key:generate`.

Now, when visit your site, you will automatically be prompted to install the WordPress database.

Congratulations, you're ready to use Koselig now!

<div class="alert alert-info" role="alert"><strong>Heads up!</strong> Koselig rids WordPress of frontend responsibilites altogether, this means theme support in WordPress is dropped completely. Don't worry though, any functions you can run in vanilla WordPress you can run in Koselig!</div>
