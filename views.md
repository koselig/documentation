---
layout: documentation
current_menu: views
---

# Views

Koselig provides a few Blade directives for helping you interact with Wordpress within your views.

### The Loop

[The Loop](https://codex.wordpress.org/The_Loop) is a Wordpress term for the loop processing all the posts that match the current page. For example, on search pages you'd use The Loop for displaying search results & on the home page you'd use The Loop for displaying the most recent posts. This allows you to reuse your result partials nearly everywhere quite easily.

Koselig provides `@loop` and `@endloop` directives to leverage The Loop in your views. The current post you're processing is available inside the `$post` variable or you can use the `post()` helper.

### Meta and Scripts

Koselig provides `@wphead` and `@wpfooter` directives to call [wp_head](https://codex.wordpress.org/Plugin_API/Action_Reference/wp_head) and [wp_footer](https://codex.wordpress.org/Plugin_API/Action_Reference/wp_footer) helpers in your views.

### Gravity Forms

If you happen to use Gravity Forms then you're in luck. Koselig provides an `@gravityform()` directive for calling `gravity_form()` from your views.