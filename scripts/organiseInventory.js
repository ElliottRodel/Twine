function organiseInventory()
{
	const inventoryContainer = document.getElementById("inventory");
	var items = document.getElementsByClassName("flex-item");
    console.log(items);
	for(var i = items.length-1; i >= 0; i--) {
		inventoryContainer.appendChild(items[i]);
        console.log(items[i].parentElement);
	}
}
