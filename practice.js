const button = document.querySelector("#add-to-cart-button")


button.addEventListener("click", (event) => {
    event.preventDefault();
    console.log("clicked")
    addItemToCart()
});

function addItemToCart() {
    let data = [{
        "id": 41952635093189,
        "quantity": 1,
        "selling_plan": {{ product.selected_or_first_available_variant.selling_plan_allocations[0].selling_plan.id }}
    },
    {
        "id": 42030915879109,
        "quantity": 1,
    },
    {
        "id": 42322086166725,
        "quantity": 1,
    },
    {
        "id": 42322086133957,
        "quantity": 1,
    },
    {
        "id": 42322082070725,
        "quantity": 1,
    }
    ]
    jQuery.ajax({
        type: 'POST',
        url: '/cart/add.js',
        data: {
            items: data
        },
        dataType: 'json',
        success: function () {
            window.location.href = '/cart';
        }
    });
}
