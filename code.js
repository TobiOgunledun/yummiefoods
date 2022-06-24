const menuHide = document.getElementById("hideMenu");
const menuShow = document.getElementById("showMenu");
const navBar = document.getElementById("menubar");
const paymentContainer = document.getElementById("payment");
const theCart = document.getElementById("cart");
const foodImage = document.getElementById("foodImage");
const cartModel = document.getElementById("cartModel");
const boxDesc = document.querySelector(".boxDesc");
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

function navLink(){
    navBar.style.top = "";
    menuShow.style.display = "block";
    menuHide.style.display = "none";
}
function showCart(){
    theCart.style.left = "0";
    theBody.style.overflow = "hidden";
}
function hideCart(){
    theCart.style.left = "-100vw";
    theBody.style.overflow = "";
}
paymentContainer.style.display = "none";
function checkOut(){
    theCart.style.left = "-100vw";
    paymentContainer.style.display = "block";
    theBody.style.overflow = "hidden";

}
function closeCheckOut(){
    paymentContainer.style.display = "none";
    theBody.style.overflow = "";

}
function addCart(){
    console.log("Hiiiii");
console.log(foodImage.src);

    const cartBox = document.createElement('div');
    cartBox.classList.add('cartBox');

    const cartItem = document.createElement('div');
    cartItem.classList.add('cartItem');

    const cartImage = document.createElement('div');
    cartImage.classList.add('cartImage');

    const theImage = document.createElement('img');
    theImage.src = foodImage.src;

    const cartTitle = document.createElement('div');
    cartTitle.innerHTML = boxDesc.innerHTML;
    cartTitle.classList.add('cartTitle');

    const cartButton = document.createElement('button');
    cartButton.innerHTML = '<i class="fas fa-times"></i>';
    cartButton.classList.add('cancel');

    const cartOption = document.createElement('div');
    cartOption.innerHTML = '<i class="fas fa-minus"></i>';

        const cartOption2 = document.createElement('div');
        cartOption2.innerHTML = '<input type="number" min="1">';

        const cartOption3 = document.createElement('div');
        cartOption3.innerHTML = '<i class="fas fa-plus"></i>';

    cartOption.classList.add('cartOption');


    cartModel.appendChild(cartBox);

    cartBox.appendChild(cartItem);
    cartBox.appendChild(cartOption);

    cartOption.appendChild(cartOption2);
    cartOption.appendChild(cartOption3);

    cartItem.appendChild(cartImage);
    cartItem.appendChild(cartTitle);
    cartItem.appendChild(cartButton);

    cartImage.appendChild(theImage);
}

function removeCart(e){
    console.log("WTF!");
    console.log(e.target);

}
