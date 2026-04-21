// Scheduling is how the processor decides which jobs (processes) get to use the 
// processor and for how long. This can cause a lot of problems. Like a really long 
// process taking the entire CPU and freezing all the other processes. One solution is 
// Round-Robin, which today you will be implementing.

// Round-Robin works by queuing jobs in a First In First Out fashion, but the processes are 
// only given a short slice of time. If a processes is not finished in that time slice, it 
// yields the proccessor and goes to the back of the queue.

// For this Kata you will be implementing the

//    function roundRobin(jobs, slice, index)
// It takes in:

// 1. "jobs" a non-empty positive integer array. It represents the queue and clock-cycles(cc) 
// remaining till the job[i] is finished.

// 2. "slice" a positive integer. It is the amount of clock-cycles that each job is given till 
// the job yields to the next job in the queue.

// 3. "index" a positive integer. Which is the index of the job we're interested in.
// roundRobin returns:

// 1. the number of cc till the job at index is finished.
// Here's an example:

// roundRobin([10,20,1], 5, 0) 
// at 0cc [10,20,1] jobs[0] starts
// after 5cc [5,20,1] jobs[0] yields, jobs[1] starts
// after 10cc [5,15,1] jobs[1] yields, jobs[2] starts
// after 11cc [5,15,0] jobs[2] finishes, jobs[0] starts
// after 16cc [0,15,0] jobs[0] finishes
// so:

// roundRobin([10,20,1], 5, 0) == 16
// **You can assume that the processor can switch jobs between cc so it does not 
// add to the total time.

function roundRobin(jobs, slice, index){
    const queue = jobs.map((job, i)=> [job, i]);
    let time = 0;

    while(queue.length !== 0){
        time += Math.min(slice, queue[0][0]);
        queue[0][0] = Math.max(0, queue[0][0] - slice);

        if(queue[0][1] === index && queue[0][0] <= 0){
            break;
        }

        if(queue[0][0] !== 0){
            const removed = queue.shift()
            queue.push(removed);
        } else {
            queue.shift()
        }
    }

    return time;
}