import styled from 'styled-components'

export const HomeContainer = styled.main`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3.5rem;
  }
`

const BaseButton = styled.button`
  width: 100%;
  border: 0;
  padding: 1rem;
  border-radius: 8px;

  display: flex;
  align-items: center;
  justify-content: center;

  gap: 0.5rem;
  font-weight: bold;
  cursor: pointer;

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`

export const StartCountdownButton = styled(BaseButton)`
  &:not(:disabled):hover {
    background-color: ${({ theme }) => theme['green-700']};
  }

  background-color: ${({ theme }) => theme['green-500']};
  color: ${({ theme }) => theme['gray-100']};
`

export const StopCountdownButton = styled(BaseButton)`
  &:not(:disabled):hover {
    background-color: ${({ theme }) => theme['red-700']};
  }

  background-color: ${({ theme }) => theme['red-500']};
  color: ${({ theme }) => theme['gray-100']};
`
