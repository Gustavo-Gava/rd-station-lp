import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`

export const Label = styled.label`
  font-size: ${({ theme }) => theme.fonts.size.body.md};
  font-weight: ${({ theme }) => theme.fonts.weight.bold};
  margin-bottom: 4px;
`

export const Placeholder = styled.span``

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`