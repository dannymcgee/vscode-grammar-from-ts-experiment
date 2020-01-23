import { GrammarDefinition } from '../../../types/grammar-definition.interface';

export const literal: GrammarDefinition = {
	patterns: [
		{ include: '#numericLiteral' },
		{ include: '#booleanLiteral' },
		{ include: '#nullLiteral' },
		{ include: '#undefinedLiteral' },
		{ include: '#numericConstantLiteral' },
		{ include: '#arrayLiteral' },
		{ include: '#thisLiteral' }
	],
};
