import {IProduct} from "@/entities";
import {ICategory} from "@/entities";
import {ISubCategory} from "@/entities";

export const contacts = {
    whatsAppLink: 'https://wa.me/79260845222',
    whatsAppNumber: '+7(926)084-52-22',
    telegramLink: 'https://t.me',
    email: 'info@constrspb.ru',
    phone: '+7(499)938-87-67',
}

export const categories: ICategory[] = [
    {
        id: 0,
        photo: '/photos/19.jpg',
        name: 'Товары для неразрушающего контроля',
        subCategoryCount: 2,
    },
]

export const subCategories: ISubCategory[] = [
    {
        id: 0,
        photo: '/photos/10.jpg',
        name: 'Химические реактивы для пленки',
        productCount: 2,
    },
    {
        id: 1,
        photo: '/photos/19.jpg',
        name: 'Рентгеновская пленка D7',
        productCount: 2,
    },
]

export const products: IProduct[] = [
    {
        id: 0,
        price: 13308,
        isFixedPrice: true,
        inStock: true,
        photos: [
            '/photos/1.jpg',
            '/photos/2.jpg',
            '/photos/3.jpg',
            '/photos/4.jpg',
            '/photos/5.jpg',
        ],
        name: 'Фиксаж G328',
        description: {
            text: `Представляем жидкий концентрат, который может быть использован для создания готового раствора проявителя при обработке фотопленки AGFA STRUCTURIX, а также для российских пленок, изготовленных из AGFA сырья (Р5 и Р8Ф). Этот концентрат доступен в канистре объемом 5 литров.
                    
            \nХраните химические реактивы AGFA в интервале температур от +4°C до +23°C. Этот интервал обеспечивает оптимальные условия для их хранения. При низких температурах (до -50°C) химические реактивы меняют свои свойства незначительно.
            
            \nЕсли химические реактивы замерзли, разморозьте их при комнатной температуре и используйте как обычно.
            
            \nДля приготовления рабочего раствора, влейте 5 литров концентрата в ёмкость с 15 литрами воды (температура воды от +15°C до +40°C), хорошо перемешайте, затем добавьте оставшиеся 5 литров воды в получившийся раствор. Расход концентрата составляет 1 литр на 1 квадратный метр пленки.
            
            \nПреимущества химических реактивов AGFA включают:`,
            tableText: [
                'Полную совместимость с пленочной системой и методами обработки AGFA.',
                'Экономичное использование химических реактивов AGFA.',
                'Удобный объем для обработки рентгеновских пленок.',
                'Экологически дружественная упаковка, состоящая на 60% из перерабатываемых материалов.',
                'Практичные канистры из чистого полиэтилена с визуальной маркировкой содержимого: красные полоски для проявителя, голубые для фиксажа и коричневые для других химических реактивов.',
                'Надежная крышка, которая гарантирует сохранность концентратов.'
            ]
        },
        shortDescription: 'Канистра объемом 5 литров содержит жидкий концентрат, который используется для приготовления 25 литров готового раствора проявителя для ручной фотообработки.',
        specifications: {
            type: "Фиксаж",
            manufacturer: "AGFA NDT",
            manufactureCountry: "Бельгия",
        }

    },
    {
        id: 1,
        price: 11181,
        inStock: true,
        isFixedPrice: true,
        photos: [
            '/photos/6.jpg',
            '/photos/7.jpg',
            '/photos/8.jpg',
            '/photos/9.jpg',
            '/photos/10.jpg',
        ],
        name: 'Проявитель G128',
        description: {
            text: `Представляем жидкий концентрат, который может быть использован для создания готового раствора проявителя при обработке фотопленки AGFA STRUCTURIX, а также для российских пленок, изготовленных из AGFA сырья (Р5 и Р8Ф). Этот концентрат доступен в канистре объемом 5 литров.
                    
            \nХраните химические реактивы AGFA в интервале температур от +4°C до +23°C. Этот интервал обеспечивает оптимальные условия для их хранения. При низких температурах (до -50°C) химические реактивы меняют свои свойства незначительно.
            
            \nЕсли химические реактивы замерзли, разморозьте их при комнатной температуре и используйте как обычно.
            
            \nДля приготовления рабочего раствора, влейте 5 литров концентрата в ёмкость с 15 литрами воды (температура воды от +15°C до +40°C), хорошо перемешайте, затем добавьте оставшиеся 5 литров воды в получившийся раствор. Расход концентрата составляет 1 литр на 1 квадратный метр пленки.
            
            \nПреимущества химических реактивов AGFA включают:`,
            tableText: [
                'Полную совместимость с пленочной системой и методами обработки AGFA.',
                'Экономичное использование химических реактивов AGFA.',
                'Удобный объем для обработки рентгеновских пленок.',
                'Экологически дружественная упаковка, состоящая на 60% из перерабатываемых материалов.',
                'Практичные канистры из чистого полиэтилена с визуальной маркировкой содержимого: красные полоски для проявителя, голубые для фиксажа и коричневые для других химических реактивов.',
                'Надежная крышка, которая гарантирует сохранность концентратов.'
            ]
        },
        shortDescription: 'Канистра объемом 5 литров содержит жидкий концентрат, который используется для приготовления 25 литров готового раствора проявителя для ручной фотообработки.',
        specifications: {
            type: "Проявитель",
            manufacturer: "AGFA NDT",
            manufactureCountry: "Бельгия"
        },
    },
    {
        id: 2,
        price: 73900,
        isFixedPrice: false,
        inStock: false,
        photos: [
            '/photos/11.jpg',
            '/photos/12.jpg',
            '/photos/13.jpg',
            '/photos/14.jpg',
            '/photos/15.jpg',
        ],
        name: 'D7 Pb Rollpac 70mmX90m',
        description: {
            text: `Плёнка D7 соответствует требованиям ГОСТ 7512-82 класса 1 чувствительности контроля и ГОСТ ИСО 17636-1 класса "В". Она также относится к плёночным системам класса С5 по стандарту ISO 11699-1, что позволяет ей работать в различных диапазонах радиационных толщин.

            \nПлёнка D7 способна регистрировать широкий диапазон интенсивностей излучения, что обеспечивает получение контрастных снимков при контроле объектов с разной толщиной.
            
            \nУпаковка Pb Rollpac представляет собой рулон плёнки с свинцовыми экранами толщиной 0,027 мм в непроницаемой для света, влаги и масел упаковке.
            
            \nИспользование кассет не требуется при работе с рулонной плёнкой Rollpac. Рулонная плёнка применяется в основном для контроля длинных изделий, таких как сварные кольцевые и продольные стыковые соединения труб, трубопроводов и сосудов давления.
            
            \nУникальный способ упаковки Rollpac обеспечивает надежный контакт между плёнкой и свинцовой фольгой, даже на сферических или цилиндрических объектах малого диаметра, что гарантирует высокое качество снимков.
            
            \nПри использовании рулонной плёнки можно выбирать нужную длину, что позволяет создавать панорамные снимки кольцевых швов с помощью одного отреза плёнки.
            
            \nПроцесс открытия конверта Rollpac быстр и легок: пленку можно легко вынуть из упаковки, просто открывая конверт.
            
            \nИндикатор длины на упаковке помогает определить, где отрезать плёнку, и контролировать оставшееся количество.
            
            \nРазмер плёнки составляет 70 мм в ширину и 90 метров в длину, но иногда упаковка может содержать два отрезка, общей длиной более 90 метров, что указывается зелеными наклейками.
            
            \nВес одной упаковки пленки составляет примерно 10,5 кг, а гарантированный срок годности составляет 3 года с даты производства.
            
            \nЭта плёнка предназначена для радиографического контроля следующих типов объектов:`,
            tableText: [
                'Металлов средней и большой атомной плотности.',
                'Сварных и паяных соединений, литых изделий, композитов, пластика, керамики и резины.',
                'Стальных объектов различной толщины, особенно эффективна для толщины от 10 мм и выше, учитывая баланс качества контроля и производительности.',
                'Изделий из цветных металлов, включая изделия из легких металлов большой толщины.',
                'Разнотолщинных конструкций с применением многоплёночной технологии, обычно совместно с плёнками D4 и D5.',
                'Плёнку D7 можно использовать с свинцовыми экранами или без них, непосредственно экспонируя её.',
            ]
        },
        shortDescription: 'Эта высококонтрастная и мелкозернистая пленка предназначена для использования с рентгеновским или гамма-излучением и соответствует классу С5 согласно стандарту ISO 11699-1.',
        specifications: {
            type: "Рентгеновская пленка",
            manufacturer: "AGFA NDT",
            manufactureCountry: "Бельгия"
        },
        usage: {
            text: 'Возможные области применения:',
            tableText: [
                'Радиографический контроль объектов с сложной геометрией, включая изделия, полученные путем направленной кристаллизации.',
                'Радиографический контроль изделий и отдельных элементов конструкций, изготовленных из жаропрочных материалов.',
                'Радиографический контроль полуфабрикатов и конструкций из неметаллических материалов, таких как углепластики, резина и армированные композиты.',
                'Радиографический контроль объектов с изменяющейся радиационной толщиной или сложной геометрией с использованием многопленочной технологии.',
                'Радиографический контроль сварных соединений, наплавок и литых изделий из материалов среднего и высокого атомного номера, особенно толстых материалов (примерно от 15 мм и выше по стали).',
                'Радиографический контроль склеенных соединений и конструкций, включая элементы для авиакосмической промышленности.',
                'Радиографический контроль электротехнических и электронных устройств.',
                'Радиографический контроль изделий из жаропрочных сплавов, таких как турбинные лопатки и камеры сгорания.',
                'Радиографический контроль монокристаллических изделий, полученных методом направленной кристаллизации металла.',
                'Радиографический контроль паяных соединений, таких как топливные и масляные трубопроводы радиаторов, лопатки турбин и другие.',
            ],
        },
        examples: {
            text: 'Возможные примеры использования:',
            tableText: [
                'Соединения различных типов конструкций, такие как стыковые, угловые, тавровые и торцевые, выполненные с использованием различных методов и видов сварки. Эти соединения могут быть изготовлены из разнообразных материалов, включая стали с аустенитной, перлитной, мартенситной структурой, а также жаропрочные никелевые, хромоникелевые и цветные металлы.',
                'Сварные соединения на трубах малых и средних диаметров.',
                'Сварные соединения в системах трубопроводов.',
                'Сварные соединения на сосудах под давлением.',
                'Стыки обвязки корпусов реакторов и теплообменных поверхностей.',
                'Сварные соединения на адсорберах, десорберах, секционных и секторных отводах, тройниках, и разветвителях потоков.',
                'Сварные соединения в литейной промышленности, включая стали, чугун, титан, алюминий, магний, медь и другие сплавы.',
                'Сварные соединения на рабочих лопатках газовых и жидкостных турбин, которые имеют охлаждающие каналы и разнотолщинные участки в галтельных переходах.',
                'Корпуса циркуляционных насосов, компрессоров и редукторов.',
                'Запорная и регулирующая арматура, используемая в авиационных гидравлических системах.',
                'Тройники, отводы и переходники, применяемые в трубопроводах.',
                'Обвязки двигателей летательных аппаратов.',
            ]
        },
    },
    {
        id: 3,
        price: 82000,
        isFixedPrice: false,
        inStock: false,
        nextArrivalDate: 'В ноябре 2023 года',
        photos: [
            '/photos/16.jpg',
            '/photos/17.jpg',
            '/photos/18.jpg',
            '/photos/19.jpg',
            '/photos/20.jpg',
        ],
        name: 'D7 Pb Rollpac 100mmX90m',
        description: {
            text: `Плёнка D7 соответствует требованиям ГОСТ 7512-82 класса 1 чувствительности контроля и ГОСТ ИСО 17636-1 класса "В". Она также относится к плёночным системам класса С5 по стандарту ISO 11699-1, что позволяет ей работать в различных диапазонах радиационных толщин.

            \nПлёнка D7 способна регистрировать широкий диапазон интенсивностей излучения, что обеспечивает получение контрастных снимков при контроле объектов с разной толщиной.
            
            \nУпаковка Pb Rollpac представляет собой рулон плёнки с свинцовыми экранами толщиной 0,027 мм в непроницаемой для света, влаги и масел упаковке.
            
            \nИспользование кассет не требуется при работе с рулонной плёнкой Rollpac. Рулонная плёнка применяется в основном для контроля длинных изделий, таких как сварные кольцевые и продольные стыковые соединения труб, трубопроводов и сосудов давления.
            
            \nУникальный способ упаковки Rollpac обеспечивает надежный контакт между плёнкой и свинцовой фольгой, даже на сферических или цилиндрических объектах малого диаметра, что гарантирует высокое качество снимков.
            
            \nПри использовании рулонной плёнки можно выбирать нужную длину, что позволяет создавать панорамные снимки кольцевых швов с помощью одного отреза плёнки.
            
            \nПроцесс открытия конверта Rollpac быстр и легок: пленку можно легко вынуть из упаковки, просто открывая конверт.
            
            \nИндикатор длины на упаковке помогает определить, где отрезать плёнку, и контролировать оставшееся количество.
            
            \nРазмер плёнки составляет 100 мм в ширину и 90 метров в длину, но иногда упаковка может содержать два отрезка, общей длиной более 90 метров, что указывается зелеными наклейками.
            
            \nВес одной упаковки пленки составляет примерно 14,5 кг, а гарантированный срок годности составляет 3 года с даты производства.
            
            \nЭта плёнка предназначена для радиографического контроля следующих типов объектов:`,
            tableText: [
                'Металлов средней и большой атомной плотности.',
                'Сварных и паяных соединений, литых изделий, композитов, пластика, керамики и резины.',
                'Стальных объектов различной толщины, особенно эффективна для толщины от 10 мм и выше, учитывая баланс качества контроля и производительности.',
                'Изделий из цветных металлов, включая изделия из легких металлов большой толщины.',
                'Разнотолщинных конструкций с применением многоплёночной технологии, обычно совместно с плёнками D4 и D5.',
                'Плёнку D7 можно использовать с свинцовыми экранами или без них, непосредственно экспонируя её.',
            ]
        },
        shortDescription: 'Эта высококонтрастная и мелкозернистая пленка предназначена для использования с рентгеновским или гамма-излучением и соответствует классу С5 согласно стандарту ISO 11699-1.',
        specifications: {
            type: "Рентгеновская пленка",
            manufacturer: "AGFA NDT",
            manufactureCountry: "Бельгия"
        },
        usage: {
            text: 'Возможные области применения:',
            tableText: [
                'Радиографический контроль объектов с сложной геометрией, включая изделия, полученные путем направленной кристаллизации.',
                'Радиографический контроль изделий и отдельных элементов конструкций, изготовленных из жаропрочных материалов.',
                'Радиографический контроль полуфабрикатов и конструкций из неметаллических материалов, таких как углепластики, резина и армированные композиты.',
                'Радиографический контроль объектов с изменяющейся радиационной толщиной или сложной геометрией с использованием многопленочной технологии.',
                'Радиографический контроль сварных соединений, наплавок и литых изделий из материалов среднего и высокого атомного номера, особенно толстых материалов (примерно от 15 мм и выше по стали).',
                'Радиографический контроль склеенных соединений и конструкций, включая элементы для авиакосмической промышленности.',
                'Радиографический контроль электротехнических и электронных устройств.',
                'Радиографический контроль изделий из жаропрочных сплавов, таких как турбинные лопатки и камеры сгорания.',
                'Радиографический контроль монокристаллических изделий, полученных методом направленной кристаллизации металла.',
                'Радиографический контроль паяных соединений, таких как топливные и масляные трубопроводы радиаторов, лопатки турбин и другие.',
            ],
        },
        examples: {
            text: 'Возможные примеры использования:',
            tableText: [
                'Соединения различных типов конструкций, такие как стыковые, угловые, тавровые и торцевые, выполненные с использованием различных методов и видов сварки. Эти соединения могут быть изготовлены из разнообразных материалов, включая стали с аустенитной, перлитной, мартенситной структурой, а также жаропрочные никелевые, хромоникелевые и цветные металлы.',
                'Сварные соединения на трубах малых и средних диаметров.',
                'Сварные соединения в системах трубопроводов.',
                'Сварные соединения на сосудах под давлением.',
                'Стыки обвязки корпусов реакторов и теплообменных поверхностей.',
                'Сварные соединения на адсорберах, десорберах, секционных и секторных отводах, тройниках, и разветвителях потоков.',
                'Сварные соединения в литейной промышленности, включая стали, чугун, титан, алюминий, магний, медь и другие сплавы.',
                'Сварные соединения на рабочих лопатках газовых и жидкостных турбин, которые имеют охлаждающие каналы и разнотолщинные участки в галтельных переходах.',
                'Корпуса циркуляционных насосов, компрессоров и редукторов.',
                'Запорная и регулирующая арматура, используемая в авиационных гидравлических системах.',
                'Тройники, отводы и переходники, применяемые в трубопроводах.',
                'Обвязки двигателей летательных аппаратов.',
            ]
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
    //     name: 'ProductInfoCard name',
    // },
    // {
    //     id: 2,
    //     price: 228,
    //     inStock: true,
    //     photos: [
    //         'https://www.designevo.com/res/templates/thumb_small/special-wine-glass.webp',
    //         'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNZv2_asDiTvmiZU507obKxzRuicXE-iYQOw&usqp=CAU',
    //     ],
    //     name: 'ProductInfoCard name',
    // },
    // {
    //     id: 3,
    //     price: 1488,
    //     inStock: false,
    //     photos: [
    //         'https://www.designevo.com/res/templates/thumb_small/special-wine-glass.webp',
    //         'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNZv2_asDiTvmiZU507obKxzRuicXE-iYQOw&usqp=CAU',
    //     ],
    //     name: 'ProductInfoCard name',
    // },
    // {
    //     id: 4,
    //     price: 1337,
    //     inStock: true,
    //     photos: [
    //         'https://www.designevo.com/res/templates/thumb_small/special-wine-glass.webp',
    //         'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNZv2_asDiTvmiZU507obKxzRuicXE-iYQOw&usqp=CAU',
    //     ],
    //     name: 'ProductInfoCard name',
    // },
    // {
    //     id: 5,
    //     price: 112,
    //     inStock: false,
    //     photos: [
    //         'https://www.designevo.com/res/templates/thumb_small/special-wine-glass.webp',
    //         'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNZv2_asDiTvmiZU507obKxzRuicXE-iYQOw&usqp=CAU',
    //     ],
    //     name: 'ProductInfoCard name',
    // },
    // {
    //     id: 6,
    //     price: 990,
    //     inStock: true,
    //     photos: [
    //         'https://www.designevo.com/res/templates/thumb_small/special-wine-glass.webp',
    //         'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNZv2_asDiTvmiZU507obKxzRuicXE-iYQOw&usqp=CAU',
    //     ],
    //     name: 'ProductInfoCard name',
    // },
    // {
    //     id: 0,
    //     price: 28,
    //     inStock: true,
    //     photos: [
    //         'https://www.designevo.com/res/templates/thumb_small/special-wine-glass.webp',
    //         'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNZv2_asDiTvmiZU507obKxzRuicXE-iYQOw&usqp=CAU',
    //     ],
    //     name: 'ProductInfoCard name',
    // },
    // {
    //     id: 1,
    //     price: 5,
    //     inStock: false,
    //     photos: [
    //         'https://www.designevo.com/res/templates/thumb_small/special-wine-glass.webp',
    //         'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNZv2_asDiTvmiZU507obKxzRuicXE-iYQOw&usqp=CAU',
    //     ],
    //     name: 'ProductInfoCard name',
    // },
    // {
    //     id: 2,
    //     price: 228,
    //     inStock: true,
    //     photos: [
    //         'https://www.designevo.com/res/templates/thumb_small/special-wine-glass.webp',
    //         'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNZv2_asDiTvmiZU507obKxzRuicXE-iYQOw&usqp=CAU',
    //     ],
    //     name: 'ProductInfoCard name',
    // },
    // {
    //     id: 3,
    //     price: 1488,
    //     inStock: false,
    //     photos: [
    //         'https://www.designevo.com/res/templates/thumb_small/special-wine-glass.webp',
    //         'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNZv2_asDiTvmiZU507obKxzRuicXE-iYQOw&usqp=CAU',
    //     ],
    //     name: 'ProductInfoCard name',
    // },
    // {
    //     id: 4,
    //     price: 1337,
    //     inStock: true,
    //     photos: [
    //         'https://www.designevo.com/res/templates/thumb_small/special-wine-glass.webp',
    //         'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNZv2_asDiTvmiZU507obKxzRuicXE-iYQOw&usqp=CAU',
    //     ],
    //     name: 'ProductInfoCard name',
    // },
    // {
    //     id: 5,
    //     price: 112,
    //     inStock: false,
    //     photos: [
    //         'https://www.designevo.com/res/templates/thumb_small/special-wine-glass.webp',
    //         'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNZv2_asDiTvmiZU507obKxzRuicXE-iYQOw&usqp=CAU',
    //     ],
    //     name: 'ProductInfoCard name',
    // },
    // {
    //     id: 6,
    //     price: 990,
    //     inStock: true,
    //     photos: [
    //         'https://www.designevo.com/res/templates/thumb_small/special-wine-glass.webp',
    //         'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNZv2_asDiTvmiZU507obKxzRuicXE-iYQOw&usqp=CAU',
    //     ],
    //     name: 'ProductInfoCard name',
    // },
]


