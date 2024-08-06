import { solveProblem1 } from './problem1';
import { solveProblem2 } from './problem2';
import { chooseProblemNum } from './utils/input';

const selectProblem = async () => {
	let problemChoice: number = await chooseProblemNum();
	if (problemChoice === 1){
        solveProblem1()
    }

    if (problemChoice === 2){
        solveProblem2();

    }
};

selectProblem()