import styled from 'styled-components'

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  gap: 24px;

  box-shadow: ${({ theme }) => theme.shadows.md};
  padding: 24px;
`

export const ImageWrapper = styled.div`
  width: fit-content;
  padding: 16px;
  background-color: ${({ theme }) => theme.colors.gray[10]};
  border-radius: 50%;
`

export const Title = styled.h3`
  font-size: ${({ theme }) => theme.fonts.size.heading.sm};
  line-height: ${({ theme }) => theme.fonts.lineHeight.heading.sm};
  font-weight: ${({ theme }) => theme.fonts.weight.black};
`

export const Description = styled.p``