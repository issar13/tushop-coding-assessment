import readline from 'readline';
import { Job, ValidationResponse } from './interface';
import { validateEmployeeCount, validateJobCount, validateJobDetails, validateProblemNumber } from './validator';

const promptUser = (query: string): Promise<string> => {
	return new Promise((resolve) => {
		const readL = readline.createInterface({
			input: process.stdin,
			output: process.stdout,
		});
		readL.question(query, (answer) => {
			readL.close();
			resolve(answer);
		});
	});
};

const validateInput = async (
	query: string,
	validator: (input: string, goodiesLength?: number) => ValidationResponse,
	goodiesLength?: number
): Promise<string> => {
	let isValid = false;
	let input: string;
	let validation: ValidationResponse;

	do {
		input = await promptUser(query);
		validation = validator(input, goodiesLength);
		if (!validation.isValid) {
			console.log(validation.message);
		} else {
			isValid = true;
		}
	} while (!isValid);

	return input;
};

export const getJobNum = async (): Promise<number> => {
	const input = await validateInput(
		'Enter number of jobs: ',
		validateJobCount
	);
	return parseInt(input);
};

export const getEmployeeNumber = async (goodiesLength: number): Promise<number> => {
	const input = await validateInput(
		'Enter number of employees: ',
		validateEmployeeCount,
		goodiesLength
	);
	return parseInt(input);
};

export const chooseProblemNum = async (): Promise<number> => {
	const input = await validateInput(
		'Enter problem to Solve (1 or 2): ',
		validateProblemNumber
	);
	return parseInt(input);
};

export const getJobData = async (index: number): Promise<Job> => {
	const input = await validateInput(
		`Enter job ${index} start time, end time, and profit separated by space (e.g. 0900 1700 500): `,
		validateJobDetails
	);
	const [startTime, endTime, profit] = input.split(' ').map(Number);
	return { startTime, endTime, profit };
};
