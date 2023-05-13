import styled from "styled-components"

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