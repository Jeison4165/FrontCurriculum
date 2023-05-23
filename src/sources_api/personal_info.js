import { FiServer } from "react-icons/fi";


export const DATA_USER =  {
    name: "Jeison Fabian",
    last_name: "Castillo Benitez",
    cellphone: "+57 3125951934",
    image: "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
    social_networks:{
        facebook: 'https://www.facebook.com/jeisoncastillo97/',
        github: 'https://github.com/Jeison4165',
        linkedin: 'https://www.linkedin.com/in/jeison-castillo-benitez-431967171/',
        whatsapp: 'https://api.whatsapp.com/send?phone=573125951934&text=Hola,%20he%20visto%20t%C3%BA%20p%C3%A1gina%20web%20y%20quisiera%20contactar%20contigo.'
    },
    birthdate: "8 Nov 1997",
    location: "Chiquinquirá / Boyacá / Colombia",
    age: 25, 
    description: {
        'es': [
            "Soy un Ingeniero de Sistemas con amplia experiencia en el desarrollo de software. Mi enfoque principal se ha centrado en la creación de soluciones eficientes y escalables que resuelvan problemas empresariales. Mi experiencia abarca el ciclo completo de desarrollo de software, desde la fase de diseño hasta la implementación y el mantenimiento.",
            "Poseo conocimientos sólidos en diversas tecnologías y lenguajes de programación y disposición para aprender nuevas tecnologías que permitan un desarrollo más eficaz y eficiente. ",
            "",
            "Además de mi experiencia técnica, también tengo habilidades interpersonales sólidas, lo que me ha permitido colaborar eficazmente con diferentes equipos multidisciplinarios.",
        ],
        'en': [
            "I am a Systems Engineer with extensive experience in software development. My main focus has been on creating efficient and scalable solutions that solve business problems. My experience covers the entire software development cycle, from the design phase to implementation and maintenance.",
            "I have solid knowledge in various technologies and programming languages ​​and willingness to learn new technologies that allow a more effective and efficient development.",
            "",
            "In addition to my technical background, I also have strong interpersonal skills, which has allowed me to collaborate effectively with different multidisciplinary teams."
        ],
    },
    skills: [
        {
            id: 1,
            name: {
                'es': 'Sistemas Operativos',
                'en': 'Operating Systems'
            },
            items:[
                {name:'Windows', value: 95},
                {name:'Linux', value: 90},
                {name:'MacOs', value: 90},
            ],
        },
        {   
            id: 2,
            name: {
                'es': 'Lenguajes de programación',
                'en': 'Programming languages'
            },
            items:[
                {name:'Python', value: 95},
                {name:'Java', value: 90},
                {name:'C++', value: 60},
                {name:'Javascript', value: 90},
            ],
        },
        {
            id: 3,
            name: {
                'es': 'Lenguajes de etiquetado y marcado',
                'en': 'Labeling and markup languages'
            },
            items:[
                {name:'HTML 5', value: 95},
                {name:'Css', value: 90},
            ],
        },
        {
            id: 4,
            name: {
                'es': 'Manejo de base de datos',
                'en': 'Database management'
            },
            items:[
                {name:'MySQL', value: 90},
                {name:'PostgreSQL', value: 90},
            ],
        },
        {
            id: 5,
            name: {
                'es': 'Control de Versiones',
                'en': 'Version Control'
            },
            items:[
                {name:'Github', value: 90},
            ],
        },
        {   
            id:6,
            name: {
                'es': 'Frameworks de Desarrollo',
                'en': 'Development Frameworks'
            },
            items:[
                {name:'Django', value: 90},
                {name:'Django Rest', value: 90},
                {name:'React', value: 90},
            ],
        },
    ],
    education:[
        {
            title: {
                'en': 'SYSTEMS ENGINEER',
                'es': 'INGENIERO DE SISTEMAS'
            },
            date: "2016-2021",
            school: "Fundación Universitaria de San Gil - UNISANGIL",
            place: "Chiquinquirá - Boyaca"
        },
        {
            title: {
                'en': 'SYSTEM TECHNIQUE',
                'es': 'TÉCNICO DE SISTEMAS'
            },
            date: "2015",
            school: "Centro Industrial de Mantenimiento y Manufactura SENA",
            place: "Chiquinquirá - Boyaca"
        },
        {
            title: {
                'en': 'HIGH SCHOOL',
                'es': 'BACHILLER ACADÉMICO'
            },
            date: "2014",
            school: "Normal Superior Sor Josefa del Castillo y Guevara",
            place: "Chiquinquirá - Boyaca"
        }
    ],
    experience: [
        {
            title: {
                'en': 'DEVELOPER FRONTEND / BACKEND',
                'es': 'DESARROLLADOR FRONTEND / BACKEND'
            },
            date: "2020 - Present",
            company: "International Data and Information Consulting",
            task:[
                {
                    name:{
                        'en':'Backend developer (Django, Django Rest Framework)',
                        'es':'Desarrollador Backend (Django, Django Rest Framework)',
                    },
                },
                {
                    name:{
                        'en':'Frontend developer (React)',
                        'es':'Desarrollador Frontend (React)',
                    },
                },
                {
                    name:{
                        'en':'Design and Administration of Databases',
                        'es':'Diseño y Administración de Bases de Datos',
                    },
                },
                {
                    name:{
                        'en':'Server Administrator (Application Deployment)',
                        'es':'Administrador de servidores (Despliegue de aplicaciones)',
                    },
                }
            ]
        }
    ],
    services:[
        {
            name:{
                'en':'Web applications development',
                'es':'Desarrollo de aplicaciones web'
            },
            description: {
                'en': 'Design, development and maintenance of custom web applications, using technologies such as HTML, CSS, JavaScript, and frameworks such as React.',
                'es': 'Diseño, desarrollo y mantenimiento de aplicaciones web personalizadas, utilizando tecnologías como HTML, CSS, JavaScript, y frameworks como React. '
            },
            order: 1, 
        },
        {
            name:{
                'en':'Custom software development',
                'es':'Desarrollo de software a medida'
            },
            description: {
                'en': 'Creation of customized software according to the specific needs of clients. This involves requirements analysis, architecture design, coding, testing and deployment of the solution for either desktop/mobile or web.',
                'es': 'Creación de software personalizado según las necesidades específicas de los clientes. Esto implica el análisis de requisitos, diseño de la arquitectura, codificación, pruebas y despliegue de la solución sea para equipos de escritorio/moviles o web. '
            },
            order: 2, 
        },
        {
            name:{
                'en':'Database development',
                'es':'Desarrollo de bases de datos'
            },
            description: {
                'en': 'Design and development of efficient and scalable databases, using technologies such as mySQL and PostgreSQL. This includes data modeling, optimized query creation, and database administration.',
                'es': 'Diseño y desarrollo de bases de datos eficientes y escalables, utilizando tecnologías como mySQL y PostgreSQL. Esto incluye el modelado de datos, creación de consultas optimizadas y administración de bases de datos. '
            },
            order: 3, 
        },
        {
            name:{
                'en':'Performance optimization',
                'es':'Optimización de rendimiento'
            },
            description: {
                'en': 'Improved performance and efficiency of existing IT systems. This involves bottleneck analysis, query optimization, implementation of caching techniques, among others.',
                'es': 'Mejora del rendimiento y la eficiencia de los sistemas informáticos existentes. Esto implica el análisis de cuellos de botella, la optimización de consultas, la implementación de técnicas de almacenamiento en caché, entre otros. '
            },
            order: 4, 
        },
    ]
}