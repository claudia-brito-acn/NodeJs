const timerId = setTimeout(
    () => console.log('You will see this one!'),0
);

clearTimeout(timerId);
// clearInterval
// clearImmediate