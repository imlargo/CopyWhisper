import type { PageData, Encabezado } from '$lib/types';
import { convertToMarkdown, convertToHtml } from '$src/lib/utils/markdown-service';

function parseHTML(rawHtml: string) {
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
		return injectChild(lastItem.children, item);
	}
}

function getTree(encabezados: Encabezado[]) {
	const tree = [{ encabezado: encabezados[0], children: [] }];

	for (let i = 1; i < encabezados.length; i++) {
		const encabezado = encabezados[i];
		injectChild(tree, { encabezado: encabezado, children: [] });
	}

	return tree;
}

export async function getPage(link: string) {
	const isFull = link.startsWith('http://') || link.startsWith('https://');

	try {
		const response = await fetch(isFull ? link : `https://${link}`);
		const rawHtml = await response.text();
		const dom = parseHTML(rawHtml);


		const titulo = dom.querySelector('title').textContent;
		const descripcion = dom.querySelector('meta[name="description"]')?.getAttribute('content') || '';
		const encabezados = getEncabezados(dom);
		const tree = getTree(encabezados);
		const markdown = convertToMarkdown(dom.querySelector('body').innerHTML.trim().replace(/\s+/g, ' '));
		const renderedMarkdown = convertToHtml(markdown);

		const data: PageData = {
			link: isFull ? link : link,
			data: rawHtml,

			titulo,
			descripcion,
			encabezados,
			tree,
			markdown,
			renderedMarkdown,
		};

		return data;
	} catch (error) {
		return null;
	}
}
