import { GrammarDefinition } from '../../../types/grammar-definition.interface';

export const afterOperatorBlock: GrammarDefinition = {
	name: 'meta.objectliteral.js',
	begin: '(?<=[=(,\\[?+!]|await|return|yield|throw|in|of|typeof|&&|\\|\\||\\*)\\s*(\\{)',
	beginCaptures: {
		1: { name: 'punctuation.definition.block.js' },
	},
	end: '\\}',
	endCaptures: {
		0: { name: 'punctuation.definition.block.js' },
	},
	patterns: [
		{ include: '#objectMember' },
	],
};
