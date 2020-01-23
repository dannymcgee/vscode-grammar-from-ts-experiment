import { GrammarDefinition } from '../../../types/grammar-definition.interface';

export const identifiers: GrammarDefinition = {
	patterns: [
		{
			match: '(\\.)\\s*(?:([[:upper:]][_$[:digit:][:upper:]]*)|([_$[:alpha:]][_$[:alnum:]]*))(?=\\s*\\.\\s*[_$[:alpha:]][_$[:alnum:]]*)',
			captures: {
				1: { name: 'punctuation.accessor.js' },
				2: { name: 'constant.other.object.property.js' },
				3: { name: 'variable.other.object.property.js' },
			},
		},
		{
			match: '(\\.)\\s*([[:upper:]][_$[:digit:][:upper:]]*)(?![_$[:alnum:]])',
			captures: {
				1: { name: 'punctuation.accessor.js' },
				2: { name: 'constant.other.property.js' },
			},
		},
		{
			match: '(\\.)\\s*([_$[:alpha:]][_$[:alnum:]]*)',
			captures: {
				1: { name: 'punctuation.accessor.js' },
				2: { name: 'variable.other.property.js' },
			},
		},
		{
			match: '(?:([[:upper:]][_$[:digit:][:upper:]]*)|([_$[:alpha:]][_$[:alnum:]]*))(?=\\s*\\.\\s*[_$[:alpha:]][_$[:alnum:]]*)',
			captures: {
				1: { name: 'constant.other.object.js' },
				2: { name: 'variable.other.object.js' },
			},
		},
		{
			name: 'constant.other.js',
			match: '([[:upper:]][_$[:digit:][:upper:]]*)(?![_$[:alnum:]])',
		},
		{
			name: 'variable.other.readwrite.js',
			match: '[_$[:alpha:]][_$[:alnum:]]*',
		},
	],
};
