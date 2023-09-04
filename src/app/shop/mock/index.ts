import {IProduct} from "@/entities";

export const contacts = {
    whatsApp: 'https://wa.me/79260845222',
    telegram: 'https://t.me',
    viber: '',
    email: 'info@constrspb.ru',
    phone: '+7(499)938-87-67',
}

export const products: IProduct[] = [
    {
        id: 0,
        price: 28,
        inStock: true,
        photos: [
            '/photos/1.jpg',
            '/photos/2.jpg',
            '/photos/3.jpg',
            '/photos/4.jpg',
            '/photos/5.jpg',
        ],
        name: 'Agfa Structurix G 328',
        description: 'Agfa Structurix G 328 - однокомпонентный, жидкий фиксаж для ручной обработки промышленных рентгеновских пленок. Фиксаж G328 не содержит отвердитель.Фиксаж Agfa Structurix G328 поставляется в удобной канистре, изготовленной из полиэтилена, содержащей 5 л концентрата для приготовления 25 л готового раствора.',
        shortDescription: '',
        specifications: {
            type: "Фиксаж",
            manufacturer: "AGFA NDT",
            manufactureCountry: "Бельгия"
        },
    },
    {
        id: 1,
        price: 28,
        inStock: true,
        photos: [
            '/photos/6.jpg',
            '/photos/7.jpg',
            '/photos/8.jpg',
            '/photos/9.jpg',
            '/photos/10.jpg',
        ],
        name: 'Agfa Structurix G 128',
        description: 'Agfa Structurix G 128 - однокомпонентный, жидкий проявитель для ручной обработки промышленных рентгеновских пленок. Agfa Structurix G128 поставляется в удобной канистре, изготовленной из полиэтилена, содержащей 5 л концентрата для приготовления 25 л готового раствора.',
        shortDescription: '',
        specifications: {
            type: "Фиксаж",
            manufacturer: "AGFA NDT",
            manufactureCountry: "Бельгия"
        },
    },
    {
        id: 2,
        price: 28,
        inStock: true,
        photos: [
            '/photos/11.jpg',
            '/photos/12.jpg',
            '/photos/13.jpg',
            '/photos/14.jpg',
            '/photos/15.jpg',
        ],
        name: 'Agfa Structurix D7 70mmX90m',
        description: 'Рентгеновская пленка Agfa Structurix D7 - плёнка с мелкозернистой структурой, высоким контрастом, обладающая очень высокой чувствительностью. Пленка AGFA Structurix D7 может использоваться со свинцовыми экранами или без них. При экспонировании со свинцовым экраном необходимо использовать рентгеновское или γ-излучение. Рентгеновская пленка Agfa Structurix D7 применяется для контроля композиционных материалов, литых деталей и сварных швов. Рекомендована к применению в оборонной, аэрокосмической и авиационной промышленности.',
        shortDescription: '',
        specifications: {
            type: "Рентгеновская пленка",
            manufacturer: "AGFA NDT",
            manufactureCountry: "Бельгия"
        },
    },
    {
        id: 3,
        price: 28,
        inStock: true,
        photos: [
            '/photos/16.jpg',
            '/photos/17.jpg',
            '/photos/18.jpg',
            '/photos/19.jpg',
            '/photos/20.jpg',
        ],
        name: 'Agfa Structurix D7 100mmX90m',
        description: 'Рентгеновская пленка Agfa Structurix D7 - плёнка с мелкозернистой структурой, высоким контрастом, обладающая очень высокой чувствительностью. Пленка AGFA Structurix D7 может использоваться со свинцовыми экранами или без них. При экспонировании со свинцовым экраном необходимо использовать рентгеновское или γ-излучение. Рентгеновская пленка Agfa Structurix D7 применяется для контроля композиционных материалов, литых деталей и сварных швов. Рекомендована к применению в оборонной, аэрокосмической и авиационной промышленности.',
        shortDescription: '',
        specifications: {
            type: "Рентгеновская пленка",
            manufacturer: "AGFA NDT",
            manufactureCountry: "Бельгия"
        },
    },
    // },
    // {
    //     id: 1,
    //     price: 5,
    //     inStock: false,
    //     photos: [
    //         'https://www.designevo.com/res/templates/thumb_small/special-wine-glass.webp',
    //         'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNZv2_asDiTvmiZU507obKxzRuicXE-iYQOw&usqp=CAU',
    //     ],
    //     name: 'Product name',
    // },
    // {
    //     id: 2,
    //     price: 228,
    //     inStock: true,
    //     photos: [
    //         'https://www.designevo.com/res/templates/thumb_small/special-wine-glass.webp',
    //         'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNZv2_asDiTvmiZU507obKxzRuicXE-iYQOw&usqp=CAU',
    //     ],
    //     name: 'Product name',
    // },
    // {
    //     id: 3,
    //     price: 1488,
    //     inStock: false,
    //     photos: [
    //         'https://www.designevo.com/res/templates/thumb_small/special-wine-glass.webp',
    //         'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNZv2_asDiTvmiZU507obKxzRuicXE-iYQOw&usqp=CAU',
    //     ],
    //     name: 'Product name',
    // },
    // {
    //     id: 4,
    //     price: 1337,
    //     inStock: true,
    //     photos: [
    //         'https://www.designevo.com/res/templates/thumb_small/special-wine-glass.webp',
    //         'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNZv2_asDiTvmiZU507obKxzRuicXE-iYQOw&usqp=CAU',
    //     ],
    //     name: 'Product name',
    // },
    // {
    //     id: 5,
    //     price: 112,
    //     inStock: false,
    //     photos: [
    //         'https://www.designevo.com/res/templates/thumb_small/special-wine-glass.webp',
    //         'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNZv2_asDiTvmiZU507obKxzRuicXE-iYQOw&usqp=CAU',
    //     ],
    //     name: 'Product name',
    // },
    // {
    //     id: 6,
    //     price: 990,
    //     inStock: true,
    //     photos: [
    //         'https://www.designevo.com/res/templates/thumb_small/special-wine-glass.webp',
    //         'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNZv2_asDiTvmiZU507obKxzRuicXE-iYQOw&usqp=CAU',
    //     ],
    //     name: 'Product name',
    // },
    // {
    //     id: 0,
    //     price: 28,
    //     inStock: true,
    //     photos: [
    //         'https://www.designevo.com/res/templates/thumb_small/special-wine-glass.webp',
    //         'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNZv2_asDiTvmiZU507obKxzRuicXE-iYQOw&usqp=CAU',
    //     ],
    //     name: 'Product name',
    // },
    // {
    //     id: 1,
    //     price: 5,
    //     inStock: false,
    //     photos: [
    //         'https://www.designevo.com/res/templates/thumb_small/special-wine-glass.webp',
    //         'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNZv2_asDiTvmiZU507obKxzRuicXE-iYQOw&usqp=CAU',
    //     ],
    //     name: 'Product name',
    // },
    // {
    //     id: 2,
    //     price: 228,
    //     inStock: true,
    //     photos: [
    //         'https://www.designevo.com/res/templates/thumb_small/special-wine-glass.webp',
    //         'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNZv2_asDiTvmiZU507obKxzRuicXE-iYQOw&usqp=CAU',
    //     ],
    //     name: 'Product name',
    // },
    // {
    //     id: 3,
    //     price: 1488,
    //     inStock: false,
    //     photos: [
    //         'https://www.designevo.com/res/templates/thumb_small/special-wine-glass.webp',
    //         'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNZv2_asDiTvmiZU507obKxzRuicXE-iYQOw&usqp=CAU',
    //     ],
    //     name: 'Product name',
    // },
    // {
    //     id: 4,
    //     price: 1337,
    //     inStock: true,
    //     photos: [
    //         'https://www.designevo.com/res/templates/thumb_small/special-wine-glass.webp',
    //         'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNZv2_asDiTvmiZU507obKxzRuicXE-iYQOw&usqp=CAU',
    //     ],
    //     name: 'Product name',
    // },
    // {
    //     id: 5,
    //     price: 112,
    //     inStock: false,
    //     photos: [
    //         'https://www.designevo.com/res/templates/thumb_small/special-wine-glass.webp',
    //         'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNZv2_asDiTvmiZU507obKxzRuicXE-iYQOw&usqp=CAU',
    //     ],
    //     name: 'Product name',
    // },
    // {
    //     id: 6,
    //     price: 990,
    //     inStock: true,
    //     photos: [
    //         'https://www.designevo.com/res/templates/thumb_small/special-wine-glass.webp',
    //         'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNZv2_asDiTvmiZU507obKxzRuicXE-iYQOw&usqp=CAU',
    //     ],
    //     name: 'Product name',
    // },
]

export const categories = [
    {
        name: 'Шлемы из папье-маше',
        url: '/not-found'
    },
    {
        name: 'Автомобильные прокладки',
        url: '/xxx'
    },
    {
        name: 'Семечки',
        url: '/'
    },
    {
        name: 'Цветочные арки для свадьбы',
        url: '/'
    },
    {
        name: 'Семечки',
        url: '/'
    },
    {
        name: 'Семечки',
        url: '/'
    },
    {
        name: 'Семечки',
        url: '/'
    },
    {
        name: 'Семечки',
        url: '/'
    },
    {
        name: 'Семечки',
        url: '/'
    },
    {
        name: 'Семечки',
        url: '/'
    },
    {
        name: 'Семечки',
        url: '/'
    },
    {
        name: 'Семечки',
        url: '/'
    },
];

