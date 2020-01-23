import { GrammarDefinition } from '../../../types/grammar-definition.interface';

export const numericConstantLiteral: GrammarDefinition = {
	patterns: [
		{
			name: 'constant.language.nan.js',
			match: '(?<!\\.|\\$)\\bNaN\\b(?!\\$)',
		},
		{
			name: 'constant.language.infinity.js',
			match: '(?<!\\.|\\$)\\bInfinity\\b(?!\\$)',
		},
	],
};
