let headlineInput = document.getElementById('headline-input');
let updateButton = document.getElementById('update-btn');
let ctaHeadline = document.getElementById('cta-headline');

updateButton.addEventListener('click', () => {
    let newText = headlineInput.value;
    
        ctaHeadline.textContent = newText;
        headlineInput.value = "";
});