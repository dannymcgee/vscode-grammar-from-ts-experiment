import { GrammarDefinition } from '../../../types/grammar-definition.interface';

export const arrayLiteral: GrammarDefinition = {
	name: 'meta.array.literal.js',
	begin: '\\[',
	beginCaptures: {
		0: { name: 'meta.brace.square.js' },
	},
	end: '\\]',
	endCaptures: {
		0: { name: 'meta.brace.square.js' },
	},
	patterns: [
		{ include: '#expression' },
		{ include: '#punctuationComma' },
	]
};
