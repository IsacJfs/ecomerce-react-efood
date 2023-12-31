import styled from 'styled-components'
import { colors, displayFlexCol } from '../../styles'
import { bgHeader } from '../BgHeaders/style'

export const Header = styled(bgHeader)`
  ${displayFlexCol}
  height: 360px;
  color: ${colors.pinkDark};
  padding: 40px;
  margin-bottom: 80px;

  @media (max-width: 768px) {
    margin-bottom: 48px;
  }
`

export const Title = styled.h1`
  font-size: 36px;
  text-align: center;
`

export const Logo = styled.div`
  width: 128px;
`
