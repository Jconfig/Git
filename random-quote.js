console.log('To get random quote from here in your website add "<script src="https://git.joydeb.xyz/random-quote.js" between head tag . Then add "<script>getQuote=();</script>" between body tag where you need to show it :)');

function getQuote() {
  // Create the arrays
  var quotes = new Array(21);
  var sources = new Array(21);

  // Initialize the arrays with quotes
  quotes[0] = "Optimism is the faith that leads to achievement.";
  sources[0] = "Helen Keller";

  quotes[1] = "If you don't like the road you're walking, " +
    "start paving another one.";
  sources[1] = "Dolly Parton";

  quotes[2] = "The most difficult thing is the decision to act, " +
    "the rest is merely tenacity.";
  sources[2] = "Amelia Earhart";

  quotes[3] = "What's another word for thesaurus?";
  sources[3] = "Steven Wright";

  quotes[4] = "Attitudes are a secret power working 24 hours a day for good or bad.";
  sources[4] = "Unknown";

  quotes[5] = "You can't always control circumstances. But you can control your own thoughts.";
  sources[5] = "Charles Poppleston";

  quotes[6] = "There is nothing either good or bad thinking makes it so";
  sources[6] = "William Shakespeare";

  quotes[7] = "Better keep yourself clean and bright; you are the window through which you must see the world.";
  sources[7] = "George Bernard Shaw";
  
  quotes[8] = "A happy person is not a person in a certain set of circumstances, but rather a person with a certain set of attitudes.";
  sources[8] = "Hugh Downs";
  
  quotes[9] = "Genius is one percent inspiration and ninety-nine percent perspiration.",
  sources[9] = "Thomas Edison"
    
  quotes[10] = "You can observe a lot just by watching.",
  sources[10] = "Yogi Berra"
    
  quotes[11] = "A house divided against itself cannot stand.",
  sources[11] = "Abraham Lincoln"
    
  quotes[13] = "Difficulties increase the nearer we get to the goal.",
  sources[13] = "Johann Wolfgang von Goethe"
    
  quotes[14] = "Fate is in your hands and no one elses",
  sources[14] = "Byron Pulsifer"
    
  quotes[15] = "Be the chief but never the lord.",
  sources[15] = "Lao Tzu"
    
  quotes[16] = "Nothing happens unless first we dream.",
  sources[16] = "Carl Sandburg"
    
  quotes[17] = "Well begun is half done.",
  sources[17] = "Aristotle"
    
  quotes[18] = "Life is a learning experience, only if you learn.",
  sources[18] = "Yogi Berra"
    
  quotes[19] = "Self-complacency is fatal to progress.",
  sources[19] = "Margaret Sangster"
    
  quotes[20] = "Peace comes from within. Do not seek it without.",
  sources[20] = "Buddha"

  // Get a random index into the arrays
  i = Math.floor(Math.random() * quotes.length);

  // Write out the quote as HTML
  document.write("<p style='text-align: center;'>\"");
  document.write(quotes[i] + "\"");
  document.write("<br /><em>-<b> " + sources[i] + "</b></em>");
  document.write("</p>");
}
// Stop hiding the script
