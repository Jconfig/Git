console.log('Hello World!');

function getQuote() {
  // Create the arrays
  var quotes = new Array(8);
  var sources = new Array(8);

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

  quotes[4] = "hsbs I am a Student of Hooghly *5555 HD TV and you ";
  sources[4] = "HD TV ";

  quotes[5] = "KS for the least to come over and ";
  sources[5] = "HS I am a ";

  quotes[6] = "ls I am a Student of Hooghly ";
  sources[6] = "JS framework which ";

  quotes[7] = "at the bottom of text add me on ";
  sources[7] = "is the best award given ";

  // Get a random index into the arrays
  i = Math.floor(Math.random() * quotes.length);

  // Write out the quote as HTML
  document.write("<p style='text-align: center;'>\"");
  document.write(quotes[i] + "\"");
  document.write("<br /><em>- " + sources[i] + "</em>");
  document.write("</p>");
}
// Stop hiding the script