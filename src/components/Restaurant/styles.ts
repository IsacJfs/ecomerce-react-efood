import styled from 'styled-components'
import { colors, displayFlex, displayFlexCol } from '../../styles'
import { buttonTagStyle } from '../../styles'

export const Card = styled.div`
  position: relative;
  max-height: 400px;
  ${displayFlexCol}

  @media (max-width: 768px) {
    height: auto;
  }
`

export const Body = styled.div`
  ${displayFlexCol}
  border: 1px solid ${colors.pinkDark};
  margin-bottom: 48px;
  padding: 8px;
  color: ${colors.pinkDark};
  font-size: 14px;
`

export const Image = styled.img`
  width: 100%;
`

export const Head = styled.div`
  ${displayFlex}
  font-weight: bold;
  font-size: 18px;

  img {
    padding-left: 8px;
  }
`
export const TagContainer = styled.div`
  position: absolute;
  right: 16px;
  top: 16px;
`

export const Description = styled.div`
  margin: 16px 0;
  line-height: 22px;
`

export const Tag = styled.p`
  ${buttonTagStyle}
  margin-left: 8px;
`

export const Button = styled.a`
  ${buttonTagStyle}

  @media (max-width: 768px) {
    width: 100%;
  }
`
