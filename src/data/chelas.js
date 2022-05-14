export const products = [
    {
        name: 'Cocora Porter',
        price: 8,
        category:'Ale',
        thumbnail:
            'https://images.pexels.com/photos/4068312/pexels-photo-4068312.jpeg?cs=srgb&dl=pexels-cottonbro-4068312.jpg&fm=jpg',
        stock: 7,
        id: 0,
        description:'Las cervezas Porter nacieron en el S. XVIII en Inglaterra y desde el principio eran cerveceras de color oscuro con un cuerpo de mediana densidad. Eran cervezas que balanceaban sus notas maltosas con su amargor, y que superaba en popularidad a muchos de los estilos de la época. El origen de su nombre estaba relacionado a los “Porters” o cargadores de los puertos mercantiles del país, mientras que su receta se dice que estaba basada en la idea de un cantinero de combinar cervezas ligeras con Ales añejadas.'
    },
    {
        name: 'Buziraco Red Ale',
        price: 10,
        category:'Ale',
        thumbnail:
            'https://images.pexels.com/photos/1267306/pexels-photo-1267306.jpeg?cs=srgb&dl=pexels-elevate-1267306.jpg&fm=jpg',
        stock: 7,
        id: 1,
        description:'Son cervezas de origen  irlandés que se caracterizan por su color rojizo aunque también se pueden encontrar de color más castaño o moreno. Su color rojizo se de a las maltas tostadas y caramelo que se emplean en su elaboración. Tienen un sabor fuerte, proveniente de la malta, pero bastante menos amargas que las Ale tradicionales. También tiene un suave aroma a frutas con un toque de mantequilla.'
    },
    {
        name: 'Candileja Stout',
        price: 8,
        category:'Ale',
        thumbnail:
            'https://images.pexels.com/photos/1796698/pexels-photo-1796698.jpeg?cs=srgb&dl=pexels-helena-lopes-1796698.jpg&fm=jpg',
        stock: 10,
        id: 2,
        description:' La cerveza Stout es una versión mucho más fuerte de la Porter, de hecho su nombre original era “Stout Porter”. No fue sino hasta que una cervecería llamada Guinness la empezó a producir, que tanto el nombre, como el estilo, tomaron su propia identidad. Las Porter son cremosas, tienen un ABV más elevado que las cervezas promedio y sus notas de sabor y aroma oscilan entre el chocolate amargo y el café.'
    },
    {
        name: 'Quimbaya Lager',
        category:'Lager',
        price: 7,
        thumbnail:
            'https://images.pexels.com/photos/1267305/pexels-photo-1267305.jpeg?cs=srgb&dl=pexels-elevate-1267305.jpg&fm=jpg',
        stock: 8,
        id: 3,
        description:'Las cervezas lager se definen por el tipo de levadura usada durante el proceso de fermentación. La levadura Saccharomyces pastorianus es una fermentadora de fondo por lo que se establece en el fondo del contenedor durante la fermentación, a diferencia de las ales que ascienden a la superficie. Este proceso de elaboración da a las cervezas lager un color muy limpio pues son fáciles de filtrar al quedarse las levaduras al fondo del fermentador, lo que da a las cervezas lager un sabor neutro pero refrescante. Además las levaduras de las cervezas Lager se las conoce como levaduras de fermentación baja. Ya que la temperatura necesaria para que se activen las levaduras suelen ser más bajas que en las Ales'
    },
    {
        name: 'Ninsaki Beer',
        price: 10,
        category:'Lager',
        thumbnail:
            'https://images.pexels.com/photos/1267287/pexels-photo-1267287.jpeg?cs=srgb&dl=pexels-elevate-1267287.jpg&fm=jpg',
        stock: 8,
        id: 4,
        description:'Inspirada en algunas de las mejores cervezas de Bélgica, NINKASI TRIPLE es una cerveza dorada de estilo abadía, tradicionalmente elaborada por monjes. NINKASI fue fundada en Lyon en 1997 por tres graduados recién salidos de la universidad. Es una de los pioneras del movimiento de la cerveza artesanal en Francia. El sitio de producción ahora se encuentra en una antigua fábrica textil en Tarare, donde el agua es conocida por su pureza y suavidad, por lo que es ideal para la elaboración de cerveza. En 2015 se instaló una destilería y ahora también produce su propio whisky de malta, ginebra y vodka.'
    },
    {
        name: 'Vikings Ale',
        price: 10,
        category:'Ale',
        thumbnail:
            'https://images.pexels.com/photos/1267323/pexels-photo-1267323.jpeg?cs=srgb&dl=pexels-elevate-1267323.jpg&fm=jpg',
        stock: 8,
        id: 5,
        description:'Las cervezas ale tienen un período de acondicionamiento relativamente corto, por lo que pueden beberse en poco tiempo tras la fermentación. La ale es una cerveza muy sabrosa y nutritiva, en la edad media era una fuente de hidratación y nutrición ya que en algunas zonas de carencia de agua se consumían durante todo el día. Existen cervezas ale de muchos tipos, pero las más famosas son las inglesas y las alemanas'
    },
]

const task = new Promise((resp) => {
	resp(products)
}, 2000)

export const getItem = () => {
	return task
}