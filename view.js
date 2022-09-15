categorias = [{
    nombre:'Belleza',
    valor:12
},
{
    nombre:'Negocio',
    valor:9
}
,{
    nombre:'Moda',
    valor:11
},{
    nombre:'Comida',
    valor:3
},{
    nombre:'Musica',
    valor:6
},{
    nombre:'Naturaleza',
    valor:9
},{
    nombre:'Personas',
    valor:6
},{
    nombre:'Deporte',
    valor:16
},{
    nombre:'Tecnologia',
    valor:8
}]
random = [
    {src:'./images/COmp.jpg',description:'Bitcoin en 6 dias, genera ingresos con una sola aplicacion y zero conocimiento' , fecha:'May 29, 2022'},
    {src:'./images/1.jpg',description:'Todo lo que necesitas saber del bitcoin y otras Criptos' , fecha:'Ene 22, 2019'},
    {src:'./images/2.jpg',description:'La moneda del mañana, actualiza tu monedero, yo te enseño como' , fecha:'Mar 15, 2021'},
    {src:'./images/3.jpg',description:'Vuelvete millonario con estos consejos de como entrar al mundo de las criptomonedas' , fecha:'Dic 2,2018'},
    {src:'./images/4.jpg',description:'Comprate el Auto que deseas con esta estrategia de minar bitcoin con una sola aplicacion' , fecha:'Abr 29, 2022'},
]


most = document.getElementById("most")
posta = document.getElementById("posta");
spanid = document.getElementById("sp");
tag = document.getElementById("tags")



categorias.forEach(item => {
    let s = `
    <a href="#" class="flex items-center font-bold leading-4">                  
                            
    <span class="mr-2"><i class="far fa-folder-open"></i></span>
    <span>${item.nombre} </span>
    <span class="ml-auto">(${item.valor})</span>
    </a>
    `
    spanid.innerHTML += s;
    mc.innerHTML += s;
});

random.forEach(item=>{
    let r = `
    <a href="#" class="flex group mt-4">
    <div class="flex-shrink-0 ">
        <img src='${item.src}' class="h-14 w-20 rounded object-cover hover:brightness-200"/>
    </div>
    <div class="flex-grow pl-3">
        <h5 class="text-md leading-5 block font-Lato transition group-hover:text-blue-500">
            ${item.description}
        </h5>
        <div class="flex text-gray-400 text-sm items-center">
            <span class="mr-1 text-xs">
                <i class="far fa-clock"></i>
            </span>
           ${item.fecha}
        </div>
    </div>
</a>


    `

    posta.innerHTML +=r;

})

categorias.forEach(item=>{
    let c = `
    <a href="#"  class="px-3 py-1 text-sm border border-gray-300 rounded-sm transition hover:bg-blue-500 hover:text-white">
    ${item.nombre}
</a>
    
    `
    tag.innerHTML += c;
})


document.querySelector('#open').addEventListener('click',function(){
    document.querySelector('#sidebar').classList.remove('-left-80')
    document.querySelector('#sidebar').classList.add('left-0')
    document.querySelector('#sidebar_wrapper').classList.remove('opacity-0')
    document.querySelector('#sidebar_wrapper').classList.remove('invisible')
})

document.body.addEventListener('click',function(e){
    if(e.target.id === 'sidebar_wrapper'){
        document.querySelector('#sidebar').classList.add('-left-80')
        document.querySelector('#sidebar').classList.remove('left-0')
        document.querySelector('#sidebar_wrapper').classList.add('opacity-0')
        document.querySelector('#sidebar_wrapper').classList.add('invisible')
    }
})

document.querySelector('#sidebar_wrapper').addEventListener('click',function(){
        document.querySelector('#sidebar').classList.add('-left-80')
        document.querySelector('#sidebar').classList.remove('left-0')
        document.querySelector('#sidebar_wrapper').classList.add('opacity-0')
        document.querySelector('#sidebar_wrapper').classList.add('invisible')
    
})