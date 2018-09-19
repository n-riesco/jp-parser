const {processTopLevelAwait} = require('..');
const vm = require('vm');

const code = 'await 42';
const processed = processTopLevelAwait(code);
const expected = 42;

vm.runInThisContext(processed).then(function(obtained) {
    if (expected !== obtained) {
        throw new Error('Test failed: expected=42: obtained=' + obtained);
    }

    console.log('Test passed!');
});
