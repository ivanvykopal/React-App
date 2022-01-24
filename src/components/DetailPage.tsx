
import { Grommet, Box, DataTable } from 'grommet';
import { grommet } from 'grommet/themes';
import { User, } from 'grommet-icons';
import { useSearchParams } from 'react-router-dom';
import { orders } from '../data'
import { orderColumns } from '../columns'
import { useEffect } from 'react';
import Footer from './Footer';
import Header from './Header';


export default () => {
    const [searchParams, setSearchParams] = useSearchParams();

    return (
        <Grommet theme={grommet}>

            <Header text='Detail zákazníka' />

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

            <Footer />
        </Grommet>
    );
}
