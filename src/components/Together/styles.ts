import { applyContainerStyles, applyContentContainerStyles, applyFullWidthContainerStyles } from '@/styles/utils'
import styled from 'styled-components'

export const Container = styled.div`
  ${applyFullWidthContainerStyles()}

  position: relative;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.primary.dark};
  color: ${({ theme }) => theme.colors.system.background};

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    
    width: 48px;
    height: 48px;
    clip-path: polygon(0 0, 100% 0, 0 100%);

    background-color: ${({ theme }) => theme.colors.gray[10]};
  }
`

export const Content = styled.div`
  ${applyContentContainerStyles()}

  display: flex;
  flex-direction: column;
  gap: 16px;
`

export const Title = styled.h3`
  font-size: ${({ theme }) => theme.fonts.size.heading.md};
  line-height: ${({ theme }) => theme.fonts.lineHeight.heading.md};
  font-weight: ${({ theme }) => theme.fonts.weight.bold};
`

export const Paragraph = styled.p`
  font-size: ${({ theme }) => theme.fonts.size.body.md};
  line-height: ${({ theme }) => theme.fonts.lineHeight.body.md};
  font-weight: ${({ theme }) => theme.fonts.weight.normal};
`