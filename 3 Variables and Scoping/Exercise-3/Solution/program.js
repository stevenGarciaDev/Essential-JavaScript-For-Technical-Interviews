function testScopes() {
    if (true) {
        var functionScope = 'var is function scope';
        let letBlockScope = 'let is block scope';
        const constBlockScope = 'const is block scope';

        console.log(`Inside the block: ${functionScope}, ${letBlockScope}, ${constBlockScope}`);
    }
    console.log(`Outside the block: ${functionScope}, ${letBlockScope}, ${constBlockScope}`);
}

testScopes();