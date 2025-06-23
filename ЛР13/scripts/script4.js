document.querySelectorAll(".thumb").forEach(img => {
    img.addEventListener("click", () => {
        document.getElementById("modalImg").src = img.dataset.full;
        document.getElementById("modal").style.display = "flex";
    });
});