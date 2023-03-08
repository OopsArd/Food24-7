
var list_food = [];
var totalCount = 0;

const addToCart = (food) =>  {

    // lay thong tin food
    var info = food.parentNode.parentNode;
    let name = info.children[1].children[0].innerText;
    let img = info.children[0].src;
    let price = food.children[0].innerText;
    let count = 1;
    let flag = 1;
    
    // kiem tra co ton tai trong gio hang chua
    // neu co roi thi tang so luong len 1
    for(let i = 0; i < list_food.length; i++){
        if(list_food[i][0] === name){
            list_food[i][3]+= count;
            flag = 0;
        }
    }

    // neu chua thi them vao gio
    if(flag === 1){
        let item = [name, img, price, count];
        list_food.push(item);
        console.log(list_food);
        totalCount++;
    }
    document.getElementById("my-cart").innerHTML = showCart();
    document.getElementById("count").innerText = totalCount;
}

function showCart(){

    var list = [];
    var total_Price = 0;

    for(let i = 0; i < list_food.length; i++)
    {
        list += 
                `<tr> 
                    <td style="text-align: center">${list_food[i][0]}</td>
                    <td style="text-align: center">${list_food[i][3]}</td>
                    <td style="text-align: center">${list_food[i][2] * list_food[i][3]} VND</td>
                </tr>`;

       // Tổng tiền 
       total_Price += Number(list_food[i][2] * list_food[i][3]);
    }
    list += `<br><td colspan=3 style="text-align: center">Tổng: ${total_Price} VND<td/>`
    return list;
}

