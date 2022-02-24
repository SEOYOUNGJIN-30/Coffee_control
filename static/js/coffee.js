
$(document).ready(function () {
    listing();
});

/*Get 방식 확인*/
function listing() {
    $.ajax({
        type: 'GET',
        url: '/order_list',
        data: {},
        success: function (response) {
            let coffees = response['coffee_order']
            for (let i = 0; i < coffees.length; i++) {
                let name = coffees[i]['name'];
                let body = coffees[i]['body'];
                let acidity = coffees[i]['acidity'];
                let sweet = coffees[i]['sweet'];
                let flavor = coffees[i]['flavor'];
                let bitter = coffees[i]['bitter'];

                // delete_orders('${name}')
                let temp_html = `
                                              <tr>
                                                <td>${name}</td>
                                                    <td>${body}</td>
                                                    <td>${acidity}</td>
                                                    <td>${sweet}</td>
                                                    <td>${flavor}</td>
                                                    <td>${bitter}</td>
                                                    <th><button onclick="delete_orders('${name}')">삭제하기</button></th>
                                                </tr>`

                $('#orders-box').append(temp_html)
            }
        }
    })
}


/*post 방식*/
function order() {
    let name = $('#order-name').val();
    let body = $('#order-body').val();
    let acidity = $('#order-acidity').val();
    let sweet = $('#order-sweet').val();
    let flavor = $('#order-flavor').val();
    let bitter = $('#order-bitter').val();
    let comments = $('#order-comments').val();
    // debugger;
    $.ajax({
        type: "POST",
        url: "/order",
        data: {
            name_give: name, body_give: body, acidity_give: acidity, sweet_give: sweet,
            flavor_give: flavor, bitter_give: bitter, Comments_give: comments
        },
        success: function (response) {

            // debugger;
            if (response["result"] == "success") {
                // debugger;
                alert(response["msg"]);
                window.location.reload();
            }
        }
    })
}


/*delete 방식*/
function delete_orders(name) {
    $.ajax({
        type: 'POST',
        url: '/order_delete',
        data: {name_give: name},
        success: function (response) {
            alert(response['msg']);
            window.location.reload()
        }
    });
}