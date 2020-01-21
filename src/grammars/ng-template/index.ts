import { GrammarDefinition } from '../../types/grammar-definition.interface';

import { interpolation } from './repository/interpolation';
import { propertyBinding } from './repository/property-binding';
import { eventBinding } from './repository/event-binding';
import { bindingKey } from './repository/binding-key';

const grammar: GrammarDefinition = {
	scopeName: 'template.ng',
	injectionSelector: 'L:text.html -comment',
	patterns: [
		{ include: '#interpolation' },
		{ include: '#propertyBinding' },
		{ include: '#eventBinding' },
	],
	repository: {
		interpolation,
		propertyBinding,
		eventBinding,
		bindingKey,
	}
}

export default grammar;
