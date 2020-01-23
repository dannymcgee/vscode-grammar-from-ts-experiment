import { GrammarDefinition } from '../../../types/grammar-definition.interface';

export const ternaryOperator: GrammarDefinition = {
	begin: '(\\?)',
	beginCaptures: {
		0: { name: 'keyword.operator.ternary.js' },
	},
	end: '(:)',
	endCaptures: {
		0: { name: 'keyword.operator.ternary.js' },
	},
	patterns: [
		{ include: '#expression' },
	]
};
