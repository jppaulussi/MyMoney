// recuperar os campos do formulário
const campos = [
    document.querySelector('#form-nome'),
    document.querySelector('#form-tipo'),
    document.querySelector('#form-credito'),
    document.querySelector('#form-saldo')
];


//os dados do form serão escritos na tabela - pegar a tabela
const tbody = document.querySelector('tbody');



//pegando o form para cancelar o evento padrão e inserir os dados  na tabela
document.querySelector('form').addEventListener('submit', function(evento) {
    //cancelar o evento padrão
    evento.preventDefault();


    //criar uma linha na tabela
    const tr = document.createElement('tr');


    // percorrer os campos que foram recuperados -- Array campos
    campos.forEach(function(campo) {
        // criar uma nova td
        const td = document.createElement('td');
        td.textContent = campo.value;
        tr.appendChild(td);
    });


    //criando o saldo
    // value é o valor que vem do formulário
    const td = document.createElement('td');
    td.textContent = (Number(campos[2].value) + Number(campos[3].value));
    tr.appendChild(td);
    tbody.appendChild(tr);


    this.reset();
    campos[0].focus();
});