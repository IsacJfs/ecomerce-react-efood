import { RestaurnatsList } from '../../models/DataJSON/listaRestaurantes'
import Header from '../../components/Header'
import RestaurantList from '../../components/RestaurantList'

const Home = () => {
  return (
    <div>
      <Header />
      <RestaurantList restaurants={RestaurnatsList} />
    </div>
  )
}

export default Home
