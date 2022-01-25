console.log('Hello World!');

function getQuote() {
  // Create the arrays
  var quotes = new Array(9);
  var sources = new Array(9);

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

  // Get a random index into the arrays
  i = Math.floor(Math.random() * quotes.length);

  // Write out the quote as HTML
  document.write("<p style='text-align: center;'>\"");
  document.write(quotes[i] + "\"");
  document.write("<br /><em>- " + sources[i] + "</em>");
  document.write("</p>");
}
// Stop hiding the script
