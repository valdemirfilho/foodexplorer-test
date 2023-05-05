import { Container, Content } from "./styles";
import { Header } from "../../Components/Header";
import { Input } from "../../Components/Input";
import { FiSearch } from "react-icons/fi";

import macaronImage from "../../assets/macaron.png";

export function Details() {
  return (
    <Container>
      <Header>
        <Input
          placeholder={"Busque por pratos ou ingredientes"}
          icon={FiSearch}
        ></Input>
      </Header>
      <Content>
        <div className="rectangle">
          <div>
            <img src={macaronImage} alt="" />
          </div>

          <div>
            <h1>Sabores inigualáveis</h1>
            <p>Sinta o cuidado do preparo com ingredientes selecionados</p>
          </div>
        </div>
      </Content>
    </Container>
  );
}
