import { GrammarDefinition } from '../../../types/grammar-definition.interface';

export const parenExpression: GrammarDefinition = {
	begin: '\\(',
		beginCaptures: {
			0: { name: 'meta.brace.round.js' },
		},
		end: '\\)',
		endCaptures: {
			0: { name: 'meta.brace.round.js' },
		},
		patterns: [
			{ include: '#expression' },
			{ include: '#punctuationComma' },
		],
};
