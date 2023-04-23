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

let id = 0; // better to use UUID but here to practise only
const createItem = (inputText) => {
    const itemRow = document.createElement("li");
    itemRow.setAttribute("class", "item__row");
    itemRow.setAttribute("data-id", id);
    itemRow.innerHTML = `
        <div class="item">
            <span class="item__name">
                ${inputText}
            </span>
            <button class="item__delete">
                <i class="fa-sharp fa-solid fa-trash" data-id=${id}></i>
            </button>
        </div>
        <div class="item__divider"></div>
    `;

    id++;
    return itemRow;
};


addBtn.addEventListener("click", () => {
    onAdd();
});

input.addEventListener("keydown", (e) => {
    if (e.isComposing) {
        return;
    }
    
    if (e.keyCode === 13) {
        onAdd();
    }
});

items.addEventListener("click", (e) => {
    const id = e.target.dataset.id;
    if (id) {
        document.querySelector(`.item__row[data-id="${id}"]`).remove();
    }
});