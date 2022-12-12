const btns = document.querySelectorAll("button");
const msgContainer = document.querySelector(".msg-container");

const langs = {
    swedish: "Hej",
    finnish: "Moi",
    english: "Heya",
}

btns.forEach((btn) => {
    btn.addEventListener("click", () => {
        const msg = langs.

        // console.log(btn.dataset);
        // console.log(btn.dataset.color);
        document.body.style.background = btn.dataset.color;

        
    });
});