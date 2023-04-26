let contador = 0;
let input = document.getElementById('inputTarefa');
let btnAdd = document.getElementById('btn-add');
let main = document.getElementById('areaLista');

function addTarefa() {
    //Pegar o valor digitado no imput
    let valorInput = input.value;

    //Se não for vazio, nem nulo, nem indefinido
    if ((valorInput !== '') && (valorInput !== undefined) && (valorInput !== null)){
        
        ++contador;
        
        let novoItem = `<div id="${contador}" class="item">
        <div onclick="marcarTarefa(${contador})" class="item-icone">
            <i id="icone_${contador}" class="mdi mdi-circle-outline"></i>
        </div>
        <div onclick="marcarTarefa(${contador})" class="item-nome">
            ${valorInput}
        </div>
        <div class="item-botao">
            <button onclick="deletar(${contador})" class="delete"><i class="mdi mdi-delete">Deletar</i>
            </button>
        </div>
    </div>`;

    //Adicionar o novo item na lista
    main.innerHTML += novoItem

    //Zerar o imput
    input.value = "";
    input.focus();

    }
}

//Deleta os itens
function deletar(id) {
    var tarefa = document.getElementById(id);
    tarefa.remove();
}

function marcarTarefa(id) {
    var item = document.getElementById(id);
    var classe = item.getAttribute('class')

    //Marca item como feito
    if (classe=="item") {
        item.classList.add('clicado');

        var icone = document.getElementById('icone_' + id);
        icone.classList.remove('mdi-circle-outline');
        icone.classList.add('mdi-check-circle');

    }else{
        item.classList.remove('clicado');
        var icone = document.getElementById('icone_' + id);
        icone.classList.remove( 'mdi-check-circle');
        icone.classList.add('mdi-circle-outline');
    }
}


//Teclar Enter para adicionar tarefa
input.addEventListener("keyup", function(event){
    if (event.keyCode === 13){
        event.preventDefault();
        btnAdd.click();
    };
})

