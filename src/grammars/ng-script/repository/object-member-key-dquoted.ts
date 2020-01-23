import { GrammarDefinition } from '../../../types/grammar-definition.interface';

export const objectMemberKeyQuoted: GrammarDefinition = {
	name: 'meta.object.member.js',
	begin: /(?=(?:(?:'[^']*')|(?:\[([^\[\]]|\[[^\[\]]+\])+\]))\s*:)/,
	end: '(?=,|\\})',
	patterns: [
		{
			name: 'meta.object-literal.key.js',
			begin: /(?=(?:(?:'[^']*')|(?:\[([^\[\]]|\[[^\[\]]+\])+\]))\s*:)/,
			end: ':',
			endCaptures: {
				0: { name: 'punctuation.separator.key-value.js' },
			},
			patterns: [
				{ include: '#string' },
				{ include: '#arrayLiteral' },
			]
		},
		{ include: '#expression' },
	],
};
