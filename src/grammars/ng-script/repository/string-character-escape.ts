import { GrammarDefinition } from '../../../types/grammar-definition.interface';

export const stringCharacterEscape: GrammarDefinition = {
	name: 'constant.character.escape.js',
	match: '\\\\(x\\h{2}|[0-2][0-7]{0,2}|3[0-6][0-7]?|37[0-7]?|[4-7][0-7]?|.|$)'
};
