---
layout: documentation
current_menu: filters
---

# Filters

Koselig provides a simple way to interface with Wordpress' filters. Filters should be declared in a service provider in your application.

### Hooking an existing filter action

To hook an existing filter action, simply call the `hook` method with the usual parameters you'd usually pass to `add_filter`

```php
use Koselig\Support\Action;

Action::hook('gform_pre_submission', function ($e) {
    dd($e);
});
```

### Triggering a hook

To trigger a hook, simply call the `trigger` method with the usual parameters you'd usually pass to `do_action`

```php
Action::trigger('my_action', 1, 2, 3);
```

### Filtering a variable

To filter a variable, simply call the `filter` method with the usual parameters you'd usually pass to `apply_filters`

```php
$a = Action::filter('my_filter', $a, 1, 2, 3);
```

