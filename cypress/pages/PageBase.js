class PageBase {

 
    gerarNomeCompleto() {

        var nome1 = ["Rita ", "Lucas ", "Ana ", "Pedro ", "Alice ", "Joao "]
        var nome2 = ["Williams", "Connor", "Smith", "Parker", "Evans", "Miller"]
        var nome3 = [" de Jussara", " da Silva", " da Costa", " de Oliveira", " de Souza", " de Lima"]
        var nomeCompleto = "Tester "; var position;

        position = Math.floor(Math.random() * nome1.length)
        nomeCompleto += nome1[position]

        position = Math.floor(Math.random() * nome2.length)
        nomeCompleto += nome2[position]

        position = Math.floor(Math.random() * nome3.length)
        nomeCompleto += nome3[position]

        return nomeCompleto
    }

    gerarNumero() {

       var numero = Math.floor(Math.random() * 10001);

        return numero
    }


    gerarEmail() {

        var nome1 = ["Rita", "Lucas", "Ana", "Pedro", "Alice", "Joao"]
        var nome2;
        var nome3 = ["@gmail.com", "@hotmail.com", "@Yahoo.com", "@Outlook.com"]
        var Completo = "Tester"; var position;

        position = Math.floor(Math.random() * nome1.length); Completo += nome1[position];
        nome2 = Math.floor(Math.random() * 1000); Completo += nome2;
        position = Math.floor(Math.random() * nome3.length); Completo += nome3[position];

        return Completo
    }

   










}

export { PageBase };