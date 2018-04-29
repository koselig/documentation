---
layout: documentation
current_menu: hashing
---

# Hashing

Koselig exposes a [Hasher](https://laravel.com/docs/master/hashing) implementation that uses Wordpress' underlying hashing functions. It is available using the `WPHash` facade.

<div class="alert alert-danger" role="alert"><strong>Heads up!</strong> If you're using the koselig/koselig as the foundation to your project, you would've had <a href="https://github.com/roots/wp-password-bcrypt" target="_blank">roots/wp-password-bcrypt</a> imported for you which replaces Wordpress' old MD5 implementation with a nice new bcrypt one. If you're not using roots/wp-password-bcrypt please keep in mind that Wordpress defaults to MD5 <a href="https://en.wikipedia.org/wiki/MD5#Security" target="_blank">and that's probably not what you want</a>.</div>

### Examples

```php
// hash the given value
WPHash::make($password);

// check if the given input matches the hash
WPHash::check($_POST['password'], $hashedPasswordFromDb);

// checks if the given password is an old Wordpress MD5 hash
WPHash::needsRehash($dbPassword);
```
