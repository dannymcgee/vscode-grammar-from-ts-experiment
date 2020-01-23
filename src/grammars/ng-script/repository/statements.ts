import { GrammarDefinition } from '../../../types/grammar-definition.interface';

export const statements: GrammarDefinition = {
	patterns: [
		{ include: '#string' },
		{ include: '#literal' },
		{ include: '#afterOperatorBlock' },
		{ include: '#declBlock' },
		{ include: '#expression' },
		{ include: '#punctuationSemicolon' },
	],
};
