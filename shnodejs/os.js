const os = require('os');


console.log(os.platform()); // Gives us the os platform
console.log(os.arch()); // => gives the cpu architecture
console.log(os.cpus());// => returns the cpu
console.log(os.homedir()); // => The home directotry of the current user
/// you could add the .length yo the cpus to know the number of cpus