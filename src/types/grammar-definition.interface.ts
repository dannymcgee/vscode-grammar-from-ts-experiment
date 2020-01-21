export interface GrammarDefinition {
	[key: string]: string | RegExp | GrammarDefinition | GrammarDefinition[];
}
