// Import version

import orderBuilder from './components/orderBuilder.js';

const orderListener = () => {
    document.getElementById('order').addEventListener('click', orderBuilder.buildOrder);
}

const init = () => {
    orderListener();
};

init();