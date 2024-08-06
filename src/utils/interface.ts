export interface Goodie {
	name: string;
	price: number;
}

export interface MinPriceDiff { 
	goodies: Goodie[]; 
	difference: number
}

export interface Job {
	startTime: number;
	endTime: number;
	profit: number;
}

export interface ValidationResponse {
	isValid: boolean;
	message?: string;
}
