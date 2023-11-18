import React from 'react'
import estrela from '../../images/star_favorite.svg'
import * as S from './styles'

type Props = {
  image: string
  name: string
  rate: number
  infos: string[]
  description: string
  path: string
}

const Restaurant = React.memo(
  ({ image, name, rate, infos, description, path }: Props) => (
    <S.Card>
      <S.Image src={image} alt={name} />
      <S.Body>
        <div>
          <S.Head>
            <p>{name}</p>
            <S.Head>
              <p>{rate}</p>
              <img src={estrela} alt="Estrela" />
            </S.Head>
          </S.Head>
          <S.Description>{description}</S.Description>
          <S.TagContainer>
            {infos.map((info) => (
              <S.Tag key={info}>{info}</S.Tag>
            ))}
          </S.TagContainer>
          <div>
            <S.Button href={path}>Saiba mais</S.Button>
          </div>
        </div>
      </S.Body>
    </S.Card>
  )
)

Restaurant.displayName = 'Restaurant'

export default Restaurant
