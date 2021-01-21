# WeatherCheck
Weather App Checking Current weather and 5 day forecast

## Description 
This is a basic weather search application that allows the user to enter the desired location in a form field and when they hit enter then they are represented with some data from the current weather for the city as well as some data for a 5 day forecast.

## Table of Contents

* [Technology Usage](#usage)
* [Acceptance Criteria](#criteria)
* [User Story](#story)
* [Instructions](#Instructions)
* [Credits](#credits)
* [License](#license)

## Usage

The application makes use of the following technologies:

1.  ### HTML 5
    It is a markup language used for structuring and presenting content on the World Wide Web. It is the fifth and last major HTML version that is a World Wide Web Consortium (W3C) recommendation. The current specification is known as the HTML Living Standard. _[ref](https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwirsJnF_IjuAhUFheYKHXzxC_oQFjAKegQIAhAC&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FHTML5&usg=AOvVaw1Pc1Tzxi9h86QKDBa0Ofro)_

2.  ### JavaScript 6
     Is a lightweight, interpreted, or just-in-time compiled programming language with first-class functions. The standard for JavaScript is ECMAScript. On June 17, 2015, ECMA International published the sixth major version of ECMAScript, which is officially called ECMAScript 2015, and was initially referred to as ECMAScript 6 or ES6.  _[ref](https://developer.mozilla.org/en-US/docs/Web/JavaScript)_

3.  ### CSS
    CSS handles the look and feel part of a web page. Using CSS, you can control the color of the text, the style of fonts, the spacing between paragraphs, how columns are sized and laid out, what background images or colors are used, layout designs,variations in display for different devices and screen sizes as well as a variety of other effects._[ref](https://medium.com/html-all-the-things/what-is-a-css-framework-f758ef0b1a11)_

    I also made use of CSS framework called Bootstrap. CSS Frameworks are collection or libraries of CSS stylesheets that are prepped and ready to use. It simplifies coding to make layout and elements look beautiful. More details on Bootstrap can be found on their website **[here](https://getbootstrap.com)**. 

4.  ### API's
    API stands for Application Programming Interface. An API is a software intermediary that allows two applications to talk to each other. In other words, an API is the messenger that delivers your request to the provider that you're requesting it from and then delivers the response back to you.
    We made use of 2 Web Based  API's 
    a.  *_Accuweather API_*
        We used this one to query the city, get the city identifier and then request further information from current weather and the 5 day forecast. _[ref](https://developer.accuweather.com/)_

5.  ### Visual Studio Code
    Visual Studio Code is a free source-code editor made by Microsoft for Windows, Linux and macOS. Features include support for debugging, syntax highlighting, intelligent code completion, snippets, code refactoring, and embedded Git. _[ref](https://en.wikipedia.org/wiki/Visual_Studio_Code)_

    In conjuntion with GitHub we made use of the following plugins:
     
     a. *_GitLens_*
     It is an open-source extension for Visual Studio Code created, developed, and maintained by Eric Amodio. GitLens simply helps you better understand code; Quickly glimpse into whom, why, and when a line or code block was changed; Jump back through history to gain further insights as to how and why the code evolved. _[ref](https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwiP-PSeh4nuAhVH73MBHcTWAT8QFjAHegQIBxAC&url=https%3A%2F%2Fmarketplace.visualstudio.com%2Fitems%3FitemName%3Deamodio.gitlens&usg=AOvVaw0RHvZ8fzEvI-Efg2Cw6fxU)_

     b. *_Emmet_*
     Emmet is a toolkit for high-speed HTML, XML, XSL (or any other structured code format) coding and editing. The core of this plugin is a powerful abbreviation engine which allows you to expand expressions—similar to CSS selectors—into HTML code. _[ref](https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwi16o_Dh4nuAhWK7HMBHXdEBCcQFjABegQICBAC&url=https%3A%2F%2Fgithub.com%2Femmetio%2Femmet-eclipse&usg=AOvVaw3kWt3hMlR-KF3B5nqVBAUX)_

6.   ### GitHub
     GitHub is a code hosting platform for version control and collaboration. It lets developers work together on projects from anywhere and allows you to create repositories and branches perform commits, Pull Requests. _[ref](https://guides.github.com/activities/hello-world/)_

## User Story

AS A traveler\
I WANT to see the weather outlook for multiple cities\
SO THAT I can plan a trip accordingly\

## Acceptance Criteria

GIVEN a weather dashboard with form inputs\
WHEN I search for a city\
THEN I am presented with current and future conditions for that city and that city is added to the search history\
WHEN I view current weather conditions for that city\
THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, the wind speed, and the UV index\
WHEN I view the UV index\
THEN I am presented with a color that indicates whether the conditions are favorable, moderate, or severe\
WHEN I view future weather conditions for that city\
THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, and the humidity\
WHEN I click on a city in the search history\
THEN I am again presented with current and future conditions for that city\
WHEN I open the weather dashboard\
THEN I am presented with the last searched city forecast


## Instructions

The Weather App opens with an input field and drop down button *_Search History_*. 

The input field has placeholder text that prompts the user to input the name of the city they want to check.

The drop down button will contain previously searched history, if it exists. 

If there are items in the *_Search History_* then the user can click on the item and it will call up the city forecasts.

If the user types a cityname in the input field and hits enter/return then it will search forecast for the city.

It will also add that city to the local storage so that it will be added to the *_Search History_* drop down items when the page reloads.

The weather displayed will display UV Icons that will change in colour and message according to the severity of the forecasted UV Conditions.

## Some Screenshots

1. ### Landing Page 
  * ![Landing Page](https://github.com/AdrianMEvans/WeatherCheck/blob/main/Assets/graphics/images/Weather%20App%20Landing%20Page.png?raw=true)
2. ### Search History Displayed 
  * ![Search History Displayed](https://github.com/AdrianMEvans/WeatherCheck/blob/main/Assets/graphics/images/WApp%20Search%20History.png?raw=true)
3. ### Results Displayed  
  * ![Results Displayed](https://github.com/marcojansen-gmx/LOTR-or-Potter-Quiz/blob/main/Assets/pic/Readme%20pics/MOBI%20SUBMIT.png?raw=true)
4. ### UV Icon and Mobile Display 
  * ![UV Icon and Mobile Display](https://github.com/marcojansen-gmx/LOTR-or-Potter-Quiz/blob/main/Assets/pic/Readme%20pics/MOBI%20HIGH%20SCORES.png?raw=true)


## Credits
:bellhop_bell: 
Contact | Mobile | E-mail
------------ | ------------- | ------------
Adrian Evans | 0424 064 104 | adrian@polywhiz.com


## License
Use for fun permitted. Don't use to educate. Don't claim as your own.