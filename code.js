const menuHide = document.getElementById("hideMenu");
const menuShow = document.getElementById("showMenu");
const navBar = document.getElementById("menubar");
// const itemMinus = document.getElementById("itemMinus");
// const itemPlus = document.getElementById("itemPlus");
const itemNumber = document.querySelector(".itemNumber");
const theCart = document.getElementById("cart");
const foodImage = document.getElementsByClassName("foodImage");
const cartModel = document.getElementById("cartModel");
const cartPage = document.getElementById("cartPage");
const buttons = document.querySelector('.buttons')
const boxDesc = document.getElementsByClassName("boxDesc");
const theBody = document.getElementsByTagName("body")[0];

menuHide.style.display = "none";
function showMenu(){
    navBar.style.top = "10vh";
    menuShow.style.display = "none";
    menuHide.style.display = "block";

}

function hideMenu(){
    navBar.style.top = "";
    menuShow.style.display = "block";
    menuHide.style.display = "none";
}
// window.onclick = function (e){
//     // console.log(e.target);
//     let close = e.target;

//     if(close.classList[0] === "welcome" ){
//         navBar.style.top = "";
//         menuShow.style.display = "block";
//         menuHide.style.display = "none";
//     }
// }


buttons.addEventListener("click", changeCategory );



function changeCategory(e){
    console.log(e.target);
   
    const selectedButton = e.target;
    const selected = selectedButton.classList[0];
    
    const boxModel = document.getElementsByClassName("boxModel");
    const grill = document.getElementsByClassName("grill");
    const soup = document.getElementsByClassName("soup");
    const healthy = document.getElementsByClassName("healthy");



    for(let i=0; i<boxModel.length; i++){
        boxModel[i].style.display = "none";
    }

    switch(selected){
        case "all":
            console.log("all Catege")
            for(let i=0; i<boxModel.length; i++){
                boxModel[i].style.display = "block";
            }
            break;
        case "grill":
            console.log("grill catege")
            for(let i=0; i<grill.length; i++){
                grill[i].style.display = "block";
            }
            break;
        case "soup":
            console.log("soup catege")
            for(let i=0; i<soup.length; i++){
                soup[i].style.display = "block";
            }
            break; 
        case "healthy":
            console.log("healthy catege")
            for(let i=0; i<healthy.length; i++){
                healthy[i].style.display = "block";
            }
            break;   
        default:
            for(let i=0; i<boxModel.length; i++){
                boxModel[i].style.display = "block";
            };
    }


   
   
    
}


function navLink(){
    navBar.style.top = "";
    menuShow.style.display = "block";
    menuHide.style.display = "none";
}
function showCart(){
    cartPage.style.display = "flex"
}
function hideCart(){
    cartPage.style.display = "none"
}
function addCart(){
    console.log("Hiiiii");
    for(let i=0; i<foodImage.length; i++){
        newImage = foodImage[i].src;
    }
    for(let i=0; i<boxDesc.length; i++){
        newContent = boxDesc[i].innerHTML;
    }
console.log(newImage);

    


    const cartBox = document.createElement('div');
    cartBox.classList.add('cartBox');

    const cartItem = document.createElement('div');
    cartItem.classList.add('cartItem');

    const cartImage = document.createElement('div');
    cartImage.classList.add('cartImage');


    const cartOverlay = document.createElement('div');
    cartOverlay.classList.add('foodOverlay');

    const theImage = document.createElement('img');
    theImage.src = newImage;


    const secondCart = document.createElement('div');
    secondCart.classList.add('cartItem2');


    const cartTitle = document.createElement('div');
    cartTitle.innerHTML = newContent;
    cartTitle.classList.add('cartTitle');

    const cartButton = document.createElement('button');
    cartButton.innerHTML = '<i class="fas fa-times"></i>';
    cartButton.classList.add('cancel');

    const cartOption = document.createElement('div');
    
    const minusBtn = document.createElement('button');
         minusBtn.innerHTML = '<i class="fas fa-minus" id="itemMinus"></i>';
         minusBtn.setAttribute('id', 'minusItem');

        const cartOption2 = document.createElement('p');
        cartOption2.innerHTML = '1';
        cartOption2.classList.add('itemNumber')

        const plusBtn = document.createElement('button');
        plusBtn.classList.add('plusItem');
        plusBtn.innerHTML = '<i class="fas fa-plus" id="itemPlus"></i> ';

    cartOption.classList.add('cartOption');


    cartModel.appendChild(cartBox); //CHECKED

    cartBox.appendChild(cartItem); //CHECKED

    cartItem.appendChild(cartImage); //CHECKED
    cartItem.appendChild(secondCart); //CHECKED

    secondCart.appendChild(cartTitle);

    cartOption.appendChild(minusBtn);
    cartOption.appendChild(cartOption2);
    cartOption.appendChild(plusBtn);

   
    cartTitle.appendChild(cartButton);

    secondCart.appendChild(cartTitle);
    secondCart.appendChild(cartOption);


    cartImage.appendChild(theImage); //CHECKED
    cartImage.appendChild(cartOverlay); //CHECKED
}

// function removeCart(e){
//     console.log("WTF!");
//     console.log(e.target);

// }

const minusItem = document.getElementById('minusItem');
const plusItem = document.getElementsByClassName('plusItem');

// minusItem.addEventListener("click", itemDecrement);
// plusItem.addEventListener("click", itemIncrement);

// minusItem.onclick = function(){
//     var a = 1;
//    console.log("i increase");

//     if(a > 0){
//         let decrement = a--;
//         itemNumber.innerHTML = decrement;
//     }
// }
// plusItem.onclick = function(){
//     var a = 1;
//     let increment = a++;
//     itemNumber.innerHTML = increment
// }
var a = 1;
function itemIncrement(){
   console.log("i increase");
    let increment = a++;
    itemNumber.innerHTML = increment
}
var a = 1;
function itemDecrement(){
    console.log("you decrease");
  
    if(a > 0){
        let decrement = a--;
        itemNumber.innerHTML = decrement;
    }
    
}



const paymentForm = document.getElementById('paymentForm');
// paymentForm.addEventListener("submit", payWithPaystack, false);
function payWithPaystack(e) {
//   e.preventDefault();
  let handler = PaystackPop.setup({
    key: 'pk_test_6aa62fae881943363e20c8f8405c4fa9ecc86624', // Replace with your public key
    email: document.getElementById("email-address").value,
    amount: document.getElementById("amount").value * 100,
    ref: ''+Math.floor((Math.random() * 100000000) + 1), // generates a pseudo-unique reference. Please replace with a reference you generated. Or remove the line entirely so our API will generate one for you
    // label: "Optional string that replaces customer email"
    onClose: function(){
      alert('Window closed.');
    },
    callback: function(response){
      let message = 'Payment complete! Reference: ' + response.reference;
      alert(message);
    }
  });
  handler.openIframe();
}