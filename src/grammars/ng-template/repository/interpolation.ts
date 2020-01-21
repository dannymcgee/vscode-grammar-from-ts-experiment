import { GrammarDefinition } from '../../../types/grammar-definition.interface';

export const interpolation: GrammarDefinition = {
	begin: /{{/,
	beginCaptures: {
		0: {
			name: 'punctuation.definition.block.ts'
		}
	},
	end: /}}/,
	endCaptures: {
		0: {
			name: 'punctuation.definition.block.ts'
		}
	},
	contentName: 'template-script.ng',
	patterns: [
		{ include: 'template-script.ng' }
	]
};
