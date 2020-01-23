import { GrammarDefinition } from '../../../types/grammar-definition.interface';

export const functionCall: GrammarDefinition = {
	begin: '(?=(\\.\\s*)?([_$[:alpha:]][_$[:alnum:]]*)\\s*\\()',
	end: '(?<=\\))(?!(\\.\\s*)?([_$[:alpha:]][_$[:alnum:]]*)\\s*\\()',
	patterns: [
		{
			name: 'punctuation.accessor.js',
			match: '\\.'
		},
		{
			name: 'entity.name.function.js',
			match: '([_$[:alpha:]][_$[:alnum:]]*)',
		},
		{ include: '#parenExpression', }
	]
};
