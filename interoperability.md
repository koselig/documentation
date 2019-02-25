---
layout: documentation
current_menu: interoperability
---

# WordPress Interopability with Laravel

Koselig silently replaces a few WordPress components with Laravel ones for consistency across datastores,  DRY configuration across Laravel & WordPress and in a lot of cases, speed. These are mostly transparent to the end developer but it's nice to have them documented.

### Database

Koselig replaces WordPress' `wpdb` implementation with [Laravel's](https://laravel.com/docs/master/database) database implementation. WordPress has implemented their own homebaked prepared statements implentation, this is an inherent security risk so along with providing a little bit of a speed boost by providing us the ability to cache repetitive queries we know aren't going to change often (ie. database version) we also get the added benefit of Laravel's proven safety track record.

### Mailer

WordPress' `wp_mail` function is replaced with an implementation that invokes Laravel's [Mail driver](https://laravel.com/docs/master/mail). This gives you a native way to leverage Mailgun, SparkPost, Amazon SES, sendmail, etc without any other plugins, just configure your .env and Koselig will handle the rest!

### Translations

Translations are a slightly strange one. Both Laravel and WordPress expose a `__` helper and libraries of both use the method, removing Laravel's or WordPress' implementation wouldn't be viable. When calling `__`, Koselig will first check if Laravel has the given translation and if it doesn't then it will fallback to WordPress' implementation.