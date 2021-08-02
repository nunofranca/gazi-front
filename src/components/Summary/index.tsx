import {Container} from "./styles";
export function Summary() {
    return (
        <Container>
            <div>
                <header>
                    <p>Ativos</p>
                </header>
                <strong>
                    3000
                </strong>
            </div>
            <div className='inativos'>
                <header>
                    <p>Inativos</p>
                </header>
                <strong>
                    500
                </strong>
            </div>
        </Container>
    )
}