// Helpers
import breadInfo from '../helpers/bread.js';
import orderString from '../helpers/orderString.js';

// Variables
const breads = breadInfo.getBreadInfo();
const order = [];

const buildOrder = (e) => {
    e.preventDefault();
    let checkBoxes = Array.from(document.getElementsByClassName('form-check-input'));
    checkBoxes.forEach((box) => {
        if (box.checked) {
            console.log(`${box.id} is checked`);
            console.log(`bread.${box.id} returns ${breads[box.id]}`);
            order.push([box.id, breads[box.id]]);
        }
    });
    console.log(order);
    const selectedDiv = document.getElementById('orderDiv');
    selectedDiv.innerHTML = orderString.orderStringBuilder(order);
};

export default { buildOrder };