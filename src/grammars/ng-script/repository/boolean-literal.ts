import { GrammarDefinition } from '../../../types/grammar-definition.interface';

export const booleanLiteral: GrammarDefinition = {
	patterns: [
		{
			name: 'constant.language.boolean.true.js',
			match: '(?<!\\.|\\$)\\btrue\\b(?!\\$)',
		},
		{
			name: 'constant.language.boolean.false.js',
			match: '(?<!\\.|\\$)\\bfalse\\b(?!\\$)',
		},
	],
};
