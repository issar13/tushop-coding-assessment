import { getJobData, getJobNum } from '../utils/input';
import { Job } from '../utils/interface';

const solveProblem1 = async () => {
	let jobCount: number = await getJobNum();
	let jobs: Job[] = [];
	let i = 1;
	while (i <= jobCount) {
		const jobDetails = await getJobData(i);
		jobs = [...jobs, jobDetails];
		i++;
	}
	const earnings = calculateJohnEarnings(jobs);
	console.log('Tasks: ', earnings[0]);
	console.log('Earnings: ', earnings[1]);
	process.exit();
};


function calculateJohnEarnings(jobs: Job[]): [number, number] {
    if (jobs.length === 0) {
        return [0, 0];
    }

    let johnsJobs: Job[] = [];
	jobs.sort((a, b) => b.profit - a.profit);
    const highestProfitJob = jobs[0];
    johnsJobs.push(highestProfitJob);

    // Remove the highest profit job from array
    jobs = jobs.slice(1);

    // Sort remaining jobs by end time in ascending order
    jobs.sort((a, b) => a.endTime - b.endTime);

    const remainingJobs: Job[] = [];

    for (const job of jobs) {
        if (canBeAdded(johnsJobs, job)) {
            johnsJobs.push(job);
        } else {
            remainingJobs.push(job);
        }
    }

    const remainingJobsEarnings = remainingJobs.reduce((sum, job) => sum + job.profit, 0);

    return [remainingJobs.length, remainingJobsEarnings];
}

function canBeAdded(johnsJobs: Job[], job: Job): boolean {
    for (const johnsJob of johnsJobs) {
        if (!(job.startTime >= johnsJob.endTime || job.endTime <= johnsJob.startTime)) {
            return false;
        }
    }
    return true;
}

export { solveProblem1, calculateJohnEarnings };

