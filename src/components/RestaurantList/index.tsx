import { Restaurants } from '../../models/Restaurant'
import Restaurant from '../Restaurant'
import * as S from './styles'

type Props = {
  restaurants: Restaurants[]
}

const RestaurantList = ({ restaurants }: Props) => (
  <S.Container className="container">
    {restaurants.map((restaurante) => (
      <Restaurant
        key={restaurante.id}
        image={restaurante.image}
        name={restaurante.name}
        infos={restaurante.infos}
        description={restaurante.description}
        rate={restaurante.rate}
        path={`/restaurante/${restaurante.id}`}
      />
    ))}
  </S.Container>
)

export default RestaurantList
