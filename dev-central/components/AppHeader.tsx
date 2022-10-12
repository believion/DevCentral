import { Header } from "@mantine/core";

const AppHeader = (props) => {
    return(
        <Header height={100} p="xs">
            {props.children}
        </Header>
    )
}

export default AppHeader;