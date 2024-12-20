document.querySelectorAll('.in-menu').forEach((menu, index) => {
    menu.addEventListener('click', function() {
        const content = this.nextElementSibling;
        content.classList.toggle('active');

        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        }
    });
});