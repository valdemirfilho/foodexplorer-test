import styled from "styled-components";

export const Container = styled.div`
  display: grid;

  grid-template-rows: 137px auto;
  grid-template-areas:
    "header"
    "content";

  @media (max-width: 820px) {
    grid-template-rows: 114px auto;
  }
`;

export const Content = styled.div`
  grid-area: content;
`;
