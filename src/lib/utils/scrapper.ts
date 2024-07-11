import type { PageData, Encabezado, HeaderTree } from '$lib/types';
import { convertToMarkdown, convertToHtml } from '$src/lib/utils/markdown-service';

function parseHTML(rawHtml: string): HTMLElement {
	const element = document.createElement('html');
	element.innerHTML = rawHtml;

	return element;
}

function getEncabezados(dom: HTMLElement): Encabezado[] {
	const headers = dom.querySelectorAll('h1, h2, h3, h4, h5, h6');

	return Array.from(headers).map((header) => {
		return {
			tag: header.tagName,
			texto: header.textContent
		};
	});
}

function injectChild(tree, item): void {
	const lastItem = tree.at(-1);

	if (
		!lastItem ||
		parseInt(lastItem.encabezado.tag.slice(1)) >= parseInt(item.encabezado.tag.slice(1))
	) {
		tree.push(item);
	} else {
		return injectChild(lastItem.hijos, item);
	}
}

function getTree(encabezados: Encabezado[]): HeaderTree[] {
	const tree: HeaderTree[] = [{ encabezado: encabezados[0], hijos: [] }];

	for (let i = 1; i < encabezados.length; i++) {
		const encabezado = encabezados[i];
		injectChild(tree, { encabezado: encabezado, hijos: [] });
	}

	return tree;
}

function clearDOM(htmlElement: HTMLElement) {
	const deleteItem = (element: HTMLElement, selector: string) =>
		element.querySelectorAll(selector).forEach((s) => s.remove());

	deleteItem(htmlElement, 'script');
	deleteItem(htmlElement, 'style');
	deleteItem(htmlElement, 'img');
	deleteItem(htmlElement, 'link');
	deleteItem(htmlElement, 'noscript');
	deleteItem(htmlElement, 'iframe');
	deleteItem(htmlElement, 'svg');
	deleteItem(htmlElement, 'a');
	deleteItem(htmlElement, 'nav');

	return htmlElement;
}

export async function getPage(link: string) {
	const isFull = link.startsWith('http://') || link.startsWith('https://');

	try {
		const rawHtml = await fetch('/api/urlService', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ link: isFull ? link : `https://${link}` })
		}).then((res) => res.text());

		console.log(rawHtml);

		const dom = clearDOM(parseHTML(rawHtml));

		console.log(dom);

		const titulo = dom.querySelector('title')?.textContent;
		const descripcion =
			dom.querySelector('meta[name="description"]')?.getAttribute('content') || '';
		const encabezados = getEncabezados(dom);
		const tree = getTree(encabezados);
		const markdown = convertToMarkdown(dom.querySelector('body') as HTMLElement);
		const renderedMarkdown = convertToHtml(markdown);

		const data: PageData = {
			link: isFull ? link : link,
			data: rawHtml,

			titulo,
			descripcion,
			encabezados,
			tree,
			markdown,
			renderedMarkdown
		};

		return data;
	} catch (error) {
		console.log(error);

		return null;
	}
}
