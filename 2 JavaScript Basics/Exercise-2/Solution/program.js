const counter = {
    count: 0,
    increment: function() {
        this.count++;
    },
    decrement: function() {
        this.count--;
    },
    reset: function() {
        this.count = 0;
    }
};

setTimeout(() => {
    counter.increment();
    console.log(`Counter after increment: ${counter.count}`);
}, 1000);

setTimeout(() => {
    counter.increment();
    console.log(`Counter after increment: ${counter.count}`);
}, 2000);

setTimeout(() => {
    counter.decrement();
    console.log(`Counter after decrement: ${counter.count}`);
}, 3000);

setTimeout(() => {
    counter.reset();
    console.log(`Counter after reset: ${counter.count}`);
}, 4000);