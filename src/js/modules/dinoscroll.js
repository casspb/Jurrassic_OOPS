export function dinoscroll() {

document.addEventListener("DOMContentLoaded", () => {
    const list = document.querySelector(".dino-selection ul");
    const upArrow = document.querySelector(".arrow-up");
    const downArrow = document.querySelector(".arrow-down");

    const scrollStep = 150; // Adjust scrolling speed

    upArrow.addEventListener("click", () => {
        list.scrollBy({ top: -scrollStep, behavior: "smooth" });
    });

    downArrow.addEventListener("click", () => {
        list.scrollBy({ top: scrollStep, behavior: "smooth" });
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const listItems = document.querySelectorAll(".dino-selection li");

    listItems.forEach(item => {
        item.addEventListener("click", () => {
            // Remove 'active' from all
            listItems.forEach(li => li.classList.remove("active"));
            
            // Add 'active' to clicked item
            item.classList.add("active");
        });
    });
});

}