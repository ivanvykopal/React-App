
import { Grommet, Box, DataTable, Header, Footer, Button, ColumnConfig } from 'grommet';
import { grommet } from 'grommet/themes';
import { Github, User, } from 'grommet-icons';
import { useSearchParams } from 'react-router-dom';
import { orders } from '../data'
import { orderColumns } from '../columns'
import { useEffect } from 'react';


export default () => {
    const [searchParams, setSearchParams] = useSearchParams();

    return (
        <Grommet theme={grommet}>

            <Header background="black" pad='small'>
                <h1>Detail zákazníka</h1>
            </Header>

            <Box border={{ color: 'black', size: 'medium' }} align='center' pad='medium' direction='row' justify='center'>
                <User size='large' />
                <h3>ID  </h3>
                <h3>Meno    </h3>
                <h3>Dátum narodenia </h3>
                <h3>VIP </h3>
            </Box>

            <h2>Objendávky</h2>

            <Box align="center" pad="large">
                <DataTable
                    columns={orderColumns}
                    data={orders}
                />
            </Box>


            <Footer background="black" pad="medium" justify='center'>
                <Button icon={<Github />} hoverIndicator href='https://github.com/ivanvykopal/React-App' label='Github' />
            </Footer>
        </Grommet>
    );
}
