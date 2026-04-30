# Vijay Nirmal

GitHub.io page as a personal website

Website: https://vijaynirmal.com

## To create logo in svg
1. Remove backgroud/white in png using https://www.remove.bg/
2. Convert to SVG using https://www.pngtosvg.com/
3. Add below code in svg and delete following code `stroke="none" fill="#000000" fill-rule="evenodd"`
```html
<defs>
    <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
    <stop offset="0%" stop-color="#FFDB6E" />
    <stop offset="100%" stop-color="#FFBC5E" />
    </linearGradient>
</defs>
<g fill="url(#grad1)" stroke="none">
    <!-- Path -->
</g>
```