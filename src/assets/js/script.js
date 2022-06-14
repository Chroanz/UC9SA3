$(document).ready(function(){
$("#carrossel img:eq(0)").addClass("banner-ativo").show()

setInterval(slide, 5000)

function slide(){
    if($(".banner-ativo").next().length){
        $(".banner-ativo").removeClass("banner-ativo").hide().next().addClass("banner-ativo").show()
    }else{
        $(".banner-ativo").removeClass().hide()
        $("#carrossel img:eq(0)").addClass("banner-ativo").show()
    }
}

    $("#barras").click(function(){
        $("#menu").toggleClass("menu-ativo")


//if($("#menu").hasClass("menu-ativo")){
//    $("#menu").removeClass("menu-ativo")
//} else {
//    $("#menu").addClass("menu-ativo")
//}



    })
})

let menu = document.getElementById("menu");

//  function mostrarMenu(){
//         if(menu.style.display != "flex"){
//          menu.style.display = "flex"
//      }else{
//          menu.style.display = "none"
//      }
//  }

let email = document.getElementById("campo-email");

function enviarEmail() {
    let emailDigitado = email.value;
    console.log(emailDigitado)
}

let listaProdutos = [
{
    titulo: "super computador",
    descricao: "tao potente que sai fogo"
},
{
    titulo: "playstation 200",
    descricao: "o controle é um aparelho de pilates"
},
{
    titulo: "xbox 7985353",
    descricao: "agora você pensa e o kinect funciona"
},
{
    titulo: "nintendo 2",
    descricao: "mesmos jogos de 30 anos atrás"
},
{
    titulo: "computador menos super",
    descricao: "sai menos fogo"
},
{
    titulo: "churrasqueira eletrica",
    descricao: "roda doom"
},
{
    titulo: "aspirador robô",
    descricao: "primeira maquina do mundo a ter rinite"
},
{
    titulo: "aparelho de aerossol",
    descricao: "use no aspirador robô"
},
{
    titulo: "monitor gamer",
    descricao: "+15 com 8 options"
}
]

function renderizaProdutos(){
    let espaco = document.getElementById("espaco-produtos")
    let template = ""

    for (let index = 0; index < listaProdutos.length; index++){
        const produto = listaProdutos [index]
        template += `<div class="card-product">
    <img src="assets/img/joystickxbox.png" alt="foto joystick">
    <h3>${produto.titulo}</h3>
    <p>${produto.descricao}</p>
</div>`
    }

espaco.innerHTML = template
}
