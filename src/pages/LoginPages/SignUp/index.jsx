import { Container, Form } from "./styles";
import { Input } from "../../../components/Input";
import { FiMail, FiLock, FiUser } from "react-icons/fi";
import { Button } from "../../../components/Button";
import logoDesktop from "../../../assets/logoDesktop.png";

export function SignUp() {
  return (
    <Container>
      <header>
        <img src={logoDesktop} alt="" />
      </header>
      <Form>
        <main>
          <h2>Faça o Login</h2>
          <div className="input-wrapper">
            <label htmlFor="name">Nome</label>
            <Input
              type="text"
              icon={FiUser}
              placeholder="Exemplo: Maria da Silva"
              id={"name"}
            />
            <label htmlFor="email">Email</label>
            <Input
              type="email"
              icon={FiMail}
              placeholder="Exemplo: exemplo@exemplo.com.br"
              id={"email"}
            />
            <label htmlFor="password">Senha</label>
            <Input
              type="password"
              icon={FiLock}
              placeholder="No mínimo 6 caracteres"
              id={"password"}
            />
            <Button title={"Entrar"} />
          </div>

          <a to="/register"> Criar Conta</a>
        </main>
      </Form>
    </Container>
  );
}
