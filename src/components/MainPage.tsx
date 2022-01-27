import { Grommet, Box, DataTable, Grid, Heading, Text } from 'grommet';
import { grommet } from 'grommet/themes';
import { useNavigate } from 'react-router-dom';
import { customerColumns } from '../tools/columns';
import Footer from './Footer';
import Header from './Header';
import Loading from './Loading';
import { MySubscriptionSubscription, useMySubscriptionSubscription } from '../graphql/generated';
import Filter from './Filter';
import { useEffect, useState } from 'react';

const MainPageQuery = () => {
  const { loading, error, data } = useMySubscriptionSubscription();

  if (loading) {
    return <MainPage customers={[]} />;
  }
  if (error || !data?.customers) {
    console.error(error);
    return <Text>Error!</Text>;
  }

  return <MainPage customers={data.customers} />;
};

function existProps(props: MySubscriptionSubscription) {
  if (props.customers.length === 0) {
    return <Loading />
  }
  return (
    <Box></Box>
  )
}

const MainPage = (props: MySubscriptionSubscription) => {
  const navigate = useNavigate();
  const [value, setValue] = useState<string>('Filter');
  const [date, setDate] = useState<string>(new Date().toISOString());

  useEffect(() => {

  }, [value, date])

  return (
    <Grommet theme={grommet} full>
      <Grid fill rows={["auto", "auto", "auto", "flex", "auto", "auto"]}>
        <Header />

        <Box align='center' justify='center'>
          <Heading level='2'>Zoznam zákazníkov</Heading>
        </Box>

        <Filter value={value} setValue={setValue} date={date} setDate={setDate} />

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