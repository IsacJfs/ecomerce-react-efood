import { Link } from 'react-router-dom'
import { Restaurants } from '../../models/Restaurant'
import Restaurant from '../Restaurant'
import * as S from './styles'

type Props = {
  restaurants: Restaurants[]
}

const RestaurantList = ({ restaurants }: Props) => (
  <S.Container className="container">
    {restaurants.map((restaurante) => (
      <Link to={`/restaurante/${restaurante.id}`} key={restaurante.id}>
        <Restaurant
          image={restaurante.image}
          name={restaurante.name}
          infos={restaurante.infos}
          description={restaurante.description}
          rate={restaurante.rate}
          path={restaurante.path}
        />
      </Link>
    ))}
  </S.Container>
)

export default RestaurantList
