import { GrammarDefinition } from '../../../types/grammar-definition.interface';

export const declBlock: GrammarDefinition = {
	name: 'meta.block.js',
	begin: '\\{',
	beginCaptures: {
		0: { name: 'punctuation.definition.block.js' },
	},
	end: '\\}',
	endCaptures: {
		0: { name: 'punctuation.definition.block.js' },
	},
	patterns: [
		{ include: '#statements' },
	],
};
