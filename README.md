# JSONHTML
JSON goes in HTML comes out, pretty straightforward ;) It might seen like a lot of JSON for some HTML, but it's better then having HTML in your javascript.

JSONHTML is only 1,22kb so why not just use it and keep your code clean.

## Installation
TODO: Describe the installation process 
``<script src="dist/jsonhtml.min.js" type="application/javascript"></script>``

## Usage
Define your JSON object, nest away!
```javascript
var json = {
    dom: {
        children: [
            {
                tag: 'body',
                children: [
                    {
                        tag: 'h1',
                        inner: 'Your page title',
                    }
                ]
            }
        ]
    }
};
```

### Adding attributes to elements
```javascript
{
    tag: 'a',
    inner: 'Go to page',
    attr: {
        href: '/your-page',
        class: 'btn'
    }
}
```
Output:
```html
<a href="/your-page" class="btn">Go to page</a>
```

### Multiple classes
```javascript
{
    tag: 'a',
    attr: {
        href: '/your-page',
        class: ['btn', 'green', 'large']
    }
}
```
Output:
```html
<a href="/your-page" class="btn green large">Go to page</a>
```

### Inner text replacement
```javascript
{
    tag: 'h1',
    inner: ['Change this %s because I like %s', ['text', 'stuff']]
}
```
Output:
```html
<h1>Change this text because I like stuff</h1>
```

### Callbacks
```javascript
var json = {
    dom: {},
    onBefore: function () { // Call an inline function, or 
    
    },
    onComplete: 'otherFunction' // Call function by string
};
```

## Examples
Here are a few examples that could be useful

### Table
```javascript
{
    tag: 'table',
    children: [
        {
            tag: 'tr',
            children: [
                { tag: 'th', inner: 'Name' },
                { tag: 'th', inner: 'Age' },
                { tag: 'th', inner: 'County' }
            ]
        },
        {
            tag: 'tr',
            children: [
                { tag: 'td', inner: 'Gus' },
                { tag: 'td', inner: '23' },
                { tag: 'td', inner: 'The Netherlands' }
            ]
        },
        {
            tag: 'tr',
            children: [
                { tag: 'td', inner: 'Steven' },
                { tag: 'td', inner: '54' },
                { tag: 'td', inner: 'Columbia' }
            ]
        },
        {
            tag: 'tr',
            children: [
                { tag: 'td', inner: 'Esther' },
                { tag: 'td', inner: '28' },
                { tag: 'td', inner: 'Germany' }
            ]
        }
    ]
}
```
Output:
```html
<table>
    <tr>
        <th>Name</th>
        <th>Age</th>
        <th>County</th>
    </tr>
    <tr>
        <td>Gus</td>
        <td>23</td>
        <td>The Netherlands</td>
    </tr>
    <tr>
        <td>Steven</td>
        <td>54</td>
        <td>Columbia</td>
    </tr>
    <tr>
        <td>Esther</td>
        <td>28</td>
        <td>Germany</td>
    </tr>
</table>
```

### Form
```javascript
{
    tag: 'form',
    attr: {
        method: 'post',
        action: '/some-page'
    },
    children: [
        {
            tag: 'div',
            attr: { class: 'input-container' },
            children: [
                {
                    tag: 'label',
                    inner: 'Name',
                    attr: {
                        for: 'Name'
                    }
                },
                {
                    tag: 'input',
                    attr: {
                        type: 'text',
                        id: 'Name',
                        placeholder: 'Enter your name'
                    }
                }
            ]
        },
        {
            tag: 'div',
            attr: { class: 'input-container' },
            children: [
                {
                    tag: 'label',
                    inner: 'E-mail',
                    attr: {
                        for: 'Email'
                    }
                },
                {
                    tag: 'input',
                    attr: {
                        type: 'email',
                        id: 'Email'
                    }
                }
            ]
        },
        {
            tag: 'div',
            attr: { class: 'input-container' },
            children: [
                {
                    tag: 'input',
                    attr: {
                        type: 'submit',
                    }
                }
            ]
        }
    ]
}
```
Output:
```html
<form action="/some-page" method="post">
    <div class="input-container">
        <label for="Name">Name</label><input id="Name" placeholder="Enter your name" type="text">
    </div>
    <div class="input-container">
        <label for="Email">E-mail</label><input id="Email" type="email">
    </div>
    <div class="input-container">
        <input type="submit">
    </div>
</form>
```

## Changelog
1.0 Inital version