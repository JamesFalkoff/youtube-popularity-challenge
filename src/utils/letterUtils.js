const alphabet = ['a',
				'b',
				'c',
				'd',
				'e',
				'f',
				'g',
				'h',
				'i',
				'j',
				'k',
				'l',
				'm',
				'n',
				'o',
				'p',
				'q',
				'r',
				's',
				't',
				'u',
				'v',
				'w',
				'x',
				'y',
				'z'
				];

export function getRandomLetters(size) {
  var letterSelection = [];
  for(let i = 0; i < size; i++) {
    letterSelection[i] = alphabet[Math.floor(Math.random() * alphabet.length)]; 
  } 
  return letterSelection;
};


