import tippy from 'tippy.js';

export function tooltipAction(element: HTMLElement, tooltip: string) {
	const instance = tippy(element, {
		content: tooltip
	});

	return {
		update(tooltip: string) {
			instance.setContent(tooltip);
		},

		destroy() {
			instance.destroy();
		}
	};
}
