import { GrammarDefinition } from '../../../types/grammar-definition.interface';

export const ternaryExpression: GrammarDefinition = {
	begin: '(?=\\?)',
	end: '(?=$|[";,})\\]])',
	patterns: [
		{ include: '#ternaryOperator' },
		{ include: '#expression' },
	]
};
