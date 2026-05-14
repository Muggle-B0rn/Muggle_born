document.addEventListener('DOMContentLoaded', () => {
    const copyBtn = document.querySelector('.copy-btn');
    const passwordInput = document.querySelector('.password-box .password');
    const copyDiv = document.querySelector('.password-box .icon .copy');
    const copiedDiv = document.querySelector('.password-box .icon .copied');

    
const generateBtn = document.querySelector('.generate-btn');
    const symbolsEl = document.getElementById('Symbols');
    const numbersEl = document.getElementById('Numbers');
    const lowercaseEl = document.getElementById('Lowercase');
    const uppercaseEl = document.getElementById('Uppercase');
    
    const lengthInput = document.getElementById('lengthInput'); 
    const countDisplay = document.getElementById('rlength'); 
    const passInput = document.getElementById("password");  
    const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowerCase = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const symbols = "!@#$%^&*()_+~`|}{[]:;?><,./-=";
    if (lengthInput) {
        lengthInput.addEventListener("input", function() {
            if (countDisplay) {
                countDisplay.innerText = this.value;
            };
        });
    };
    function generatePassword() {
        let chars = "";
        if (lowercaseEl && lowercaseEl.checked) chars += lowerCase; 
        if (uppercaseEl && uppercaseEl.checked) chars += upperCase; 
        if (numbersEl && numbersEl.checked) chars += numbers;
        if (symbolsEl && symbolsEl.checked) chars += symbols;
        if (chars === '') {
            passInput.value = '';
            alert("يرجى تحديد نوع محتوى واحد على الأقل لتوليد كلمة المرور!");
            return;
        };
        let password = '';
        const length = parseInt(lengthInput ? lengthInput.value : 6, 10); 
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * chars.length);
            password += chars[randomIndex];
        };

        passInput.value = password;
    };
    function copyPassword() {
        if (!passInput.value) {
            alert('لا توجد كلمة مرور لنسخها!');
            return;
        };

        navigator.clipboard.writeText(passInput.value).then(() => {
        }).then(() => {if (copyDiv && copiedDiv) {

                    copyDiv.style.display = 'none';
                    copiedDiv.style.display = 'block';

                    setTimeout(() => {
                        copyDiv.style.display = 'block';
                        copiedDiv.style.display = 'none';
                    }, 2000);
                }
            })
        .catch(err => {
            alert('حدث خطأ أثناء النسخ: ' + err);
        });
    };
    if (generateBtn) {
        generateBtn.addEventListener('click', generatePassword);
    };

    if (copyBtn) {
        copyBtn.addEventListener('click', copyPassword);
    };
    });
