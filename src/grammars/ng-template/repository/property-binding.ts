import { GrammarDefinition } from '../../../types/grammar-definition.interface';

export const propertyBinding: GrammarDefinition = {
	begin: /(\[\s*@?[-_a-zA-Z0-9.$]*\s*])(=)(["'])/,
	beginCaptures: {
		1: {
			name: 'entity.other.attribute-name.html entity.other.ng-binding-name.property.html',
			patterns: [
				{
					include: '#bindingKey'
				}
			]
		},
		2: {
			name: 'punctuation.separator.key-value.html'
		},
		3: {
			name: 'string.quoted.html punctuation.definition.string.begin.html'
		}
	},
	end: /(?<!\\)\3/,
	endCaptures: {
		0: {
			name: 'string.quoted.html punctuation.definition.string.end.html'
		}
	},
	name: 'meta.ng-binding.property.html',
	contentName: 'template-script.ng',
	patterns: [
		{ include: 'template-script.ng' }
	]
};
