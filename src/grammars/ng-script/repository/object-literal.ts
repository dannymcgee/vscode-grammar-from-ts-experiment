import { GrammarDefinition } from '../../../types/grammar-definition.interface';

export const objectLiteral: GrammarDefinition = {
	name: 'meta.objectliteral.js',
	begin: '\\{',
	beginCaptures: {
		0: { name: 'punctuation.definition.block.js' },
	},
	end: '\\}',
	endCaptures: {
		0: { name: 'punctuation.definition.block.js' },
	},
	patterns: [
		{ include: '#objectMember' },
	],
};
