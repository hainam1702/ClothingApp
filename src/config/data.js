import products from "./products";

const categories = [
    {
        id: 1,
        title: "Women",
        product: [...products.slice(0,12)],
    },
    {
        id: 2,
        title: "Man",
        product: [...products.slice(12,24)],
    },
    {
        id: 3,
        title: "Kids",
        product: [...products.slice(24,28)],
    },
];

export default categories;