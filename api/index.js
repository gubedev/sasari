const products = [
  {
    id: "1",
    category: "bolsos",
    description: "Bolso Mile",
    isOff: false,
    discountPercentage: 30,
    price: 1925,
  },
  {
    id: "2",
    category: "bolsos",
    description: "Bolso Aye rosa",
    isOff: false,
    discountPercentage: 30,
    price: 1980,
  },
  {
    id: "3",
    category: "bolsos",
    description: "Bolso Aye negro",
    isOff: false,
    discountPercentage: 30,
    price: 1980,
  },
  {
    id: "4",
    category: "bolsos",
    description: "Bolso Tommy negro",
    isOff: false,
    discountPercentage: 30,
    price: 1925,
  },
  {
    id: "5",
    category: "bolsos",
    description: "Bolso Tommy azul",
    isOff: false,
    discountPercentage: 30,
    price: 1925,
  },
  {
    id: "6",
    category: "mochilas",
    description: "Mochila Jamaica",
    isOff: false,
    discountPercentage: 30,
    price: 1980,
  },
  {
    id: "7",
    category: "mochilas",
    description: "Mochila Venecia",
    isOff: false,
    discountPercentage: 30,
    price: 1870,
  },
  {
    id: "8",
    category: "mochilas",
    description: "Mochila Caribe negra",
    isOff: false,
    discountPercentage: 30,
    price: 1815,
  },
  {
    id: "9",
    category: "mochilas",
    description: "Mochila Bali",
    isOff: false,
    discountPercentage: 30,
    price: 1925,
  },
  {
    id: "10",
    category: "mochilas",
    description: "Mochila Roma negra",
    isOff: false,
    discountPercentage: 30,
    price: 1925,
  },
  {
    id: "11",
    category: "carteras",
    description: "Cartera Falcon negra",
    isOff: false,
    discountPercentage: 30,
    price: 1925,
  },
  {
    id: "12",
    category: "carteras",
    description: "Cartera Falcon mostaza",
    isOff: false,
    discountPercentage: 30,
    price: 2090,
  },
  {
    id: "13",
    category: "carteras",
    description: "Cartera Falcon camel",
    isOff: false,
    discountPercentage: 30,
    price: 2090,
  },
  {
    id: "14",
    category: "carteras",
    description: "Cartera Lara negra",
    isOff: false,
    discountPercentage: 30,
    price: 1980,
  },
  {
    id: "15",
    category: "carteras",
    description: "Cartera Lara blanca",
    isOff: false,
    discountPercentage: 30,
    price: 1980,
  },
  {
    id: "16",
    category: "carteras",
    description: "Cartera Nina",
    isOff: false,
    discountPercentage: 30,
    price: 1760,
  },
  {
    id: "17",
    category: "carteras",
    description: "Cartera Crocco",
    isOff: false,
    discountPercentage: 30,
    price: 1925,
  },
  {
    id: "18",
    category: "carteras",
    description: "Cartera Asia",
    isOff: false,
    discountPercentage: 30,
    price: 1870,
  },
  {
    id: "19",
    category: "riñoneras",
    description: "Riñonera Crocco",
    isOff: false,
    discountPercentage: 30,
    price: 1925,
  },
  {
    id: "20",
    category: "riñoneras",
    description: "Riñonera simil cuero",
    isOff: false,
    discountPercentage: 30,
    price: 1925,
  },
  {
    id: "21",
    category: "riñoneras",
    description: "Riñonera blanca",
    isOff: false,
    discountPercentage: 30,
    price: 990,
  },
  {
    id: "22",
    category: "neceseres",
    description: "Neceser",
    isOff: false,
    discountPercentage: 30,
    price: 715,
  },
  {
    id: "23",
    category: "billeteras",
    description: "Billetera 19cm",
    isOff: false,
    discountPercentage: 30,
    price: 1100,
  },
  {
    id: "24",
    category: "billeteras",
    description: "Billetera 3 partes rosa",
    isOff: false,
    discountPercentage: 30,
    price: 1540,
  },
  {
    id: "25",
    category: "accesorios",
    description: "Moños Hawai",
    isOff: false,
    discountPercentage: 30,
    price: 1925,
  },
  {
    id: "26",
    category: "accesorios",
    description: "cinturones",
    isOff: false,
    discountPercentage: 30,
    price: 1925,
  },
  {
    id: "27",
    category: "accesorios",
    description: "llaveros",
    isOff: false,
    discountPercentage: 30,
    price: 385,
  },
  {
    id: "28",
    category: "accesorios",
    description: "pad",
    isOff: false,
    discountPercentage: 30,
    price: 198,
  },
  {
    id: "29",
    category: "accesorios",
    description: "Vinchas Skyn",
    isOff: false,
    discountPercentage: 30,
    price: 385,
  }
]

export const fetchProducts = async (category) => {
  const filtered = category
    ? products.filter((p) => p.category === category)
    : products

  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      resolve(filtered)
    }, 2000)
  })
}

export const fetchProduct = async (itemId) => {
  const filtered = products.find((p) => p.id === itemId)

  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      resolve(filtered)
    }, 2000)
  })
}
