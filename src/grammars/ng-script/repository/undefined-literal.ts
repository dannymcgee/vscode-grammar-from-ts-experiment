import { GrammarDefinition } from '../../../types/grammar-definition.interface';

export const undefinedLiteral: GrammarDefinition = {
	name: 'constant.language.undefined.js',
	match: '(?<!\\.|\\$)\\bundefined\\b(?!\\$)',
};
