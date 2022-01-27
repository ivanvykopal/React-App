import { Box, DataTable } from "grommet"
import { useNavigate } from "react-router-dom";
import { Order_By, useGetCustomersFilterDateSubscription, useGetCustomersFilterNameSubscription } from "../graphql/generated";
import { customerColumns } from "../tools/columns"
import { CustomerAmount } from "../tools/model";

interface Props {
  data: CustomerAmount[] | undefined
}

export const CustomerTable = (props: Props) => {
  const navigate = useNavigate();

  return (
    <Box align='left' pad='large'>
      <DataTable
        columns={customerColumns}
        data={props.data}
        onClickRow={(element) => navigate('/' + element.datum.id)}
      />
    </Box>
  )
}

export const CustomerTableFilterNameAsc = () => {
  const { data } = useGetCustomersFilterNameSubscription({ variables: { name: Order_By.Asc } });
  return <CustomerTable data={data?.customers} />
}

export const CustomerTableFilterNameDesc = () => {
  const { data } = useGetCustomersFilterNameSubscription({ variables: { name: Order_By.Desc } });
  return <CustomerTable data={data?.customers} />
}

export const CustomerTableFilterDate = (props: any) => {
  const { data } = useGetCustomersFilterDateSubscription({ variables: { "_lt": props.date } });
  return <CustomerTable data={data?.customers} />
}