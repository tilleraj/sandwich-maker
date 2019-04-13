
const orderStringBuilder = (orderArray) => {
    let orderString = '';

    orderArray.forEach(element => {
        if (element.length !== 0) {
            element.forEach(item => {
                if (item.length === 1) {
                    // it's a header
                } else if (item.length > 1) {
                    orderString += `<p>${item[0]}: $${item[1]}</p>`;
                }
            });
        }
    });

    return orderString;
};

export default { orderStringBuilder };