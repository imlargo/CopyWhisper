import type { PageData, Rate } from '$lib/types';

interface StorePage {
	data: PageData | null;
	rate: Rate | null;
	ok: boolean;
}

class StorePage implements StorePage {
	data: PageData | null = $state(null);
	rate: Rate | null = $state(null);
	ok: boolean = $state(false);

	/*
	 inicializar la store con los datos base de la pagina
	 */
	init(pageData: PageData) {
		this.ok = true;
		this.data = pageData;
	}

	/*
	 guardar la calificación de la página
	 */
	setRate(rate: Rate) {
		console.log(rate);
		this.rate = rate;
	}
}

export const storePage = new StorePage();
