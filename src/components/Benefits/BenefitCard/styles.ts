import styled from 'styled-components'

export const Container = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;

  box-shadow: ${({ theme }) => theme.shadows.md};
  padding: 24px;
`

export const ImageWrapper = styled.div`
  width: fit-content;
  padding: 16px;
  background-color: ${({ theme }) => theme.colors.gray[10]};
  border-radius: 50%;
`

export const Title = styled.h4`
  font-size: ${({ theme }) => theme.fonts.size.heading.sm};
  line-height: ${({ theme }) => theme.fonts.lineHeight.heading.sm};
  font-weight: ${({ theme }) => theme.fonts.weight.black};
`

export const Description = styled.p`
  font-size: ${({ theme }) => theme.fonts.size.body.sm};
  line-height: ${({ theme }) => theme.fonts.lineHeight.body.sm};
`