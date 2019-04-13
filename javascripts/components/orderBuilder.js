// Helpers
import breadInfo from '../helpers/bread.js';
import orderString from '../helpers/orderString.js';
import util from '../helpers/util.js';

const buildOrder = (e) => {
    e.preventDefault();
    const breads = breadInfo.getBreadInfo();
    let order = [];

    let checkBoxes = Array.from(document.getElementsByClassName('form-check-input'));
    checkBoxes.forEach((box) => {
        if (box.checked) {
            // console.log(`${box.id} is checked`);
            // console.log(`bread.${box.id} returns ${breads[box.id]}`);
            order.push([box.id, breads[box.id]]);
        }
    });
    console.log(order);
    util.printToDom('orderDiv', orderString.orderStringBuilder(order));
};

export default { buildOrder };