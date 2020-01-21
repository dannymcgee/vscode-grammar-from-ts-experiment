import * as fs from 'fs';

import { GrammarDefinition } from '../src/types/grammar-definition.interface';
import { JsonObject } from '../src/types/json-object.interface';

import ngTemplate from '../src/grammars/ng-template';

const processGrammar = (grammar: GrammarDefinition | GrammarDefinition[]): JsonObject => {
	const processedGrammar: JsonObject = {};

	for (const [key, value] of Object.entries(grammar)) {
		processedGrammar[key] =
			(typeof value === 'string')
				? value :
			(value instanceof RegExp)
				? value.toString().replace(/^\/|\/$/g, '') :
			(value instanceof Array)
				? value.map(processGrammar)
				: processGrammar(value)
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
