import { GrammarDefinition } from '../../../types/grammar-definition.interface';

export const objectMember: GrammarDefinition = {
	patterns: [
		{ include: '#objectMemberKeyQuoted' },
		{
			name: 'meta.object.member.js',
			begin: '(?x)(?:([_$[:alpha:]][_$[:alnum:]]*)\\s*(:)(?=\\s*( (async\\s+)|(function\\s*[(<])|(function\\s+)| ([_$[:alpha:]][_$[:alnum:]]*\\s*=>)| ((<([^<>]|\\<[^<>]+\\>)+>\\s*)?\\(([^()]|\\([^()]*\\))*\\)(\\s*:\\s*(.)*)?\\s*=>))))',
			beginCaptures: {
				0: { name: 'meta.object-literal.key.js' },
				1: { name: 'entity.name.function.js' },
				2: { name: 'punctuation.separator.key-value.js' },
			},
			end: '(?=,|\\})',
			patterns: [
				{ include: '#expression' },
			],
		},
		{
			name: 'meta.object.member.js',
			begin: '(?:[_$[:alpha:]][_$[:alnum:]]*)\\s*(:)',
			beginCaptures: {
				0: { name: 'meta.object-literal.key.js' },
				1: { name: 'punctuation.separator.key-value.js' },
			},
			end: '(?=,|\\})',
			patterns: [
				{ include: '#expression' },
			],
		},
		{
			name: 'meta.object.member.js',
			begin: '\\.\\.\\.',
			beginCaptures: {
				0: { name: 'keyword.operator.spread.js' },
			},
			end: '(?=,|\\})',
			patterns: [
				{ include: '#expression' },
			],
		},
		{
			name: 'meta.object.member.js',
			match: '([_$[:alpha:]][_$[:alnum:]]*)\\s*(?=,|\\}|$)',
			captures: {
				1: { name: 'variable.other.readwrite.js' },
			},
		},
		{ include: '#punctuationComma' },
	],
};
