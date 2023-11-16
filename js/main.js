
// funcion para mostrar los productos con sus caracteristicas

document.addEventListener("DOMContentLoaded", () => {

    const productosLista = document.getElementById("productos-lista")

    if(productosLista) {
        const productosLista = document.getElementById("productos-lista")

    function mostrarProductos(productos) {
        productosLista.innerHTML = ""
    
        productos.forEach(producto => {
            const productoDiv = document.createElement("div")
            productoDiv.classList.add("producto")
    
            const tituloProducto = document.createElement("h3")
            tituloProducto.textContent = producto.titulo
    
            const imgProducto = document.createElement("img")
            imgProducto.src = producto.imagen
    
            const descripcionPorducto = document.createElement("p")
            descripcionPorducto.textContent = producto.descripcion
    
            const precioProducto = document.createElement("p")
            precioProducto.textContent = `Precio: $${producto.precio}`
    
            const comprarButton = document.createElement("button")
            comprarButton.textContent = "Comprar"
            comprarButton.className= "comprar"
            comprarButton.addEventListener("click", () => {
                carrito.push({
                    id: producto.id,
                    imagen: producto.imagen,
                    titulo : producto.titulo,
                    precio : producto.precio
                })
            })
            
    
            productoDiv.appendChild(tituloProducto)
            productoDiv.appendChild(imgProducto)
            productoDiv.appendChild(descripcionPorducto)
            productoDiv.appendChild(precioProducto)
            productoDiv.appendChild(comprarButton)
    
            productosLista.appendChild(productoDiv)
    
        });
    }

    const productos = [
        {
        id: "bleach",
        titulo: "Bleach",
        imagen: "/img/bleach1.webp",
        descripcion: "La serie narra las aventuras de Ichigo Kurosaki, un adolescente que accidentalmente absorbe los poderes de una shinigami",
        precio: 5000
    },   
    {
        id: "boku",
        titulo: "Boku No Hero Academia",
        imagen: "/img/bokunohero1.jpeg",
        descripcion:"Donde el 80% de la población ha desarrollado, surgiendo así héroes y villanos. Entre el 20% de personas sin dones, se encuentra Izuku Midoriya, cuyo mayor deseo es poder estudiar en la U.A. y convertirse en un héroe como su ídolo All Might.3​ Un día, tras conocer personalmente a All Might, este le ofrece heredar sus poderes al ver su gran determinación a pesar de haber nacido sin don. Izuku accede y empieza a estudiar en la U.A, donde conoce otros héroes profesionales, aprende a dominar sus poderes y se enfrenta a auténticos villanos.",
        precio: 5500
    }, 
    {
        id: "chainsaw",
        titulo: "Chainsaw Man",
        imagen: "/img/chainsaw1.webp",
        descripcion: "Denji es un joven atrapado en la pobreza extrema, que trabaja para saldar la deuda de su padre fallecido con la Yakuza trabajando como cazador de demonios, con la ayuda de su fiel compañero canino, hermano del alma y también conocido como el Demonio de la Motosierra.",
        precio: 6000
    }, 
    {
        id: "death",
        titulo: "Neath Note",
        imagen: "/img/deathnote1.jpg",
        descripcion: "Light Yagami es un joven estudiante que un día encuentra un cuaderno llamado Death Note que tiene una macabra propiedad: si el nombre de una persona aparece escrito en él, morirá. Light decide, entonces, embarcarse en una misión para librar al mundo de todos los criminales. Sin embargo, su plan empieza a torcerse cuando L, un brillante detective, intenta descifrar el misterio que rodea a todas estas muertes.",
        precio: 7000
    }, 
    {
        id: "demons",
        titulo: "Demons Slayer",
        imagen: "/img/demonslayer.webp",
        descripcion: "Tanjiro Kamado, un joven de gran corazón que se dedica a la venta de carbón para sobrevivir al lado de su familia. No obstante, la tragedia llega a su vida cuando un ser maligno asesina a algunos de sus seres queridos.",
        precio: 5000
    }, 
    {
        id: "bersek",
        titulo: "Bersek",
        imagen: "/img/bersek1.jpeg",
        descripcion: "La historia está ambientada en una época con tintes de la Europa medieval y renacentista, en la cual se cuenta la vida de Guts, un mercenario huérfano que acompañado del elfo Puck, caza seres demoníacos llamados apóstoles.",
        precio: 5000
    }, 
    {
        id: "black",
        titulo: "Black Clover",
        imagen: "/img/blackclover1.webp",
        descripcion: "Cuando la humanidad estaba a punto de caer por un demonio antiguo, un solo mago lo derrotó y la salvó. Más tarde, el mago se convirtió en una leyenda y se le conoció como Rey mago. Tras ello, el Reino del Trébol gozó de paz a través de generaciones de reyes magos y nueve órdenes mágicas subordinadas.",
        precio: 4500
    }, 
    {
        id: "dr",
        titulo: "Dr. Stone",
        imagen: "/img/dr.stone1.jpg",
        descripcion:"La historia cuenta las aventuras de Senku y Taiju, dos adolescentes que se ven atrapados en un mundo post-apocalíptico en el que la raza humana se ha convertido en piedra y ellos buscan la manera de revertir la petrificación en la mayor cantidad de personas posibles, para así reconstruir la sociedad tal como la conocieron.",
        precio: 5000
    }, 
    {
        id: "dragon",
        titulo: "Dragon Ball",
        imagen: "/img/dragonball1.jpg",
        descripcion:"Narra la historia de Goku, un excepcional niño que llegó a la Tierra en una cápsula durante una noche tormentosa. Sin saber nada de su pasado, un anciano lo cuidó como su nieto hasta los ocho años. Después de morir su abuelo, Goku accede a la Kame House, lugar donde un estrambótico anciano le convertirá en un campeón de artes marciales. Conocerá por el camino a Bulma, una muchacha obsesionada con algo denominado las Bolas de Dragón, y Krilin, su compañero de aventuras, entre otros.",
        precio: 6500
    }, 
    {
        id: "haikyuu",
        titulo: "Haikyuu",
        imagen: "/img/haikyuu1.jpg",
        descripcion:"La historia empieza cuando Shōyō Hinata, aún siendo un estudiante de primaria, ve un partido de voleibol por la televisión, en el cual ve jugar al conocido Pequeño Gigante. Desde entonces, desea convertirse en alguien como él, debido a que ambos son bajos de estatura, y comienza a aficionarse por el deporte.",
        precio: 5000
    }, 
    {
        id: "Hunter",
        titulo: "Hunter X Hunter",
        imagen: "/img/hunter1.webp",
        descripcion:"La historia tiene como protagonista a Gon Freecss, un niño de doce años que desea encontrar a su padre a toda costa, por lo que decide convertirse en «cazador», justo como él, y de alguna forma hallar su paradero. A medida que avanza la historia, Gon se hace amigo de otros tres aspirantes a cazador: Leorio, Kurapika y Killua, quienes lo acompañarán en sus aventuras a lo largo del anime",
        precio: 4500
    }, 
    {
        id: "jojos",
        titulo: "Jojo's Bizarre Adventure",
        imagen: "/img/jojos0.jpg",
        descripcion: "Narra la historia de la familia Joestar a través de las décadas y sus continuos enfrentamientos con el malvado vampiro Dio Brando y su legado.",
        precio: 5000
    }, 
    {
        id: "jujutsu",
        titulo: "Jujutsu Kaisen",
        imagen: "/img/jujutsu1.jpeg",
        descripcion:"La historia gira en torno al estudiante Yūji Itadori, quien se une a una organización secreta de hechiceros para matar a una poderosa maldición llamada Ryōmen Sukuna tras convertirse en su anfitrión.",
        precio: 5500
    }, 
    {
        id: "naruto",
        titulo: "Naruto",
        imagen: "/img/naruto0.jpeg.jpg",
        descripcion:"La obra narra la historia de un ninja adolescente llamado Naruto Uzumaki, quien aspira a convertirse en Hokage, líder de su aldea, con el propósito de ser reconocido como alguien importante dentro de la aldea y entre sus compañeros.",
        precio: 6500
    }, 
    {
        id: "neverland",
        titulo: "The Promised Neverland",
        imagen: "/img/neverland1.jpeg",
        descripcion:"La obra narra la historia de unos niños huérfanos, liderados por una joven de once años llamada Emma, que tratan de escapar del orfanato en el que vivían engañados y el cual esconde un oscuro secreto.",
        precio: 5000
    }, 
    {
        id: "one",
        titulo: "One Punch-Man",
        imagen: "/img/onepunch1.webp",
        descripcion:"La historia gira alrededor de un héroe llamado Saitama, el cual vive en la Ciudad Z de Japón. Todas las ciudades son atacadas por monstruos constantemente, y los héroes deben encargarse de proteger a los habitantes con sus habilidades eliminando a cada uno de los enemigos.",
        precio: 5000
    }, 
    {
        id: "oyasumi",
        titulo: "Oyasumi Punpun",
        imagen: "/img/punpun1.jpeg",
        descripcion:"La historia sigue a Onodera Punpun, un niño normal que debe hacer frente a sus amigos y familia disfuncional, su interés amoroso, su adolescencia en sentido contrario y su mente hiperactiva. A medida que la vida de Punpun se vuelve cada vez más caótica, comienza a tratar temas del existencialismo y nihilismo.",
        precio: 7000
    }, 
    {
        id: "tokyio",
        titulo: "Tokyo Revengers",
        imagen: "/img/revengers1.jpg",
        descripcion:"Takemichi Hanagaki, un joven de 26 años sin grandes objetivos en su vida, descubre un día que su exnovia de la adolescencia, Hinata Tachibana, así como su hermano menor Naoto, son asesinados por la Tokyo Manji. Cuando Takemichi es empujado hacia las vías de un tren, viaja en el tiempo hasta hace exactamente 12 años, en 2005  creando una paradoja temporal en la que Naoto sobrevive y ahora es un detective. Naoto deduce que Takemichi puede viajar 12 años al pasado cuando se toman de la mano, y usando sus nuevos conocimientos, Takemichi decide cambiar el futuro para salvar la vida de Hinata y sus amigos.",
        precio: 5000
    }, 
    {
        id: "shingeki",
        titulo: "Shingeki No Kyojin",
        imagen: "/img/snk1.webp",
        descripcion:"La humanidad ha estado al borde de la extinción debido a la existencia de los titanes. Unos seres gigantes aparentemente sin inteligencia cuyo objetivo no es otro que devorar humanos. Los pocos supervivientes han levantado tres muros más altos que cualquier titán, donde viven pacíficamente sin el miedo de ser devorados por los gigantes. La humanidad ha vivido tranquila durante más de 100 años hasta que en el año 845 aparece de la nada un titán más alto que los muros construidos para protegerse y crea una brecha en uno de ellos permitiendo que todos los titanes se abran paso hacia el interior. En ese momento, la humanidad recibe el recordatorio de que viven con miedo a ser devorados por los titanes.",
        precio: 6500
    }, 
    {
        id: "ghoul",
        titulo: "Tokyo Ghoul",
        imagen: "/img/tokyoguoul1.jpg",
        descripcion: "Se trata de una producción de terror con violencia explícita y ambientación sobrenatural que presenta una ciudad de Tokio en la que mueren personas inocentes a manos de ghouls, seres misteriosos que se alimentan de humanos.",
        precio: 5000
    } 
    ]


let carrito = []

    mostrarProductos(productos)

    // Botón de ordenar de A a Z
    document.getElementById("ordenar-az").addEventListener("click", () => {
        const productosOrdenados = [...productos].sort((a, b) => a.titulo.localeCompare(b.titulo))
        mostrarProductos(productosOrdenados)
    });

    // Botón de ordenar de Z a A
    document.getElementById("ordenar-za").addEventListener("click", () => {
        const productosOrdenados = [...productos].sort((a, b) => b.titulo.localeCompare(a.titulo))
        mostrarProductos(productosOrdenados)
    })}
})

/* no funciona, solo cambia el color de texto*/

if(body) {

    const modoOscuro = document.getElementById("modo-oscuro")

    let modoOscuroOK = localStorage.getItem("modoOscuro") === "true"

    if (modoOscuroOK) {
        body.classList.add("modo-oscuro")
    }
    
    function alternarModo() {

        modoOscuroOK = !modoOscuroOK

        localStorage.setItem("modoOscuro", modoOscuroOK)

        if(modoOscuroOK) {
            body.classList.add("modo-oscuro")
        }else {
            body.classList.remove("modo-oscuro")
        }
    }
    if (modoOscuro) {
        modoOscuro.addEventListener("click", alternarModo)
    }
}

// condiciones que debe cumplirse al completar el formulario

const homePage = document.getElementById("formulario")
if(homePage) { 

function limpiarFormulario() {
    document.getElementById("nombre").value = "" 
    document.getElementById("email").value = "" 
    document.getElementById("mensaje").value = ""
    document.getElementById("mensajeError").style.display = "none"
    document.getElementById("mensajeErrorNombre").style.display = "none"
}


function validarFormulario () {
    const nombre = document.getElementById("nombre").value 
    const email = document.getElementById("email").value
    const mensaje = document.getElementById("mensaje").value
    const mensajeError = document.getElementById("mensajeError")
    const mensajeErrorNombre = document.getElementById("mensajeErrorNombre")


    let formularioValido = true

    if (nombre.length < 3) {
        mensajeErrorNombre.style.display = "block"
        formularioValido = false
    } else {
        mensajeErrorNombre.style.display = "none"
    }

    if (email.indexOf('@') === -1 || mensaje.length < 10) {
        mensajeError.style.display = "block"
        formularioValido = false
    } else {
        mensajeError.style.display = "none"
    }

    if (formularioValido) {
        limpiarFormulario()
    }

    return formularioValido
}

// estructura del formulario

document.addEventListener("DOMContentLoaded", function() {

function crearFormulario () {

    const formulario = document.getElementById("formulario")

    const form = document.createElement("form")

    const nombreLabel = document.createElement("label")
    nombreLabel.innerHTML= "Nombre: "
    form.appendChild(nombreLabel)

    const nombreInput = document.createElement("input")
    nombreInput.type = "text"
    nombreInput.id = "nombre"
    form.appendChild(nombreInput)

    const emailLabel = document.createElement("label")
    emailLabel.innerHTML = "Email: "
    form.appendChild(emailLabel)

    const emailInput = document.createElement("input")
    emailInput.type = "email"
    emailInput.id = "email"
    form.appendChild(emailInput)

    const mensajeLabel = document.createElement("label")
    mensajeLabel.innerHTML = "Mensaje (más de 10 caracteres): "
    form.appendChild(mensajeLabel)

    const mensajeInput = document.createElement("textarea")
    mensajeInput.id = "mensaje"
    form.appendChild(mensajeInput)


    const submitButton = document.createElement("input")
    submitButton.type = "submit"
    submitButton.value = "Enviar"
    form.appendChild(submitButton)

    form.addEventListener("submit", function(event) {
        event.preventDefault()
        validarFormulario()
    })

    formulario.appendChild(form)
}

    crearFormulario()
})
}
