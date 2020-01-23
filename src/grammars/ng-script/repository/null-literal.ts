import { GrammarDefinition } from '../../../types/grammar-definition.interface';

export const nullLiteral: GrammarDefinition = {
	name: 'constant.language.null.js',
	match: '(?<!\\.|\\$)\\bnull\\b(?!\\$)',
};
