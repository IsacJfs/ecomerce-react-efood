import { useParams } from 'react-router-dom'
import HeaderMenu from '../../components/HeaderMenu'
import RestaurantMenu from '../../components/RestaurantMenu'

const RestaurantProfile = () => {
  const { id } = useParams()
  return (
    <div>
      <HeaderMenu />
      <RestaurantMenu restaurantId={id as string} />
    </div>
  )
}

export default RestaurantProfile
