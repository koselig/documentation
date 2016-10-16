---
layout: documentation
current_menu: meta
---

# Meta

Koselig provides various different ways to grab meta values. Everything is cached on first fetch to ensure speed throughout the request. This replaces `get_post_meta` and `get_field` and so deprecates them.

### Using the Meta model

To get simple meta values from the current page, you can use the `get` method on the `Meta` model.

```php
Meta::get('_wp_page_template');
```

`Meta` is flexible in that you can also provide a page to get the meta value from, this can either be a Post model or an id of a post. Pass nothing as the key if you'd like to get all meta values or pass an array if you'd like to get more than one value.

```php
Meta::get(Post::where('title', 'Test')->first(), '_wp_page_template');

Meta::get(['_wp_page_template', '_wp_attached_file']);
```

#### Advanced Custom Fields

Koselig also supports [Advanced Custom Fields](https://www.advancedcustomfields.com/) values. To get these, use the `acf` method on the `Meta` model.

```php
Meta::acf('test');
```

Like `get`, you can pass a Post model, id of a post or nothing as the first parameter if you'd like to get values from another post other than the current one.

### Using a Post model

If you have an instance of `Post` you'd like to get meta values from, there are methods in that model you can use to do that. You can use `getMeta` to get simple meta values. Like the above, you can pass a string, an array or nothing to the method to get one, some or all values respectively.

```php
Route::template('home', function (Post $post) {
    echo $post->getMeta('_wp_page_template');
})
```

`Post` models, like the `Meta` model, also supports Advaned Custom Fields values. You can get these using `getACF` with the same parameters as `getMeta`.

<div class="alert alert-info" role="alert"><strong>Heads up!</strong> It is worth noting that <code>getACF</code> will strip non-ACF fields from the returned value.</div>

```php
Route::template('home', function (Post $post) {
    echo $post->getACF('test');
});
```

