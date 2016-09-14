/*
 * LOAD portfolio SHOTS
 *
 * this script loads my hardcoded (:{ ) projects
 */

// Variable to hold the HTML we'll generate
var html = '';

var projects = [
  {"name": "Veggie Recipes",
    "localpath": "images/webScraper.jpg",
    "url": "https://veggierecipes.herokuapp.com/",
    "path": "http://i.imgur.com/BsztKQz.jpg",
    "description": "A web scraper made with Django, utilizing an endpoint, that scrapes the top posts of a subreddit to grab and return a tasty veggie recipe!"
    },
  {"name": "Twich Streamers",
      "localpath": "images/twitchStreamers.jpg",
      "url": "http://twitchsteamers.pythonanywhere.com/",
      "path": "http://i.imgur.com/NzLVi3b.jpg",
      "description": "A responsive JS app, utilizing HTML injection, that returns a list of Twitch streamers. "
      },
  {"name": "JS Calculator",
    "localpath": "images/jscalculator.jpg",
    "url": "https://codepen.io/cpowers/full/QNYoXx/",
    "path": "http://i.imgur.com/aFrRDpX.jpg",
    "description": "A simple calculator created with JavaScript"
    },
  {"name": "Random Quote Machine",
    "localpath": "images/randomQuote.jpg",
    "url": "https://codepen.io/cpowers/full/mPMvow/",
    "path": "http://i.imgur.com/0xykqgu.jpg",
    "description": "An app that returns a random Lord of the Rings Quote. Potatoes, eh?"
    },
  {"name": "TicTacToe",
    "localpath": "images/tictactoe.jpg",
    "url": "https://codepen.io/cpowers/full/wGbzVj/",
    "path": "http://i.imgur.com/kKkJlmy.jpg",
    "description": "A two player tic tac toe game, made with JS"
    },
]

//'<img src="{% static "'my_app/myexample.jpg'" %}" alt="My image"/>'
/*
projects.forEach(function(entry){
  /html += '<li>';
  html += '<a href="'+ entry.url +'">';
  //html += '<img src="{% static "' + entry.localpath + '" %}" alt="'+ entry.name +'" />';
  html += '<img src="' + entry.path + '" alt="' + entry.name + '" />';
  html += '</a>';
  html += '</li>';
  console.log(entry.path);
  console.log('<img src="' + entry.path + '" alt="' + entry.name + '" />');
})
*/

projects.forEach(function(entry){
  html += '<li>';
  html += '<a href="'+ entry.url +'" target="_blank">';
  html += '<img src="' + entry.path + '" alt="'+ entry.name +'" />';
  html += '</a>';
  html += '</li>';
});

$('.shots').html(html);
console.log(html);
