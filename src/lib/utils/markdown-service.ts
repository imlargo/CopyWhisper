import TurndownService from 'turndown';
import { marked } from 'marked';

const turndownService = new TurndownService({
	headingStyle: 'atx',
	hr: '---',
	bulletListMarker: '-',
	codeBlockStyle: 'indented',
	fence: '```',
	emDelimiter: '_',
	strongDelimiter: '**',
	linkStyle: 'inlined'
});

export function convertToMarkdown(rawHTML: string): string {
	return turndownService.turndown(rawHTML);
}

export function convertToHtml(markdown: string): string {
	return marked.parse(markdown);
}
