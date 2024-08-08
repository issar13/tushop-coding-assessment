import { getEmployeeNumber } from "../utils/input";
import { Goodie, MinPriceDiff } from "../utils/interface";
import * as fs from 'fs';


const calculateMinPriceDiff = (
	goodies: Goodie[],
	number_of_employees: number
): MinPriceDiff | null => {
	if (number_of_employees < 1 || number_of_employees > goodies.length) {
		return null;
	}

	goodies.sort((a, b) => a.price - b.price);

	let minDifference = Infinity;
	let selectedGoodies: Goodie[] = [];

	for (let i = 0; i <= goodies.length - number_of_employees; i++) {
		const difference =
			goodies[i + number_of_employees - 1].price - goodies[i].price;
		if (difference < minDifference) {
			minDifference = difference;
			selectedGoodies = goodies.slice(i, i + number_of_employees);
		}
	}

	return { goodies: selectedGoodies, difference: minDifference };
};



const solveProblem2 = async () => {
	const fileList = fs.readFileSync(`src/problem2/files/sample.input.txt`, 'utf8');
	const lines = fileList.split('\n');

	const goodies: Goodie[] = [];
	for (let i = 2; i < lines.length; i++) {
		const [name, priceString] = lines[i].split(':');
		const price = parseInt(priceString.trim(), 10);
		goodies.push({ name: name.trim(), price });
	}

	const numberOfEmployees = await getEmployeeNumber(goodies.length)

	const result = calculateMinPriceDiff(goodies, numberOfEmployees);
	if(!result){
		return console.error('Invalid input for the number of employees.');
	}
	try {
		let output = 'The goodies selected for distribution are:\n';
		for (const goodie of result.goodies) {
			output += `${goodie.name}: ${goodie.price}\n`;
		}
		output += `And the difference between the chosen goodie with highest price and the lowest price is ${result.difference}\n`;

		await fs.writeFileSync(`src/problem2/files/sample.output.txt`, output, 'utf8');
		console.log('The file output is: \n', output)
		return result
	} catch (error) {
		
	}
		
	
};

export { solveProblem2, calculateMinPriceDiff };
