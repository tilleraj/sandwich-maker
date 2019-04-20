
const orderStringBuilder = (orderArray) => {
    let orderString = '';
    let total = 0;
    orderString += `<table class="table receipt col-12 col-sm-10 offset-sm-1 col-md-8 offset-md-2 col-lg-6 offset-lg-3">`;
    orderString += `  <thead>`;
    orderString += `    <tr class="table-secondary">`;
    orderString += `      <th scope="col">Ingredient</th>`;
    orderString += `      <th scope="col">Price</th>`;
    orderString += `    </tr>`;
    orderString += `  </thead>`;
    orderString += `  <tbody>`;
    orderArray.forEach(element => {
        if (element.length !== 0) {
            element.forEach(item => {
                if (item.length === 1) {
                    orderString += `<tr class="table-secondary">`;
                    orderString += `  <td><b>${item[0]}</b></td>`;
                    orderString += `  <td></td>`;
                    orderString += `</tr>`;
                } else if (item.length > 1) {
                    orderString += `<tr>`;
                    orderString += `  <td>${item[0]}</td>`;
                    orderString += `  <td>$${item[1].toFixed(2)}</td>`;
                    orderString += `</tr>`;
                    total += item[1];
                }
            });
        }
    });
    orderString += `    <tr class="table-success">`;
    orderString += `      <td>Total</td>`;
    orderString += `      <td>$${total.toFixed(2)}</td>`;
    orderString += `    </tr>`;
    orderString += `  </tbody>`;
    orderString += `</table>`;
    return orderString;
};

export default { orderStringBuilder };
