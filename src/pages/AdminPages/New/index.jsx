import { FiUpload } from "react-icons/fi";

import { Container, Content, Form, Image } from "./styles";
import { Header } from "../../../Components/Header";
import { Footer } from "../../../Components/Footer";

import { Button } from "../../../Components/Button";

export function New() {
  return (
    <Container>
      <Header />
      <Content>
        <h1>Novo Prato</h1>
        <Form>
          <div>
            <Image>
              <spam>Imagem</spam>
              <label className="imageLabel" htmlFor="image">
                <FiUpload size={20} />
                <span>Selecione a imagem</span>
                <input id="image" type="file" />
              </label>
            </Image>

            <label htmlFor="name">
              Nome
              <input type="text" id="name" placeholder="Ex.: Salada Ceaser " />
            </label>

            <label htmlFor="category">
              Categoria
              <select id="category" name="Categoria">
                <option value="entrada">Entrada</option>
                <option value="refeicao">Prato Principal</option>
                <option value="sobremesa">Sobremesa</option>
              </select>
            </label>
          </div>

          <label htmlFor="price">
            Preço
            <input type="text" placeholder="R$00,00" />
          </label>

          <label htmlFor="description">
            Descrição
            <textarea
              id="description"
              placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
              cols="30"
              rows="10"
            ></textarea>
          </label>

          <Button title={"Salvar alterações"} />
        </Form>
      </Content>
      <Footer />
    </Container>
  );
}
