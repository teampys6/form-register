// Celular

const celularInput = document.querySelector('input[name="celular"]');

celularInput.addEventListener("input", function () {
    let valor = this.value.replace(/\D/g, "");

    valor = valor.substring(0, 11);

    if (valor.length > 0) {
        valor = `(${valor}`;
    }
    if (valor.length > 3) {
        valor = `${valor.slice(0, 3)}) ${valor.slice(3)}`;
    }
    if (valor.length > 10) {
        valor = `${valor.slice(0, 10)}-${valor.slice(10)}`;
    }

    this.value = valor;
});

// CEP
document.getElementById("cep").addEventListener("input", function () {
    let value = this.value.replace(/\D/g, "");

    if (value.length > 8) value = value.slice(0, 8);

    value = value.replace(/(\d{5})(\d)/, "$1-$2");

    this.value = value;
});

// RG e CPF
const rgInput = document.getElementById('rg');
    const cpfInput = document.getElementById('cpf');

    function onlyNumbers(event) {
        event.target.value = event.target.value.replace(/\D/g, '');
    }

    rgInput.addEventListener('input', onlyNumbers);
    cpfInput.addEventListener('input', onlyNumbers);

const form = document.querySelector('form'),
        nextBtn = form.querySelector('.nextBtn'),
        backBtn = form.querySelector('.backBtn'),
        allInput = form.querySelectorAll('.first input');

nextBtn.addEventListener('click', () => {
    let allFilled = true;

    allInput.forEach(input => {
        if (input.value === "") {
            allFilled = false;
        }
    });

    const email = document.getElementById("email").value;

    if (!allFilled) {
        alert("Por favor, preencha todos os campos!");
    } else if (!email.includes("@")) {
        alert("Por favor, insira um e-mail válido com '@'.");
    } else {
        form.classList.add('secActive');
    }
});

backBtn.addEventListener('click', () => {
    form.classList.remove('secActive');
});

document.querySelector(".submit").addEventListener("click", function (event) {
    event.preventDefault();

    document.getElementById("successMessage").classList.remove("hidden");
});

function closeMessage() {
    document.getElementById("successMessage").classList.add("hidden");

    document.querySelector("form").classList.remove("secActive");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

document.getElementById("cpf").addEventListener("input", function () {
    let value = this.value.replace(/\D/g, "");

    if (value.length > 11) value = value.slice(0, 11);

    value = value.replace(/(\d{3})(\d)/, "$1.$2");
    value = value.replace(/(\d{3})(\d)/, "$1.$2");
    value = value.replace(/(\d{3})(\d{1,2})$/, "$1-$2");

    this.value = value;
});

// Máscara para RG
document.getElementById("rg").addEventListener("input", function () {
    let value = this.value.replace(/\D/g, "");

    if (value.length > 9) value = value.slice(0, 9);

    value = value.replace(/(\d{2})(\d)/, "$1.$2");
    value = value.replace(/(\d{3})(\d)/, "$1.$2");
    value = value.replace(/(\d{3})(\d{1})$/, "$1-$2");

    this.value = value;
});