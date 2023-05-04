import { Container, Content } from "./styles";
import { Header } from "../../Components/Header";
import { Input } from "../../Components/Input";
import { FiSearch } from "react-icons/fi";

export function Details() {
  return (
    <Container>
      <Header>
        <Input
          placeholder={"Busque por pratos ou ingredientes"}
          icon={FiSearch}
        ></Input>
      </Header>
      <Content></Content>
    </Container>
  );
}
