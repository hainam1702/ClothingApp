const products = [
    {
        id: 1,
        name: "Áo phông AHWEH",
        price: 125.357,
        cate: 'Woman',
        image: require('../../assets/girl-1.png'),
        description:
            "Minim id eiusmod laborum excepteur officia. Lorem ad enim voluptate elit sunt velit nostrud voluptate. Ut nostrud et aliqua do eiusmod laboris magna occaecat aliquip. Reprehenderit veniam veniam cupidatat labore dolore aute laboris voluptate consectetur consectetur elit.",
        rating: 4.7,
        size: ["XS", "S", "M", "L", "XL"]
    },
    {
        id: 2,
        name: "Váy dài Hàn Quốc ",
        price: 95.000,
        cate: 'Woman',
        image: require('../../assets/girl-7.png'),
        description:
            "Minim id eiusmod laborum excepteur officia. Lorem ad enim voluptate elit sunt velit nostrud voluptate. Ut nostrud et aliqua do eiusmod laboris magna occaecat aliquip. Reprehenderit veniam veniam cupidatat labore dolore aute laboris voluptate consectetur consectetur elit.",
        rating: 4.7,
        size: ["XS", "S", "M", "L", "XL"]
    },
    {
        id: 3,
        name: "Áo dạ nâu",
        price: 200.000,
        cate: 'Woman',
        image: require('../../assets/girl-3.png'),
        description:
            "Minim id eiusmod laborum excepteur officia. Lorem ad enim voluptate elit sunt velit nostrud voluptate. Ut nostrud et aliqua do eiusmod laboris magna occaecat aliquip. Reprehenderit veniam veniam cupidatat labore dolore aute laboris voluptate consectetur consectetur elit.",
        rating: 4.7,
        size: ["XS", "S", "M", "L", "XL"]
    },
    {
        id: 4,
        name: "Áo lông cừu",
        price: 900.000,
        cate: 'Woman',
        image: require('../../assets/girl-4.png'),
        description:
            "Minim id eiusmod laborum excepteur officia. Lorem ad enim voluptate elit sunt velit nostrud voluptate. Ut nostrud et aliqua do eiusmod laboris magna occaecat aliquip. Reprehenderit veniam veniam cupidatat labore dolore aute laboris voluptate consectetur consectetur elit.",
        rating: 4.7,
        size: ["XS", "S", "M", "L", "XL"]
    },
    {
        id: 5,
        name: "Áo blazer trắng",
        price: 565.000,
        cate: 'Woman',
        image: require('../../assets/girl-5.png'),
        description:
            "Minim id eiusmod laborum excepteur officia. Lorem ad enim voluptate elit sunt velit nostrud voluptate. Ut nostrud et aliqua do eiusmod laboris magna occaecat aliquip. Reprehenderit veniam veniam cupidatat labore dolore aute laboris voluptate consectetur consectetur elit.",
        rating: 4.7,
        size: ["XS", "S", "M", "L", "XL"]
    },
    {
        id: 6,
        name: "Hoodie họa tiết mã vạch",
        price: 95.500,
        cate: 'Woman',
        image: require('../../assets/girl-6.png'),
        description:
            "Minim id eiusmod laborum excepteur officia. Lorem ad enim voluptate elit sunt velit nostrud voluptate. Ut nostrud et aliqua do eiusmod laboris magna occaecat aliquip. Reprehenderit veniam veniam cupidatat labore dolore aute laboris voluptate consectetur consectetur elit.",
        rating: 4.7,
        size: ["XS", "S", "M", "L", "XL"]
    },
    {
        id: 7,
        name: "Áo phông mặt cười",
        price: 95,
        cate: 'Woman',
        image: require('../../assets/girl-2.png'),
        description:
            "Minim id eiusmod laborum excepteur officia. Lorem ad enim voluptate elit sunt velit nostrud voluptate. Ut nostrud et aliqua do eiusmod laboris magna occaecat aliquip. Reprehenderit veniam veniam cupidatat labore dolore aute laboris voluptate consectetur consectetur elit.",
        rating: 4.7,
        size: ["XS", "S", "M", "L", "XL"]
    },
    {
        id: 8,
        name: "Hoodie RUNDMC",
        price: 95,
        cate: 'Woman',
        image: require('../../assets/girl-8.png'),
        description:
            "Minim id eiusmod laborum excepteur officia. Lorem ad enim voluptate elit sunt velit nostrud voluptate. Ut nostrud et aliqua do eiusmod laboris magna occaecat aliquip. Reprehenderit veniam veniam cupidatat labore dolore aute laboris voluptate consectetur consectetur elit.",
        rating: 4.7,
        size: ["XS", "S", "M", "L", "XL"]
    },
    {
        id: 9,
        name: "Chân váy ngắn ",
        price: 95,
        cate: 'Woman',
        image: require('../../assets/girl-9.png'),
        description:
            "Minim id eiusmod laborum excepteur officia. Lorem ad enim voluptate elit sunt velit nostrud voluptate. Ut nostrud et aliqua do eiusmod laboris magna occaecat aliquip. Reprehenderit veniam veniam cupidatat labore dolore aute laboris voluptate consectetur consectetur elit.",
        rating: 4.7,
        size: ["XS", "S", "M", "L", "XL"]
    },
    {
        id: 10,
        name: "Váy dài trắng",
        price: 95,
        cate: 'Woman',
        image: require('../../assets/girl-10.png'),
        description:
            "Minim id eiusmod laborum excepteur officia. Lorem ad enim voluptate elit sunt velit nostrud voluptate. Ut nostrud et aliqua do eiusmod laboris magna occaecat aliquip. Reprehenderit veniam veniam cupidatat labore dolore aute laboris voluptate consectetur consectetur elit.",
        rating: 4.7,
        size: ["XS", "S", "M", "L", "XL"]
    },
    {
        id: 11,
        name: "Bộ Tennis",
        price: 95,
        cate: 'Woman',
        image: require('../../assets/girl-11.png'),
        description:
            "Minim id eiusmod laborum excepteur officia. Lorem ad enim voluptate elit sunt velit nostrud voluptate. Ut nostrud et aliqua do eiusmod laboris magna occaecat aliquip. Reprehenderit veniam veniam cupidatat labore dolore aute laboris voluptate consectetur consectetur elit.",
        rating: 4.7,
        size: ["XS", "S", "M", "L", "XL"]
    },
    {
        id: 12,
        name: "Quần uống suông",
        price: 95,
        cate: 'Woman',
        image: require('../../assets/girl-12.png'),
        description:
            "Minim id eiusmod laborum excepteur officia. Lorem ad enim voluptate elit sunt velit nostrud voluptate. Ut nostrud et aliqua do eiusmod laboris magna occaecat aliquip. Reprehenderit veniam veniam cupidatat labore dolore aute laboris voluptate consectetur consectetur elit.",
        rating: 4.7,
        size: ["XS", "S", "M", "L", "XL"]
    },
    {
        id: 13,
        name: "Áo phông trơn",
        price: 95,
        cate: 'Man',
        image: require('../../assets/man-1.png'),
        description:
            "Minim id eiusmod laborum excepteur officia. Lorem ad enim voluptate elit sunt velit nostrud voluptate. Ut nostrud et aliqua do eiusmod laboris magna occaecat aliquip. Reprehenderit veniam veniam cupidatat labore dolore aute laboris voluptate consectetur consectetur elit.",
        rating: 4.7,
        size: ["XS", "S", "M", "L", "XL"]
    },
    {
        id: 14,
        name: "Áo phông Nguyễn Huệ",
        price: 95,
        cate: 'Man',
        image: require('../../assets/man-2.png'),
        description:
            "Minim id eiusmod laborum excepteur officia. Lorem ad enim voluptate elit sunt velit nostrud voluptate. Ut nostrud et aliqua do eiusmod laboris magna occaecat aliquip. Reprehenderit veniam veniam cupidatat labore dolore aute laboris voluptate consectetur consectetur elit.",
        rating: 4.7,
        size: ["XS", "S", "M", "L", "XL"]
    },
    {
        id: 15,
        name: "Áo phông trái tim",
        price: 95,
        cate: 'Man',
        image: require('../../assets/man-3.png'),
        description:
            "Minim id eiusmod laborum excepteur officia. Lorem ad enim voluptate elit sunt velit nostrud voluptate. Ut nostrud et aliqua do eiusmod laboris magna occaecat aliquip. Reprehenderit veniam veniam cupidatat labore dolore aute laboris voluptate consectetur consectetur elit.",
        rating: 4.7,
        size: ["XS", "S", "M", "L", "XL"]
    },
    {
        id: 16,
        name: "Áo phông trắng trơn",
        price: 97,
        cate: 'Man',
        image: require('../../assets/man-4.png'),
        description:
            "Minim id eiusmod laborum excepteur officia. Lorem ad enim voluptate elit sunt velit nostrud voluptate. Ut nostrud et aliqua do eiusmod laboris magna occaecat aliquip. Reprehenderit veniam veniam cupidatat labore dolore aute laboris voluptate consectetur consectetur elit.",
        rating: 4.7,
        size: ["XS", "S", "M", "L", "XL"]
    },   
     {
        id: 17,
        name: "Áo phông Tây Sơn",
        price: 67,
        cate: 'Man',
        image: require('../../assets/man-5.png'),
        description:
            "Minim id eiusmod laborum excepteur officia. Lorem ad enim voluptate elit sunt velit nostrud voluptate. Ut nostrud et aliqua do eiusmod laboris magna occaecat aliquip. Reprehenderit veniam veniam cupidatat labore dolore aute laboris voluptate consectetur consectetur elit.",
        rating: 4.7,
        size: ["XS", "S", "M", "L", "XL"]
    },
    {
        id: 18,
        name: "Vestton nam",
        price: 57,
        cate: 'Man',
        image: require('../../assets/man-6.png'),
        description:
            "Minim id eiusmod laborum excepteur officia. Lorem ad enim voluptate elit sunt velit nostrud voluptate. Ut nostrud et aliqua do eiusmod laboris magna occaecat aliquip. Reprehenderit veniam veniam cupidatat labore dolore aute laboris voluptate consectetur consectetur elit.",
        rating: 4.7,
        size: ["XS", "S", "M", "L", "XL"]
    },
    {
        id: 19,
        name: "Cardigan xám dài",
        price: 85,
        cate: 'Man',
        image: require('../../assets/man-7.png'),
        description:
            "Minim id eiusmod laborum excepteur officia. Lorem ad enim voluptate elit sunt velit nostrud voluptate. Ut nostrud et aliqua do eiusmod laboris magna occaecat aliquip. Reprehenderit veniam veniam cupidatat labore dolore aute laboris voluptate consectetur consectetur elit.",
        rating: 4.7,
        size: ["XS", "S", "M", "L", "XL"]
    },
    {
        id: 20,
        name: "Hoodie audere",
        price: 95,
        cate: 'Man',
        image: require('../../assets/man-8.png'),
        description:
            "Minim id eiusmod laborum excepteur officia. Lorem ad enim voluptate elit sunt velit nostrud voluptate. Ut nostrud et aliqua do eiusmod laboris magna occaecat aliquip. Reprehenderit veniam veniam cupidatat labore dolore aute laboris voluptate consectetur consectetur elit.",
        rating: 4.7,
        size: ["XS", "S", "M", "L", "XL"]
    },
    {
        id: 21,
        name: "Hoodie trắng trơn",
        price: 75,
        cate: 'Kid',
        image: require('../../assets/man-9.png'),
        description:
            "Minim id eiusmod laborum excepteur officia. Lorem ad enim voluptate elit sunt velit nostrud voluptate. Ut nostrud et aliqua do eiusmod laboris magna occaecat aliquip. Reprehenderit veniam veniam cupidatat labore dolore aute laboris voluptate consectetur consectetur elit.",
        rating: 4.7,
        size: ["XS", "S", "M", "L", "XL"]
    },
    {
        id: 22,
        name: "Hoodie SF pink",
        price: 55,
        cate: 'Man',
        image: require('../../assets/man-10.png'),
        description:
            "Minim id eiusmod laborum excepteur officia. Lorem ad enim voluptate elit sunt velit nostrud voluptate. Ut nostrud et aliqua do eiusmod laboris magna occaecat aliquip. Reprehenderit veniam veniam cupidatat labore dolore aute laboris voluptate consectetur consectetur elit.",
        rating: 4.7,
        size: ["XS", "S", "M", "L", "XL"]
    },
    {
        id: 23,
        name: "Quần âu nam Hàn Quốc",
        price: 75,
        cate: 'Man',
        image: require('../../assets/man-11.png'),
        description:
            "Minim id eiusmod laborum excepteur officia. Lorem ad enim voluptate elit sunt velit nostrud voluptate. Ut nostrud et aliqua do eiusmod laboris magna occaecat aliquip. Reprehenderit veniam veniam cupidatat labore dolore aute laboris voluptate consectetur consectetur elit.",
        rating: 4.7,
        size: ["XS", "S", "M", "L", "XL"]
    }, {
        id: 24,
        name: "Pink T-Shirt",
        price: 95,
        cate: 'Man',
        image: require('../../assets/man-12.png'),
        description:
            "Minim id eiusmod laborum excepteur officia. Lorem ad enim voluptate elit sunt velit nostrud voluptate. Ut nostrud et aliqua do eiusmod laboris magna occaecat aliquip. Reprehenderit veniam veniam cupidatat labore dolore aute laboris voluptate consectetur consectetur elit.",
        rating: 4.7,
        size: ["XS", "S", "M", "L", "XL"]
    },
    {
        id: 25,
        name: "Bộ quần áo trẻ em hồng dễ thương",
        price: 75,
        cate: 'Kid',
        image: require('../../assets/kid-1.png'),
        description:
            "Minim id eiusmod laborum excepteur officia. Lorem ad enim voluptate elit sunt velit nostrud voluptate. Ut nostrud et aliqua do eiusmod laboris magna occaecat aliquip. Reprehenderit veniam veniam cupidatat labore dolore aute laboris voluptate consectetur consectetur elit.",
        rating: 4.7,
        size: ["XS", "S", "M", "L", "XL"]
    },
    {
        id: 26,
        name: "Bộ quần áo trẻ em hiphop",
        price: 95,
        cate: 'Kid',
        image: require('../../assets/kid-2.png'),
        description:
            "Minim id eiusmod laborum excepteur officia. Lorem ad enim voluptate elit sunt velit nostrud voluptate. Ut nostrud et aliqua do eiusmod laboris magna occaecat aliquip. Reprehenderit veniam veniam cupidatat labore dolore aute laboris voluptate consectetur consectetur elit.",
        rating: 4.7,
        size: ["XS", "S", "M", "L", "XL"]
    },
    {
        id: 27,
        name: "Bộ thẻ thao trẻ em",
        price: 113,
        cate: 'Kid',
        image: require('../../assets/kid-3.png'),
        description:
            "Minim id eiusmod laborum excepteur officia. Lorem ad enim voluptate elit sunt velit nostrud voluptate. Ut nostrud et aliqua do eiusmod laboris magna occaecat aliquip. Reprehenderit veniam veniam cupidatat labore dolore aute laboris voluptate consectetur consectetur elit.",
        rating: 4.7,
        size: ["XS", "S", "M", "L", "XL"]
    },
    {
        id: 28,
        name: "Vest trẻ em",
        price: 95,
        cate: 'Kid',
        image: require('../../assets/kid-4.png'),
        description:
            "Minim id eiusmod laborum excepteur officia. Lorem ad enim voluptate elit sunt velit nostrud voluptate. Ut nostrud et aliqua do eiusmod laboris magna occaecat aliquip. Reprehenderit veniam veniam cupidatat labore dolore aute laboris voluptate consectetur consectetur elit.",
        rating: 4.7,
        size: ["XS", "S", "M", "L", "XL"]
    },
];

export default products;