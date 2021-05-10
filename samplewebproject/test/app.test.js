const assert = require('assert');
const render = require('../../render');

it('has a text input', async () => {
    const dom = await render('index.html');
    const input = dom.window.document.querySelector('input');

    assert(input);
});

it('shows a success message on valid email', async () => {
    const dom = await render('index.html');

    const input = dom.window.document.querySelector('input');

    input.value="asdasdas@dasd.com";
    dom.window.document
        .querySelector('form')
            .dispatchEvent(new dom.window.Event('submit'));

    const h1 = dom.window.document.querySelector('h1');
    assert.strictEqual(h1.innerHTML, 'Looks good!')
    
});

it('shows an fail message on invalid email', async () => {
    const dom = await render('index.html');

    const input = dom.window.document.querySelector('input');

    input.value="asdasdasd";
    dom.window.document.querySelector('form')
        .dispatchEvent(new dom.window.Event('submit'));

    const h1 = dom.window.document.querySelector('h1');
    assert.strictEqual(h1.innerHTML, 'Invalid email');
})