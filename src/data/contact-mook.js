const mook_data = {
    contacts: [
        {
            id: 1,
            name: 'Lionel Messi',
            last_time_connected: '21:35',
            img: "https://image.ondacero.es/clipping/cmsimages01/2023/06/13/D2A4CC75-E672-4A54-B325-1611051ED976/messi-principio-ire-proximo-mundial_104.jpg?crop=715,715,x182,y0&width=1200&height=1200&optimize=low&format=webply", // Reemplaza con la URL de la imagen de Messi
            last_message: {
                id: 1,
                text: 'Gracias por el apoyo de siempre, ¡vamos por más! Siempre es lindo sentir el cariño de la gente.',
                status:'no visto'
            },
            unread_messages: 1,
            messages: [
                {
                    emisor: 'YO',
                    hora: '20:30',
                    id: 1,
                    texto: 'Leo, ¿cómo te sentís después del último partido? ¡Estuviste increíble!',
                    status: 'visto'
                },
                {
                    emisor: 'Lionel Messi',
                    hora: '20:45',
                    id: 2,
                    texto: 'Gracias por el mensaje, Amigo. Un poco cansado, pero feliz por el resultado. Siempre es especial jugar con esta camiseta.',
                    status: 'visto'
                },
                {
                    emisor: 'YO',
                    hora: '20:50',
                    id: 3,
                    texto: 'La verdad que sí, se nota la pasión. ¿Ya pensando en el próximo rival?',
                    status: 'visto'
                },
                {
                    emisor: 'Lionel Messi',
                    hora: '21:00',
                    id: 4,
                    texto: 'Siempre. Ya estamos analizando videos y preparándonos mentalmente. El grupo está muy unido y eso es clave.',
                    status: 'visto'
                },
                {
                    emisor: 'YO',
                    hora: '21:10',
                    id: 5,
                    texto: 'Eso se percibe, la química entre ustedes es única. ¿Algún mensaje para los hinchas que los bancan siempre?',
                    status: 'visto'
                },
                {
                    emisor: 'Lionel Messi',
                    hora: '21:35',
                    id: 6,
                    texto: 'Que sigan así, que su aliento es fundamental. Gracias por el apoyo de siempre, ¡vamos por más! Siempre es lindo sentir el cariño de la gente.',
                    status: 'no-visto'
                },
            ]
        },
        {
            id: 2,
            name: 'Emiliano "Dibu" Martínez',
            last_time_connected: '21:15',
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCLCz-HzAec680KhPOd47EZ7YANB7JitTKIQ&s",
            last_message: {
                id: 1,
                text: '¡Siempre preparado para lo que venga, patrón! La humildad es la clave.',
                status: 'visto'
            },
            unread_messages: 0,
            messages: [
                {
                    emisor: 'YO',
                    hora: '20:20',
                    id: 1,
                    texto: 'Dibu, ¡qué atajada te mandaste el otro día! Nos salvaste.',
                    status: 'visto'
                },
                {
                    emisor: 'Emiliano "Dibu" Martínez',
                    hora: '20:35',
                    id: 2,
                    texto: '¡Esa es mi tarea! Siempre concentrado para ayudar al equipo. Para eso entreno cada día.',
                    status: 'visto'
                },
                {
                    emisor: 'YO',
                    hora: '20:40',
                    id: 3,
                    texto: 'Se te ve muy seguro en el arco. ¿Algún ritual antes de los partidos?',
                    status: 'visto'
                },
                {
                    emisor: 'Emiliano "Dibu" Martínez',
                    hora: '20:55',
                    id: 4,
                    texto: 'Más que un ritual, es visualización y mucha confianza en el trabajo. Y claro, pensar en mi familia. Eso me da fuerza.',
                    status: 'visto'
                },
                {
                    emisor: 'YO',
                    hora: '21:00',
                    id: 5,
                    texto: 'Increíble, esa mentalidad te hace imparable. ¿Qué se siente ser tan querido por la gente?',
                    status: 'visto'
                },
                {
                    emisor: 'Emiliano "Dibu" Martínez',
                    hora: '21:15',
                    id: 6,
                    texto: 'Es un honor, YO. Lo valoro muchísimo. La humildad es la clave, y seguir laburando. ¡Siempre preparado para lo que venga, patrón!',
                    status: 'visto'
                },
            ]
        },
        {
            id: 3,
            name: 'Ángel Di María',
            last_time_connected: '21:05',
            img: "https://img.a.transfermarkt.technology/portrait/big/45320-1700648952.jpg?lm=1", // Reemplaza con la URL de la imagen de Di María
            last_message: {
                id: 1,
                text: 'Cada gol es para mi familia y para ustedes. Su apoyo es mi mayor motivación.',
                status: 'visto'
            },
            unread_messages: 0,
            messages: [
                {
                    emisor: 'YO',
                    hora: '20:00',
                    id: 1,
                    texto: 'Fideo, ¡sos un fenómeno! Siempre aparecés en los momentos importantes.',
                    status: 'visto'
                },
                {
                    emisor: 'Ángel Di María',
                    hora: '20:15',
                    id: 2,
                    texto: '¡Gracias, Capo! Es lo que más me gusta, aportar al equipo cuando más se necesita. Siempre con fe.',
                    status: 'visto'
                },
                {
                    emisor: 'YO',
                    hora: '20:25',
                    id: 3,
                    texto: 'Y tus goles son arte puro. ¿Qué sentís en ese momento?',
                    status: 'visto'
                },
                {
                    emisor: 'Ángel Di María',
                    hora: '20:40',
                    id: 4,
                    texto: 'Una alegría inmensa, es indescriptible. Es la recompensa a tanto esfuerzo. Mucha emoción, siempre.',
                    status: 'visto'
                },
                {
                    emisor: 'YO',
                    hora: '20:45',
                    id: 5,
                    texto: 'Se te nota la emoción en la cancha. ¿Cómo vivís este presente en la selección?',
                    status: 'visto'
                },
                {
                    emisor: 'Ángel Di María',
                    hora: '21:05',
                    id: 6,
                    texto: 'Con mucha felicidad, disfruto cada convocatoria. Cada gol es para mi familia y para ustedes. Su apoyo es mi mayor motivación.',
                    status: 'visto'
                },
            ]
        },
        {
            id: 4,
            name: 'Julián Álvarez',
            last_time_connected: '21:25',
            img: "https://img.a.transfermarkt.technology/portrait/big/576024-1684920938.jpg?lm=1", // Reemplaza con la URL de la imagen de Julián Álvarez
            last_message: {
                id: 1,
                text: '¡A seguir trabajando duro para lo que viene! Siempre pensando en el equipo.',
                status: 'no-visto'
            },
            unread_messages: 1,
            messages: [
                {
                    emisor: 'YO',
                    hora: '20:45',
                    id: 1,
                    texto: 'Julián, tu adaptación fue impresionante. ¿Cómo manejás la presión?',
                    status: 'visto'
                },
                {
                    emisor: 'Julián Álvarez',
                    hora: '20:55',
                    id: 2,
                    texto: 'Hola. La verdad que estoy muy contento. La presión es parte de esto, pero lo disfruto. Trato de dar lo mejor en cada entrenamiento y partido.',
                    status: 'visto'
                },
                {
                    emisor: 'YO',
                    hora: '21:00',
                    id: 3,
                    texto: 'Se nota en la cancha. ¿Qué te dice el cuerpo técnico para seguir mejorando?',
                    status: 'visto'
                },
                {
                    emisor: 'Julián Álvarez',
                    hora: '21:10',
                    id: 4,
                    texto: 'Siempre hay cosas por pulir. Me piden que siga con la misma intensidad y que aproveche cada oportunidad. Es un aprendizaje constante.',
                    status: 'visto'
                },
                {
                    emisor: 'YO',
                    hora: '21:15',
                    id: 5,
                    texto: 'Sos un gran ejemplo para los más jóvenes. ¿Algún consejo para ellos?',
                    status: 'visto'
                },
                {
                    emisor: 'Julián Álvarez',
                    hora: '21:25',
                    id: 6,
                    texto: 'Que trabajen, que disfruten y que nunca bajen los brazos. Con esfuerzo y sacrificio todo es posible. ¡A seguir trabajando duro para lo que viene! Siempre pensando en el equipo.',
                    status: 'no-visto'
                },
            ]
        },
        {
            id: 5,
            name: 'Rodrigo De Paul',
            last_time_connected: '20:50',
            img: "https://www.paparazzi.com.ar/wp-content/uploads/2024/08/rodrigo-de-paul.jpg.webp", // Reemplaza con la URL de la imagen de Rodrigo De Paul
            last_message: {
                id: 1,
                text: 'La Scaloneta es una familia, y eso se ve en la cancha. Es una bendición ser parte.',
                status: 'visto'
            },
            unread_messages: 0,
            messages: [
                {
                    emisor: 'YO',
                    hora: '19:50',
                    id: 1,
                    texto: 'Rodri, ¡sos el motor de la selección! No parás de correr.',
                    status: 'visto'
                },
                {
                    emisor: 'Rodrigo De Paul',
                    hora: '20:05',
                    id: 2,
                    texto: '¡Es la gasolina que tengo! Y la energía que me da esta camiseta. Hay que dejarlo todo en cada jugada.',
                    status: 'visto'
                },
                {
                    emisor: 'YO',
                    hora: '20:15',
                    id: 3,
                    texto: 'Esa garra se contagia. ¿Qué sentís del ambiente en el vestuario?',
                    status: 'visto'
                },
                {
                    emisor: 'Rodrigo De Paul',
                    hora: '20:30',
                    id: 4,
                    texto: 'Es algo único. Nos conocemos de memoria, dentro y fuera de la cancha. Nos bancamos en todas.',
                    status: 'visto'
                },
                {
                    emisor: 'YO',
                    hora: '20:35',
                    id: 5,
                    texto: 'Se nota la unión que tienen. ¿Cuál es el secreto de la Scaloneta?',
                    status: 'visto'
                },
                {
                    emisor: 'Rodrigo De Paul',
                    hora: '20:50',
                    id: 6,
                    texto: 'No hay secretos, YO. Es trabajo, humildad y un grupo que se quiere de verdad. La Scaloneta es una familia, y eso se ve en la cancha. Es una bendición ser parte.',
                    status: 'visto'
                },
            ]
        },
        {
            id: 6,
            name: 'Alexis Mac Allister',
            last_time_connected: '20:40',
            img: "https://img.a.transfermarkt.technology/portrait/big/534033-1669835342.jpg?lm=1", 
            last_message: {
                id: 1,
                text: 'Feliz de poder representar a mi país. Es un orgullo inmenso.',
                status: 'visto'
            },
            unread_messages: 0,
            messages: [
                {
                    emisor: 'YO',
                    hora: '19:40',
                    id: 1,
                    texto: 'Alexis, ¡qué pedazo de Mundial te mandaste! El nivel que mostraste fue top.',
                    status: 'visto'
                },
                {
                    emisor: 'Alexis Mac Allister',
                    hora: '19:55',
                    id: 2,
                    texto: 'Muchas gracias. Fue una experiencia increíble y un sueño cumplido. Disfruté cada minuto.',
                    status: 'visto'
                },
                {
                    emisor: 'YO',
                    hora: '20:05',
                    id: 3,
                    texto: 'Se te veía muy cómodo en el mediocampo. ¿Te sentís más maduro como jugador?',
                    status: 'visto'
                },
                {
                    emisor: 'Alexis Mac Allister',
                    hora: '20:20',
                    id: 4,
                    texto: 'Sí, creo que con la experiencia uno va creciendo y tomando mejores decisiones. Me siento más completo.',
                    status: 'visto'
                },
                {
                    emisor: 'YO',
                    hora: '20:25',
                    id: 5,
                    texto: 'Tus pases filtrados son muy buenos. ¿Hay algún jugador que te inspire?',
                    status: 'visto'
                },
                {
                    emisor: 'Alexis Mac Allister',
                    hora: '20:40',
                    id: 6,
                    texto: 'Admiro a muchos mediocampistas, siempre trato de aprender de los mejores. Feliz de poder representar a mi país. Es un orgullo inmenso.',
                    status: 'visto'
                },
            ]
        },
        {
            id: 7,
            name: 'Lionel Scaloni',
            last_time_connected: '21:30',
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgm_d5G3HmDGMlwvGYuwgDLsX0FHSodtI-kQ&s", 
            last_message: {
                id: 1,
                text: 'Lo importante es el equipo y seguir creciendo día a día. No hay que conformarse nunca.',
                status: 'no-visto'
            },
            unread_messages: 1,
            messages: [
                {
                    emisor: 'YO',
                    hora: '20:50',
                    id: 1,
                    texto: 'Scaloni, ¡felicitaciones por el trabajo que hacés! La unión del grupo es admirable.',
                    status: 'visto'
                },
                {
                    emisor: 'Lionel Scaloni',
                    hora: '21:00',
                    id: 2,
                    texto: 'Gracias. Es fundamental que el grupo esté bien, es la base de todo. Ellos son los verdaderos protagonistas.',
                    status: 'visto'
                },
                {
                    emisor: 'YO',
                    hora: '21:05',
                    id: 3,
                    texto: '¿Cómo manejás la presión de estar al frente de la selección campeona del mundo?',
                    status: 'visto'
                },
                {
                    emisor: 'Lionel Scaloni',
                    hora: '21:15',
                    id: 4,
                    texto: 'La presión siempre está, pero la tomamos con naturalidad. Nos enfocamos en el día a día y en mejorar.',
                    status: 'visto'
                },
                {
                    emisor: 'YO',
                    hora: '21:20',
                    id: 5,
                    texto: 'Se nota la humildad. ¿Hay algún desafío particular que te motive ahora?',
                    status: 'visto'
                },
                {
                    emisor: 'Lionel Scaloni',
                    hora: '21:30',
                    id: 6,
                    texto: 'Siempre hay desafíos, YO. Mantener el nivel y seguir incorporando jóvenes. Lo importante es el equipo y seguir creciendo día a día. No hay que conformarse nunca. Gracias por el reconocimiento.',
                    status: 'no-visto'
                },
            ]
        },
        {
            id: 9,
            name: 'Enzo Fernández',
            last_time_connected: '20:55',
            img: "https://img.a.transfermarkt.technology/portrait/big/648195-1669894717.jpg?lm=1", 
            last_message: {
                id: 1,
                text: 'Siempre dando lo máximo en cada pelota. Estoy agradecido por cada oportunidad.',
                status: 'visto'
            },
            unread_messages: 0,
            messages: [
                {
                    emisor: 'YO',
                    hora: '20:10',
                    id: 1,
                    texto: 'Enzo, ¡qué irrupción en la selección! Sos una pieza clave en el mediocampo.',
                    status: 'visto'
                },
                {
                    emisor: 'Enzo Fernández',
                    hora: '20:20',
                    id: 2,
                    texto: 'Muchas gracias. Estoy disfrutando mucho cada oportunidad y aprendiendo de los compañeros.',
                    status: 'visto'
                },
                {
                    emisor: 'YO',
                    hora: '20:25',
                    id: 3,
                    texto: 'Se te ve con mucha personalidad a pesar de tu juventud. ¿Cómo te preparás para los partidos grandes?',
                    status: 'visto'
                },
                {
                    emisor: 'Enzo Fernández',
                    hora: '20:35',
                    id: 4,
                    texto: 'Intento mantener la calma y confiar en el trabajo. Esos partidos son los que más me gustan jugar.',
                    status: 'visto'
                },
                {
                    emisor: 'YO',
                    hora: '20:40',
                    id: 5,
                    texto: 'Tu visión de juego es impresionante. ¿Hay algún objetivo personal a corto plazo?',
                    status: 'visto'
                },
                {
                    emisor: 'Enzo Fernández',
                    hora: '20:55',
                    id: 6,
                    texto: 'Seguir creciendo y consolidarme en el equipo. Siempre dando lo máximo en cada pelota. Estoy agradecido por cada oportunidad.',
                    status: 'visto'
                },
            ]
        },
        {
            id: 10,
            name: 'Lautaro Martínez',
            last_time_connected: '21:20',
            img: "https://upload.wikimedia.org/wikipedia/commons/8/80/Lautaro_Martinez_2025.jpg", // Reemplaza con la URL de la imagen de Lautaro Martínez
            last_message: {
                id: 1,
                text: 'A seguir sumando para el equipo. La revancha siempre llega si uno trabaja.',
                status: 'no-visto'
            },
            unread_messages: 1,
            messages: [
                {
                    emisor: 'YO',
                    hora: '20:40',
                    id: 1,
                    texto: 'Toro, ¡se te ve con muchas ganas! Los goles van a llegar solos.',
                    status: 'visto'
                },
                {
                    emisor: 'Lautaro Martínez',
                    hora: '20:50',
                    id: 2,
                    texto: 'Así es. Siempre con la misma mentalidad, trabajando para el equipo. La confianza es clave.',
                    status: 'visto'
                },
                {
                    emisor: 'YO',
                    hora: '20:55',
                    id: 3,
                    texto: 'Tu sacrificio es admirable, la presión en ataque que generás es muy importante.',
                    status: 'visto'
                },
                {
                    emisor: 'Lautaro Martínez',
                    hora: '21:05',
                    id: 4,
                    texto: 'Es lo que me pide el cuerpo técnico. No solo es hacer goles, también es aportar en la recuperación y presionar arriba.',
                    status: 'visto'
                },
                {
                    emisor: 'YO',
                    hora: '21:10',
                    id: 5,
                    texto: 'Esa faceta tuya es muy valiosa. ¿Cómo te sentís físicamente?',
                    status: 'visto'
                },
                {
                    emisor: 'Lautaro Martínez',
                    hora: '21:20',
                    id: 6,
                    texto: 'Muy bien, me siento fuerte. A seguir sumando para el equipo. La revancha siempre llega si uno trabaja. ¡Vamos Argentina!',
                    status: 'no-visto'
                },
            ]
        },
        {
            id: 11,
            name: 'Cristian "Cuti" Romero',
            last_time_connected: '21:00',
            img: "https://www.bitbol.co/files/image/95/95865/66b17125e00bc_360_480!.webp?s=3a9bec0f64ecdf5f43712cba9930dbe6&d=1722904989&oe=jpg", 
            last_message: {
                id: 1,
                text: 'Contento de defender la camiseta y dejarlo todo en cada partido.',
                status: 'visto'
            },
            unread_messages: 0,
            messages: [
                {
                    emisor: 'YO',
                    hora: '20:15',
                    id: 1,
                    texto: 'Cuti, ¡qué solidez en defensa! Sos un muro.',
                    status: 'visto'
                },
                {
                    emisor: 'Cristian "Cuti" Romero',
                    hora: '20:25',
                    id: 2,
                    texto: 'Es el trabajo de todos. Estamos muy compactos atrás. Feliz de poder ayudar desde mi posición.',
                    status: 'visto'
                },
                {
                    emisor: 'YO',
                    hora: '20:30',
                    id: 3,
                    texto: 'Se nota la confianza que le das a todo el equipo. ¿Cómo te sentís jugando con Otamendi?',
                    status: 'visto'
                },
                {
                    emisor: 'Cristian "Cuti" Romero',
                    hora: '20:48',
                    id: 4,
                    texto: 'Con Nico nos entendemos muy bien, es un placer jugar a su lado. Es un referente.',
                    status: 'visto'
                },
                {
                    emisor: 'YO',
                    hora: '20:50',
                    id: 5,
                    texto: 'Esa dupla es clave. ¿Cuál crees que es la principal fortaleza de esta defensa?',
                    status: 'visto'
                },
                {
                    emisor: 'Cristian "Cuti" Romero',
                    hora: '21:00',
                    id: 6,
                    texto: 'La comunicación y el sacrificio de todos. Corremos por el compañero. Contento de defender la camiseta y dejarlo todo en cada partido.',
                    status: 'visto'
                },
            ]
        },
        {
            id: 12,
            name: 'Nicolás Otamendi',
            last_time_connected: '21:10',
            img: "https://img.a.transfermarkt.technology/portrait/big/54781-1669835534.jpg?lm=1", 
            last_message: {
                id: 1,
                text: 'La experiencia sirve para aportar al grupo. Y el cariño de la gente es impagable.',
                status: 'visto'
            },
            unread_messages: 0,
            messages: [
                {
                    emisor: 'YO',
                    hora: '20:20',
                    id: 1,
                    texto: 'Ota, ¡sos un león en la defensa! La garra no se negocia.',
                    status: 'visto'
                },
                {
                    emisor: 'Nicolás Otamendi',
                    hora: '20:35',
                    id: 2,
                    texto: 'Así es. Hay que dejar el alma en cada pelota. Es el compromiso que tenemos con la gente.',
                    status: 'visto'
                },
                {
                    emisor: 'YO',
                    hora: '20:45',
                    id: 3,
                    texto: 'Tu liderazgo es clave en el fondo. ¿Qué significa para vos esta selección?',
                    status: 'visto'
                },
                {
                    emisor: 'Nicolás Otamendi',
                    hora: '20:58',
                    id: 4,
                    texto: 'Es mi vida, es todo. Cada vez que me pongo esta camiseta siento algo único. Es un orgullo y una responsabilidad.',
                    status: 'visto'
                },
                {
                    emisor: 'YO',
                    hora: '21:00',
                    id: 5,
                    texto: 'Se te ve disfrutar mucho. ¿Hay algo que te siga sorprendiendo de este grupo?',
                    status: 'visto'
                },
                {
                    emisor: 'Nicolás Otamendi',
                    hora: '21:10',
                    id: 6,
                    texto: 'La humildad y las ganas de seguir ganando, siempre. La experiencia sirve para aportar al grupo. Y el cariño de la gente es impagable.',
                    status: 'visto'
                },
            ]
        },
        {
            id: 13,
            name: 'Leandro Paredes',
            last_time_connected: '20:25',
            img: "https://canalshowsport.com.ar/wp-content/uploads/2024/12/leandro-_-paredes.jpg", 
            last_message: {
                id: 1,
                text: 'Siempre concentrados y con el objetivo claro. Cada día es una nueva oportunidad.',
                status: 'visto'
            },
            unread_messages: 0,
            messages: [
                {
                    emisor: 'YO',
                    hora: '19:30',
                    id: 1,
                    texto: 'Leandro, ¡qué bien manejás los tiempos en el mediocampo! Sos un relojito.',
                    status: 'visto'
                },
                {
                    emisor: 'Leandro Paredes',
                    hora: '19:45',
                    id: 2,
                    texto: 'Gracias. Es una parte importante de mi juego. Intentamos controlar el partido desde ahí.',
                    status: 'visto'
                },
                {
                    emisor: 'YO',
                    hora: '19:55',
                    id: 3,
                    texto: 'Y tus pases largos son una delicia. ¿Hay algún secreto para esa precisión?',
                    status: 'visto'
                },
                {
                    emisor: 'Leandro Paredes',
                    hora: '20:10',
                    id: 4,
                    texto: 'Mucha práctica, entrenar la visión periférica y entender el movimiento de los delanteros. No hay magia, solo trabajo.',
                    status: 'visto'
                },
                {
                    emisor: 'YO',
                    hora: '20:15',
                    id: 5,
                    texto: 'Se nota la dedicación. ¿Cómo ves al equipo para los próximos desafíos?',
                    status: 'visto'
                },
                {
                    emisor: 'Leandro Paredes',
                    hora: '20:25',
                    id: 6,
                    texto: 'Con mucha confianza y ganas. Estamos en un buen momento, pero no nos relajamos. Siempre concentrados y con el objetivo claro. Cada día es una nueva oportunidad.',
                    status: 'visto'
                },
            ]
        },
        {
            id: 14,
            name: 'Nahuel Molina',
            last_time_connected: '20:20',
            img: "https://www.directvsports.com/__export/1675283844057/sites/dsports/img/2023/02/01/20230201_053723883_bc8bcde5-878c-4bb3-b20f-f2d6775044d2.jpg_1301049368.jpg", 
            last_message: {
                id: 1,
                text: 'A seguir mejorando en cada entrenamiento y aportar lo que el DT pida.',
                status: 'visto'
            },
            unread_messages: 0,
            messages: [
                {
                    emisor: 'YO',
                    hora: '19:25',
                    id: 1,
                    texto: 'Nahuel, ¡qué buen despliegue tenés por la banda! Subís y bajás sin parar.',
                    status: 'visto'
                },
                {
                    emisor: 'Nahuel Molina',
                    hora: '19:40',
                    id: 2,
                    texto: 'Es parte de mi rol. Tengo que aportar tanto en defensa como en ataque. Feliz de poder hacerlo para el equipo.',
                    status: 'visto'
                },
                {
                    emisor: 'YO',
                    hora: '19:45',
                    id: 3,
                    texto: 'Se te ve muy cómodo y acoplado. ¿Cómo te sentís en esta selección?',
                    status: 'visto'
                },
                {
                    emisor: 'Nahuel Molina',
                    hora: '20:05',
                    id: 4,
                    texto: 'Muy bien, me siento parte. Es un grupo increíble y me ayudan a crecer. Hay mucha competencia sana.',
                    status: 'visto'
                },
                {
                    emisor: 'YO',
                    hora: '20:10',
                    id: 5,
                    texto: 'Esa competencia es buena. ¿Hay algo en particular que te gustaría mejorar de tu juego?',
                    status: 'visto'
                },
                {
                    emisor: 'Nahuel Molina',
                    hora: '20:20',
                    id: 6,
                    texto: 'Siempre se puede mejorar. Apunto a pulir la toma de decisiones en el último tercio de cancha. A seguir mejorando en cada entrenamiento y aportar lo que el DT pida.',
                    status: 'visto'
                },
            ]
        }
       
            
        
        
 
    ]
}

export default mook_data;