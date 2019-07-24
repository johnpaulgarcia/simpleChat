import React from 'react';
import HeaderContent from './Header/Header.js';
import Chat from './Chat/Chat.js';

import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import './App.css';
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

export default class App extends React.Component{

    render(){

      return (
       <React.Fragment>
          <Layout>
              <Header style={{background: 'transparent' , padding: '0'}}>
                <HeaderContent />
              </Header>
          </Layout>
       

        
          <Layout style={{background: 'transparent'}}>
              <Sider width={250} className="sider">
                <h4 className="sideTitle"   >Online </h4>
              </Sider>

              <Content>
                <Chat />
              </Content>
          </Layout>

       

       </React.Fragment> 
      

      )
    }

}


