import styled from 'styled-components'
import { colors, displayFlexCol } from '../../styles'

interface BannerProps {
  backgroundImage: string
}

export const Banner = styled.div<BannerProps>`
  background-image: url(${(props) => props.backgroundImage});
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

export const Card = styled.div`
  background-color: ${colors.pinkDark};
  color: ${colors.pinkMedium};
  padding: 8px;
`

export const CardContainer = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 32px;
`

export const imageMenu = styled.img`
  width: 100%;
`
