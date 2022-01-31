
function getQuote() {
  // Create the arrays
  var quotes = new Array(78);
  var sources = new Array(78);

  // Initialize the arrays with quotes
  quotes[0] = "Optimism is the faith that leads to achievement.";
  sources[0] = "Helen Keller";

  quotes[1] = "If you don't like the road you're walking, Start paving another one.";
  sources[1] = "Dolly Parton";

  quotes[2] = "The most difficult thing is the decision to act, The rest is merely tenacity.";
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
  
  quotes[9] = "Genius is one percent inspiration and ninety-nine percent perspiration.";
  sources[9] = "Thomas Edison";
    
  quotes[10] = "You can observe a lot just by watching.";
  sources[10] = "Yogi Berra";
    
  quotes[11] = "A house divided against itself cannot stand.";
  sources[11] = "Abraham Lincoln";
    
  quotes[13] = "Difficulties increase the nearer we get to the goal.";
  sources[13] = "Johann Wolfgang von Goethe";
    
  quotes[14] = "Fate is in your hands and no one elses";
  sources[14] = "Byron Pulsifer";
    
  quotes[15] = "Be the chief but never the lord.";
  sources[15] = "Lao Tzu";
    
  quotes[16] = "Nothing happens unless first we dream.";
  sources[16] = "Carl Sandburg";
    
  quotes[17] = "Well begun is half done.";
  sources[17] = "Aristotle";
    
  quotes[18] = "Life is a learning experience, only if you learn.";
  sources[18] = "Yogi Berra";
    
  quotes[19] = "Self-complacency is fatal to progress.";
  sources[19] = "Margaret Sangster";
    
  quotes[20] = "Peace comes from within. Do not seek it without.";
  sources[20] = "Buddha";
  
  quotes[21] = "Whether you think you can - or think you can't - you're right! ";
  sources[21] = "Henry Ford";
  
  quotes[22] = "Nature your mind with great thoughts.";
  sources[22] = "Benjamin Disraeli";
  
  quotes[23] = "They can because they think they can.";
  sources[23] = "Virgil";
  
  quotes[24] = "What we sincerely believe regarding ourselves is true for us.";
  sources[24] = "Orison Swett Marden";
  
  quotes[25] = "Nobody succeeds beyond his or her wildest expectations unless he or she begins with some wild expectations.";
  sources[25] = "Ralph Charell";
  
  quotes[26] = "Imagination is more important than knowledge.";
  sources[26] = "Albert Einstein";
  
  quotes[27] = "You have control over the pictures that occupy your mind."
  sources[27] = "Jeff Keller";
  
  quotes[28] = "Vision is the art of seeing things invisible to others."
  sources[28] = "Jonathan Swift";
  
  quotes[29] = "If you can dream it, you can do it.";
  sources[29] = "Walt Disney";
  
  quotes[30] = "What this power is I cannot say; all I know is that it exists and it becomes available only when a man is in that state of mind in which he knows exactly what he wants and is fully determined not to quit until he finds it.";
  sources[30] = "Alexander Graham Bell";
  
  quotes[31] = "Effort only fully release its reward after a person refuses to quit.";
  sources[31] = "Napoleon Hill";
  
  quotes[32] = "With ordinary talent and extraordinary perseverance, all things are attainable.";
  sources[32] = "Sir Thomas Buxton";
  
  quotes[33] = "One person with a commitment is worth more than 100 people who have only an interest.";
  sources[33] = "Mary Crowley";
  
  quotes[34] = "The rewards for those who persevere far exceed the pain that must precede the victory.";
  sources[34] = "Ted Engstrom";
  
  quotes[35] = "Every adversity carries with it the seed of an equivalent or greater benefit.";
  sources[35] = "Napoleon Hull";
  
  quotes[36] = "No pressure, no diamonds.";
  sources[36] = "Mary Case";
  
  quotes[37] = "The things which hurt, instruct.";
  sources[37] = "Benjamin Franklin";
  
  quotes[38] = "It is a rough road that leads to the heights of greatness.";
  sources[38] = "Seneca";
  
  quotes[39] = "Adversity brings out our hidden potential.";
  sources[39] = "Jeff Keller";
  
  quotes[40] = "Repeat anything often enough and it will start to become you.";
  sources[40] = "Tom Hopkins";
  
  quotes[41] = "The words you consistently select will shape your destiny.";
  sources[41] = "Anthony Robbins";
  
  quotes[42] = "Words are, of course, the most powerful drug used by mankind.";
  sources[42] = "Rudyard Kipling";
  
  quotes[43] = "In words are seen the state of mind, character and disposition of the speaker.";
  sources[43] = "Plutarch";
  
  quotes[44] = "The people who always talk about a lack of money generally don't accumulate much of it.";
  sources[44] = "Jeff Keller";
  
  quotes[45] = "Choose words that will point you in the direction of your goals.";
  sources[45] = "Jeff Keller";
  
  quotes[46] = "Your day goes the way the corners of your mouth turn.";
  sources[46] = "Unknown";
  
  quotes[47] = "A simple is an inexpensive way to improve your looks.";
  sources[47] = "Unknown";
  
  quotes[48] = "Say you are well, or all is well with you, and God shall hear your words and make them come true.";
  sources[48] = "Ella Wheeler Wilcox";
  
  quotes[49] = "A cloudy day is no match for a sunny disposition.";
  sources[49] = "William Arthur Ward";
  
  quotes[50] = "Troubles, like babies, grow larger by nursing.";
  sources[50] = "Lady Holland";
  
  quotes[51] = "Self-pity is an and which eats holes in happiness.";
  sources[51] = "Earl Nightingale";
  
  quotes[52] = "The secret of happiness is to count your blessings while others are addings up their troubles.";
  sources[52] = "William Penn.";
  
  quotes[53] = "Reflect upon your present blessings, of which every man has plenty; not on your past misfortunes, of which all men have some.";
  sources[53] = "Charles Dickens";
  
  quotes[54] = "If you're all wrapped up in yourself, you're overdressed.";
  sources[54] = "Kate Halverson";
  
  quotes[55] = "Nothing happens by itself. It all will come your way once you understand that you have to make it come your way, by your own exertions.";
  sources[55] = "Ben Stein";
  
  quotes[56] = "A mirror reflects a man's face, but what he is really like is shown by the kind of friends he chooses.";
  sources[56] = "The Living Bible, Proverbs 27";
  
  quotes[57] = "We become part of what we are around.";
  sources[57] = "Unknown";
  
  quotes[58] = "Your friends will stretch your vision... or choke your dreams.";
  sources[58] = "Unknown";
  
  quotes[59] = "Are the things around you helping you toward success - or are they holding you back?";
  sources[59] = "W. Clement Stone";
  
  quotes[60] = "Good friends are good for your health.";
  sources[60] = "Dr. Irwin Sarason";
  
  quotes[61] = "Do the thing you fear and the death of fear is certain.";
  sources[61] = "Ralph Waldo Emerson";
  
  quotes[62] = "Nothing in life is to be feared. It is only to be understood.";
  sources[62] = "Marie Curie";
  
  quotes[63] = "He who loses wealth loses much; he who loses a friend loses more; but he who loses courage loses all.";
  sources[63] = "Miguel de Cervantes";
  
  quotes[64] = "The only way to escape from the prison of fear is action.";
  sources[64] = "Joe Tye";
  
  quotes[65] = "Running away from your fears is a losing strategy.";
  sources[65] = "Jeff Keller";
  
  quotes[66] = "Failure is only the opportunity to more intelligently begin again.";
  sources[66] = "Henry Ford";
  
  quotes[67] = "Success is going from failure to failure without loss of enthusiasm.";
  sources[67] = "Winston Churchill";
  
  quotes[68] = "The greatest mistake a person can make is to be afraid of making one.";
  sources[68] = "Elbert Hubbard";
  
  quotes[69] = "Success seems to be largely a matter of hanging on after others have let go.";
  sources[69] = "William Feather";
  
  quotes[70] = "Would you like me to give you a formula for success? It's quite simple. Double your rate of failure.";
  sources[70] = "Thomas J. Watson";
  
  quotes[71] = "You can get everything in life you want if you'll just help enough other people get what they want.";
  sources[71] = "Zig Ziglar";
  
  quotes[72] = "If you're positive and enthusiastic, people will want to spend time with you.";
  sources[72] = "Jeff Keller";
  
  quotes[73] = "Gutters don't get - givers get.";
  sources[73] = "Eugene Benge";
  
  quotes[74] = "You can succeed best and quickly by helping others to succeed.";
  sources[74] = "Napoleon Hill";
  
  quotes[75] = "Treat every person you encounter with dignity and respect.";
  sources[75] = "Jeff Keller";
  
  quotes[76] = "To change your circumstances, first start thinking differently.";
  sources[76] = "Norman Vincent Peale";
  
  quotes[77] = "Act as if it were impossible to fail.";
  sources[77] = "Dorothea Brande";
  
//  quotes[0] = "
//  sources[0] = "
  
//  quotes[0] = "
//  sources[0] = "
  
//  quotes[0] = "
//  sources[0] = "
  
//  quotes[0] = "
//  sources[0] = "

  // Get a random index into the arrays
  i = Math.floor(Math.random() * quotes.length);

  // Write out the quote as HTML
  document.write("<p style='text-align: center;'>\"");
  document.write(quotes[i] + "\"");
  document.write("<br /><em>-<b> " + sources[i] + "</b></em>");
  document.write("</p>");
}
// Stop hiding the script
