# Clock with JavaScript

This is a simple clock implemented in JavaScript that displays the current time on a web page.

## Description

The clock uses the `setInterval()` method to update the displayed time every second. It creates a new `Date` object to get the current date and time and then updates the text content of an HTML element with the id `clock` to display the time using the `toLocaleTimeString()` method.

## Usage

To use this clock in your web page:

1. Include the JavaScript code in your HTML file.
2. Create an HTML element with the id `clock` where you want the clock to be displayed.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Clock</title>
</head>
<body>

    <p>The current time is: <span id="clock"></span></p>

    <script src="clock.js"></script>
</body>
</html>
```


![image](https://github.com/HAMZOO0/JavaScript-/assets/98114762/3617f731-4577-4a58-9c93-9216a103fe76)
