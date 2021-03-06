import { loremIpsum, LoremIpsum } from 'lorem-ipsum';

export const lorem = new LoremIpsum({
	wordsPerSentence: {
		max: 12,
		min: 3
	}
});

// export const lor = (num: Number) => {
// 	loremIpsum({
// 		count: 1,                // Number of "words", "sentences", or "paragraphs"
// 		format: "plain",         // "plain" or "html"
// 		paragraphLowerBound: 3,  // Min. number of sentences per paragraph.
// 		paragraphUpperBound: 7,  // Max. number of sentences per paragarph.
// 		random: Math.random,     // A PRNG function
// 		sentenceLowerBound: 5,   // Min. number of words per sentence.
// 		sentenceUpperBound: 15,  // Max. number of words per sentence.
// 		suffix: "\n",            // Line ending, defaults to "\n" or "\r\n" (win32)
// 		units: "sentences",
// 	})
// }
