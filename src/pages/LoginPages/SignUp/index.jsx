import { Container, Form } from "./styles";
import logoDesktop from "../../../assets/logoDesktop.png";

export function SignUp() {
  return (
    <Container>
      <header>
        <img src={logoDesktop} alt="" />
      </header>

      <Form>
        <main>
          <h2>Crie sua conta</h2>
          <div className="input-wrapper"></div>

          <a href=""> Já tenho uma conta</a>
        </main>
      </Form>
    </Container>
  );
}
