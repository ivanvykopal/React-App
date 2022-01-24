
import { Grommet, Box, DataTable, Header, Footer, Button, ColumnConfig } from 'grommet';
import { grommet } from 'grommet/themes';
import { Github } from 'grommet-icons';
import { Link } from 'react-router-dom';
import { customers } from '../data'
import { customerColumns } from '../columns'

export default () => {

  return (
    <Grommet theme={grommet}>

      <Header background="black" pad='small'>
        <h1>Iteria Zadanie</h1>
      </Header>
      <Box align="center" pad="large">
        <DataTable
          columns={customerColumns}
          data={customers}
          onClickRow={(datum) => <Link to={'/' + datum.datum.id} ></Link>}
        />
      </Box>

      <Footer background="black" pad="medium" justify='center'>
        <Button icon={<Github />} hoverIndicator href='https://github.com/ivanvykopal/React-App' label='Github' />
      </Footer>
    </Grommet>
  );
}
