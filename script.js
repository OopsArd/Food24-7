
var list_food = [];   
var totalCount = 0;   // so luong san pham trong gio

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
    list += `<br><td style="border-radius: .1rem; color: var(--white); padding: .3rem; background-color: var(--orange); text-align: center; font-size:18px; font-weigth: bold">Tổng: ${total_Price} VND<td/>`
    return list;
}


function booking(){
    const address = document.getElementById("address").value;
    const phone = document.getElementById("phone").value;

    const err = "Vui lòng hoàn thiện thông tin thanh toán để đặt hàng";
    const al = "Thức ăn đang được chuẩn bị và giao hàng đến bạn...";
    console.log("info:" + address + " " + phone)

    if(list_food.length <= 0){
        alert("Bạn chưa chọn món")
        return
    }
    if(!address || !phone){
        alert(err)
        return
    }
    
    
    alert(al)
    


}
