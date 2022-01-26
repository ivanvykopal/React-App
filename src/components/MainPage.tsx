import { Grommet, Box, DataTable, Grid, Heading, Text } from 'grommet';
import { grommet } from 'grommet/themes';
import { useNavigate } from 'react-router-dom';
import { customerColumns } from '../tools/columns'
import Footer from './Footer';
import Header from './Header';
import { useSubscription } from "@apollo/client";
import { GET_CUSTOMERS } from '../tools/queries';
import { CustomerAmout } from '../tools/model';
import Loading from './Loading';
import React from "react";

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
    return <Text>Error!</Text>;
  }

  return <MainPage customers={data.customers} />;
};

function existProps(props: Props) {
  if (props.customers.length === 0) {
    return <Loading />
  }
  return (
    <Box></Box>
  )
}

const MainPage = (props: Props) => {
  const navigate = useNavigate();

  return (
    <Grommet theme={grommet} full>
      <Grid fill rows={["auto", "auto", "flex", "auto", "auto"]}>
        <Header />

        <Box align='center' justify='center' border={{ color: 'black', side: 'bottom' }}>
          <Heading level='2'>Zoznam zákazníkov</Heading>
        </Box>

        <Box align='left' pad='large'>
          <DataTable
            columns={customerColumns}
            data={props.customers}
            onClickRow={(datum) => navigate('/' + datum.datum.id)}
          />
        </Box>

        {existProps(props)}

        <Footer />
      </Grid>
    </Grommet >
  );
}

export default MainPageQuery;