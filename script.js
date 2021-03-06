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
	"Everyone agrees with you. That's because they're intimidated. Speak to them individually, and give them space to speak their views.",
	"Imagine the outcome of your decision as a disaster. How did you get there?",
	"Do you think you need more informatino? Or are you just wasting time looking for unnecessary data?",
	"Ask the group individually what they would do if they were you?",
	"What's the most boring thing you can do?",
	"Does someone disagree with you? Is it because they're stupid, hide-bound, or just don't get it? Imagine instead they are perceptive, far-seeing and thoughtful, and reconsider their point-of-view.",
	"Are you commited to this decision? What will you do to prove your commitment to others?",
	"Does it really matter that you decide right now? Sleep on it.",
	"How does your body feel?",
	"You need to make it clear to the others that it is okay to disagree with you.",
	"Did you record your last decision? Does everyone who needs to know it, know it? If no, hurry up and fix that.",
	"Are you afraid of the simple answer?",
	"Sit alone in the darkness and in silence with your thoughts.",
	"Are you choosing what you most want to achieve? Or what you most want to avoid?",
	"Your body holds your ethical compass. What is your body telling you?",
	"Stay silent in the discussion as long as you can.",
	"Do you have two alternatives? Go to a quiet place and say one out loud. Feel how your body reacts. Then say the other and do the same. Does that tell you something new?",
	"You want proof that the alternative is a better choice. But how can there be proof when you've always done things the same way?",
	"Does everyone agree on the problem?",
	"Are you reaching to the argument or reacting to the speaker?",
	"Invert the outcome. What factors would cause a bad result? Do those factors already exist?",
	"The people you respect the least can be more perceptive than you are.",
	"Are you trying to make an important decision when you're tired? Angry? Distracted? Upset? Why?",
	"Why is this happening?",
	"Your experience is the experience of one person. Research is the experience of many. Which do you think is more reliable?",
	"If you look at a brick close-up it becomes a wall. If you look at it far-away it is a pebble. Are you looking at things too closely?",
	"What matters and what doesn't?",
	"There is another alternative that you haven't considered, and someone nearby knows what is is.",
	"Always choose an experience over a thing.",
	"How will this affect people?",
	"State the problem to a person who has no context in simple, jargon-free terms.",
	"Do you think you understand the situation well? Imagine explaining it to someone. Can you? Imagine the hard questions they might ask. Can you answer them?",
	"Are you choosing what is right or what is safe?",
	"Whose ego does the problem serve? The solution?",
	"What key assumption are you making for this decision? Imagine that your assumption is wrong. How does taht affect your decision?",
	"What's the most important thing?",
	"Imagine that your best friend has to make this decision. What advice would you give them?",
	"You control the process not the outcome. Focus on making the process better and the outcome will follow.",
	"Deliberately subtract the unimportant.",
	"Where are you? Are you in the right environment to make this decision?",
	"Check your ego.",
	"Are you adding unnecessary risk to justify your fear of committing?",
	"Think slow. Act fast.",
	"Do you really understand the factors involved? Or are you outside your circle of competence?",
	"If you are faced with a choice between two things, can you do both and let the evidence tell you?",
	"If you make the wrong decision, do you forget all about it, or do you think about what led you there, and what you have learned?",
	"The only fool is the one who doesn't ask.",
	"Making a decision is a kind of performance. Good habits, practise, being well-rested, knowing your subject, all contribute to a better result.",
	"What goes us here? Will it come again?",
	"Why do you persist in making decisions on subjects outside your circle of compitence? Is it because you are afraid to look ignorant and delegate?",
	"Are you doing too many things?",
	"Have you face a similar situation? Whats different? What's the same?",
	"Are you trying to be the hero?",
	];

var randPos = Math.floor(adviceArray.length*Math.random());

var text = adviceArray[randPos];
document.getElementById("advice").innerHTML = text;




