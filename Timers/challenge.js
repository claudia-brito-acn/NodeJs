const theOneFunc = delay => {
    console.log('Hello ' + delay + ' seconds');
};

setTimeout(theOneFunc, 4 * 1000, 4);
setTimeout(theOneFunc, 8 * 1000, 8);

//Hello after 4 seconds 