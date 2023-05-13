import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  height: 100vh;

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
  width: 100%;
  > div:nth-child(1) {
    a {
      margin: 4.2rem 0 3.2rem 0;
      display: flex;
      align-items: center;
      color: ${({ theme }) => theme.COLORS.LIGHT_100};
    }
  }

  .DisheInfo {
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
      margin-bottom: 1.6rem;
      width: 26rem;
      height: 26rem;
    }

    h1,
    p {
      text-align: center;
    }

    h1 {
      font-weight: 500;
      font-size: 2.7rem;
      line-height: 140%;

      margin-bottom: 2.4rem;
    }

    p {
      font-family: "Poppins";
      font-style: normal;
      font-weight: 400;
      font-size: 1.6rempx;
      line-height: 140%;

      margin-bottom: 2.4rem;
    }
  }

  @media (min-width: 820px) {
    display: flex;
    flex-direction: column;
    padding: 0 17rem;

    > div:nth-child(1) {
      width: 100%;
      a {
        font-weight: 700;
        font-size: 24px;
        line-height: 140%;
      }

      svg {
        width: 35px;
        height: 35px;
      }
    }

    .DisheInfo {
      flex-direction: row;
      gap: 4.7rem;

      img {
        width: 35rem;
        height: 35rem;
      }
      div {
        display: flex;
        flex-direction: column;
        align-items: start;
      }

      p {
        text-align: left;
      }
      button {
        width: 13.1rem;
      }
    }
  }
`;