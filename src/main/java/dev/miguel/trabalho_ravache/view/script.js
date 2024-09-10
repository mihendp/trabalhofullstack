const cpfInput = document.getElementById("cpf");
const telefoneInput = document.getElementById("telefone");

cpfInput.addEventListener('input', function () {
    let cpfValue = cpfInput.value.replace(/\D/g, '');
    if (cpfValue.length <= 11) {
        cpfValue = cpfValue.replace(/(\d{3})(\d)/, '$1.$2');
        cpfValue = cpfValue.replace(/(\d{3})(\d)/, '$1.$2');
        cpfValue = cpfValue.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
    }
    cpfInput.value = cpfValue;
});

telefoneInput.addEventListener('input', function () {
    let tel = telefoneInput.value.replace(/\D/g, '');
    if (tel.length <= 11) {
        tel = tel.replace(/(\d{2})(\d)/, '($1) $2');
        tel = tel.replace(/(\d{5})(\d{1,4})$/, '$1-$2');
    }
    telefoneInput.value = tel;
});

document.getElementById("formCadastro").addEventListener('submit', async function (event) {

    event.preventDefault();

    const nome = document.getElementById("nome").value;
    const cpf = cpfInput.value;
    const telefone = telefoneInput.value;

    const dadosCadastro = {
        nome: nome,
        cpf: cpf,
        telefone: telefone
    };

    console.log(dadosCadastro)


    try {
        const response = await fetch("http://localhost:8080/pessoa", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dadosCadastro)
        });

        if (response.ok) {
            alert('Cadastro realizado com sucesso!');
        } else {
            alert('Erro ao realizar cadastro.');
        }
    } catch (error) {
        console.error('Erro ao enviar requisição:', error);
        alert('Falha ao conectar com o servidor.');
    }
});
