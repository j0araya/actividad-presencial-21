$(document).ready(function() {

  // Ejercicio 1
  $('.headline').html('Transfórmate en desarrollador web');
  // Ejercicio 2
  random = Math.floor(Math.random() * 2) + 1;

  if( random < 2) {
    $('header').addClass('main');
  } else {
    $('header').addClass('main-2');
  }


  // Ejercicio 4
  count = 0;

  $('.select').click(function() {
    if (this.checked) {
      count++;
    } else {
      count--;
    }

    $('.count-text').html('Has seleccionado ' + count + ' cursos');

    //Ejercicio 5
    if (count > 3) {
      alert("No puedes comprar más de 3 productos");
    }

  });
});


$(".thumb").click(function(){
  $(".featured").attr("src", "https://picsum.photos/400/400?image=10")
  console.log(this)
});

  
