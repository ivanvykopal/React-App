import { Grommet, Box, DataTable, Heading } from 'grommet';
import { grommet } from 'grommet/themes';
import { User, } from 'grommet-icons';
import { useParams } from 'react-router-dom';
import { orderColumns } from '../tools/columns'
import Footer from './Footer';
import Header from './Header';
import { GET_ORDERS } from '../tools/queries';
import { useSubscription } from '@apollo/client';
import { CustomerOrder } from '../tools/model';

interface Props {
    orders: CustomerOrder[]
}

const DetailPageQuery = () => {
    const { index } = useParams();
    const { loading, error, data } = useSubscription(GET_ORDERS, { variables: { customerID: index } });


    if (loading) {
        return <DetailPage orders={[]} />;
    }
    if (error) {
        console.error(error);
        return <span>Error!</span>;
    }
    return <DetailPage orders={data.orders} />;
}

function existProps(props: Props) {
    if (props.orders.length > 0) {
        return (
            <Box border={{ color: 'black', size: 'medium' }} align='center' pad='small' direction='row' justify='center'>
                <User size='large' />
                <Heading level={3}>{props.orders[0].customer.id}</Heading>
                <Heading level={3}>{props.orders[0].customer.name}</Heading>
                <Heading level={3}>{props.orders[0].customer.dateOfBirth}</Heading>
                <Heading level={3}>{props.orders[0].customer.vip}</Heading>
            </Box>
        )

    }
    return (
        <div>
            <Heading level='4' margin='medium'>Načítava...</Heading>
            <Box border={{ color: 'black', size: 'medium' }} align='center' pad='small' direction='row' justify='center'>
                <User size='large' />
            </Box>

        </div>
    )
}

const DetailPage = (props: Props) => {

    return (
        <Grommet theme={grommet}>

            <Header text='Detail zákazníka' />

            {existProps(props)}

            <Heading level={2}>Objednávky</Heading>

            <Box align="center" pad="large">
                <DataTable
                    columns={orderColumns}
                    data={props.orders}
                />
            </Box>

            <Footer />
        </Grommet >
    );
}

export default DetailPageQuery;