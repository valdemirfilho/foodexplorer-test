import styled from "styled-components";

export const Container = styled.div`
  display: grid;

  grid-template-rows: 137px auto 77px;
  grid-template-areas:
    "header"
    "content"
    "footer";

  @media (max-width: 820px) {
    grid-template-rows: 114px auto 77px;
  }
`;

export const Content = styled.div`
  grid-area: content;

  padding: 0 12.5rem;

  > h1 {
    margin: 2.4rem 0;
    font-style: normal;
    font-weight: 500;
    font-size: 3.2rem;
    line-height: 140%;
  }

  @media (max-width: 820px) {
    padding: 0 3.2rem;
  }
`;

export const Form = styled.form`
  color: ${({ theme }) => theme.COLORS.LIGHT_400};

  input,
  select,
  textarea {
    border: none;
    border-radius: 0.8rem;
    padding: 1.3rem 1.4rem;
    margin: 1.6rem 0 2.4rem 0;
  }

  input,
  textarea {
    background-color: ${({ theme }) => theme.COLORS.DARK_800};
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
  }

  input::placeholder {
    color: ${({ theme }) => theme.COLORS.LIGHT_500};
  }

  select {
    background-color: ${({ theme }) => theme.COLORS.DARK_900};
    color: ${({ theme }) => theme.COLORS.LIGHT_400};
    font-size: 1.6rem;
  }

  label {
    display: flex;
    flex-direction: column;
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 1.6rem;
    line-height: 100%;
  }

  button {
    margin-bottom: 5.4rem;
  }
`;

export const Image = styled.div`
  > .imageLabel {
    display: flex;
    flex-direction: row;
    padding: 1.6rem 3.2rem;
    margin: 1.6rem 0 2.4rem 0;
    background-color: ${({ theme }) => theme.COLORS.DARK_800};

    border-radius: 0.8rem;
  }

  input {
    display: none;
  }
`;
