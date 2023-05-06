import styled from "styled-components";

export const Container = styled.div`
  position: relative;

  .carousel {
    display: flex;
    gap: 2.7rem;
    max-width: 1120px;
    overflow-x: scroll;
    scroll-behavior: smooth;
    ::-webkit-scrollbar {
      width: 0px;
    }
  }

  .rightBtn {
    position: absolute;
    z-index: 2;
    top: 9.8rem;
    right: 0rem;
    height: 49.8rem;

    background: linear-gradient(
      90deg,
      rgba(0, 10, 15, 0.272541) 0%,
      #000a0f 100%
    );
    border: none;
    color: white;
    width: 22.4rem;
  }

  .leftBtn {
    position: absolute;
    z-index: 2;
    top: 9.8rem;
    left: 0rem;
    height: 49.8rem;
    background: linear-gradient(
      90deg,
      rgba(0, 10, 15, 0.272541) 0%,
      #000a0f 100%
    );
    border: none;
    color: white;
    width: 22.4rem;
  }

  @media (max-width: 820px) {
    .carousel {
      max-width: 700px;
    }

    .leftBtn,
    .rightBtn {
      display: none;
    }
  }

  @media (max-width: 480px) {
    .carousel {
      gap: 1.7rem;
      max-width: 380px;
    }

    .leftBtn,
    .rightBtn {
      display: none;
    }
  }
`;
