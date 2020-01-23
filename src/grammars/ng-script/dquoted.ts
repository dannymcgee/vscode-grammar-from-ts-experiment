import { GrammarDefinition } from '../../types/grammar-definition.interface';

// Global repositories
import { statements } from './repository/statements';
import { expression } from './repository/expression';
import { parenExpression } from './repository/paren-expression';
import { identifiers } from './repository/identifiers';
import { functionCall } from './repository/function-call';
import { stringCharacterEscape } from './repository/string-character-escape';
import { literal } from './repository/literal';
import { numericLiteral } from './repository/numeric-literal';
import { booleanLiteral } from './repository/boolean-literal';
import { nullLiteral } from './repository/null-literal';
import { undefinedLiteral } from './repository/undefined-literal';
import { numericConstantLiteral } from './repository/numeric-constant-literal';
import { arrayLiteral } from './repository/array-literal';
import { objectLiteral } from './repository/object-literal';
import { thisLiteral } from './repository/this-literal';
import { punctuationComma } from './repository/punctuation-comma';
import { punctuationSemicolon } from './repository/punctuation-semicolon';
import { punctuationAccessor } from './repository/punctuation-accessor';
import { ternaryOperator } from './repository/ternary-operator';
import { afterOperatorBlock } from './repository/after-operator-block';
import { declBlock } from './repository/decl-block';
import { objectMember } from './repository/object-member';

// Quote-specific repositories
import { string } from './repository/string-dquoted';
import { ternaryExpression } from './repository/ternary-expression-dquoted';
import { objectMemberKeyQuoted } from './repository/object-member-key-dquoted';

const grammar: GrammarDefinition = {
	name: 'Angular Template Script',
	scopeName: 'template-script.dquoted.ng',
	patterns: [
		{ include: '#statements' },
	],
	repository: {
		statements,
		expression,
		parenExpression,
		ternaryExpression,
		identifiers,
		functionCall,
		string,
		stringCharacterEscape,
		literal,
		numericLiteral,
		booleanLiteral,
		nullLiteral,
		undefinedLiteral,
		numericConstantLiteral,
		arrayLiteral,
		objectLiteral,
		thisLiteral,
		punctuationComma,
		punctuationSemicolon,
		punctuationAccessor,
		ternaryOperator,
		afterOperatorBlock,
		declBlock,
		objectMember,
		objectMemberKeyQuoted,
	},
};

export default grammar;
