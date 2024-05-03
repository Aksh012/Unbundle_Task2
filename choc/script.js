$(document).ready(function () {
  $(".add-to-cart").click(function () {
    var name = $(this).data("name");
    var price = parseFloat($(this).data("price"));

    var cartItems = JSON.parse(sessionStorage.getItem("cart")) || [];

    if (cartItems.length >= 8) {
      alert("You can only add a maximum of 8 items to the cart.");
      return; // Exit the function if the limit is reached
    }

    cartItems.push({ name: name, price: price });

    sessionStorage.setItem("cart", JSON.stringify(cartItems));

    $("#cart-indicator").text("Items added to cart: " + cartItems.length);
  });

  var cartItems = JSON.parse(sessionStorage.getItem("cart")) || [];

  var total = 0;
  cartItems.forEach(function (item) {
    $("#cart").append(
      '<li class="list-group-item">' +
        item.name +
        " - ₹" + // Replaced $ with ₹ for Indian Rupees
        item.price +
        "</li>"
    );
    total += item.price;
  });

  $("#total").text(total.toFixed(2));
});

$("#checkout").click(function () {
  sessionStorage.removeItem("cart");
  $("#cart").empty();
  $("#total").text("0");
  $(this).hide();
  alert("Checkout successful! Your cart is now empty.");
});
