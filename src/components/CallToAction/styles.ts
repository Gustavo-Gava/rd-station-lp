import { applyContainerStyles } from '@/styles/utils'
import styled from 'styled-components'

export const Container = styled.section`
  ${applyContainerStyles()};

  background-color: ${({ theme }) => theme.colors.primary.dark};
  color: ${({ theme }) => theme.colors.system.background};
`

export const ContentContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 16px;
`

export const Title = styled.h3`
  font-size: ${({ theme }) => theme.fonts.size.heading.md};
  line-height: ${({ theme }) => theme.fonts.lineHeight.heading.md};
`

export const Description = styled.span`
  font-size: ${({ theme }) => theme.fonts.size.body.md};
  line-height: ${({ theme }) => theme.fonts.lineHeight.body.md};
`

export const ButtonWrapper = styled.div`
  width: fit-content;
  margin-top: 6px;
`