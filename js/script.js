// event listener to respond to clicks on the page
// when user clicks anywhere on the page, the "makeQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);


var quotes = [
	{
		quote: "It is better to remain silent at the risk of being thought a fool, than to talk and remove all doubt of it.",
		source: "MAURICE SWITZER",
		citation: "Mrs. Goose, Her Book",
		year: 1907
	},
	{
		quote: "I’ve missed more than 9,000 shots in my career. I’ve lost almost 300 games. Twenty-six times, I’ve been trusted to take the game-winning shot and missed. I’ve failed over and over and over again in my life. And that is why I succeed.",
		source: "MICHAEL JORDAN",
		citation: "Goldman, Robert and Papson, Stephen. Nike Culture: The Sign of the Swoosh.",
		year: 1998
	},
	{
		quote: "All our dreams can come true, if we have the courage to pursue them.",
		source: "WALT DISNEY",
		citation: "How to Be Like Walt: Capturing the Magic Every Day of Your Life",
		year: 2004
	},
	{
		quote: "If opportunity doesn’t knock, build a door.",
		source: "MILTON BERLE",
		citation: "Pine, Arthur and Houston, Julie. One Door Closes, Another Door Opens: Turning Your Setbacks Into Comebacks.",
		year: 1993
	},
	{
		quote: "Politics is the gentle art of getting votes from the poor and campaign funds from the rich by promising to protect each from the other.",
		source: "OSCAR AMERINGER",
		citation: "Quoted in Ferdinand Lundberg, Scoundrels All",
		year: 1968
	},
	{
		quote: "Little minds are tamed and subdued by misfortune; but great minds rise above them.",
		source: "WASHINGTON IRVING",
		citation: "Irving, Washington. The Sketch Book of Geoffrey Crayon, Gent.",
		year: 1820
	},
	{
		quote: "Don’t just stand there; make something happen.",
		source: "LEE IACOCCA",
		citation: "Attributed in Reader’s Digest, Quotable Quotes: Wit and Wisdom from the Greatest Minds of Our Time ",
		year: 2012
	},
	{
		quote: "If you can’t be a good example, then you’ll just have to be a horrible warning.",
		source: "CATHERINE AIRD",
		citation: "Quoted in St. Louis Post-Dispatch, 1 Nov.",
		year: 1989
	},
	{
		quote: "They say such nice things about people at their funerals that it makes me sad to realize that I’m going to miss mine by just a few days.",
		source: "GARRISON KEILLOR",
		citation: "Attributed in Mac Anderson, Laughter Is An Instant Vacation",
		year: 2008
	},
	{
		quote: "I don’t get no respect. When I played in the sandbox the cat kept covering me up.",
		source: "RODNEY DANGERFIELD",
		citation: "Attributed in Judy Brown, The Comedy Thesaurus: 3,241 Quips, Quotes, and Smartass Remarks",
		year: 2005
	}
];

//return randomly selected objects in quotes
function getRandomQuote() {
	var randomNum = Math.floor(Math.random() * 10) + 1;
	return quotes[randomNum];
}