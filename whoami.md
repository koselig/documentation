---
layout: documentation
current_menu: whoami
---

# What is Koselig?

Koselig is the result of my year of working at a web development agency ([Motionlab](http://www.motionlab.co.uk/)) working on Wordpress sites and day-in day-out thinking "it's got to get better than this." And now it has! Koselig is going to make you love your life as a Wordpress developer (well...) by allowing you to write pure [Laravel](https://laravel.com/) code but keep that all-too-familiar Wordpress dashboard your customers seem to love and you love to hate.

Unlike frameworks such as [Themosis](https://framework.themosis.com/) which are essentially Wordpress theme frameworks with Blade & a few Illuminate components, Koselig completely revolutionises the Wordpress developer experience by running Wordpress *on* Laravel. Wordpress' cogs are still turning in the background but with its head cut off, it has a "no-op" theme that renders nothing. Koselig will get the page that Wordpress thought it was loading and match it to a Route that you define and invokes your controller. From that point on the Laravel application is free to call any Wordpress method you can when developing a native Wordpress theme.

Since we have the pleasure of working in a Laravel environment, we can start swapping out those imfamously slow Wordpress components with beautiful Laravel ones (so far this has only been mail, database & caching) and providing nice interfaces to interact with Wordpress.

<div class="alert alert-info">Advanced Custom Fields' <a href="https://www.advancedcustomfields.com/resources/flexible-content/">Flexible Content</a> is the key to writing amazing Koselig applications. Take note of their ugly code examples, get this:</div>

```php
Route::template('promo', function (Post $page) {
    return view('promo', [
        'page' => $page,
        'content' => $page->getAcf('content')
    ]);
});
```

```php
<h1>{{ $page->title }}</h1>
<time datetime="{{ $page->post_date->format('c') }}">{{ $page->post_date->diffForHumans() }}</time>

By <a href="{{ $page->author->link() }}" rel="author">{{ $page->author->display_name }}</a>

@forelse($content as $block)
    @if($block['acf_layout'] === 'paragraph')
        <p>{{ $block['text'] }}</p>
	@elseif($block['acf_layout'] === 'download')
        <a href="{{ $block['file'] }}">{{ $block['content'] }}</a>
    @endif
@empty
    <h1>No blocks!</h1>
@endforelse
```

You can use all your regular Wordpress plugins and all your regular Laravel plugins ([Debugbar](https://github.com/barryvdh/laravel-debugbar) is *amazing* and shows your Wordpress queries/auth status/etc too) with minimal problems. Please don't be scared to dive into the library code and fix what you need to fix to get it working, the codebase is pretty small and easy to wrap your head around!
