// Default Global Variables :
const resetbtn_co = document.getElementById("reset_btn");
const items_co = document.querySelector(".items-co");
const items = document.querySelectorAll(".items-co .item");
const new_item = `
                    <div class="icon fa fa-amazon fa-2x"></div>
                    <h4>Here is the title</h4>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                `;

// 45deg rotate function
function rotate(e) {
    e.className = "item rotate";
}

// Default rotate function
function def(e) {
    e.className = "item no-rotate";
}

// Reset function
function resetItems() {
    let convertedItems = "";
    for(var i=0 ; i<items.length ; i++) {
        convertedItems  +=  `<div class="item no-rotate" onclick="del(this)" onmouseover="rotate(this)" onmouseout="def(this)">
                                ${items[i].innerHTML}
                            </div>`;
    }
    items_co.innerHTML = convertedItems;
}

// Create Reset button
function createButton() {
    var button = document.createElement("input");
    button.type = "button";
    button.value = "Reset items here!";
    button.className = "btn";
    button.addEventListener("click", resetItems);
    resetbtn_co.appendChild(button);
}

// Delete a selected item
function del(e) {
    e.parentNode.removeChild(e);
    if (!resetbtn_co.hasChildNodes()) {
        createButton();
    }
}

// Add a new item
function add(e) {
    var item = document.createElement("DIV");
    item.className = "item no-rotate";
    item.setAttribute("onclick", "del(this)");
    item.setAttribute("onmouseover", "rotate(this)");
    item.setAttribute("onmouseout", "def(this)");
    item.innerHTML = new_item;
    items_co.appendChild(item);
    // Create the reset button when a new item has been added
    if (!resetbtn_co.hasChildNodes()) {
        createButton();
    }
}