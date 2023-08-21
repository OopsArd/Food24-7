
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
        totalCount++;
    }
    document.getElementById("cart-items").innerHTML = showCart();
    document.getElementById("count-product").innerText = list_food.length;
}

const showCart = () =>{

    var list_add = [];
    var total_Price = 0;

    for(let i = 0; i < list_food.length; i++)
    {
        list_add += 
                `<div class="cart-item">
                    <div class="cart-item-left"> 
                        <span class="item-stt">${i+1}</span>
                        <span class="item-name">${list_food[i][0]}</span>
                    </div>

                    <div class="cart-item-right">
                        <span class="item-count">
                            <button onclick="btnDecrease(this)" class="btn-decrease">-</button>
                            <span class="count">${list_food[i][3]} </span>
                            <button onclick="btnIncrease(this)" class="btn-increase">+</button>
                        </span>
                        <span class="item-price">${list_food[i][2] * list_food[i][3]} VND</span>
                        <button oncli="deleteFood(this)" class="btn-delete">Hủy</button>
                    </div>
                    
                </div>`;

       // Tổng tiền 
       total_Price += Number(list_food[i][2] * list_food[i][3]);
    }
    list_add += `<br><span class="total-price">Tổng: ${total_Price} VND<span/>`
    return list_add;
}


const booking = () =>{
    const address = document.getElementById("address").value;
    const phone = document.getElementById("phone").value;

    const err = "Vui lòng hoàn thiện thông tin thanh toán để đặt hàng";
    const err1 = "Bạn chưa chọn món";
    const success = "Thức ăn đang được chuẩn bị và giao hàng đến bạn...";


    let alert_form = document.getElementById('alert');
    console.log(alert_form?.classList)
    let alert_content = document.getElementById('alert-content');

    if(list_food.length <= 0){
        alert_content.innerText = err1;
        alert_form?.classList?.add('active');
        return
    }
    if(!address || !phone){
        alert_content.innerText = err;
        alert_form?.classList?.add('active');
        return
    }
    alert_content.innerText = success;
    alert_form?.classList?.add('active');
}

//show cart form
const iconCart = () => document.getElementById("cart-form").style.display = "block";


//close cart form
const closeCartForm = () => document.getElementById("cart-form").style.display = "none";


// đóng alert
const exit = () => {
    document.getElementById('alert').classList.remove('active')
}

// css input
const target_address = document.getElementById('address');
target_address.addEventListener('focus', () => {
    document.getElementById('span-address').classList.add('typing');
})

target_address.addEventListener('blur', () => {
    let text = document.getElementById("address").value;
    if(!text){
        document.getElementById('span-address').classList.remove('typing');
    }
})

const target_phone = document.getElementById('phone');
target_phone.addEventListener('focus', () => {
    document.getElementById('span-phone').classList.add('typing');
})

target_phone.addEventListener('blur', () => {
    let text = document.getElementById("phone").value;
    if(!text){
        document.getElementById('span-phone').classList.remove('typing');
    }
})


