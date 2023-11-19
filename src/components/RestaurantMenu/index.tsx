import * as S from './style'
import { RestaurnatsList } from '../../models/DataJSON/listaRestaurantes'
type Props = {
  restaurantId: string
}

const RestaurantMenu = ({ restaurantId }: Props) => {
  const restaurant = RestaurnatsList.find((rest) => rest.id === restaurantId)
  const menuItens = restaurant ? restaurant.menu : []

  return (
    <S.Menu>
      <S.Banner backgroundImage={restaurant?.image as string}>
        <S.BannerContent className="container">
          <S.Categorie> {restaurant?.categorie}</S.Categorie>
          <S.Title>{restaurant?.name}</S.Title>
        </S.BannerContent>
      </S.Banner>
      <S.CardContainer className="container">
        {menuItens.map((menu) => (
          <S.Card key={menu.idMenu}>
            <S.imageMenu src={menu.image} alt={menu.name} />
            <h4>{menu.name}</h4>
            <p>{menu.description}</p>
            <a href="">Saiba Mais</a>
          </S.Card>
        ))}
      </S.CardContainer>
    </S.Menu>
  )
}

export default RestaurantMenu
