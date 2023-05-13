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

export const LogoContainer = styled.div``

export const Divider = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${({ theme }) => theme.colors.primary.light};
`

export const SocialMediaLinksContainer = styled.div`
  display: flex;
  gap: 16px;
`

export const SocialMediaLink = styled.a`
  cursor: pointer;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.8;
  }
`

export const CopyrightContainer = styled.div`
  font-size: ${({ theme }) => theme.fonts.size.body.sm};
`