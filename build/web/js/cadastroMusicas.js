//Variável para verificar a validade dos campos do formulário
var valido;

//Gravação da música
const formDados = document.getElementById('fdados');
function gravaMusica(){
     event.preventDefault();
     if(valido)
     {
          const URL_TO_FETCH = 'RecebeDados';
          var formData = new FormData(formDados);

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
     else
          alert("Corriga os campos inválidos!");
}

//Adicionando Eventlistener nos inputs de texto 
const inputs = formDados.querySelectorAll('input[type=text]');
inputs.forEach((element) => {
     element.addEventListener('focusout',() => {
          validaInput(element);
     })
});

//Validação de espaços e caracteres especiais
function validaInput(){
     valido = true;
     inputs.forEach((element)=>{
          let texto = element.nextElementSibling;
          if (/\s/g.test(element.value)){
               element.classList.add('is-invalid'); 
               texto.innerHTML = "Retire os espaços";
               valido = false;
          }
          else
          if(/\W/.test(element.value)){
               element.classList.add('is-invalid'); 
               texto.innerHTML = "Retire os caracteres especiais";
               valido = false;
          }
          else{
               if(element.classList.contains('is-invalid'))
                    element.classList.remove('is-invalid');
               if(element.value.length>0)     
                    element.classList.add('is-valid'); 
               texto.innerHTML = "";
          }
     })
}
