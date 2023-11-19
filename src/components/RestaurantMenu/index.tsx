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
      <S.Banner $backgroundimage={restaurant?.image as string}>
        <S.BannerContent className="container">
          <S.Categorie> {restaurant?.categorie}</S.Categorie>
          <S.Title>{restaurant?.name}</S.Title>
        </S.BannerContent>
      </S.Banner>
      <S.CardContainer className="container">
        {menuItens.map((menu) => (
          <S.Card key={menu.idMenu}>
            <S.CardHeader>
              <S.imageMenu src={menu.image} alt={menu.name} />
              <S.Name>{menu.name}</S.Name>
            </S.CardHeader>
            <S.Descricao>{menu.description}</S.Descricao>
            <S.Button href="#">Saiba Mais</S.Button>
          </S.Card>
        ))}
      </S.CardContainer>
    </S.Menu>
  )
}

export default RestaurantMenu
