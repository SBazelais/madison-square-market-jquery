const $cart = $('#cart');
const $account = $('#account')
const $help = $('#help')

const $cartMenu = $("#cartMenu");
const $accountMenu= $("#accountMenu");
const $helpMenu = $("#helpMenu");

$cart.mouseover(()=>{
    $cartMenu.show()
})


$account.mouseover(()=>{
    $accountMenu.show()
});

$help.mouseover(()=>{
    $helpMenu.show()
});


$cart.mouseleave(()=>{
    $cartMenu.hide()
})

$accountMenu.mouseleave(()=>{
    $accountMenu.hide()
})

$helpMenu.mouseleave(()=>{
    $helpMenu.hide()
})