import { GrammarDefinition } from '../../../types/grammar-definition.interface';

export const string: GrammarDefinition = {
	name: 'string.quoted.double.js',
	begin: '"',
	beginCaptures: {
		0: { name: 'punctuation.definition.string.begin.js' },
	},
	end: '(")|((?:[^\\\\\\n])$)',
	endCaptures: {
		1: { name: 'punctuation.definition.string.end.js' },
		2: { name: 'invalid.illegal.newline.js' },
	},
	patterns: [
		{ include: '#stringCharacterEscape' },
	]
};
