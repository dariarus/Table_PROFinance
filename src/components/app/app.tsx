import React, { FC } from 'react';
import { Button, Layout } from 'antd';
import { MessageOutlined } from '@ant-design/icons';

import { SideMenu } from '../side-menu/side-menu';
import { SupportInfo } from "../support-info/support-info";
import { Header } from "../header/header";
import { FilterForm } from "../filter-form/filter-form";
import { Heading } from "../heading/heading";
import { DataOptionsBar } from "../data-options-bar/data-options-bar";
import { DataTable } from "../table/table";

const {Content, Sider} = Layout;

export const App: FC = () => {
  return (
    <Layout style={{}}>
      <Sider
        theme="light"
        breakpoint="lg"
        width="256px"
        style={{backgroundColor: "#f5f5f5"}}
      >
        <SideMenu/>
        <SupportInfo/>
        <Button type="primary" icon={<MessageOutlined/>} block size="large"
                style={{padding: "30px", borderRadius: "20px"}}>Связаться c нами</Button>
      </Sider>
      <Layout>
        <Header/>
        <Content style={{margin: '24px 0 0 16px'}}>
          <Heading/>
          <FilterForm/>
          <DataOptionsBar/>
          <DataTable/>
        </Content>
      </Layout>
    </Layout>
  );
};