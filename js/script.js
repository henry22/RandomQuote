// event listener to respond to clicks on the page
// when user clicks anywhere on the page, the "makeQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

//An array of objects
var quotes = [
	{
		quote: "It is better to remain silent at the risk of being thought a fool, than to talk and remove all doubt of it.",
		source: "MAURICE SWITZER",
		citation: "Mrs. Goose, Her Book",
		year: 1907
	},
	{
		quote: "There’s a ball. There’s a hoop. You put the ball through the hoop. That’s success.",
		source: "KAREEM ABDUL-JABBAR",
		citation: "Wit and Wisdom from the Greatest Minds of Our Time",
		year: 2012
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
		quote: "I don’t care to belong to any organization that accepts me as a member.",
		source: "GROUCHO MARX",
		citation: "Laughter Is An Instant Vacation",
		year: 2008
	},
	{
		quote: "Little minds are tamed and subdued by misfortune; but great minds rise above them.",
		source: "WASHINGTON IRVING",
		citation: "The Sketch Book of Geoffrey Crayon, Gent.",
		year: 1820
	},
	{
		quote: "Don’t just stand there; make something happen.",
		source: "LEE IACOCCA",
		citation: "Wit and Wisdom from the Greatest Minds of Our Time ",
		year: 2012
	},
	{
		quote: "If you can’t be a good example, then you’ll just have to be a horrible warning.",
		source: "CATHERINE AIRD",
		citation: "Quoted in St. Louis Post-Dispatch, 1 Nov.",
		year: 1989
	},
	{
		quote: "If you’re not prepared to be wrong, you’ll never come up with anything original.",
		source: "KEN ROBINSON",
		citation: "How Schools Kill Creativity.",
		year: 2006
	},
	{
		quote: "I don’t get no respect. When I played in the sandbox the cat kept covering me up.",
		source: "RODNEY DANGERFIELD",
		citation: "The Comedy Thesaurus: 3,241 Quips, Quotes, and Smartass Remarks",
		year: 2005
	}
];

//return randomly selected objects in quotes
function getRandomQuote() {
	var randomNum = Math.floor(Math.random() * 10) + 1;
	return quotes[randomNum];
}

//show random quotes through html
function printQuote() {
	var randomQuote = getRandomQuote();
	var displayHTML = "";

	displayHTML += '<p class="quote">' + randomQuote.quote + '</p>';
	displayHTML += '<p class="source">' + randomQuote.source;
	displayHTML += '<span class="citation">' + randomQuote.citation + '</span>';
	displayHTML += '<span class="year">' + randomQuote.year + '</span>';
	displayHTML += '</p>';

	document.getElementById('quote-box').innerHTML = displayHTML;
}