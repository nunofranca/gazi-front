import logo from '../../assets/logo-gazin.png'
import {Content} from "./styles";

import {Container} from "./styles";

export function Header() {
    return (
        <Container>
            <Content>
                <img src={logo} alt='Logo Gazin'/>
                <button type="button">
                    Novo Usuário
                </button>
            </Content>
        </Container>
    )

}