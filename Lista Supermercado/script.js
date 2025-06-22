var items = [];

document.querySelector('input[type=submit]').addEventListener('click' , ()=>{
    var nomeproduto = document.querySelector('input[name=nome_produto');
    var precoproduto = document.querySelector('input[name=price]');

    if(nomeproduto.value == '' || precoproduto.value == 0) {
        alert('ERRO! digite um produto ou valor valido.')
    }

    items.push({
        nome:nomeproduto.value,
        valor:precoproduto.value
    })

    let listaprodutos = document.querySelector('.lista-produtos')
    let soma = 0;
    listaprodutos.innerHTML = '';
    items.map(function(val){
        soma+=parseFloat(val.valor)

        listaprodutos.innerHTML += `
    <div class="lista-produtos-single">
        <h3>`+val.nome+`</h3>
        <h3 class="price-produto">R$`+val.valor+`</h3>
    </div>`
    })
    
    nomeproduto.value = '';
    precoproduto.value = '';

    let elementosoma = document.querySelector('.soma-produto h1')
    elementosoma.innerHTML = `R$ ${soma}`
})