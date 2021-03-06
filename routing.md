---
layout: documentation
current_menu: routing
---

# Routing

Beautiful routing is one of the core points of Koselig. Koselig tries to stick to Laravel's routing patterns to give the most native feel as possible. Like Laravel, routes accept either a closure or a controller action.

### Template Routing

Template routing is one of the main types of routing you'll most likely be using. 

<div class="alert alert-info" role="alert"><strong>Heads up!</strong> You can declare your own templates in <code>config/template.php</code>, the slug (key) set in this file will be the one used in the routing method.</div>

This method accepts a template slug name and an action.

```php
Route::template('home', function () {
    return 'Hello from the home template!';
});
```

When a user visits a page with the template with the slug `home` they will see a string on their screen saying "Hello from the home template!"

### Singular Routing

This route is used when a singular post is being displayed. You may pass an array of post types or a single post type as a string to this method. You can optionally have the current post's model injected into the parameters. Any subclass of `Post` also works.

<div class="alert alert-info" role="alert"><strong>Heads up!</strong> You can declare your own post types in <code>config/posttypes.php</code>, the slug (key) set in this file will be the one used in the routing method.</div>

```php
Route::singular('post', function (Post $post) {
    dd($post);
});
```

### Archive Routing

This route is used when an archive page is being displayed. You may pass an array of post types, a single post type, or no post type at all to this method. If you pass no post type, that route will become the default archive page if no route is declared for that particular archive page.

```php
Route::archive('suppliers', function () {
    return 'Welcome to the Suppliers archive!';
});

Route::archive(function () {
    return 'Welcome to the default archive page!';
});
```

### Page Routing

Page routing is slightly different to the previous routing methods in that instead of taking a slug, it takes a page ID. This is down to the fact that the slug of pages are editable in the WordPress administration panel, this that means that if a user (aka rogue SEO team) decides to change a slug you'll still be serving the page with the correct action.

<div class="alert alert-info" role="alert"><strong>Heads up!</strong> Despite the name, page routing can be used to serve any post type, this includes normal posts.</div>

```php
Route::page(3, function () {
    echo 'Hello from my page with id 3!';
});
```

### Other Routing Methods

Routing methods other than `GET` are available for WordPress routing. To use this, you should pass `method` as an option. You can pass in as many methods as you'd like using this, for example:

```php
Route::template('home', [
    'method' => ['GET', 'POST', 'OPTIONS'],
    'uses' => function () {
        return 'Hello from the home template!';
    }
]);
```

### Native Routing

Although discouraged in normal use, Laravel's native routing methods are still available for use without having to have a page for the route in WordPress. This shouldn't normally be used but is very helpful when dealing with something such as an AJAX call or form submission where creating a page in WordPress for this would be painful and useless.

## Adding pages to WordPress Admin

Adding pages to the WordPress dashboard using Koselig is incredibly easy. You can use `Page::addPage($pageTitle, $menuTitle, $capability, $slug, $action, $iconUrl = '', $position = null)` and `Page::addSubpage($parent, $pageTitle, $menuTitle, $capabilities, $slug, $action)` to do this, these methods match the syntax of [add_menu_page](https://developer.wordpress.org/reference/functions/add_menu_page/) and [add_submenu_page](https://developer.wordpress.org/reference/functions/add_submenu_page/), respectively. The main difference between using `Page` and using WordPress' native methods is that `Page` wraps your `action` so you can pass it the same types you can pass to your routes (closures and `controller@method` syntax) and dependencies will automatically be injected.

## Custom Post Types

Custom Post Types can be defined in `config/posttypes.php`. One called "Supplier" should be setup for you already, this should give you an example of how the configuration works. The parameters are the same as WordPress' [register_post_type](https://codex.wordpress.org/Function_Reference/register_post_type#Arguments).
