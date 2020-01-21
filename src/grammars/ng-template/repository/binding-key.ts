import { GrammarDefinition } from '../../../types/grammar-definition.interface';

export const bindingKey: GrammarDefinition = {
	patterns: [
		{
			match: /([\[\(]{1,2})(?:\s*)(@?[-_a-zA-Z0-9.$]*)(?:\s*)([\]\)]{1,2})/,
			captures: {
				1: {
					name: 'punctuation.definition.ng-binding-name.begin.html'
				},
				2: {
					patterns: [
						{
							match: /\./,
							name: 'punctuation.accessor.html'
						}
					]
				},
				3: {
					name: 'punctuation.definition.ng-binding-name.end.html'
				}
			}
		}
	]
};
