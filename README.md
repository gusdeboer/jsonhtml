# JSONHTML
JSON goes in HTML comes out, pretty straightforward ;)
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
        class: ['btn', 'green', 'large']
    }
}
```
Output:
```html
<a href="/your-page" class="btn green large">Go to page</a>
```
### Multiple classes
```javascript
{
    tag: 'a',
    inner: 'Go to page',
    attr: {
        class: ['btn', 'green', 'large']
    }
}
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
## Changelog
1.0 Inital version
## License
TODO: Write license