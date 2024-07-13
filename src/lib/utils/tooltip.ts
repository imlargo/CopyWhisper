import tippy from 'tippy.js';

export function tooltipAction(element: HTMLElement, tooltip: string) {
	tippy(element, {
		content: tooltip
	});
}
