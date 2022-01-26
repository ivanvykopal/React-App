import { Button, Footer } from "grommet";
import { Github } from "grommet-icons";

const MyFooter = () => {
    return (
        <Footer background="black" pad="medium" justify='center'>
            <Button icon={<Github />} hoverIndicator href='https://github.com/ivanvykopal/React-App' label='Github' size="medium" />
        </Footer>
    )
}

export default MyFooter;