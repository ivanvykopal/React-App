import { Box, DateInput, Select } from "grommet"
import { Filter } from "grommet-icons";
import FilterProps from "../tools/model";



export function checkSelect(option: string, setDate: React.Dispatch<React.SetStateAction<string | undefined>>, date: string | undefined): JSX.Element {
  const onChange = (event: any) => {
    const nextValue = event.value;
    console.log('onChange', nextValue);
    setDate(nextValue);
  };

  if (option === 'Dátum') {
    return (
      <Box align='center' justify='end' gap='large' direction='row'>
        <DateInput
          format="dd.mm.yyyy"
          value={date}
          onChange={onChange}
        />
      </Box>
    )
  }
  return (
    <Box></Box>
  )
}

const MyFilter = (props: FilterProps) => {

  return (
    <Box align='center' justify='start' direction='row' height='xsmall' gap='large' border={{ color: 'black', side: 'all' }}>
      <Box />
      <Filter size='medium' />
      <Select
        options={['Filter', 'Meno vzostupne', 'Meno zostupne', 'Dátum']}
        value={props.value}
        onChange={({ option }) => props.setValue(option)}
      />
      {checkSelect(props.value, props.setDate, props.date)}
    </Box>
  )
}

export default MyFilter;
