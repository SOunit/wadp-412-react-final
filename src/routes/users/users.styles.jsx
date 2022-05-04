import styled from "styled-components";

export const UsersContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.5rem;
  width: 100%;
  padding: 0.5rem;

  @media (min-width: 40rem) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 1rem;
`;
