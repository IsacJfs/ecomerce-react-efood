import Header from '../../components/Header'
import RestaurantList from '../../components/ListRestaurants'
import { Restaurants } from '../../models/Restaurant'
import sushiImage from '../../images/sushi.png'
import macarraoImage from '../../images/pasta-small.png'

const RestaurnatsList: Restaurants[] = [
  {
    id: 1,
    image: sushiImage,
    name: 'Hioki Sushi',
    rate: 4.9,
    infos: ['tag', 'tag2'],
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!',
    path: '/restaurante'
  },
  {
    id: 2,
    image: macarraoImage,
    name: 'La Dolce Vita Trattoria',
    rate: 4.6,
    infos: ['tag'],
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    path: '/restaurante'
  },
  {
    id: 3,
    image: macarraoImage,
    name: 'La Dolce Vita Trattoria',
    rate: 4.6,
    infos: ['tag'],
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    path: '/restaurante'
  },
  {
    id: 4,
    image: macarraoImage,
    name: 'La Dolce Vita Trattoria',
    rate: 4.6,
    infos: ['tag'],
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    path: '/restaurante'
  },
  {
    id: 5,
    image: macarraoImage,
    name: 'La Dolce Vita Trattoria',
    rate: 4.6,
    infos: ['tag'],
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    path: '/restaurante'
  },
  {
    id: 6,
    image: macarraoImage,
    name: 'La Dolce Vita Trattoria',
    rate: 4.6,
    infos: ['tag'],
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    path: '/restaurante'
  }
]

const Home = () => {
  return (
    <div>
      <Header />
      <RestaurantList restaurants={RestaurnatsList} />
    </div>
  )
}

export default Home
