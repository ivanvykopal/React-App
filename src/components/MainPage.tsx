
import { Grommet, Box, DataTable } from 'grommet';
import { grommet } from 'grommet/themes';
import { useNavigate } from 'react-router-dom';
import { customers } from '../data'
import { customerColumns } from '../columns'
import Footer from './Footer';
import Header from './Header';

export default () => {
  const navigate = useNavigate();

  return (
    <Grommet theme={grommet}>

      <Header text='Zoznam zákazníkov' />
      <Box align="center" pad="large">
        <DataTable
          columns={customerColumns}
          data={customers}
          onClickRow={(datum) => navigate('/index=' + datum.datum.id)}
        />
      </Box>

      <Footer />
    </Grommet>
  );
}
