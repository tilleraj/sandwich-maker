// Helpers
import breadInfo from '../helpers/bread.js';
import meatInfo from '../helpers/meat.js';
import cheeseInfo from '../helpers/cheese.js';
import veggieInfo from '../helpers/veggie.js';
import orderString from '../helpers/orderString.js';
import util from '../helpers/util.js';

const buildOrder = (e) => {
    e.preventDefault();
    const breads = breadInfo.getBreadInfo();
    const meats = meatInfo.getMeatInfo();
    const cheeses = cheeseInfo.getCheeseInfo();
    const veggies = veggieInfo.getVeggieInfo();
    let order = [];

    let breadBoxes = Array.from(document.getElementById('breads').getElementsByClassName('form-check-input'));
    breadBoxes.forEach((box) => {
        if (box.checked) {
            order.push([box.id, breads[box.id]]);
        }
    });

    let meatBoxes = Array.from(document.getElementById('meats').getElementsByClassName('form-check-input'));
    meatBoxes.forEach((box) => {
        if (box.checked) {
            order.push([box.id, meats[box.id]]);
        }
    });

    let cheeseBoxes = Array.from(document.getElementById('cheeses').getElementsByClassName('form-check-input'));
    cheeseBoxes.forEach((box) => {
        if (box.checked) {
            order.push([box.id, cheeses[box.id]]);
        }
    });

    let veggieBoxes = Array.from(document.getElementById('veggies').getElementsByClassName('form-check-input'));
    veggieBoxes.forEach((box) => {
        if (box.checked) {
            order.push([box.id, veggies[box.id]]);
        }
    });

    console.log(order);
    util.printToDom('orderDiv', orderString.orderStringBuilder(order));
};

export default { buildOrder };