import styled from 'styled-components'
import { buttonTagStyle, colors, displayFlexCol } from '../../styles'

interface BannerProps {
  $backgroundimage: string
}

export const Banner = styled.div<BannerProps>`
  background-image: url(${(props) => props.$backgroundimage});
  background-repeat: no-repeat;
  background-size: cover;
  height: 280px;
  margin-bottom: 56px;
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
  height: 336px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const CardContainer = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 32px;
`

export const imageMenu = styled.img`
  width: 100%;
`

export const Button = styled.a`
  ${buttonTagStyle}
  background-color: ${colors.pinkLight};
  color: ${colors.pinkDark};
  width: 100%;
  margin-top: 4px;
`

export const Name = styled.h4`
  margin: 8px 0;
  font-size: 16px;
`

export const Descricao = styled.p`
  line-height: 22px;
  font-size: 14px;
  max-height: 88px;
`

export const CardHeader = styled.div`
  ${displayFlexCol}
`
