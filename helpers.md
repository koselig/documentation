---
layout: documentation
current_menu: helpers
---

# Helpers

WordPress' API is, quite frankly, ugly. Koselig has a nice OO interface for interacting with WordPress and it's recommended you use those over WordPress' helper functions.

### Get the Current Page ID

There are numerous ways to get the current page ID using Koselig. When in a controller, you're probably better off injecting `Post` into your method and calling `->ID` on that for readability sake. The global way to do it is to use the WordPress helper class.

```php
Koselig\Support\WordPress::id();
```

Under the hood, `id()` uses the `Query` facade to get the current post.

### Get the Current Page

As mentioned above, you can just inject `Post` into your controller to get the current page, however if this doesn't work for you then you can use `$request->post()` which will return the same instance.

### Checking Page Type

Checking the type of page you're on is a fairly common thing in WordPress although in Koselig it's generally regarded as an antipattern. Conditional page type checks are usually performed all the way down in the Router and once you get past that it's generally not a very good idea to concern yourself with page type. The functionality is still available as in some contexts it may be useful.

```php
// check if we're on a post page for the given post type(s)
WordPress::singular($types?: string|string[]);

// check if we're on an archive page for the given post type(s)
WordPress::archive($types?: string|string[]);

// check if we're on an author page for the given user(s) by model or id
WordPress::author($users?: int|int[]|User|User[]);
```

### Multisite

These methods only work on multisite WordPress installs and will return null on anywhere else.

```php
// check if we're on a multisite and optionally check if we're on the given multisite
WordPress::multisite($id?: int|int[]);

// get the current multisite site id
WordPress::getSiteId();

// return the WP_Network associated with this site
WordPress::site();
```

### Current User

The current user should be retrieved using the standard [Auth Guard](auth-guard.html) (`auth()->user()`) however, if preferred, you can retrieve the current WP_User using the `WordPress` helper class.

<div class="alert alert-danger"><strong>Heads up!</strong> This method returns a WP_User. Where possible you should prefer to use the User Eloquent model that Koselig provides. You can get that easily using the auth helper from Laravel above.</div>

```php
WordPress::currentUser();
```

## Facades

Koselig provides some facades for frequently-required parts of WordPress. The `Loop` facade will point to the current `Post` in [The Loop](https://codex.wordpress.org/The_Loop). The `Query` facade points to the Main Query (which is the query that identified the current page). The major difference betewen using the `Query` facade and  `$GLOBALS['wp_the_query']` is that the `Query` facade uses the `Query` proxy (which is covered below)

## Proxies

Koselig provides some proxies to WordPress where it didn't make sense to rewrite the class, this makes WordPress interfaceable in a PSR-friendly way.

### Query

Koselig camel-cases every method in `WP_Query` using the `Query` proxy. It also changes some strangely named methods into more digestable (and guessable) ones (ie. `have_comments` -> `hasComments`). You can see all the methods on the `Query` proxy [here](https://github.com/koselig/library/blob/master/src/Proxy/Query.php#L12).
