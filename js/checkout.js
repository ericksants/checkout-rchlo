(function () {

    const total = document.getElementById("total");
    const qtde = document.getElementById("qtdeCompra");
    const valorCompra = document.getElementById("valorCompra");

    function recalculaPreco(qtde){
        total.value = (qtde * valorCompra.value).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    }

    qtde.onchange = function(){
        recalculaPreco(this.value);
    };

})();
