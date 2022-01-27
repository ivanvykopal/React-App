import { Grommet, Box, Grid, Heading, Text } from 'grommet';
import { grommet } from 'grommet/themes';
import Footer from './Footer';
import Header from './Header';
import Loading from './Loading';
import { GetCustomersSubscription, useGetCustomersSubscription } from '../graphql/generated';
import Filter from './Filter';
import { useState } from 'react';
import { CustomerAmount } from '../tools/model';
import { CustomerTable, CustomerTableFilterDate, CustomerTableFilterNameAsc, CustomerTableFilterNameDesc } from './CustomerTables';

const Option = {
  FILTER: 'Filter',
  NAME_DESC: 'Meno zostupne',
  NAME_ASC: 'Meno vzostupne',
  DATE: 'Dátum',
}


function checkFilter(option: string, date: string, data: CustomerAmount[]): JSX.Element | undefined {
  switch (option) {
    case Option.FILTER:
      return <CustomerTable data={data} />;
    case Option.NAME_DESC:
      return <CustomerTableFilterNameAsc />;
    case Option.NAME_ASC:
      return <CustomerTableFilterNameDesc />;
    case Option.DATE:
      return <CustomerTableFilterDate date={date} />;
  }
}

const MainPageQuery = () => {
  const { loading, error, data } = useGetCustomersSubscription();

  if (loading) {
    return <MainPage customers={[]} />;
  }
  if (error || !data?.customers) {
    console.error(error);
    return <Text>Error!</Text>;
  }

  return <MainPage customers={data.customers} />;
};

function existProps(props: GetCustomersSubscription) {
  if (props.customers.length === 0) {
    return <Loading />
  }
  return (
    <Box></Box>
  )
}

const MainPage = (props: GetCustomersSubscription) => {
  const [value, setValue] = useState<string>('Filter');
  const [date, setDate] = useState<string>(new Date().toISOString());
  let data: CustomerAmount[] = props.customers;

  return (
    <Grommet theme={grommet} full>
      <Grid fill rows={["auto", "auto", "auto", "flex", "auto", "auto"]}>
        <Header />

        <Box align='center' justify='center'>
          <Heading level='2'>Zoznam zákazníkov</Heading>
        </Box>

        <Filter value={value} setValue={setValue} date={date} setDate={setDate} />

        {checkFilter(value, date, data)}

        {existProps(props)}

        <Footer />
      </Grid>
    </Grommet >
  );
}

export default MainPageQuery;
