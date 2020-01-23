import { GrammarDefinition } from '../../../types/grammar-definition.interface';

export const numericLiteral: GrammarDefinition = {
	patterns: [
		{
			name: 'constant.numeric.hex.js',
			match: '\\b(?<!\\$)0(x|X)[0-9a-fA-F]+\\b(?!\\$)'
		},
		{
			name: 'constant.numeric.binary.js',
			match: '\\b(?<!\\$)0(b|B)[01]+\\b(?!\\$)'
		},
		{
			name: 'constant.numeric.octal.js',
			match: '\\b(?<!\\$)0(o|O)?[0-7]+\\b(?!\\$)'
		},
		{
			match: '(?x)\n(?<!\\$)(?:\n  (?:\\b[0-9]+(\\.)[0-9]+[eE][+-]?[0-9]+\\b)| # 1.1E+3\n  (?:\\b[0-9]+(\\.)[eE][+-]?[0-9]+\\b)|       # 1.E+3\n  (?:\\B(\\.)[0-9]+[eE][+-]?[0-9]+\\b)|       # .1E+3\n  (?:\\b[0-9]+[eE][+-]?[0-9]+\\b)|            # 1E+3\n  (?:\\b[0-9]+(\\.)[0-9]+\\b)|                # 1.1\n  (?:\\b[0-9]+(\\.)\\B)|                      # 1.\n  (?:\\B(\\.)[0-9]+\\b)|                      # .1\n  (?:\\b[0-9]+\\b(?!\\.))                     # 1\n)(?!\\$)',
			captures: {
				0: { name: 'constant.numeric.decimal.js' },
				1: { name: 'meta.delimiter.decimal.period.js' },
				2: { name: 'meta.delimiter.decimal.period.js' },
				3: { name: 'meta.delimiter.decimal.period.js' },
				4: { name: 'meta.delimiter.decimal.period.js' },
				5: { name: 'meta.delimiter.decimal.period.js' },
				6: { name: 'meta.delimiter.decimal.period.js' },
			},
		},
	],
};
