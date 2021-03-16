function GravaDadosFoto()
{
   event.preventDefault();   
   const URL_TO_FETCH = 'RecebeDados';

   var formData = new FormData(document.getElementById("fdados"));
   //formData.append('acao', 'confirmar'); opcional, caso queira inserir outra informação
                
   fetch(URL_TO_FETCH, { method: 'post',body: formData 
   }).then(function (response) {
        return response.text();
   }).then(function (retorno) {
        // result recebe a resposta do módulo dinâmico
                  
        if (retorno.startsWith('Erro')) // problemas ao alterar/gravar
        {
            document.getElementById('resultado').innerHTML = retorno;
            //document.getElementById('erro').style.display = "block";
        } else  // tudo OK, limpar o formulário
        {
            document.getElementById('fdados').reset(); 
            document.getElementById('resultado').innerHTML = retorno;
        }
   }).catch(function (error) {
        console.error(error);
   });
}