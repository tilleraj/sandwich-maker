// Helpers
import getIngredients from '../helpers/getIngredients.js';
import orderString from '../helpers/orderString.js';
import util from '../helpers/util.js';

const buildOrder = (e) => {
    e.preventDefault();
    let order = [];

    order.push(getIngredients.getBread());
    order.push(getIngredients.getMeat());
    order.push(getIngredients.getCheese());
    order.push(getIngredients.getVeggie());
    order.push(getIngredients.getCondiment());

    console.log(order);
    util.printToDom('orderDiv', orderString.orderStringBuilder(order));
};

export default { buildOrder };