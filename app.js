var items = $.map(MRM.analytics.cartItems, function(value, index) {
    return [value];
});

var value = 0;
var itemCount = 0;
addCosts = items.map(function(item){
  itemCount ++;
  value += item.price;
  return value;
});

console.log("You have " + itemCount + " items in the shopping cart.");
console.log("The total cost of these " + itemCount + " items is " + "$" + value.toFixed(2));

function getScrollPercent() {
    var h = document.documentElement, 
        b = document.body,
        st = 'scrollTop',
        sh = 'scrollHeight';
    return h[st]||b[st] / ((h[sh]||b[sh]) - h.clientHeight) * 100;
}

function checkScrollPercent(){
  if(getScrollPercent() >= 90){
    console.log(getScrollPercent());
  }
}

$(window).scroll(function(){
  checkScrollPercent();
});
