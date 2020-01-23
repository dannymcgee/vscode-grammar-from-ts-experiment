import { GrammarDefinition } from '../../../types/grammar-definition.interface';

export const expression: GrammarDefinition = {
	name: 'meta.expression.js',
	patterns: [
		{ include: '#string' },
		{ include: '#literal' },
		{ include: '#ternaryExpression' },
		{ include: '#objectLiteral' },
		{ include: '#functionCall' },
		{ include: '#identifiers' },
		{ include: '#parenExpression' },
		{ include: '#punctuationComma' },
		{ include: '#punctuationAccessor' },
	],
};
