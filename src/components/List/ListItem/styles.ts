import styled from 'styled-components'

export const Container = styled.li`
  display: flex;
  align-items: flex-start;
  gap: 16px;
`

export const Text = styled.div`
  font-size: ${({ theme }) => theme.fonts.size.body.md};

  bold {
    font-weight: ${({ theme }) => theme.fonts.weight.bold};
  }

  a {
    color: ${({ theme }) => theme.colors.primary.main};

    &:visited {
      color: ${({ theme }) => theme.colors.primary.main};
    }
  }
`