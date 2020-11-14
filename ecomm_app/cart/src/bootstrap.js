import faker from 'faker';

const mount = (el) => {
    let cartText = `<div>You have ${faker.random.number()} products.</div>`;

    el.innerHTML = cartText;
}

if (process.env.NODE_ENV === 'development') {
    const el = document.querySelector('#cart-dev-only');
    if (el) {
        mount(el);
    }
}

export {
    mount
}