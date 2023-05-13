import theme from '@/styles/theme/theme';
import { applyContainerStyles, applyContentContainerStyles } from './../../styles/utils';
import styled from 'styled-components'

export const Container = styled.footer`
  ${applyContainerStyles()};

  display: flex;
  background-color: ${({ theme }) => theme.colors.primary.main};
`

export const ContentContainer = styled.div`
  ${applyContentContainerStyles()};

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
`

export const SocialContentWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  @media ${({ theme }) => theme.devices.notebook} {
    justify-content: space-between;
  }
`

export const LogoContainer = styled.div``

export const Divider = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${({ theme }) => theme.colors.primary.light};
`

export const LinksContainerDesktop = styled.div`
  display: none;

  @media ${({ theme }) => theme.devices.notebook} {
    display: block;
  }
`

export const LinksContainerMobile = styled.div`
  display: block;

  @media ${({ theme }) => theme.devices.notebook} {
    display: none;
  }
`


export const CopyrightContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  
  font-size: ${({ theme }) => theme.fonts.size.body.sm};

  @media ${({ theme }) => theme.devices.notebook} {
    justify-content: flex-end
  }
`