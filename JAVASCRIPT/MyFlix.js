var listaFilmes = [
    "https://i.pinimg.com/236x/e5/87/be/e587be3c42f3af392db81996f3884068.jpg",
    "https://i1.wp.com/inspi.com.br/wp-content/uploads/2019/06/beto-vieira-cartazes-filmes-inspi-1.jpg?fit=691%2C1024&ssl=1",
    "https://fhox.com.br/wp-content/uploads/2017/11/81c2c457691753-5a059d944bf23.jpg"
  ];
  
  console.log(listaFilmes.length);
  
  for (i = 0; i < listaFilmes.length; i++) {
    document.write("<div class='cartazes'><img src=" + listaFilmes[i] + ">" + "</div>");
  }
  