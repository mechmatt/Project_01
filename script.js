// on document.ready, execute my function

// All advice from Shane and Neil at www.farnamstreetblog.com

var adviceArray = [
	"While less sexy, avoiding folly is moften more profitable than attempting brilliance.",
	"Ask the person who never speaks up for their view. But ask them in private.",
	"If you are deciding the same way you have always decided, then you have already decided your fate.",
	"The person who is narrow-minded and convservative may also be conscientious and have integrity.",
	"How can you expect people to give useful opinions if you don't give them time to think beforehand?",
	"Is this a mediocre opportunity?",
	"Are you choosing that metric because it's easy to measure? If it is easy to measure, that's probably because it's useless.",
	"What information would cause to change your mind? Now look for it.",
	"What is the opportunity cost?",
	"Why do you think you need more information? What are you hoping to find?",
	"What are the most basic, unemotional, fundamentals of the situation?",
	"The person who is flippant and bored may be that way because they see much farther and wider than you, and you are the one boring them.",
	"Everyone agrees with you. That's because they're intimidated. Speak to them individually, and give them space to speak their views."
	];

var randPos = Math.floor(adviceArray.length*Math.random());

console.log(adviceArray[randPos]);

var text = adviceArray[randPos];
document.getElementById("text").innerHTML = text;