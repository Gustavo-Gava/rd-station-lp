
import { applyContentContainerStyles, applyFullWidthContainerStyles } from '@/styles/utils'
import styled from 'styled-components'

export const Container = styled.div`
  ${applyFullWidthContainerStyles()};
  display: flex;
  padding: 20px 16px;

  border-bottom: 1px solid ${({ theme }) => theme.colors.gray[30]};
`

export const Content = styled.div`
  ${applyContentContainerStyles()}
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const LogoWrapper = styled.div`
`

export const Menu = styled.button`

`