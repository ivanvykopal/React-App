import { Button, Header, Menu } from "grommet"
import { Home } from "grommet-icons"
import { useNavigate } from "react-router-dom";

export default () => {
    const navigate = useNavigate();

    return (
        <Header background="black" pad='small'>
            <Button icon={<Home />} hoverIndicator href='/' size="large" />
            <Menu label='Admin'
                items={[
                    { label: 'Zoznam zákazníkov', onClick: () => navigate('/') },
                    { label: 'Detail zákazníka', onClick: () => navigate('/1') }
                ]}
            ></Menu>
        </Header>
    )
}