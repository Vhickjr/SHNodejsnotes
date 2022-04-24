const fs = require('fs');





fs.readFile('./file.txt', "utfs", (err,data) => {
    if (err) {
    console.error(err);
    return;
}
console.log(data);
});