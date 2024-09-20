import Iqtisod from '@/assets/images/directions/iqtisod.png'
import DIImage from '@/assets/images/directions/DI.png'
import turizm from '@/assets/images/directions/turizm.png'
import pedagogika from '@/assets/images/directions/pedagogika.png'

export const faculties = [
    {
        id: 1,
        title: "Iqtisodiyot",
        sub_title: "60310100 - Iqtisodiyot (tarmoqlar va sohalar bo‘yicha)",
        img: Iqtisod,
        degree: "Bakalavr",
        language: "O‘zbek",
        prices: {
            kunduzgi: "16.000.000 so‘m",
            kechki: "18.000.000 so‘m",
            sirtqi: "11.000.000 so‘m",
        },
        description: `<div>Bizning bakalavr bosqichi Iqtisodiyot yo‘nalishimizda siz mikro va makro iqtisodiyot nazariyalari va ularni hayotiy jarayonlarga tadbiq qilishni o‘rganasiz.</div>`
    },
    {
        id: 2,
        title: "Kompyuter injiniringi (IT)",
        sub_title: "60610600 - Dasturiy injiniring",
        img: DIImage,
        degree: "Bakalavr",
        language: "O‘zbek",
        prices: {
            kunduzgi: "16.000.000 so‘m",
            kechki: "15.000.000 so‘m",
            sirtqi: "11.000.000 so‘m",
        },
        description: `<div>Mamlakatlar va yo‘nalishlar bo‘yicha tarix bakalavr dasturi orqali Siz dunyo tarixi, madaniyatlarning rivojlanishi, siyosiy va ijtimoiy o‘zgarishlar haqida chuqur bilimlarga ega bo‘lasiz.</div>`
    },
    {
        id: 3,
        title: "Pedagogika va psixologiya",
        sub_title: "61010400 - Turizm (faoliyat yo‘nalishlari bo‘yicha)",
        img: turizm,
        degree: "Bakalavr",
        language: "O‘zbek",
        prices: {
            kunduzgi: "16.000.000 so‘m",
            kechki: "14.000.000 so‘m",
            sirtqi: "10.500.000 so‘m",
        },
        description: `<div>Mamlakatlar va yo‘nalishlar bo‘yicha tarix bakalavr dasturi orqali Siz dunyo tarixi, madaniyatlarning rivojlanishi, siyosiy va ijtimoiy o‘zgarishlar haqida chuqur bilimlarga ega bo‘lasiz.</div>`
    },
    {
        id: 4,
        title: "Tillar va adabiyot",
        sub_title: "60110100 - Pedagogika va psixologiya",
        img: pedagogika,
        degree: "Bakalavr",
        language: "O‘zbek",
        prices: {
            kunduzgi: "14.000.000 so‘m",
            kechki: "11.000.000 so‘m",
            sirtqi: "10.500.000 so‘m",
        },
        description: `<div>Mamlakatlar va yo‘nalishlar bo‘yicha tarix bakalavr dasturi orqali Siz dunyo tarixi, madaniyatlarning rivojlanishi, siyosiy va ijtimoiy o‘zgarishlar haqida chuqur bilimlarga ega bo‘lasiz.</div>`
    },
]