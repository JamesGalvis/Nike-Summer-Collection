import {
  BigShoe1,
  BigShoe2,
  BigShoe3,
  shoe1Card,
  thumbnailShoe1,
  thumbnailShoe2,
  thumbnailShoe3,
} from '../assets/images'

const menu_list = [
  { label: 'Home', href: '/home' },
  { label: 'About Us', href: '/about' },
  { label: 'Products', href: '/products' },
  { label: 'Contact Us', href: '/contact' },
  // { label: "Sign in / Explore now", href: "/signIn" },
]

const statistics = [
  { value: '1k+', label: 'Marcas' },
  { value: '500+', label: 'Tiendas' },
  { value: '250k+', label: 'Clientes' },
]

const shoes = [
  {
    thumbnail: thumbnailShoe1,
    bigShoe: BigShoe1,
  },
  {
    thumbnail: thumbnailShoe2,
    bigShoe: BigShoe2,
  },
  {
    thumbnail: thumbnailShoe3,
    bigShoe: BigShoe3,
  },
]

const products = [
  {
    imgUrl: shoe1Card,
    name: 'Nike Air Jordan-01',
    price: '$200.20',
    description: "Coleccion Verano"
  },
  {
    imgUrl: shoe1Card,
    name: 'Nike Air Jordan-10',
    price: '$210.20',
    description: "Coleccion Verano",
  },
  {
    imgUrl: shoe1Card,
    name: 'Nike Air Jordan-100',
    price: '$220.20',
    description: "Coleccion Verano"
  },
  {
    imgUrl: shoe1Card,
    name: 'Nike Air Jordan-001',
    price: '$230.20',
    description: "Coleccion Verano",
  },
]

export { menu_list, statistics, shoes, products }
