import { Button, Header } from "grommet"
import { Home } from "grommet-icons"
import { HeadProperty } from "../model"

export default (props: HeadProperty) => {
    return (
        <Header background="black" pad='small'>
            <Button icon={<Home />} hoverIndicator href='/' size="large" />
            <h2>{props.text}</h2>
        </Header>
    )
}