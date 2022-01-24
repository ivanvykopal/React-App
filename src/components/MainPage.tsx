import React, { useEffect, Fragment, useState } from "react";
import { Grommet, Box, DataTable } from 'grommet';
import { grommet } from 'grommet/themes';
import { useNavigate } from 'react-router-dom';
import { customerColumns } from '../columns'
import Footer from './Footer';
import Header from './Header';
import { useSubscription } from "@apollo/client";
import { GET_CUSTOMERS } from '../queries';
import { Customer } from '../model';

const MainPageQuery = () => {
  const { loading, error, data } = useSubscription(GET_CUSTOMERS);


  if (loading) {
    return <span>Loading...</span>;
  }
  if (error) {
    console.error(error);
    return <span>Error!</span>;
  }

  return <MainPage customers={data.customers} />;
};

const MainPage = (props: any) => {
  const navigate = useNavigate();

  let data: Customer[] = [];

  props.customers.forEach((element: any) => {
    data.push(
      {
        id: element.id,
        name: element.name,
        dateOfBirth: element.dateOfBirth,
        vip: element.vip,
        totalAmount: element.orders_aggregate.aggregate.sum.amount,
      },
    )
  });

  return (
    <Grommet theme={grommet}>

      <Header text='Zoznam zákazníkov' />
      <Box align="center" pad="large">
        <DataTable
          columns={customerColumns}
          data={data}
          onClickRow={(datum) => navigate('/' + datum.datum.id)}
        />
      </Box>

      <Footer />
    </Grommet>
  );
}

export default MainPageQuery;