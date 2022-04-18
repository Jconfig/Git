//
//       Find me on https://www.joydeb.xyz
//       _____________________________
//
  function getQuote() {
    // Create the arrays
    var quotes = new Array(750);
    var sources = new Array(750);

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

    quotes[78] = "What you give is what you get.";
    sources[78] = "Byron Pulsifer";

    quotes[79] = "We can only learn to love by loving.";
    sources[79] = "Iris Murdoch";

    quotes[80] = "Life is change. Growth is optional. Choose wisely.";
    sources[80] = "Karen Clark";

    quotes[81] = "You'll see it when you believe it.";
    sources[81] = "Wayne Dyer";

    quotes[82] = "Today is the tomorrow we worried about yesterday.";
    sources[82] = "Unknown";

    quotes[83] = "It's easier to see the mistakes on someone else's paper.";
    sources[83] = "Unknown";

    quotes[84] = "Every man dies. Not every man really lives.";
    sources[84] = "Unknown";

    quotes[85] = "To lead people walk behind them.";
    sources[85] = "Lao Tzu";

    quotes[86] = "Having nothing, nothing can he lose.";
    sources[86] = "William Shakespeare";

    quotes[87] = "Trouble is only opportunity in work clothes.";
    sources[87] = "Henry J. Kaiser";

    quotes[88] = "A rolling stone gathers no moss.";
    sources[88] = "Publilius Syrus";

    quotes[89] = "Ideas are the beginning points of all fortunes.";
    sources[89] = "Napoleon Hill";

    quotes[90] = "Everything in life is luck.";
    sources[90] = "Donald Trump"

    quotes[91] = "Doing nothing is better than being busy doing nothing.";
    sources[91] = "Lao Tzu";

    quotes[92] = "Trust yourself. You know more than you think you do.";
    sources[92] = "Benjamin Spock";

    quotes[93] = "Study the past, if you would divine the future.";
    sources[93] = "Confucius";

    quotes[94] = "The day is already blessed, find peace within it.";
    sources[94] = "Unknown";

    quotes[95] = "From error to error one discovers the entire truth.";
    sources[95] = "Sigmund Freud";

    quotes[96] = "Well done is better than well said.";
    sources[96] = "Benjamin Franklin";

    quotes[97] = "Bite off more than you can chew, then chew it.";
    sources[97] = "Ella Williams";

    quotes[98] = "Work out your own salvation. Do not depend on others.";
    sources[98] = "Buddha";

    quotes[99] = "One today is worth two tomorrows.";
    sources[99] = "Benjamin Franklin";

    quotes[100] = "Once you choose hope, anythings possible.";
    sources[100] = "Christopher Reeve";

    quotes[101] = "God always takes the simplest way.";
    sources[101] = "Albert Einstein";

    quotes[102] = "One fails forward toward success.";
    sources[102] = "Charles Kettering";

    quotes[103] = "From small beginnings come great things.";
    sources[103] = "Unknown";
    quotes[104] = "Learning is a treasure that will follow its owner everywhere";
    sources[104] = "Chinese proverb";

    quotes[105] = "Be as you wish to seem.";
    sources[105] = "Socrates";

    quotes[106] = "The world is always in movement.";
    sources[106] = "V. Naipaul";

    quotes[107] = "Never mistake activity for achievement.";
    sources[107] = "John Wooden";

    quotes[108] = "What worries you masters you.";
    sources[108] = "Haddon Robinson";

    quotes[109] = "One faces the future with ones past.";
    sources[109] = "Pearl Buck";

    quotes[110] = "Goals are the fuel in the furnace of achievement.";
    sources[110] = "Brian Tracy";

    quotes[111] = "Who sows virtue reaps honour.";
    sources[111] = "Leonardo da Vinci";

    quotes[112] = "Be kind whenever possible. It is always possible.";
    sources[112] = "Dalai Lama";

    quotes[113] = "Talk doesn't cook rice.";
    sources[113] = "Chinese proverb";

    quotes[114] = "He is able who thinks he is able.";
    sources[114] = "Buddha";

    quotes[115] = "A goal without a plan is just a wish.";
    sources[115] = "Larry Elder";

    quotes[116] = "To succeed, we must first believe that we can.";
    sources[116] = "Michael Korda";

    quotes[117] = "Learn from yesterday, live for today, hope for tomorrow.";
    sources[117] = "Albert Einstein";

    quotes[118] = "A weed is no more than a flower in disguise.";
    sources[118] = "James Lowell";

    quotes[119] = "Do, or do not. There is no try.";
    sources[119] = "Yoda";

    quotes[120] = "All serious daring starts from within.";
    sources[120] = "Harriet Beecher Stowe";

    quotes[121] = "The best teacher is experience learned from failures.";
    sources[121] = "Byron Pulsifer";

    quotes[122] = "Think how hard physics would be if particles could think.";
    sources[122] = "Murray Gell-Mann";

    quotes[123] = "Love is the flower you've got to let grow.";
    sources[123] = "John Lennon";

    quotes[124] = "Don't wait. The time will never be just right.";
    sources[124] = "Napoleon Hill";

    quotes[125] = "Time is the wisest counsellor of all.";
    sources[125] = "Pericles";

    quotes[126] = "You give before you get.";
    sources[126] = "Napoleon Hill";

    quotes[127] = "Wisdom begins in wonder.";
    sources[127] = "Socrates";

    quotes[128] = "Without courage, wisdom bears no fruit.";
    sources[128] = "Baltasar Gracian";

    quotes[129] = "Change in all things is sweet.";
    sources[129] = "Aristotle";

    quotes[130] = "What you fear is that which requires action to overcome.";
    sources[130] = "Byron Pulsifer";

    quotes[131] = "When performance exceeds ambition, the overlap is called success.";
    sources[131] = "Cullen Hightower";

    quotes[132] = "When deeds speak, words are nothing.";
    sources[132] = "African proverb";

    quotes[133] = "Real magic in relationships means an absence of judgement of others.";
    sources[133] = "Wayne Dyer";

    quotes[134] = "I never think of the future. It comes soon enough.";
    sources[134] = "Albert Einstein";

    quotes[135] = "Skill to do comes of doing.";
    sources[135] = "Ralph Emerson";

    quotes[136] = "Wisdom is the supreme part of happiness.";
    sources[136] = "Sophocles";

    quotes[137] = "I believe that every person is born with talent.";
    sources[137] = "Maya Angelou";

    quotes[138] = "Important principles may, and must, be inflexible.";
    sources[138] = "Abraham Lincoln";

    quotes[139] = "The undertaking of a new action brings new strength.";
    sources[139] = "Richard Evans";

    quotes[140] = "The years teach much which the days never know.";
    sources[140] = "Ralph Emerson";

    quotes[141] = "Our distrust is very expensive.";
    sources[141] = "Ralph Emerson";

    quotes[142] = "All know the way; few actually walk it.";
    sources[142] = "Bodhidharma";

    quotes[143] = "Great talent finds happiness in execution.";
    sources[143] = "Johann Wolfgang von Goethe";

    quotes[144] = "Faith in oneself is the best and safest course.";
    sources[144] = "Michelangelo";

    quotes[145] = "Courage is going from failure to failure without losing enthusiasm.";
    sources[145] = "Winston Churchill";

    quotes[146] = "The two most powerful warriors are patience and time.";
    sources[146] = "Leo Tolstoy";

    quotes[147] = "Anticipate the difficult by managing the easy.";
    sources[147] = "Lao Tzu";

    quotes[148] = "Those who are free of resentful thoughts surely find peace.";
    sources[148] = "Buddha";

    quotes[149] = "A short saying often contains much wisdom.";
    sources[149] = "Sophocles";

    quotes[150] = "It takes both sunshine and rain to make a rainbow.";
    sources[150] = "Unknown";

    quotes[151] = "A beautiful thing is never perfect.";
    sources[151] = "Unknown";

    quotes[152] = "Only do what your heart tells you.";
    sources[152] = "Princess Diana";

    quotes[153] = "Life is movement-we breathe, we eat, we walk, we move!";
    sources[153] = "John Pierrakos";

    quotes[154] = "No one can make you feel inferior without your consent.";
    sources[154] = "Eleanor Roosevelt";

    quotes[155] = "Argue for your limitations, and sure enough theyre yours.";
    sources[155] = "Richard Bach";

    quotes[156] = "Luck is what happens when preparation meets opportunity.";
    sources[156] = "Seneca";

    quotes[157] = "Victory belongs to the most persevering.";
    sources[157] = "Napoleon Bonaparte";

    quotes[158] = "Love all, trust a few, do wrong to none.";
    sources[158] = "William Shakespeare";

    quotes[159] = "In order to win, you must expect to win.";
    sources[159] = "Richard Bach";

    quotes[160] = "A goal is a dream with a deadline.";
    sources[160] = "Napoleon Hill";

    quotes[161] = "You can do it if you believe you can!";
    sources[161] = "Napoleon Hill";

    quotes[162] = "Set your goals high, and don't stop till you get there.";
    sources[162] = "Bo Jackson";

    quotes[163] = "Every new day is another chance to change your life.";
    sources[163] = "Unknown";

    quotes[164] = "Smile, breathe, and go slowly.";
    sources[164] = "Thich Nhat Hanh";

    quotes[165] = "Nobody will believe in you unless you believe in yourself.";
    sources[165] = "Liberace";

    quotes[166] = "Do more than dream: work.";
    sources[166] = "William Arthur Ward";

    quotes[167] = "No man was ever wise by chance.";
    sources[167] = "Seneca";

    quotes[168] = "Some pursue happiness, others create it.";
    sources[168] = "Unknown";

    quotes[169] = "He that is giddy thinks the world turns round.";
    sources[169] = "William Shakespeare";

    quotes[170] = "Don't ruin the present with the ruined past.";
    sources[170] = "Ellen Gilchrist";

    quotes[171] = "Do something wonderful, people may imitate it.";
    sources[171] = "Albert Schweitzer";

    quotes[172] = "We do what we do because we believe.";
    sources[172] = "Unknown";

    quotes[173] = "Do one thing every day that scares you.";
    sources[173] = "Eleanor Roosevelt";

    quotes[174] = "If you cannot be silent be brilliant and thoughtful.";
    sources[174] = "Byron Pulsifer";

    quotes[175] = "Who looks outside, dreams; who looks inside, awakes.";
    sources[175] = "Carl Jung";

    quotes[176] = "What we think, we become.";
    sources[176] = "Buddha";

    quotes[177] = "The shortest answer is doing.";
    sources[177] = "Lord Herbert";

    quotes[178] = "All our knowledge has its origins in our perceptions.";
    sources[178] = "Leonardo da Vinci";

    quotes[179] = "The harder you fall, the higher you bounce.";
    sources[179] = "Unknown";

    quotes[180] = "Trusting our intuition often saves us from disaster.";
    sources[180] = "Anne Wilson Schaef";

    quotes[181] = "Truth is powerful and it prevails.";
    sources[181] = "Sojourner Truth";

    quotes[190] = "Light tomorrow with today!";
    sources[190] = "Elizabeth Browning";

    quotes[191] = "Silence is a fence around wisdom.";
    sources[191] = "German proverb";

    quotes[192] = "Society develops wit, but its contemplation alone forms genius.";
    sources[192] = "Madame de Stael";

    quotes[193] = "The simplest things are often the truest.";
    sources[193] = "Richard Bach";

    quotes[194] = "Everyone smiles in the same language.";
    sources[194] = "Unknown";

    quotes[195] = "Yesterday I dared to struggle. Today I dare to win.";
    sources[195] = "Bernadette Devlin";

    quotes[196] = "No alibi will save you from accepting the responsibility.";
    sources[196] = "Napoleon Hill";

    quotes[197] = "If you can dream it, you can do it.";
    sources[197] = "Walt Disney";

    quotes[198] = "It is better to travel well than to arrive.";
    sources[198] = "Buddha";

    quotes[199] = "Life shrinks or expands in proportion to one's courage.";
    sources[199] = "Anais Nin";

    quotes[200] = "You have to believe in yourself.";
    sources[200] = "Sun Tzu";

    quotes[201] = "Our intention creates our reality.";
    sources[201] = "Wayne Dyer";

    quotes[202] = "Silence is a true friend who never betrays.";
    sources[202] = "Confucius";

    quotes[203] = "Character develops itself in the stream of life.";
    sources[203] = "Johann Wolfgang von Goethe";

    quotes[204] = "From little acorns mighty oaks do grow.";
    sources[204] = "American proverb";

    quotes[205] = "You can't stop the waves, but you can learn to surf.";
    sources[205] = "Jon Kabat-Zinn";

    quotes[206] = "Reality does not conform to the ideal, but confirms it.";
    sources[206] = "Gustave Flaubert";

    quotes[207] = "Speak low, if you speak love.";
    sources[207] = "William Shakespeare";

    quotes[208] = "A really great talent finds its happiness in execution.";
    sources[208] = "Johann Wolfgang von Goethe";

    quotes[209] = "Reality leaves a lot to the imagination.";
    sources[209] = "John Lennon";

    quotes[210] = "The greatest remedy for anger is delay.";
    sources[210] = "Seneca";

    quotes[211] = "Growth itself contains the germ of happiness.";
    sources[211] = "Pearl Buck";

    quotes[212] = "You can do what's reasonable or you can decide what's possible.";
    sources[212] = "Unknown";

    quotes[213] = "Nothing strengthens authority so much as silence.";
    sources[213] = "Leonardo da Vinci";

    quotes[214] = "Wherever you go, go with all your heart.";
    sources[214] = "Confucius";

    quotes[215] = "The only real valuable thing is intuition.";
    sources[215] = "Albert Einstein";

    quotes[216] = "Good luck is another name for tenacity of purpose.";
    sources[216] = "Ralph Emerson";

    quotes[217] = "Rainbows apologize for angry skies.";
    sources[217] = "Sylvia Voirol";

    quotes[218] = "Friendship isn't a big thing. It's a million little things.";
    sources[219] = "Unknown";

    quotes[220] = "Time is the most valuable thing a man can spend.";
    sources[220] = "Theophrastus";

    quotes[221] = "Whatever happens, take responsibility.";
    sources[221] = "Tony Robbins";

    quotes[222] = "Experience is simply the name we give our mistakes.";
    sources[222] = "Oscar Wilde";

    quotes[223] = "I think and that is all that I am.";
    sources[223] = "Wayne Dyer";

    quotes[224] = "A good plan today is better than a perfect plan tomorrow.";
    sources[224] = "Unknown";

    quotes[225] = "If the shoe doesn't fit, must we change the foot?";
    sources[225] = "Gloria Steinem";

    quotes[226] = "Each day provides its own gifts.";
    sources[226] = "Marcus Aurelius";

    quotes[227] = "While we stop to think, we often miss our opportunity.";
    sources[227] = "Publilius Syrus";

    quotes[228] = "Life isn't about finding yourself. Life is about creating yourself.";
    sources[228] = "Bernard Shaw";

    quotes[229] = "To bring anything into your life, imagine that it's already there.";
    sources[229] = "Richard Bach";

    quotes[230] = "Begin to weave and God will give you the thread.";
    sources[230] = "German proverb";

    quotes[231] = "The more you know yourself, the more you forgive yourself.";
    sources[231] = "Confucius";

    quotes[232] = "Someone remembers, someone cares; your name is whispered in someone's prayers.";
    sources[232] = "Unknown";

    quotes[233] = "Without faith, nothing is possible. With it, nothing is impossible.";
    sources[233] = "Mary Bethune";

    quotes[234] = "Once we accept our limits, we go beyond them.";
    sources[234] = "Albert Einstein";

    quotes[235] = "Don't be pushed by your problems; be led by your dreams.";
    sources[235] = "Unknown";

    quotes[236] = "Whatever we expect with confidence becomes our own self-fulfilling prophecy.";
    sources[236] = "Brian Tracy";

    quotes[237] = "Everything you can imagine is real.";
    sources[237] = "Pablo Picasso";

    quotes[238] = "Fear is a darkroom where negatives develop.";
    sources[238] = "Usman Asif";

    quotes[239] = "The truest wisdom is a resolute determination.";
    sources[239] = "Napoleon Bonaparte";

    quotes[240] = "Life is the flower for which love is the honey.";
    sources[240] = "Victor Hugo";

    quotes[241] = "Freedom is the right to live as we wish.";
    sources[241] = "Epictetus";

    quotes[242] = "Change your thoughts, change your life!";
    sources[242] = "Unknown";

    quotes[243] = "Never ignore a gut feeling, but never believe that it's enough.";
    sources[243] = "Robert Heller";

    quotes[244] = "Loss is nothing else but change,and change is Natures delight.";
    sources[244] = "Marcus Aurelius";

    quotes[245] = "Someone is special only if you tell them.";
    sources[245] = "Byron Pulsifer";

    quotes[246] = "Today is the tomorrow you worried about yesterday.";
    sources[246] = "Unknown";

    quotes[247] = "There is no way to happiness, happiness is the way.";
    sources[247] = "Thich Nhat Hanh";

    quotes[248] = "The day always looks brighter from behind a smile.";
    sources[248] = "Unknown";

    quotes[249] = "A stumble may prevent a fall.";
    sources[249] = "Unknown";

    quotes[250] = "He who talks more is sooner exhausted.";
    sources[250] = "Lao Tzu";

    quotes[251] = "He who is contented is rich.";
    sources[251] = "Lao Tzu";

    quotes[252] = "What we achieve inwardly will change outer reality.";
    sources[252] = "Plutarch";

    quotes[253] = "Our strength grows out of our weaknesses.";
    sources[253] = "Ralph Waldo Emerson";

    quotes[254] = "We must become the change we want to see.";
    sources[254] = "Mahatma Gandhi";

    quotes[255] = "Happiness is found in doing, not merely possessing.";
    sources[255] = "Napoleon Hill";

    quotes[256] = "Put your future in good hands your own.";
    sources[256] = "Unknown";

    quotes[257] = "We choose our destiny in the way we treat others.";
    sources[257] = "Wit";

    quotes[258] = "No snowflake in an avalanche ever feels responsible.";
    sources[258] = "Voltaire";

    quotes[259] = "Fortune favours the brave.";
    sources[259] = "Virgil";

    quotes[260] = "I believe in one thing only; the power of human will.";
    sources[260] = "Joseph Stalin";

    quotes[261] = "The best way out is always through.";
    sources[261] = "Robert Frost";

    quotes[262] = "The mind unlearns with difficulty what it has long learned.";
    sources[262] = "Seneca";

    quotes[263] = "I destroy my enemies when I make them my friends.";
    sources[263] = "Abraham Lincoln";

    quotes[264] = "No garden is without its weeds.";
    sources[264] = "Thomas Fuller";

    quotes[265] = "There is no failure except in no longer trying.";
    sources[265] = "Elbert Hubbard";

    quotes[266] = "Kind words will unlock an iron door.";
    sources[266] = "Turkish proverb";

    quotes[267] = "Problems are only opportunities with thorns on them.";
    sources[267] = "Hugh Miller";

    quotes[268] = "Life is just a chance to grow a soul.";
    sources[268] = "A. Powell Davies";

    quotes[269] = "Mountains cannot be surmounted except by winding paths.";
    sources[269] = "Johann Wolfgang von Goethe";

    quotes[270] = "May our hearts garden of awakening bloom with hundreds of flowers.";
    sources[270] = "Thich Nhat Hanh";

    quotes[271] = "Fortune befriends the bold.";
    sources[271] = "John Dryden";

    quotes[272] = "Keep true to the dreams of thy youth.";
    sources[272] = "Friedrich von Schiller";

    quotes[273] = "You're never a loser until you quit trying.";
    sources[273] = "Mike Ditka";

    quotes[274] = "Science is organized knowledge. Wisdom is organized life.";
    sources[274] = "Immanuel Kant";

    quotes[275] = "Knowing is not enough; we must apply!";
    sources[275] = "Johann Wolfgang von Goethe";

    quotes[276] = "Strong beliefs win strong men, and then make them stronger.";
    sources[276] = "Richard Bach";

    quotes[277] = "Autumn is a second spring when every leaf is a flower.";
    sources[277] = "Albert Camus";

    quotes[278] = "If you surrender to the wind, you can ride it.";
    sources[278] = "Toni Morrison";

    quotes[279] = "Keep yourself to the sunshine and you cannot see the shadow.";
    sources[279] = "Helen Keller";

    quotes[280] = "Write your plans in pencil and give God the eraser.";
    sources[280] = "Paulo Coelho";

    quotes[281] = "Inspiration exists, but it has to find us working.";
    sources[281] = "Pablo Picasso";

    quotes[282] = "Pick battles big enough to matter, small enough to win.";
    sources[282] = "Jonathan Kozol";

    quotes[283] = "Don't compromise yourself. You are all you've got.";
    sources[283] = "Janis Joplin";

    quotes[284] = "A short saying oft contains much wisdom.";
    sources[284] = "Sophocles";

    quotes[285] = "Difficulties are things that show a person what they are.";
    sources[285] = "Epictetus";

    quotes[286] = "When you doubt your power, you give power to your doubt.";
    sources[286] = "Honore de Balzac";

    quotes[287] = "The cause is hidden. The effect is visible to all.";
    sources[287] = "Ovid";

    quotes[288] = "A prudent question is one half of wisdom.";
    sources[288] = "Francis Bacon";

    quotes[289] = "The path to success is to take massive, determined action.";
    sources[289] = "Tony Robbins";

    quotes[290] = "I allow my intuition to lead my path.";
    sources[290] = "Manuel Puig";

    quotes[291] = "Nature takes away any faculty that is not used.";
    sources[291] = "William R. Inge";

    quotes[292] = "If you wish to be a writer, write.";
    sources[292] = "Epictetus";

    quotes[293] = "There is no way to prosperity, prosperity is the way.";
    sources[293] = "Wayne Dyer";

    quotes[294] = "Either you run the day or the day runs you.";
    sources[294] = "Jim Rohn";

    quotes[295] = "Better be ignorant of a matter than half know it.";
    sources[295] = "Publilius Syrus";

    quotes[296] = "Follow your instincts. That is where true wisdom manifests itself.";
    sources[296] = "Oprah Winfrey";

    quotes[297] = "There never was a good knife made of bad steel.";
    sources[297] = "Benjamin Franklin";

    quotes[298] = "To accomplish great things, we must dream as well as act.";
    sources[298] = "Anatole France";

    quotes[299] = "Patience is the companion of wisdom.";
    sources[299] = "Saint Augustine";

    quotes[300] = "The mind is everything. What you think you become.";
    sources[300] = "Buddha";

    quotes[301] = "To enjoy life, we must touch much of it lightly.";
    sources[301] = "Voltaire";

    quotes[302] = "To fly, we have to have resistance.";
    sources[302] = "Maya Lin";

    quotes[303] = "What you see depends on what you're looking for.";
    sources[303] = "Unknown";

    quotes[304] = "The heart has its reasons which reason knows not of.";
    sources[304] = "Blaise Pascal";

    quotes[305] = "Be great in act, as you have been in thought.";
    sources[305] = "William Shakespeare";

    quotes[306] = "Imagination rules the world.";
    sources[306] = "Napoleon Bonaparte";

    quotes[307] = "Kind words do not cost much. Yet they accomplish much.";
    sources[307] = "Blaise Pascal";

    quotes[308] = "There is no greater harm than that of time wasted.";
    sources[308] = "Michelangelo";

    quotes[309] = "Intuition will tell the thinking mind where to look next.";
    sources[309] = "Jonas Salk";

    quotes[310] = "Worry gives a small thing a big shadow.";
    sources[310] = "Unknown";

    quotes[311] = "Fears are nothing more than a state of mind.";
    sources[311] = "Napoleon Hill";

    quotes[312] = "The journey of a thousand miles begins with one step.";
    sources[312] = "Lao Tzu";

    quotes[313] = "Efficiency is doing things right; effectiveness is doing the right things.";
    sources[313] = "Peter Drucker";

    quotes[314] = "Blaze with the fire that is never extinguished.";
    sources[314] = "Luisa Sigea";

    quotes[315] = "Don't cry because it's over. Smile because it happened.";
    sources[315] = "Dr. Seuss";

    quotes[316] = "No is easier to do. Yes is easier to say.";
    sources[316] = "Jason Fried";

    quotes[317] = "To be wrong is nothing unless you continue to remember it.";
    sources[317] = "Confucius";

    quotes[318] = "Yesterdays home runs don't win today's games.";
    sources[318] = "Babe Ruth";

    quotes[319] = "Silence is deep as Eternity, Speech is shallow as Time.";
    sources[319] = "Carlyle";

    quotes[320] = "Don't smother each other. No one can grow in the shade.";
    sources[320] = "Leo F. Buscaglia";

    quotes[321] = "An ant on the move does more than a dozing ox";
    sources[321] = "Lao Tzu";

    quotes[322] = "You can't shake hands with a clenched fist.";
    sources[322] = "Indira Gandhi";

    quotes[323] = "A good decision is based on knowledge and not on numbers.";
    sources[323] = "Plato";

    quotes[324] = "The cautious seldom err.";
    sources[324] = "Confucius";

    quotes[325] = "If there is no struggle, there is no progress.";
    sources[325] = "Frederick Douglass";

    quotes[326] = "Where there is great love, there are always miracles.";
    sources[326] = "Willa Cather";

    quotes[327] = "Time you enjoy wasting, was not wasted.";
    sources[327] = "John Lennon";

    quotes[328] = "Every problem has a gift for you in its hands.";
    sources[328] = "Richard Bach";

    quotes[329] = "Sadness flies away on the wings of time.";
    sources[329] = "Jean de la Fontaine";

    quotes[330] = "I have often regretted my speech, never my silence.";
    sources[330] = "Publilius Syrus";

    quotes[331] = "Never put off till tomorrow what you can do today.";
    sources[331] = "Thomas Jefferson";

    quotes[332] = "Minds are like parachutes. They only function when open.";
    sources[332] = "Thomas Dewar";

    quotes[333] = "If a man does his best, what else is there?";
    sources[333] = "George Patton";

    quotes[334] = "The secret of success is constancy to purpose.";
    sources[334] = "Benjamin Disraeli";

    quotes[335] = "Life is a progress, and not a station.";
    sources[335] = "Ralph Emerson";

    quotes[336] = "All seasons are beautiful for the person who carries happiness within.";
    sources[336] = "Horace Friess";

    quotes[337] = "To avoid criticism, do nothing, say nothing, be nothing.";
    sources[337] = "Elbert Hubbard";

    quotes[338] = "All things change, nothing perishes.";
    sources[338] = "Ovid";

    quotes[339] = "Absence makes the heart grow fonder.";
    sources[339] = "Haynes Bayly";

    quotes[340] = "Imagination is the highest kite one can fly.";
    sources[340] = "Lauren Bacall";

    quotes[341] = "The beginning of knowledge is the discovery of something we do not understand.";
    sources[341] = "Frank Herbert";

    quotes[342] = "Love doesn't make the world go round, love is what makes the ride worthwhile.";
    sources[342] = "Elizabeth Browning";

    quotes[343] = "Whenever you have eliminated the impossible, whatever remains, however improbable, must be the truth.";
    sources[343] = "Arthur Conan Doyle";

    quotes[344] = "Good timber does not grow with ease; the stronger the wind, the stronger the trees.";
    sources[344] = "J. Willard Marriott";

    quotes[345] = "I believe that we are fundamentally the same and have the same basic potential.";
    sources[345] = "Dalai Lama";

    quotes[346] = "The winds and waves are always on the side of the ablest navigators.";
    sources[346] = "Edward Gibbon";

    quotes[347] = "The future belongs to those who believe in the beauty of their dreams.";
    sources[347] = "Eleanor Roosevelt";

    quotes[348] = "To get something you never had, you have to do something you never did.";
    sources[348] = "Unknown";

    quotes[349] = "Be thankful when you don't know something for it gives you the opportunity to learn.";
    sources[349] = "Unknown";

    quotes[350] = "Strength does not come from physical capacity. It comes from an indomitable will.";
    sources[350] = "Mahatma Gandhi";

    quotes[351] = "Each misfortune you encounter will carry in it the seed of tomorrows good luck.";
    sources[351] = "Og Mandino";

    quotes[352] = "To forgive is to set a prisoner free and realize that prisoner was you.";
    sources[352] = "Lewis B. Smedes";

    quotes[353] = "In separateness lies the world's great misery, in compassion lies the world's true strength.";
    sources[353] = "Buddha";

    quotes[354] = "By believing passionately in something that does not yet exist, we create it.";
    sources[354] = "Nikos Kazantzakis";

    quotes[355] = "Letting go is not the end of the world; it is the beginning of a new life.";
    sources[355] = "Unknown";

    quotes[356] = "All the great performers I have worked with are fuelled by a personal dream.";
    sources[356] = "John Eliot";

    quotes[357] = "One of the advantages of being disorderly is that one is constantly making exciting discoveries.";
    sources[357] = "A. A. Milne";

    quotes[358] = "I never see what has been done; I only see what remains to be done.";
    sources[358] = "Marie Curie";

    quotes[359] = "Begin at once to live and count each separate day as a separate life.";
    sources[359] = "Seneca";

    quotes[360] = "If you don't know where you are going, you will probably end up somewhere else.";
    sources[360] = "Lawrence Peter";

    quotes[361] = "It is not so important to know everything as to appreciate what we learn.";
    sources[361] = "Hannah More";

    quotes[362] = "The bird of paradise alights only upon the hand that does not grasp.";
    sources[362] = "John Berry";

    quotes[363] = "Think as a wise man but communicate in the language of the people.";
    sources[363] = "William Yeats";

    quotes[364] = "Practice yourself, for heavens sake in little things, and then proceed to greater.";
    sources[364] = "Epictetus";

    quotes[365] = "If one does not know to which port is sailing, no wind is favorable.";
    sources[365] = "Seneca";

    quotes[366] = "Our greatest glory is not in never failing but rising everytime we fall.";
    sources[366] = "Unknown";

    quotes[367] = "Being right is highly overrated. Even a stopped clock is right twice a day.";
    sources[367] = "Unknown";

    quotes[368] = "To be upset over what you don't have is to waste what you do have.";
    sources[368] = "Ken S. Keyes";

    quotes[369] = "If we did the things we are capable of, we would astound ourselves.";
    sources[369] = "Thomas Edison";

    quotes[370] = "Nothing in life is to be feared. It is only to be understood.";
    sources[370] = "Marie Curie";

    quotes[371] = "Successful people ask better questions, and as a result, they get better answers.";
    sources[371] = "Tony Robbins";

    quotes[372] = "Love is not blind; it simply enables one to see things others fail to see.";
    sources[372] = "Unknown";

    quotes[373] = "Life is a process. We are a process. The universe is a process.";
    sources[373] = "Anne Schaef";

    quotes[374] = "I think somehow we learn who we really are and then live with that decision.";
    sources[374] = "Eleanor Roosevelt";

    quotes[375] = "We learn what we have said from those who listen to our speaking.";
    sources[375] = "Kenneth Patton";

    quotes[376] = "A little knowledge that acts is worth infinitely more than much knowledge that is idle.";
    sources[376] = "Kahlil Gibran";

    quotes[377] = "If you get up one more time than you fall, you will make it through.";
    sources[377] = "Unknown";

    quotes[378] = "The doors we open and close each day decide the lives we live.";
    sources[378] = "Flora Whittemore";

    quotes[379] = "The worst bankrupt in the world is the person who has lost his enthusiasm.";
    sources[379] = "H. W. Arnold";

    quotes[380] = "Happiness comes when your work and words are of benefit to yourself and others.";
    sources[380] = "Buddha";

    quotes[381] = "Don't focus on making the right decision, focus on making the decision the right one.";
    sources[381] = "Unknown";

    quotes[382] = "Everything is perfect in the universe even your desire to improve it.";
    sources[382] = "Wayne Dyer";

    quotes[383] = "The universe is full of magical things, patiently waiting for our wits to grow sharper.";
    sources[383] = "Eden Phillpotts";

    quotes[384] = "Just as a candle cannot burn without fire, men cannot live without a spiritual life.";
    sources[384] = "Buddha";

    quotes[385] = "A thing long expected takes the form of the unexpected when at last it comes.";
    sources[385] = "Mark Twain";

    quotes[386] = "Action may not always bring happiness; but there is no happiness without action.";
    sources[386] = "Benjamin Disraeli";

    quotes[387] = "I don't believe in failure. It is not failure if you enjoyed the process.";
    sources[387] = "Oprah Winfrey";

    quotes[388] = "What you do not want done to yourself, do not do to others.";
    sources[388] = "Confucius";

    quotes[389] = "Short words are best and the old words when short are best of all.";
    sources[389] = "Winston Churchill";

    quotes[390] = "If you light a lamp for somebody, it will also brighten your path.";
    sources[390] = "Buddha";

    quotes[391] = "I have done my best: that is about all the philosophy of living one needs.";
    sources[391] = "Lin-yutang";

    quotes[392] = "Through perseverance many people win success out of what seemed destined to be certain failure.";
    sources[392] = "Benjamin Disraeli";

    quotes[393] = "Give thanks for the rain of life that propels us to reach new horizons.";
    sources[393] = "Byron Pulsifer";

    quotes[394] = "Love is just a word until someone comes along and gives it meaning.";
    sources[394] = "Unknown";

    quotes[395] = "We all have problems. The way we solve them is what makes us different.";
    sources[395] = "Unknown";

    quotes[396] = "The secret to a rich life is to have more beginnings than endings.";
    sources[396] = "Dave Weinbaum";

    quotes[397] = "It is only when the mind and character slumber that the dress can be seen.";
    sources[397] = "Ralph Waldo Emerson";

    quotes[398] = "If you don't like something, change it. If you can't change it, change your attitude.";
    sources[398] = "Maya Angelou";

    quotes[399] = "Reviewing what you have learned and learning anew, you are fit to be a teacher.";
    sources[399] = "Confucius";

    quotes[400] = "The world is a book, and those who do not travel read only a page.";
    sources[400] = "Augustinus Sanctus";

    quotes[401] = "So long as a person is capable of self-renewal they are a living being.";
    sources[401] = "Henri-Frederic Amiel";

    quotes[402] = "I'm not afraid of storms, for I'm learning how to sail my ship.";
    sources[402] = "Louisa Alcott";

    quotes[403] = "Think for yourselves and let others enjoy the privilege to do so too.";
    sources[403] = "Voltaire";

    quotes[404] = "How we spend our days is, of course, how we spend our lives.";
    sources[404] = "Annie Dillard";

    quotes[405] = "It has never been my object to record my dreams, just to realize them.";
    sources[405] = "Man Ray";

    quotes[406] = "The most complicated achievements of thought are possible without the assistance of consciousness.";
    sources[406] = "Sigmund Freud";

    quotes[407] = "Be miserable. Or motivate yourself. Whatever has to be done, it's always your choice.";
    sources[407] = "Wayne Dyer";

    quotes[408] = "Most great people have attained their greatest success just one step beyond their greatest failure.";
    sources[408] = "Napoleon Hill";

    quotes[409] = "If you think you can, you can. And if you think you can't, you're right.";
    sources[409] = "Henry Ford";

    quotes[410] = "Better to have loved and lost, than to have never loved at all.";
    sources[410] = "St. Augustine";

    quotes[411] = "Everyone thinks of changing the world, but no one thinks of changing himself.";
    sources[411] = "Leo Tolstoy";

    quotes[412] = "The best way to pay for a lovely moment is to enjoy it.";
    sources[412] = "Richard Bach";

    quotes[413] = "You have enemies? Good. That means you've stood up for something, sometime in your life.";
    sources[413] = "Winston Churchill";

    quotes[414] = "Slow down and everything you are chasing will come around and catch you.";
    sources[414] = "John De Paola";

    quotes[415] = "Your worst enemy cannot harm you as much as your own unguarded thoughts.";
    sources[415] = "Buddha";

    quotes[416] = "I always wanted to be somebody, but I should have been more specific.";
    sources[416] = "Lily Tomlin";

    quotes[417] = "Yeah we all shine on, like the moon, and the stars, and the sun.";
    sources[417] = "John Lennon";

    quotes[418] = "Knowledge is a process of piling up facts; wisdom lies in their simplification.";
    sources[418] = "Martin Fischer";

    quotes[419] = "Life is like riding a bicycle. To keep your balance you must keep moving.";
    sources[419] = "Albert Einstein";

    quotes[420] = "We should all be thankful for those people who rekindle the inner spirit.";
    sources[420] = "Albert Schweitzer";

    quotes[421] = "Opportunity is missed by most because it is dressed in overalls and looks like work.";
    sources[421] = "Thomas Edison";

    quotes[422] = "Feeling and longing are the motive forces behind all human endeavor and human creations.";
    sources[422] = "Albert Einstein";

    quotes[423] = "In the end we retain from our studies only that which we practically apply.";
    sources[423] = "Johann Wolfgang von Goethe";

    quotes[424] = "If you correct your mind, the rest of your life will fall into place.";
    sources[424] = "Lao Tzu";

    quotes[425] = "The world makes way for the man who knows where he is going.";
    sources[425] = "Ralph Emerson";

    quotes[426] = "When your desires are strong enough you will appear to possess superhuman powers to achieve.";
    sources[426] = "Napoleon Hill";

    quotes[427] = "Patience and perseverance have a magical effect before which difficulties disappear and obstacles vanish.";
    sources[427] = "John Adams";

    quotes[428] = "I cannot make my days longer so I strive to make them better.";
    sources[428] = "Henry David Thoreau";

    quotes[429] = "Tension is who you think you should be. Relaxation is who you are.";
    sources[429] = "Chinese proverb";

    quotes[430] = "Never bend your head. Always hold it high. Look the world right in the eye.";
    sources[430] = "Helen Keller";

    quotes[431] = "One who gains strength by overcoming obstacles possesses the only strength which can overcome adversity.";
    sources[431] = "Albert Schweitzer";

    quotes[432] = "We cannot do everything at once, but we can do something at once.";
    sources[432] = "Calvin Coolidge";

    quotes[433] = "You have to do your own growing no matter how tall your grandfather was.";
    sources[433] = "Abraham Lincoln";

    quotes[434] = "Invent your world. Surround yourself with people, color, sounds, and work that nourish you.";
    sources[434] = "Unknown";

    quotes[435] = "It is fatal to enter any war without the will to win it.";
    sources[435] = "General Douglas MacArthur";

    quotes[436] = "Be what you are. This is the first step toward becoming better than you are.";
    sources[436] = "Julius Charles Hare";

    quotes[437] = "There is nothing in a caterpillar that tells you it's going to be a butterfly.";
    sources[437] = "Buckminster Fuller";

    quotes[438] = "Love and compassion open our own inner life, reducing stress, distrust and loneliness.";
    sources[438] = "Dalai Lama";

    quotes[439] = "Ideals are an imaginative understanding of that which is desirable in that which is possible.";
    sources[439] = "Walter Lippmann";

    quotes[440] = "The superior man is satisfied and composed; the mean man is always full of distress.";
    sources[440] = "Confucius";

    quotes[441] = "If you spend too much time thinking about a thing, you'll never get it done.";
    sources[441] = "Bruce Lee";

    quotes[442] = "The way is not in the sky. The way is in the heart.";
    sources[442] = "Buddha";

    quotes[443] = "Most people are about as happy as they make up their minds to be";
    sources[443] = "Abraham Lincoln";

    quotes[444] = "Three things cannot be long hidden: the sun, the moon, and the truth.";
    sources[444] = "Buddha";

    quotes[445] = "More often than not, anger is actually an indication of weakness rather than of strength.";
    sources[445] = "Dalai Lama";

    quotes[446] = "Before you put on a frown, make absolutely sure there are no smiles available.";
    sources[446] = "Jim Beggs";

    quotes[447] = "A man of ability and the desire to accomplish something can do anything.";
    sources[447] = "Donald Kircher";

    quotes[448] = "You, yourself, as much as anybody in the entire universe, deserve your love and affection.";
    sources[448] = "Buddha";

    quotes[449] = "It is not uncommon for people to spend their whole life waiting to start living.";
    sources[449] = "Eckhart Tolle";

    quotes[450] = "Don't be afraid to go out on a limb. That's where the fruit is.";
    sources[450] = "H. Jackson Browne";

    quotes[451] = "Wicked people are always surprised to find ability in those that are good.";
    sources[451] = "Marquis Vauvenargues";

    quotes[452] = "Life is so constructed that an event does not, cannot, will not, match the expectation.";
    sources[452] = "Charlotte Bronte";

    quotes[453] = "If you change the way you look at things, the things you look at change.";
    sources[453] = "Wayne Dyer";

    quotes[454] = "No man can succeed in a line of endeavor which he does not like.";
    sources[454] = "Napoleon Hill";

    quotes[455] = "You will not be punished for your anger, you will be punished by your anger.";
    sources[455] = "Buddha";

    quotes[456] = "Don't judge each day by the harvest you reap but by the seeds you plant.";
    sources[456] = "Robert Stevenson";

    quotes[457] = "They say that time changes things, but you actually have to change them yourself.";
    sources[457] = "Andy Warhol";

    quotes[458] = "Never apologize for showing feelings. When you do so, you apologize for the truth.";
    sources[458] = "Benjamin Disraeli";

    quotes[459] = "The truth you believe and cling to makes you unavailable to hear anything new.";
    sources[459] = "Pema Chodron";

    quotes[460] = "Adversity has the effect of eliciting talents, which in prosperous circumstances would have lain dormant.";
    sources[460] = "Horace";

    quotes[461] = "If you spend your whole life waiting for the storm, you'll never enjoy the sunshine.";
    sources[461] = "Morris West";

    quotes[462] = "The only limit to our realization of tomorrow will be our doubts of today.";
    sources[462] = "Franklin Roosevelt";

    quotes[463] = "Every action of our lives touches on some chord that will vibrate in eternity.";
    sources[463] = "Edwin Chapin";

    quotes[464] = "Shoot for the moon. Even if you miss, you'll land among the stars.";
    sources[464] = "Les Brown";

    quotes[465] = "It does not matter how slowly you go as long as you do not stop.";
    sources[465] = "Confucius";

    quotes[466] = "Every day may not be good, but there's something good in every day.";
    sources[466] = "Unknown";

    quotes[467] = "Most folks are about as happy as they make up their minds to be.";
    sources[467] = "Abraham Lincoln";

    quotes[468] = "If you would take, you must first give, this is the beginning of intelligence.";
    sources[468] = "Lao Tzu";

    quotes[469] = "Some people think it's holding that makes one strong sometimes it's letting go.";
    sources[469] = "Unknown";

    quotes[470] = "It is on our failures that we base a new and different and better success.";
    sources[470] = "Havelock Ellis";

    quotes[471] = "Quality is never an accident; it is always the result of intelligent effort.";
    sources[471] = "John Ruskin";

    quotes[472] = "To study and not think is a waste. To think and not study is dangerous.";
    sources[472] = "Confucius";

    quotes[473] = "Life is a succession of lessons, which must be lived to be understood.";
    sources[473] = "Ralph Emerson";

    quotes[474] = "Time changes everything except something within us which is always surprised by change.";
    sources[474] = "Thomas Hardy";

    quotes[475] = "You are important enough to ask and you are blessed enough to receive back.";
    sources[476] = "Wayne Dyer";

    quotes[477] = "If you cannot do great things, do small things in a great way.";
    sources[477] = "Napoleon Hill";

    quotes[478] = "If you want your life to be more rewarding, you have to change the way you think.";
    sources[478] = "Oprah Winfrey";

    quotes[479] = "Transformation doesn't take place with a vacuum. Instead, it occurs when we are indirectly and directly connected to all those around us.";
    sources[479] = "Byron Pulsifer";

    quotes[480] = "The only difference between your abilities and others is the ability to put yourself in their shoes and actually try.";
    sources[480] = "Leonardo Ruiz";

    quotes[481] = "The free man is he who does not fear to go to the end of his thought.";
    sources[481] = "Leon Blum";

    quotes[482] = "Great are they who see that spiritual is stronger than any material force, that thoughts rule the world.";
    sources[482] = "Ralph Emerson";

    quotes[483] = "A life spent making mistakes is not only more honourable but more useful than a life spent in doing nothing.";
    sources[483] = "Bernard Shaw";

    quotes[484] = "The wise man does not lay up his own treasures. The more he gives to others, the more he has for his own.";
    sources[484] = "Lao Tzu";

    quotes[485] = "Don't leave a stone unturned. It's always something, to know you have done the most you could.";
    sources[485] = "Charles Dickens";

    quotes[486] = "By going beyond your own problems and taking care of others, you gain inner strength, self-confidence, courage, and a greater sense of calm.";
    sources[486] = "Dalai Lama";

    quotes[487] = "We come to love not by finding a perfect person, but by learning to see an imperfect person perfectly.";
    sources[487] = "Sam Keen";

    quotes[488] = "What lies behind us and what lies before us are tiny matters compared to what lies within us.";
    sources[488] = "Walt Emerson";

    quotes[489] = "There are things so deep and complex that only intuition can reach it in our stage of development as human beings.";
    sources[489] = "John Astin";

    quotes[490] = "A little more persistence, a little more effort, and what seemed hopeless failure may turn to glorious success.";
    sources[490] = "Elbert Hubbard";

    quotes[491] = "There is no retirement for an artist, it's your way of living so there is no end to it.";
    sources[491] = "Henry Moore";

    quotes[492] = "I will not be concerned at other men is not knowing me;I will be concerned at my own want of ability.";
    sources[492] = "Confucius";

    quotes[493] = "Why worry about things you cannot control when you can keep yourself busy controlling the things that depend on you?";
    sources[493] = "Unknown";

    quotes[494] = "When you are content to be simply yourself and don't compare or compete, everybody will respect you.";
    sources[494] = "Laozi";

    quotes[495] = "Be not afraid of greatness: some are born great, some achieve greatness, and some have greatness thrust upon them.";
    sources[495] = "William Shakespeare";

    quotes[496] = "Success means having the courage, the determination, and the will to become the person you believe you were meant to be.";
    sources[496] = "George Sheehan";

    quotes[497] = "Do you want to know who you are? Don't ask. Act! Action will delineate and define you.";
    sources[497] = "Thomas Jefferson";

    quotes[498] = "It is only with the heart that one can see rightly, what is essential is invisible to the eye.";
    sources[498] = "Antoine de Saint-Exupery";

    quotes[499] = "Let us be grateful to people who make us happy; they are the charming gardeners who make our souls blossom.";
    sources[499] = "Marcel Proust";

    quotes[500] = "Make the best use of what is in your power, and take the rest as it happens.";
    sources[500] = "Epictetus";

    quotes[501] = "The thoughts we choose to think are the tools we use to paint the canvas of our lives.";
    sources[501] = "Louise Hay";

    quotes[502] = "No matter how carefully you plan your goals they will never be more that pipe dreams unless you pursue them with gusto.";
    sources[502] = "W. Clement Stone";

    quotes[503] = "The reason most goals are not achieved is that we spend our time doing second things first.";
    sources[503] = "Robert McKain";

    quotes[504] = "If your actions inspire others to dream more, learn more, do more and become more, you are a leader.";
    sources[504] = "John Quincy Adams";

    quotes[505] = "I'm a great believer in luck and I find the harder I work, the more I have of it.";
    sources[505] = "Thomas Jefferson";

    quotes[506] = "Do not waste yourself in rejection, nor bark against the bad, but chant the beauty of the good.";
    sources[506] = "Ralph Emerson";

    quotes[507] = "The person born with a talent they are meant to use will find their greatest happiness in using it.";
    sources[507] = "Johann Wolfgang von Goethe";

    quotes[508] = "Good people are good because they've come to wisdom through failure. We get very little wisdom from success, you know.";
    sources[508] = "William Saroyan";

    quotes[509] = "Your destiny isn't just fate; it is how you use your own developed abilities to get what you want.";
    sources[509] = "Byron Pulsifer";

    quotes[510] = "Iron rusts from disuse; water loses its purity from stagnation... even so does inaction sap the vigour of the mind.";
    sources[510] = "Leonardo da Vinci";

    quotes[511] = "A subtle thought that is in error may yet give rise to fruitful inquiry that can establish truths of great value.";
    sources[511] = "Isaac Asimov";

    quotes[512] = "Be glad of life because it gives you the chance to love, to work, to play, and to look up at the stars.";
    sources[512] = "Henry Van Dyke";

    quotes[513] = "You got to be careful if you don't know where you're going, because you might not get there.";
    sources[513] = "Yogi Berra";

    quotes[514] = "You can tell whether a man is clever by his answers. You can tell whether a man is wise by his questions.";
    sources[514] = "Naguib Mahfouz";

    quotes[515] = "Life is a gift, and it offers us the privilege, opportunity, and responsibility to give something back by becoming more";
    sources[515] = "Anthony Robbins";

    quotes[516] = "You can't let praise or criticism get to you. It's a weakness to get caught up in either one.";
    sources[516] = "John Wooden";

    quotes[517] = "I will love the light for it shows me the way, yet I will endure the darkness because it shows me the stars.";
    sources[517] = "Og Mandino";

    quotes[518] = "Our doubts are traitors and make us lose the good we often might win, by fearing to attempt.";
    sources[518] = "Jane Addams";

    quotes[519] = "By nature man hates change; seldom will he quit his old home till it has actually fallen around his ears.";
    sources[519] = "Thomas Carlyle";

    quotes[520] = "Until you value yourself, you won't value your time. Until you value your time, you won't do anything with it.";
    sources[520] = "M. Scott Peck";

    quotes[521] = "The minute you settle for less than you deserve, you get even less than you settled for.";
    sources[521] = "Maureen Dowd";

    quotes[522] = "The highest stage in moral ure at which we can arrive is when we recognize that we ought to control our thoughts.";
    sources[522] = "Charles Darwin";

    quotes[523] = "It is better to take many small steps in the right direction than to make a great leap forward only to stumble backward.";
    sources[523] = "Unknown";

    quotes[524] = "If we have a positive mental attitude, then even when surrounded by hostility, we shall not lack inner peace.";
    sources[524] = "Dalai Lama";

    quotes[525] = "There is only one success to be able to spend your life in your own way.";
    sources[525] = "Christopher Morley";

    quotes[526] = "Promises are the uniquely human way of ordering the future, making it predictable and reliable to the extent that this is humanly possible.";
    sources[526] = "Hannah Arendt";

    quotes[527] = "Appreciation is the highest form of prayer, for it acknowledges the presence of good wherever you shine the light of your thankful thoughts.";
    sources[527] = "Alan Cohen";

    quotes[528] = "There is only one corner of the universe you can be certain of improving, and that's your own self.";
    sources[528] = "Aldous Huxley";

    quotes[529] = "You're not obligated to win. You're obligated to keep trying to do the best you can every day.";
    sources[529] = "Marian Edelman";

    quotes[530] = "Everyone can taste success when the going is easy, but few know how to taste victory when times get tough.";
    sources[530] = "Byron Pulsifer";

    quotes[531] = "Deep listening is miraculous for both listener and speaker.When someone receives us with open-hearted, non-judging, intensely interested listening, our spirits expand.";
    sources[531] = "Sue Patton Thoele";

    quotes[532] = "You may be deceived if you trust too much, but you will live in torment if you don't trust enough.";
    sources[532] = "Frank Crane";

    quotes[533] = "Great indeed is the sublimity of the Creative, to which all beings owe their beginning and which permeates all heaven.";
    sources[533] = "Lao Tzu";

    quotes[534] = "All that is necessary is to accept the impossible, do without the indispensable, and bear the intolerable.";
    sources[534] = "Kathleen Norris";

    quotes[535] = "Choose a job you love, and you will never have to work a day in your life.";
    sources[535] = "Confucius";

    quotes[536] = "You cannot find yourself by going into the past. You can find yourself by coming into the present.";
    sources[536] = "Eckhart Tolle";

    quotes[537] = "All our talents increase in the using, and the every faculty, both good and bad, strengthen by exercise.";
    sources[537] = "Anne Bronte";

    quotes[538] = "In order to live free and happily you must sacrifice boredom. It is not always an easy sacrifice.";
    sources[538] = "Richard Bach";

    quotes[539] = "The fox has many tricks. The hedgehog has but one. But that is the best of all.";
    sources[539] = "Desiderius Erasmus";

    quotes[540] = "Of course there is no formula for success except perhaps an unconditional acceptance of life and what it brings.";
    sources[540] = "Arthur Rubinstein";

    quotes[541] = "Let me tell you the secret that has led me to my goal: my strength lies solely in my tenacity";
    sources[541] = "Louis Pasteur";

    quotes[542] = "Something opens our wings. Something makes boredom and hurt disappear. Someone fills the cup in front of us: We taste only sacredness.";
    sources[542] = "Rumi";

    quotes[543] = "We must never forget that it is through our actions, words, and thoughts that we have a choice.";
    sources[543] = "Sogyal Rinpoche";

    quotes[544] = "We see things not as they are, but as we are. Our perception is shaped by our previous experiences.";
    sources[544] = "Dennis Kimbro";

    quotes[545] = "True silence is the rest of the mind; it is to the spirit what sleep is to the body, nourishment and refreshment.";
    sources[545] = "William Penn";

    quotes[546] = "All our knowledge begins with the senses, proceeds then to the understanding, and ends with reason. There is nothing higher than reason.";
    sources[546] = "Immanuel Kant";

    quotes[547] = "The thought manifests as the word. The word manifests as the deed. The deed develops into habit. And the habit hardens into character.";
    sources[547] = "Buddha";

    quotes[548] = "As the rest of the world is walking out the door, your best friends are the ones walking in.";
    sources[548] = "Unknown";

    quotes[549] = "Patience is a virtue but you will never ever accomplish anything if you don't exercise action over patience.";
    sources[549] = "Byron Pulsifer";

    quotes[550] = "Any of us can achieve virtue, if by virtue we merely mean the avoidance of the vices that do not attract us.";
    sources[550] = "Robert Lynd";

    quotes[551] = "If the single man plant himself indomitably on his instincts, and there abide, the huge world will come round to him.";
    sources[551] = "Ralph Emerson";

    quotes[552] = "Money was never a big motivation for me, except as a way to keep score. The real excitement is playing the game.";
    sources[552] = "Donald Trump";

    quotes[553] = "Friendship with oneself is all important because without it one cannot be friends with anybody else in the world.";
    sources[553] = "Eleanor Roosevelt";

    quotes[554] = "Peace is not something you wish for. It's something you make, something you do, something you are, and something you give away.";
    sources[554] = "Robert Fulghum";

    quotes[555] = "A wise man can learn more from a foolish question than a fool can learn from a wise answer.";
    sources[555] = "Bruce Lee";

    quotes[556] = "Every man takes the limits of his own field of vision for the limits of the world.";
    sources[556] = "Arthur Schopenhauer";

    quotes[557] = "One does not discover new lands without consenting to lose sight of the shore for a very long time.";
    sources[557] = "Andre Gide";

    quotes[558] = "What is new in the world? Nothing. What is old in the world? Nothing. Everything has always been and will always be.";
    sources[558] = "Sai Baba";

    quotes[559] = "Genuine love should first be directed at oneself if we do not love ourselves, how can we love others?";
    sources[559] = "Dalai Lama";

    quotes[560] = "Life is like a sewer. What you get out of it depends on what you put into it.";
    sources[560] = "Tom Lehrer";

    quotes[561] = "Notice that the stiffest tree is most easily cracked, while the bamboo or willow survives by bending with the wind.";
    sources[561] = "Bruce Lee";

    quotes[562] = "Learn all you can from the mistakes of others. You won't have time to make them all yourself.";
    sources[562] = "Alfred Sheinwold";

    quotes[563] = "Judge nothing, you will be happy. Forgive everything, you will be happier. Love everything, you will be happiest.";
    sources[563] = "Sri Chinmoy";

    quotes[564] = "People are so constituted that everybody would rather undertake what they see others do, whether they have an aptitude for it or not.";
    sources[564] = "Johann Wolfgang von Goethe";

    quotes[565] = "We are either progressing or retrograding all the while. There is no such thing as remaining stationary in this life.";
    sources[565] = "James Freeman Clarke";

    quotes[566] = "The possession of knowledge does not kill the sense of wonder and mystery. There is always more mystery.";
    sources[566] = "Anais Nin";

    quotes[567] = "Everything that happens happens as it should, and if you observe carefully, you will find this to be so.";
    sources[567] = "Marcus Aurelius";

    quotes[568] = "What we think determines what happens to us, so if we want to change our lives, we need to stretch our minds.";
    sources[568] = "Wayne Dyer";

    quotes[569] = "In a controversy the instant we feel anger we have already ceased striving for the truth, and have begun striving for ourselves.";
    sources[569] = "Buddha";

    quotes[570] = "It is the greatest of all mistakes to do nothing because you can only do little do what you can.";
    sources[570] = "Sydney Smith";

    quotes[571] = "When you see a man of worth, think of how you may emulate him. When you see one who is unworthy, examine yourself.";
    sources[571] = "Confucius";

    quotes[572] = "Aerodynamically the bumblebee shouldn't be able to fly, but the bumblebee doesn't know that so it goes on flying anyway.";
    sources[572] = "Mary Kay Ash";

    quotes[573] = "Those who try to do something and fail are infinitely better than those who try nothing and succeed.";
    sources[573] = "Lloyd Jones";

    quotes[574] = "Snowflakes are one of natures most fragile things, but just look what they can do when they stick together.";
    sources[574] = "Vista Kelly";

    quotes[575] = "The first step to getting the things you want out of life is this: decide what you want.";
    sources[575] = "Ben Stein";

    quotes[576] = "Why compare yourself with others? No one in the entire world can do a better job of being you than you.";
    sources[576] = "Unknown";

    quotes[577] = "Experience is not what happens to a man. It is what a man does with what happens to him.";
    sources[577] = "Aldous Huxley";

    quotes[578] = "A good teacher is like a candle it consumes itself to light the way for others.";
    sources[578] = "Unknown";

    quotes[579] = "The only thing to do with good advice is to pass it on. It is never of any use to oneself.";
    sources[579] = "Oscar Wilde";

    quotes[580] = "Life is not measured by the breaths we take, but by the moments that take our breath.";
    sources[580] = "Unknown";

    quotes[581] = "The smallest flower is a thought, a life answering to some feature of the Great Whole, of whom they have a persistent intuition.";
    sources[581] = "Honore de Balzac";

    quotes[582] = "Consider how hard it is to change yourself and you'll understand what little chance you have in trying to change others.";
    sources[582] = "Jacob Braude";

    quotes[583] = "If you'll not settle for anything less than your best, you will be amazed at what you can accomplish in your lives.";
    sources[583] = "Vince Lombardi";

    quotes[584] = "What lies behind us and what lies before us are small matters compared to what lies within us.";
    sources[584] = "Oliver Holmes";

    quotes[585] = "With the realization of ones own potential and self-confidence in ones ability, one can build a better world.";
    sources[585] = "Dalai Lama";

    quotes[586] = "There is nothing like returning to a place that remains unchanged to find the ways in which you yourself have altered.";
    sources[586] = "Nelson Mandela";

    quotes[587] = "Forget about all the reasons why something may not work. You only need to find one good reason why it will.";
    sources[587] = "Robert Anthony";

    quotes[588] = "It is the mark of an educated mind to be able to entertain a thought without accepting it.";
    sources[588] = "Aristotle";

    quotes[589] = "Love is never lost. If not reciprocated, it will flow back and soften and purify the heart.";
    sources[589] = "Washington Irving";

    quotes[590] = "We all live with the objective of being happy; our lives are all different and yet the same.";
    sources[590] = "Anne Frank";

    quotes[591] = "Many people think of prosperity that concerns money only to forget that true prosperity is of the mind.";
    sources[591] = "Byron Pulsifer";

    quotes[592] = "To be beautiful means to be yourself. You do not need to be accepted by others. You need to accept yourself.";
    sources[592] = "Thich Nhat Hanh";

    quotes[593] = "Do not overrate what you have received, nor envy others. He who envies others does not obtain peace of mind.";
    sources[593] = "Buddha";

    quotes[594] = "It is very easy to forgive others their mistakes; it takes more grit to forgive them for having witnessed your own.";
    sources[594] = "Jessamyn West";

    quotes[595] = "Bodily exercise, when compulsory, does no harm to the body; but knowledge which is acquired under compulsion obtains no hold on the mind.";
    sources[595] = "Plato";

    quotes[596] = "Always be yourself, express yourself, have faith in yourself, do not go out and look for a successful personality and duplicate it.";
    sources[596] = "Bruce Lee";

    quotes[597] = "Let us revere, let us worship, but erect and open-eyed, the highest, not the lowest; the future, not the past!";
    sources[597] = "Charlotte Gilman";

    quotes[598] = "Every time you smile at someone, it is an action of love, a gift to that person, a beautiful thing.";
    sources[598] = "Mother Teresa";

    quotes[599] = "Silences make the real conversations between friends. Not the saying but the never needing to say is what counts.";
    sources[599] = "Margaret Runbeck";

    quotes[600] = "The key to transforming our hearts and minds is to have an understanding of how our thoughts and emotions work.";
    sources[600] = "Dalai Lama";

    quotes[601] = "If you must tell me your opinions, tell me what you believe in. I have plenty of douts of my own.";
    sources[601] = "Johann Wolfgang von Goethe";

    quotes[602] = "Chance is always powerful. Let your hook be always cast; in the pool where you least expect it, there will be a fish.";
    sources[602] = "Ovid";

    quotes[603] = "I seek constantly to improve my manners and graces, for they are the sugar to which all are attracted.";
    sources[603] = "Og Mandino";

    quotes[604] = "We never understand how little we need in this world until we know the loss of it.";
    sources[604] = "James Barrie";

    quotes[605] = "The real measure of your wealth is how much youd be worth if you lost all your money.";
    sources[605] = "Unknown";

    quotes[606] = "To keep the body in good health is a duty... otherwise we shall not be able to keep our mind strong and clear.";
    sources[606] = "Buddha";

    quotes[607] = "Take no thought of who is right or wrong or who is better than. Be not for or against.";
    sources[607] = "Bruce Lee";

    quotes[608] = "I am a man of fixed and unbending principles, the first of which is to be flexible at all times.";
    sources[608] = "Everett Dirksen";

    quotes[609] = "Today, give a stranger a smile without waiting for it may be the joy they need to have a great day.";
    sources[609] = "Byron Pulsifer";

    quotes[610] = "The moment one gives close attention to anything, even a blade of grass, it becomes a mysterious, awesome, indescribably magnificent world in itself.";
    sources[610] = "Henry Miller";

    quotes[611] = "At the center of your being you have the answer; you know who you are and you know what you want.";
    sources[611] = "Lao Tzu";

    quotes[612] = "How wonderful that we have met with a paradox. Now we have some hope of making progress.";
    sources[612] = "Niels Bohr";

    quotes[613] = "Everyone is a genius at least once a year. A real genius has his original ideas closer together.";
    sources[613] = "Georg Lichtenberg";

    quotes[614] = "Dreams pass into the reality of action. From the actions stems the dream again; and this interdependence produces the highest form of living.";
    sources[614] = "Anais Nin";

    quotes[615] = "Without leaps of imagination, or dreaming, we lose the excitement of possibilities. Dreaming, after all, is a form of planning.";
    sources[615] = "Gloria Steinem";

    quotes[616] = "Sadness may be part of life but there is no need to let it dominate your entire life.";
    sources[616] = "Byron Pulsifer";

    quotes[617] = "Keeping a little ahead of conditions is one of the secrets of business, the trailer seldom goes far.";
    sources[617] = "Charles Schwab";

    quotes[618] = "Nature gave us one tongue and two ears so we could hear twice as much as we speak.";
    sources[618] = "Epictetus";

    quotes[619] = "Don't wait for your feelings to change to take the action. Take the action and your feelings will change.";
    sources[619] = "Barbara Baron";

    quotes[620] = "You are always free to change your mind and choose a different future, or a different past.";
    sources[620] = "Richard Bach";

    quotes[621] = "You were not born a winner, and you were not born a loser. You are what you make yourself be.";
    sources[621] = "Lou Holtz";

    quotes[622] = "Cherish your visions and your dreams as they are the children of your soul, the blueprints of your ultimate achievements.";
    sources[622] = "Napoleon Hill";

    quotes[623] = "Cherish your visions and your dreams as they are the children of your soul; the blueprints of your ultimate achievements.";
    sources[623] = "Napoleon Hill";

    quotes[624] = "To be what we are, and to become what we are capable of becoming, is the only end of life.";
    sources[624] = "Robert Stevenson";

    quotes[625] = "The road leading to a goal does not separate you from the destination; it is essentially a part of it.";
    sources[625] = "Charles DeLint";

    quotes[626] = "Take things as they are. Punch when you have to punch. Kick when you have to kick.";
    sources[626] = "Bruce Lee";

    quotes[627] = "I believe that a simple and unassuming manner of life is best for everyone, best both for the body and the mind.";
    sources[627] = "Albert Einstein";

    quotes[628] = "Though no one can go back and make a brand new start, anyone can start from now and make a brand new ending.";
    sources[628] = "Unknown";

    quotes[629] = "Mind is everything: muscle, pieces of rubber. All that I am, I am because of my mind.";
    sources[629] = "Paavo Nurmi";

    quotes[630] = "How wonderful it is that nobody need wait a single moment before starting to improve the world.";
    sources[630] = "Anne Frank";

    quotes[631] = "A friend is someone who understands your past, believes in your future, and accepts you just the way you are.";
    sources[631] = "Unknown";

    quotes[632] = "It is one of the blessings of old friends that you can afford to be stupid with them.";
    sources[632] = "Ralph Emerson";

    quotes[633] = "He that never changes his opinions, never corrects his mistakes, and will never be wiser on the morrow than he is today.";
    sources[633] = "Tryon Edwards";

    quotes[634] = "Give me six hours to chop down a tree and I will spend the first four sharpening the axe.";
    sources[634] = "Abraham Lincoln";

    quotes[635] = "One must be fond of people and trust them if one is not to make a mess of life.";
    sources[635] = "E. M. Forster";

    quotes[636] = "We cannot change our memories, but we can change their meaning and the power they have over us.";
    sources[636] = "David Seamans";

    quotes[637] = "Being in humaneness is good. If we select other goodness and thus are far apart from humaneness, how can we be the wise?";
    sources[637] = "Confucius";

    quotes[638] = "To give hope to someone occurs when you teach them how to use the tools to do it for themselves.";
    sources[638] = "Byron Pulsifer";

    quotes[639] = "Id rather regret the things that I have done than the things that I have not done.";
    sources[639] = "Lucille Ball";

    quotes[640] = "The past has no power to stop you from being present now. Only your grievance about the past can do that.";
    sources[640] = "Eckhart Tolle";

    quotes[641] = "If the stars should appear but one night every thousand years how man would marvel and adore.";
    sources[641] = "Ralph Emerson";

    quotes[642] = "There are two kinds of failures: those who thought and never did, and those who did and never thought.";
    sources[642] = "Laurence J. Peter";

    quotes[643] = "I'm not interested in age. People who tell me their age are silly. You're as old as you feel.";
    sources[643] = "Elizabeth Arden";

    quotes[644] = "I find hope in the darkest of days, and focus in the brightest. I do not judge the universe.";
    sources[644] = "Dalai Lama";

    quotes[645] = "When it is obvious that the goals cannot be reached, don't adjust the goals, adjust the action steps.";
    sources[645] = "Confucius";

    quotes[646] = "Our virtues and our failings are inseparable, like force and matter. When they separate, man is no more.";
    sources[646] = "Nikola Tesla";

    quotes[647] = "Blessed is the person who is too busy to worry in the daytime, and too sleepy to worry at night.";
    sources[647] = "Leo Aikman";

    quotes[648] = "He can who thinks he can, and he can't who thinks he can't. This is an inexorable, indisputable law.";
    sources[648] = "Pablo Picasso";

    quotes[649] = "These days people seek knowledge, not wisdom. Knowledge is of the past, wisdom is of the future.";
    sources[649] = "Vernon Cooper";

    quotes[650] = "One secret of success in life is for a man to be ready for his opportunity when it comes.";
    sources[650] = "Benjamin Disraeli";

    quotes[651] = "People take different roads seeking fulfilment and happiness. Just because theyre not on your road doesn't mean they've gotten lost.";
    sources[651] = "Dalai Lama";

    quotes[652] = "The shoe that fits one person pinches another; there is no recipe for living that suits all cases.";
    sources[652] = "Carl Jung";

    quotes[653] = "There are only two mistakes one can make along the road to truth; not going all the way, and not starting.";
    sources[653] = "Buddha";

    quotes[654] = "Very little is needed to make a happy life; it is all within yourself, in your way of thinking.";
    sources[654] = "Marcus Aurelius";

    quotes[655] = "Giving up doesn't always mean you are weak. Sometimes it means that you are strong enough to let go.";
    sources[655] = "Unknown";

    quotes[656] = "Treat people as if they were what they ought to be and you help them to become what they are capable of being.";
    sources[656] = "Johann Wolfgang von Goethe";

    quotes[657] = "The most precious gift we can offer anyone is our attention. When mindfulness embraces those we love, they will bloom like flowers.";
    sources[657] = "Thich Nhat Hanh";

    quotes[658] = "If you focus on results, you will never change. If you focus on change, you will get results.";
    sources[658] = "Jack Dixon";

    quotes[659] = "I would maintain that thanks are the highest form of thought, and that gratitude is happiness doubled by wonder.";
    sources[659] = "G. K. Chesterton";

    quotes[660] = "There are two primary choices in life: to accept conditions as they exist, or accept the responsibility for changing them.";
    sources[660] = "Denis Waitley";

    quotes[661] = "All difficult things have their origin in that which is easy, and great things in that which is small.";
    sources[661] = "Lao-Tzu";

    quotes[662] = "You can be what you want to be. You have the power within and we will help you always.";
    sources[662] = "Byron Pulsifer";

    quotes[663] = "To speak gratitude is courteous and pleasant, to enact gratitude is generous and noble, but to live gratitude is to touch Heaven.";
    sources[663] = "Johannes Gaertner";

    quotes[664] = "Wisdom is the reward you get for a lifetime of listening when you'd have preferred to talk.";
    sources[664] = "Doug Larson";

    quotes[665] = "The greatest pleasure I know is to do a good action by stealth, and to have it found out by accident.";
    sources[665] = "Charles Lamb";

    quotes[666] = "When one tugs at a single thing in nature, he finds it attached to the rest of the world.";
    sources[666] = "John Muir";

    quotes[667] = "Courage is what it takes to stand up and speak; courage is also what it takes to sit down and listen.";
    sources[667] = "Winston Churchill";

    quotes[668] = "The most beautiful things in the world cannot be seen or even touched. They must be felt with the heart.";
    sources[668] = "Helen Keller";

    quotes[669] = "To live a pure unselfish life, one must count nothing as ones own in the midst of abundance.";
    sources[669] = "Buddha";

    quotes[670] = "Many of life's failures are people who did not realize how close they were to success when they gave up.";
    sources[670] = "Thomas Edison";

    quotes[671] = "When we seek to discover the best in others, we somehow bring out the best in ourselves.";
    sources[671] = "William Ward";

    quotes[672] = "If you accept the expectations of others, especially negative ones, then you never will change the outcome.";
    sources[672] = "Michael Jordan";

    quotes[673] = "A man may fulfil the object of his existence by asking a question he cannot answer, and attempting a task he cannot achieve.";
    sources[673] = "Oliver Holmes";

    quotes[674] = "I am not bothered by the fact that I am unknown. I am bothered when I do not know others.";
    sources[674] = "Confucius";

    quotes[675] = "He is a wise man who does not grieve for the things which he has not, but rejoices for those which he has.";
    sources[675] = "Epictetus";

    quotes[676] = "I am always doing that which I cannot do, in order that I may learn how to do it.";
    sources[676] = "Pablo Picasso";

    quotes[677] = "If you're walking down the right path and you're willing to keep walking, eventually you'll make progress.";
    sources[677] = "Barack Obama";

    quotes[678] = "The world is round and the place which may seem like the end may also be the beginning.";
    sources[678] = "Ivy Baker Priest";

    quotes[679] = "Never miss an opportunity to make others happy, even if you have to leave them alone in order to do it.";
    sources[679] = "Unknown";

    quotes[680] = "Give it all you've got because you never know if there's going to be a next time.";
    sources[680] = "Danielle Ingrum";

    quotes[681] = "You have to take it as it happens, but you should try to make it happen the way you want to take it.";
    sources[681] = "Old German proverb";

    quotes[682] = "Nothing is predestined: The obstacles of your past can become the gateways that lead to new beginnings.";
    sources[682] = "Ralph Blum";

    quotes[683] = "I'm not in this world to live up to your expectations and you're not in this world to live up to mine.";
    sources[683] = "Bruce Lee";

    quotes[684] = "Sometimes your joy is the source of your smile, but sometimes your smile can be the source of your joy.";
    sources[684] = "Thich Nhat Hanh";

    quotes[685] = "I can't imagine a person becoming a success who doesn't give this game of life everything hes got.";
    sources[685] = "Walter Cronkite";

    quotes[686] = "The greatest way to live with honor in this world is to be what we pretend to be.";
    sources[686] = "Socrates";

    quotes[687] = "The conditions of conquest are always easy. We have but to toil awhile, endure awhile, believe always, and never turn back.";
    sources[687] = "Seneca";

    quotes[688] = "The grand essentials of happiness are: something to do, something to love, and something to hope for.";
    sources[688] = "Chalmers";

    quotes[689] = "By living deeply in the present moment we can understand the past better and we can prepare for a better future.";
    sources[689] = "Thich Nhat Hanh";

    quotes[690] = "Do not be too timid and squeamish about your reactions. All life is an experiment. The more experiments you make the better.";
    sources[690] = "Ralph Emerson";

    quotes[691] = "Do not go where the path may lead, go instead where there is no path and leave a trail.";
    sources[691] = "Ralph Emerson";

    quotes[692] = "There is no duty we so underrate as the duty of being happy. By being happy we sow anonymous benefits upon the world.";
    sources[692] = "Robert Louis Stevenson";

    quotes[693] = "Edison failed 10,000 times before he made the electric light. Do not be discouraged if you fail a few times.";
    sources[693] = "Napoleon Hill";

    quotes[694] = "Yesterday is history. Tomorrow is a mystery. And today? Today is a gift that's why they call it the present.";
    sources[694] = "Unknown";

    quotes[695] = "The only way to tell the truth is to speak with kindness. Only the words of a loving man can be heard.";
    sources[695] = "Henry Thoreau";

    quotes[696] = "The greatest good you can do for another is not just to share your riches but to reveal to him his own.";
    sources[696] = "Benjamin Disraeli";

    quotes[697] = "You can only grow if you're willing to feel awkward and uncomfortable when you try something new.";
    sources[697] = "Brian Tracy";

    quotes[698] = "To free us from the expectations of others, to give us back to ourselves there lies the great, singular power of self-respect.";
    sources[698] = "Joan Didion";

    quotes[699] = "It is more important to know where you are going than to get there quickly. Do not mistake activity for achievement.";
    sources[699] = "Mabel Newcomber";

    quotes[700] = "When you don't know what you believe, everything becomes an argument. Everything is debatable. But when you stand for something, decisions are obvious.";
    sources[700] = "Unknown";

    quotes[701] = "Intuition is the supra-logic that cuts out all the routine processes of thought and leaps straight from the problem to the answer.";
    sources[701] = "Robert Graves";

    quotes[702] = "The thing always happens that you really believe in; and the belief in a thing makes it happen.";
    sources[702] = "Frank Wright";

    quotes[703] = "A true friend is the most precious of all possessions and the one we take the least thought about acquiring.";
    sources[703] = "Francois de La Rochefoucauld";

    quotes[704] = "There is only one way to happiness and that is to cease worrying about things which are beyond the power of our will.";
    sources[704] = "Epictetus";

    quotes[705] = "Appreciation can make a day, even change a life. Your willingness to put it into words is all that is necessary.";
    sources[705] = "Margaret Cousins";

    quotes[706] = "Every sixty seconds you spend angry, upset or mad, is a full minute of happiness you will never get back.";
    sources[706] = "Unknown";

    quotes[707] = "This world, after all our science and sciences, is still a miracle; wonderful, inscrutable, magical and more, to whosoever will think of it.";
    sources[707] = "Thomas Carlyle";

    quotes[708] = "Every great mistake has a halfway moment, a split second when it can be recalled and perhaps remedied.";
    sources[708] = "Pearl Buck";

    quotes[709] = "You can adopt the attitude there is nothing you can do, or you can see the challenge as your call to action.";
    sources[709] = "Catherine Pulsifer";

    quotes[710] = "The happiness of a man in this life does not consist in the absence but in the mastery of his passions.";
    sources[710] = "Alfred Tennyson";

    quotes[711] = "Never doubt that a small group of thoughtful, committed people can change the world. Indeed. It is the only thing that ever has.";
    sources[711] = "Margaret Mead";

    quotes[712] = "Let your hook always be cast; in the pool where you least expect it, there will be a fish.";
    sources[712] = "Ovid";

    quotes[713] = "You get peace of mind not by thinking about it or imagining it, but by quietening and relaxing the restless mind.";
    sources[713] = "Remez Sasson";

    quotes[714] = "Your friends will know you better in the first minute you meet than your acquaintances will know you in a thousand years.";
    sources[714] = "Richard Bach";

    quotes[715] = "When you are content to be simply yourself and don't compare or compete, everybody will respect you.";
    sources[715] = "Lao Tzu";

    quotes[716] = "When you begin to touch your heart or let your heart be touched, you begin to discover that it's bottomless.";
    sources[716] = "Pema Chodron";

    quotes[717] = "If you love someone, set them free. If they come back they're yours; if they don't they never were.";
    sources[717] = "Richard Bach";

    quotes[718] = "Wisdom is knowing what to do next; Skill is knowing how ot do it, and Virtue is doing it.";
    sources[718] = "David Jordan";

    quotes[719] = "Bad things are not the worst things that can happen to us. Nothing is the worst thing that can happen to us!";
    sources[719] = "Richard Bach";

    quotes[720] = "No valid plans for the future can be made by those who have no capacity for living now.";
    sources[720] = "Alan Watts";

    quotes[721] = "The aim of life is self-development. To realize ones nature perfectly that is what each of us is here for.";
    sources[721] = "Oscar Wilde";

    quotes[722] = "To accomplish great things, we must not only act, but also dream; not only plan, but also believe.";
    sources[722] = "Anatole France";

    quotes[723] = "The first requisite for success is the ability to apply your physical and mental energies to one problem incessantly without growing weary.";
    sources[723] = "Thomas Edison";

    quotes[724] = "If we could learn to like ourselves, even a little, maybe our cruelties and angers might melt away.";
    sources[724] = "John Steinbeck";

    quotes[725] = "If we are facing in the right direction, all we have to do is keep on walking.";
    sources[725] = "Unknown";

    quotes[726] = "Remember always that you not only have the right to be an individual, you have an obligation to be one.";
    sources[726] = "Eleanor Roosevelt";

    quotes[727] = "There are two primary choices in life: to accept conditions as they exist, or accept responsibility for changing them.";
    sources[727] = "Denis Waitley";

    quotes[728] = "If you seek truth you will not seek victory by dishonourable means, and if you find truth you will become invincible.";
    sources[728] = "Epictetus";

    quotes[729] = "Through meditation and by giving full attention to one thing at a time, we can learn to direct attention where we choose.";
    sources[729] = "Eknath Easwaran";

    quotes[730] = "We could never learn to be brave and patient if there were only joy in the world.";
    sources[730] = "Helen Keller";

    quotes[731] = "If it is not right do not do it; if it is not true do not say it.";
    sources[731] = "Marcus Aurelius";

    quotes[732] = "The truth of the matter is that you always know the right thing to do. The hard part is doing it.";
    sources[732] = "Norman Schwarzkopf";

    quotes[733] = "Some people thrive on huge, dramatic change. Some people prefer the slow and steady route. Do what's right for you.";
    sources[733] = "Julie Morgenstern";

    quotes[734] = "Man is equally incapable of seeing the nothingness from which he emerges and the infinity in which he is engulfed.";
    sources[734] = "Blaise Pascal";

    quotes[735] = "Arrogance and rudeness are training wheels on the bicycle of life for weak people who cannot keep their balance without them.";
    sources[735] = "Laura Teresa Marquez";

    quotes[736] = "If you are patient in one moment of anger, you will escape one hundred days of sorrow.";
    sources[736] = "Chinese proverb";

    quotes[737] = "When you have got an elephant by the hind legs and he is trying to run away, it's best to let him run.";
    sources[737] = "Abraham Lincoln";

    quotes[738] = "Courage is not about taking risks unknowingly, but putting your own being in front of challenges that others may not be able to.";
    sources[738] = "Byron Pulsifer";

    quotes[739] = "Can miles truly separate you from friends... If you want to be with someone you love, aren't you already there?";
    sources[739] = "Richard Bach";

    quotes[740] = "The poor man is not he who is without a cent, but he who is without a dream.";
    sources[740] = "Harry Kemp";

    quotes[741] = "The greatest good you can do for another is not just share your riches, but reveal to them their own.";
    sources[741] = "Benjamin Disraeli";

    quotes[742] = "Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment.";
    sources[742] = "Buddha";

    quotes[743] = "Peace of mind is not the absence of conflict from life, but the ability to cope with it.";
    sources[743] = "Unknown";

    quotes[744] = "Face your deficiencies and acknowledge them; but do not let them master you. Let them teach you patience, sweetness, insight.";
    sources[744] = "Helen Keller";

    quotes[745] = "Change is the law of life. And those who look only to the past or present are certain to miss the future.";
    sources[745] = "John Kennedy";

    quotes[746] = "You have power over your mind not outside events. Realize this, and you will find strength.";
    sources[746] = "Marcus Aurelius";

    quotes[747] = "Let me tell you the secret that has led me to my goal: my strength lies solely in my tenacity.";
    sources[747] = "Louis Pasteur";

    quotes[748] = "We are what we think. All that we are arises with our thoughts. With our thoughts, we make the world.";
    sources[748] = "Buddha";

    quotes[749] = "He that respects himself is safe from others; he wears a coat of mail that none can pierce.";
    sources[749] = "Henry Longfellow";

    quotes[750] = "I cannot always control what goes on outside. But I can always control what goes on inside.";
    sources[750] = "Wayne Dyer";
  // Get a random index into the arrays
  i = Math.floor(Math.random() * quotes.length);

  // Write out the quote as HTML
  document.write("<p style='text-align: center;'>\"");
  document.write(quotes[i] + "\"");
  document.write("<br /><em>-<b> " + sources[i] + "</b></em>");
  document.write("</p>");
  }
