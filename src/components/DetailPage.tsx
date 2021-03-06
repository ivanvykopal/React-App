import { Grommet, Box, DataTable, Heading } from 'grommet';
import { grommet } from 'grommet/themes';
import { User, } from 'grommet-icons';
import { useParams } from 'react-router-dom';
import { creteOrderColumns } from '../tools/columns';
import Footer from './Footer';
import Header from './Header';
import Loading from './Loading';
import { convertDate, isVip } from '../tools/helpers';
import { GetOrdersSubscription, useGetOrdersSubscription } from '../graphql/generated';


const DetailPageQuery = () => {
  const { index } = useParams();
  const { loading, error, data } = useGetOrdersSubscription({ variables: { customerID: Number(index) } });

  if (loading) {
    return <DetailPage orders={[]} />;
  }
  if (error || !data?.orders) {
    console.error(error);
    return <span>Error!</span>;
  }
  return <DetailPage orders={data.orders} />;
}

function existProps(props: GetOrdersSubscription) {
  if (props.orders.length > 0) {
    return (
      <Box justify='center' align='center'>
        <Box border={{ color: 'black', size: 'medium' }} justify='center' round='medium' margin='medium' direction='column' align='center' height='medium' width='medium'>
          <User size='large' />
          <Box align='left'>
            <Heading level={3}>ID: {props.orders[0].customer.id}</Heading>
            <Heading level={3}>Meno: {props.orders[0].customer.name}</Heading>
            <Heading level={3}>Dátum narodenia: {convertDate(props.orders[0].customer.dateOfBirth)}</Heading>
            <Heading level={3}>VIP: {isVip(props.orders[0].customer.vip)}</Heading>
          </Box>
        </Box >
      </Box>
    )

  }
  return (
    <div>
      <Loading />
      <Box justify='center' align='center'>
        <Box border={{ color: 'black', size: 'medium' }} justify='center' round='medium' margin='medium' direction='column' align='center' height='medium' width='medium'>
          <User size='large' />
          <Box align='left'>
            <Heading level={3}>ID: </Heading>
            <Heading level={3}>Meno: </Heading>
            <Heading level={3}>Dátum narodenia: </Heading>
            <Heading level={3}>VIP: </Heading>
          </Box>
        </Box>
      </Box>

    </div>
  )
}

const DetailPage = (props: GetOrdersSubscription) => {

  let total: number = 0;
  props.orders.forEach((element) => { total += element.amount });

  return (
    <Grommet theme={grommet} full>

      <Header />

      {existProps(props)}

      <Box align='center' border={{ color: 'black', side: 'bottom' }}>
        <Heading level={2}>Objednávky</Heading>
      </Box>

      <Box align="left" pad="large" justify='center'>
        <DataTable
          columns={creteOrderColumns(total)}
          data={props.orders}
        />
      </Box>

      <Footer />
    </Grommet >
  );
}

export default DetailPageQuery;