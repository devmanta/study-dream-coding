const input = document.querySelector(".footer__input");
const addBtn = document.querySelector(".footer__button");

const items = document.querySelector(".items");

const onAdd = () => {
    const inputText = input.value;

    if(!inputText) {
        input.focus();
        return;
    }

    const newItem = createItem(inputText);
    items.appendChild(newItem);

    input.value = "";
    input.focus();

    newItem.scrollIntoView({block: "center"});
};

const createItem = (inputText) => {
    const itemRow = document.createElement("li");
    itemRow.setAttribute("class", "item__row");

    const item = document.createElement("div");
    item.setAttribute("class", "item");

    const itemName = document.createElement("span");
    itemName.setAttribute("class", "item__name");
    itemName.innerText = inputText;

    const deleteBtn = document.createElement("button");
    deleteBtn.setAttribute("class", "item__delete");
    deleteBtn.innerHTML = `<i class="fa-sharp fa-solid fa-trash"></i>`;
    deleteBtn.addEventListener("click", () => {
        items.removeChild(itemRow);
    });

    const itemDivider = document.createElement("div");
    itemDivider.setAttribute("class", "item__divider");

    item.appendChild(itemName);
    item.appendChild(deleteBtn);

    itemRow.appendChild(item);
    itemRow.appendChild(itemDivider);

    return itemRow;
};


addBtn.addEventListener("click", () => {
    onAdd();
});

input.addEventListener("keypress", (e) => {
    if (e.keyCode === 13) {
        onAdd();
    }
});
