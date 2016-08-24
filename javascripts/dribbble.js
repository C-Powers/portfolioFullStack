/*
 * LOAD DRIBBBLE SHOTS
 *
 * this script loads my hardcoded (:{ ) projects
 */

// Variable to hold the HTML we'll generate
var html = '';

var projects = [
  {"name": "Veggie Recipes",
    "path": "images/webScraper.jpg",
    "url": "https://veggierecipes.herokuapp.com/",
    "description": "A web scraper made with Django, utilizing an endpoint, that scrapes the top posts of a subreddit to grab and return a tasty veggie recipe!"
    },
  {"name": "Twich Streamers",
      "path": "images/twitchStreamers.jpg",
      "url": "http://twitchsteamers.pythonanywhere.com/",
      "description": "A responsive JS app, utilizing HTML injection, that returns a list of Twitch streamers. "
      },
  {"name": "JS Calculator",
    "path": "images/jscalculator.jpg",
    "url": "https://codepen.io/cpowers/full/QNYoXx/",
    "description": "A simple calculator created with JavaScript"
    },
  {"name": "Random Quote Machine",
    "path": "images/randomQuote.jpg",
    "url": "https://codepen.io/cpowers/full/mPMvow/",
    "description": "An app that returns a random Lord of the Rings Quote. Potatoes, eh?"
    },
  {"name": "TicTacToe",
    "path": "images/tictactoe.jpg",
    "url": "https://codepen.io/cpowers/full/wGbzVj/",
    "description": "A two player tic tac toe game, made with JS"
    },
]


projects.forEach(function(entry){
  html += '<li>';
  html += '<a href="'+ entry.url +'">';
  html += '<img src="' + entry.path + '" alt="'+ entry.name +'" />';
  html += '</a>';
  html += '</li>';
})

$('.shots').html(html);
