const removeDuplicateObjectsAndGetCount = (arr) => {
    let pidCounts = {};

   // Filtering out redundant pids and updating their counts
    arr.forEach(item => {
    let pid = item.pid;
    if (pidCounts[pid]) {
        pidCounts[pid] += 1; // Increment the count if pid already exists
    } else {
        pidCounts[pid] = 1; // Initialize the count to 1 if pid is encountered for the first time
    }
    });

     // Creating an array of objects with pid and count properties
     let result = Object.keys(pidCounts).map(pid => {
         return {pid: pid, count: pidCounts[pid]};
     });

    return { uniqueArr, deletedCount, deletedDuplicates };
  }

  module.export = removeDuplicateObjectsAndGetCount