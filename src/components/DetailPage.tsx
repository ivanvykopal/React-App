
import { Grommet, Box, DataTable } from 'grommet';
import { grommet } from 'grommet/themes';
import { User, } from 'grommet-icons';
import { useParams } from 'react-router-dom';
import { orders } from '../data'
import { orderColumns } from '../columns'
import { useEffect } from 'react';
import Footer from './Footer';
import Header from './Header';
import { GET_ORDERS } from '../queries';
import { useSubscription } from '@apollo/client';
import { Order } from '../model';

const DetailPageQuery = () => {
    const { index } = useParams();

    const { loading, error, data } = useSubscription(GET_ORDERS, { variables: { customerID: index } });

    if (loading) {
        return <span>Loading...</span>;
    }
    if (error) {
        console.error(error);
        return <span>Error!</span>;
    }

    return <DetailPage orders={data.orders} />;
}

const DetailPage = (props: any) => {
    let data: Order[] = [];

    props.orders.forEach((element: Order) => {
        data.push(
            {
                id: element.id,
                orderDate: element.orderDate,
                amount: element.amount,
                numberOfProducts: element.numberOfProducts,
            },
        )
    });

    return (
        <Grommet theme={grommet}>

            <Header text='Detail zákazníka' />

            <Box border={{ color: 'black', size: 'medium' }} align='center' pad='medium' direction='row' justify='center'>
                <User size='large' />
                <h3>{props.orders[0].customer.id}  </h3>
                <h3>{props.orders[0].customer.name}    </h3>
                <h3>{props.orders[0].customer.dateOfBirth} </h3>
                <h3>{props.orders[0].customer.vip} </h3>
            </Box>

            <h2>Objednávky</h2>

            <Box align="center" pad="large">
                <DataTable
                    columns={orderColumns}
                    data={data}
                />
            </Box>

            <Footer />
        </Grommet>
    );
}

export default DetailPageQuery;