import styled from "styled-components";

export const MobileContainer = styled.div`
  grid-area: header;
  display: flex;
  flex-direction: row;
  align-items: end;
  gap: 1.6rem;
  padding: 0 0 2.4rem 2.8rem;
  overflow: hidden;

  background-color: ${({ theme }) => theme.COLORS.DARK_600};

  h1 {
    font-family: "Roboto";
    font-weight: 400;
    line-height: 2.5rem;
    font-size: 2.1rem;
  }

  > .nav-elements {
    display: block;
    padding: 3.6rem 2.8rem 0;
    position: absolute;
    z-index: 1;

    width: 0;

    top: 11.4rem;
    left: -28rem;

    text-decoration: none;
    transition: left 0.5s, width 0.7s;

    background-color: ${({ theme }) => theme.COLORS.DARK_600};

    //input de pesquisa
    div:nth-child(1) {
      margin-bottom: 3.6rem;
    }

    ul {
      display: none;
    }

    li {
      font-size: 2.4rem;
      line-height: 3.4rem;
      list-style-type: none;
    }
  }
  > .nav-elements.active {
    background-color: ${({ theme }) => theme.COLORS.DARK_600};
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    width: 100%;
    height: 88vh;
    top: 11.4rem;
    left: 0;

    text-decoration: none;

    ul {
      display: flex;
      flex-direction: column;
      gap: 3.6rem;
    }

    li {
      font-size: 2.4rem;
      line-height: 3.4rem;
      list-style-type: none;

      border-bottom: solid ${({ theme }) => theme.COLORS.DARK_1000} 2px;
      padding-bottom: 1rem;
      width: 100%;

      a {
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
      }
    }
  }
  > .nav {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    gap: 1.6rem;
    button {
      display: flex;

      background-color: transparent;
      border: none;

      svg {
        color: ${({ theme }) => theme.COLORS.LIGHT_100};
      }
    }
  }
`;

export const DesktopContainer = styled.div`
  grid-area: header;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 3.2rem;
  background-color: ${({ theme }) => theme.COLORS.DARK_600};
  padding-inline: 4rem;

  div > input {
    width: 58rem;
  }

  .buttonWrapper {
    width: 21.6rem;
  }
  > button {
    background-color: transparent;
    border: none;

    svg {
      color: ${({ theme }) => theme.COLORS.LIGHT_100};
    }
  }
`;
