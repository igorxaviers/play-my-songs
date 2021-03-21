const formDados = document.getElementById('fdados');
var valido = false;

function gravaMusica(){
     event.preventDefault();
     if(!valido)
          alert("Corriga os campos!");
     else
     {
          const URL_TO_FETCH = 'RecebeDados';
          var formData = new FormData(formDados);
          //formData.append('acao', 'confirmar'); opcional, caso queira inserir outra informação
          fetch(URL_TO_FETCH, { method: 'post',body: formData 
          }).then(function (response) {
               return response.text();
          }).then(function (retorno) {
                    if (retorno.startsWith('Erro'))
                         document.getElementById('resultado').innerHTML = retorno;
                    else
                    {
                         document.getElementById('fdados').reset(); 
                         document.getElementById('resultado').innerHTML = retorno;
                    }
          }).catch(function (error) {
               console.error(error);
          });       
     }
}

const inputs = formDados.querySelectorAll('input[type=text]');
inputs.forEach((element) => {
     element.addEventListener('focusout',() => {
          validaInput(element);
     })
});

function validaInput(element){
     let texto = element.nextElementSibling;
     if (/\s/g.test(element.value)){
          element.classList.add('is-invalid'); 
          texto.innerHTML = "Retire os espaços";
     }
     else
     if(/\W/.test(element.value)){
          element.classList.add('is-invalid'); 
          texto.innerHTML = "Retire os caracteres especiais";
     }
     else{
          if(element.classList.contains('is-invalid'))
               element.classList.remove('is-invalid');
          if(element.value.length>0)     
               element.classList.add('is-valid'); 
          texto.innerHTML = "";
          valido = true;
     }
}
