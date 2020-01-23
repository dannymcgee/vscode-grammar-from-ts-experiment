import { GrammarDefinition } from '../../../types/grammar-definition.interface';

export const thisLiteral: GrammarDefinition = {
	name: 'variable.language.this.js',
	match: '(?<!\\.|\\$)\\bthis\\b(?!\\$)',
};
