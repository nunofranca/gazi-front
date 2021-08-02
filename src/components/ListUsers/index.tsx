import {Container} from "./styles";

export function ListUsers() {
    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Idade</th>
                        <th>Sexo</th>
                        <th>Hobby</th>
                        <th>Data de nascimento</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Nuno</td>
                        <td>33</td>
                        <td>Masculino</td>
                        <td>Programar</td>
                        <td>12/01/1988</td>
                        <td className='active'>Ativo</td>
                    </tr>
                    <tr>
                        <td>Nuno</td>
                        <td>33</td>
                        <td>Masculino</td>
                        <td>Programar</td>
                        <td>12/01/1988</td>
                        <td className='inactive'>Inativo</td>
                    </tr>
                </tbody>
            </table>
        </Container>
    );
}