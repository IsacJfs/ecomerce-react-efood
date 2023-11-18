import styled from 'styled-components'
import { colors, displayFlexCol } from '../../styles'
import ImagemTeste from '../../images/pasta-small.png'

export const Banner = styled.div`
  background-image: url(${ImagemTeste});
  background-repeat: no-repeat;
  background-size: cover;
  height: 280px;
`

export const BannerContent = styled.div`
  ${displayFlexCol}
  height: 100%;
  padding-top: 24px;
  padding-bottom: 32px;
`

export const Categorie = styled.h2`
  font-weight: 100;
  font-size: 32px;
  color: ${colors.witeMedium};
`

export const Title = styled(Categorie)`
  font-weight: bold;
`

export const Menu = styled.section`
  color: ${colors.witeMedium};
`
