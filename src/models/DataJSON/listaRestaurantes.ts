import { Restaurants } from '../Restaurant'
import sushiImage from '../../images/sushi.png'
import macarraoImage from '../../images/pasta-small.png'
import sushiMoriwase from '../../images/Hioki_Sushi/sushi-ajustado.jpg'
import sashimiSet from '../../images/Hioki_Sushi/Sashimi-Set-ajustado.jpg'
import tempuraUdon from '../../images/Hioki_Sushi/Udon-com-tempura-ajustado.jpg'
import tonkatsy from '../../images/Hioki_Sushi/tonkatsu-ajustado.jpg'
import yakitori from '../../images/Hioki_Sushi/yakitori-ajustado.jpg'
import mochi from '../../images/Hioki_Sushi/mochi-ajustado.jpg'
import pizzaMarguerita from '../../images/La_Dolce_vita/pizza.png'
import lasanhaBolonhesa from '../../images/La_Dolce_vita/Lasanha-ajustada.jpg'
import fettuccine from '../../images/La_Dolce_vita/Fettuccine-ajustado.jpg'
import risotoFungui from '../../images/La_Dolce_vita/Risotto-ajustado.jpg'
import carpaccioManzo from '../../images/La_Dolce_vita/carpaccio-ajustado.jpg'
import tiramisu from '../../images/La_Dolce_vita/Tiramisu-ajustado.jpg'

export const RestaurnatsList: Restaurants[] = [
  {
    id: '1',
    image: sushiImage,
    name: 'Hioki Sushi',
    rate: 4.9,
    infos: ['tag', 'tag2'],
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!',
    path: '/restaurante',
    categorie: 'Japones',
    menu: [
      {
        idMenu: 1,
        name: 'Sushi Moriwase',
        image: sushiMoriwase,
        description:
          'Seleção variada de sushi com os peixes mais frescos do dia, incluindo salmão, atum e peixe branco.',
        price: 60.0,
        serves: 2
      },
      {
        idMenu: 2,
        name: 'Sashimi Set',
        image: sashimiSet,
        description:
          'Conjunto de sashimi com fatias finas de salmão, atum, peixe branco e polvo, servido com molho de soja e wasabi.',
        price: 55.0,
        serves: 2
      },
      {
        idMenu: 3,
        name: 'Tempura Udon',
        image: tempuraUdon,
        description:
          'Macarrão udon em caldo saboroso, acompanhado de tempura crocante de camarão e vegetais.',
        price: 45.0,
        serves: 1
      },
      {
        idMenu: 4,
        name: 'Tonkatsu',
        image: tonkatsy,
        description:
          'Costeleta de porco empanada e frita, servida com molho tonkatsu, repolho picado e arroz.',
        price: 40.0,
        serves: 1
      },
      {
        idMenu: 5,
        name: 'Yakitori',
        image: yakitori,
        description:
          'Espetinhos de frango grelhados e cobertos com molho teriyaki, servidos com cebolinha.',
        price: 35.0,
        serves: 1
      },
      {
        idMenu: 6,
        name: 'Mochi',
        image: mochi,
        description:
          'Bolinho de arroz japonês recheado com pasta de feijão azuki doce, servido com chá verde.',
        price: 20.0,
        serves: 1
      }
    ]
  },
  {
    id: '2',
    image: macarraoImage,
    name: 'La Dolce Vita Trattoria',
    rate: 4.6,
    infos: ['tag'],
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    path: '/restaurante',
    categorie: 'Italiano',
    menu: [
      {
        idMenu: 1,
        name: 'Pizza Margherita',
        image: pizzaMarguerita,
        description:
          'A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!',
        price: 35.0,
        serves: 2
      },
      {
        idMenu: 2,
        name: 'Lasanha à Bolonhesa',
        image: lasanhaBolonhesa,
        description:
          'Lasanha recheada com carne moída, molho de tomate caseiro, bechamel e queijo parmesão gratinado.',
        price: 45.0,
        serves: 3
      },
      {
        idMenu: 3,
        name: 'Fettuccine Alfredo',
        image: fettuccine,
        description:
          'Massa fettuccine ao molho Alfredo cremoso, com manteiga, creme de leite e queijo parmesão.',
        price: 40.0,
        serves: 2
      },
      {
        idMenu: 4,
        name: 'Risotto ai Funghi',
        image: risotoFungui,
        description:
          'Risoto cremoso com uma seleção de cogumelos silvestres e um toque de trufas brancas.',
        price: 50.0,
        serves: 2
      },
      {
        idMenu: 5,
        name: 'Carpaccio di Manzo',
        image: carpaccioManzo,
        description:
          'Fatias finas de carne crua de boi, rúcula, alcaparras e lascas de queijo parmesão, regadas com azeite de oliva.',
        price: 30.0,
        serves: 1
      },
      {
        idMenu: 6,
        name: 'Tiramisù',
        image: tiramisu,
        description:
          'Sobremesa clássica com camadas de biscoitos savoiardi embebidos em café, intercaladas com um creme à base de mascarpone.',
        price: 25.0,
        serves: 2
      }
    ]
  }
]
