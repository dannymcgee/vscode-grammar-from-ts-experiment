import * as fs from 'fs';

import { GrammarDefinition } from '../src/types/grammar-definition.interface';
import { JsonObject } from '../src/types/json-object.interface';

import ngTemplate from '../src/grammars/ng-template';

const processGrammar = (grammar: GrammarDefinition | GrammarDefinition[]): JsonObject => {
	const processedGrammar: JsonObject = {};

	for (const [key, value] of Object.entries(grammar)) {
		if (typeof value === 'string') {
			processedGrammar[key] = value;
		} else if (value instanceof RegExp) {
			processedGrammar[key] = value.toString().replace(/^\/|\/$/g, '');
		} else if (value instanceof Array) {
			processedGrammar[key] = value.map(processGrammar);
		} else {
			processedGrammar[key] = processGrammar(value);
		}
	}

	return processedGrammar;
}

const generate = (grammar: GrammarDefinition): void => {
	const newGrammar: JsonObject = processGrammar(grammar);
	const grammarContent = JSON.stringify(newGrammar, null, '  ');

	fs.writeFile('dist/grammars/ng-template.tmLanguage.json', grammarContent, (error) => {
		if (error) throw error;
		console.log('File written!');
	});
}

generate(ngTemplate);
