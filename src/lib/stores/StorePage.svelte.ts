import type { PageData, Rate } from '$lib/types';
import { pageState } from '$utils/enums';

class StorePage {
	data: PageData | null = $state(null);
	rate: Rate | null = $state(null);
	estado: number = $state(pageState.WAITING);

	/*
	 inicializar la store con los datos base de la pagina
	 */
	init(pageData: PageData) {
		this.estado = pageState.OK;
		this.data = pageData;
	}

	/*
	 guardar la calificación de la página
	 */
	setRate(rate: Rate) {
		this.estado = pageState.ANALIZADO;
		console.log(rate);
		this.rate = rate;
	}

	/*
	 limpiar la store
	 */
	reset() {
		this.data = null;
		this.rate = null;
		this.estado = pageState.WAITING;
	}
}

export const storePage = new StorePage();
