import {Container} from "./styles";
import {Summary} from "../Summary";
import {ListUsers} from "../ListUsers";

export function Dashboard() {
return(
    <Container>
        <Summary />
        <ListUsers />
    </Container>
)
}