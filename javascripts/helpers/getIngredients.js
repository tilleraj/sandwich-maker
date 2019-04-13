import breadInfo from '../helpers/bread.js';
import meatInfo from '../helpers/meat.js';
import cheeseInfo from '../helpers/cheese.js';
import veggieInfo from '../helpers/veggie.js';
import condimentInfo from '../helpers/condiment.js';

const breads = breadInfo.getBreadInfo();
const meats = meatInfo.getMeatInfo();
const cheeses = cheeseInfo.getCheeseInfo();
const veggies = veggieInfo.getVeggieInfo();
const condiments = condimentInfo.getCondimentInfo();

const getBread = () => {
    let breadArray = [];
    let breadBoxes = Array.from(document.getElementById('breads').getElementsByClassName('form-check-input'));
    breadBoxes.forEach((box) => {
        if (box.checked) {
            breadArray.push([box.id, breads[box.id]]);
        }
    });
    return breadArray;
}

const getMeat = () => {
    let meatArray = [];
    let meatBoxes = Array.from(document.getElementById('meats').getElementsByClassName('form-check-input'));
    meatBoxes.forEach((box) => {
        if (box.checked) {
            meatArray.push([box.id, meats[box.id]]);
        }
    });
    return meatArray;
}

const getCheese = () => {
    let cheeseArray = [];
    let cheeseBoxes = Array.from(document.getElementById('cheeses').getElementsByClassName('form-check-input'));
    cheeseBoxes.forEach((box) => {
        if (box.checked) {
            cheeseArray.push([box.id, cheeses[box.id]]);
        }
    });
    return cheeseArray;
}

const getVeggie = () => {
    let veggieArray = [];
    let veggieBoxes = Array.from(document.getElementById('veggies').getElementsByClassName('form-check-input'));
    veggieBoxes.forEach((box) => {
        if (box.checked) {
            veggieArray.push([box.id, veggies[box.id]]);
        }
    });
    return veggieArray;
}

const getCondiment = () => {
    let condimentArray = [];
    let condimentBoxes = Array.from(document.getElementById('condiments').getElementsByClassName('form-check-input'));
    condimentBoxes.forEach((box) => {
        if (box.checked) {
            condimentArray.push([box.id, condiments[box.id]]);
        }
    });
    return condimentArray;
}

export default { getBread, getMeat, getCheese, getVeggie, getCondiment };