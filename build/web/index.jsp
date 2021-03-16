<%-- 
    Document   : index
    Created on : 16/03/2021, 00:41:43
    Author     : igorr
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl" crossorigin="anonymous">
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/js/bootstrap.bundle.min.js" integrity="sha384-b5kHyXgcpbZJO/tY9Ul7kGkf1S0CWuKcCD38l8YkeH8z8QjE0GmW1gYU5S9FOnJ0" crossorigin="anonymous"></script>
        <title>TODO supply a title</title>
        <script src="js/funcoes.js" type="text/javascript"></script>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
    </head>
    <body>
        <form onsubmit="GravaDadosFoto()" id="fdados" method="POST" name="fdados" enctype="multipart/form-data" class="col-4 mx-auto mt-5">
            <div class="mb-3">
                <label for="estilo" class="form-label">Estilo:</label>
                <input id="estilo" name="estilo" class="form-control form-select-lg" list="datalistOptions" placeholder="Busque estilos...">
                <datalist id="datalistOptions">
                    <option value="Pop">
                    <option value="Rock">
                    <option value="Indie">
                    <option value="Lofi">
                    <option value="Emo">
                </datalist>
            </div>

            <div class="form-floating mb-3">
                <input type="text" class="form-control" id="nome" name="nome" placeholder="Nome da música">
                <label for="nome">Nome da música: </label>
            </div>
            <div class="form-floating mb-3">
                <input type="text" class="form-control" id="cantor" name="cantor" placeholder="Nome do cantor">
                <label for="cantor">Nome do cantor: </label>
            </div>


            <div class="mb-3">
                <label for="musica" class="form-label">Música:</label>
                <input class="form-control form-control-lg" type="file" id="musica" name="musica" accept="audio/*">
            </div>

            <button type="submit" class="btn btn-lg btn-dark">Cadastrar</button>

        </form>
        <div id="resultado"></div>
    </body>
</html>
