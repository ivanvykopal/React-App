import { Grommet, Box, DataTable, Heading } from 'grommet';
import { grommet } from 'grommet/themes';
import { useNavigate } from 'react-router-dom';
import { customerColumns } from '../tools/columns'
import Footer from './Footer';
import Header from './Header';
import { useSubscription } from "@apollo/client";
import { GET_CUSTOMERS } from '../tools/queries';
import { Customer, CustomerAmout } from '../tools/model';

interface Props {
  customers: CustomerAmout[]
}

const MainPageQuery = () => {
  const { loading, error, data } = useSubscription(GET_CUSTOMERS);

  if (loading) {
    return <MainPage customers={[]} />;
  }
  if (error) {
    console.error(error);
    return <span>Error!</span>;
  }

  return <MainPage customers={data.customers} />;
};

function existProps(props: Props) {
  if (props.customers.length == 0) {
    return <Heading level='4' margin='medium'>Načítava...</Heading>
  }
  return null
}

const MainPage = (props: Props) => {
  const navigate = useNavigate();

  return (
    <Grommet theme={grommet}>

      <Header text='Zoznam zákazníkov' />

      {existProps(props)}

      <Box align="center" pad="large">
        <DataTable
          columns={customerColumns}
          data={props.customers}
          onClickRow={(datum) => navigate('/' + datum.datum.id)}
        />
      </Box>

      <Footer />
    </Grommet>
  );
}

export default MainPageQuery;