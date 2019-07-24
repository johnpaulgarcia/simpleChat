import React from 'react';
import HeaderContent from './Header/Header.js';
import Chat from './Chat/Chat.js';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import './App.css';
// provider

import {Provider} from 'react-redux';
import {configureStore} from './store';

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

const data = require('./reducers/MOCK_DATA.json');

export default class App extends React.Component{

    render(){

      return (
        
       <React.Fragment>
        <Provider store={configureStore()}>
          <Layout>
              <Header style={{background: 'transparent' , padding: '0'}}>
                <HeaderContent />
              </Header>
          </Layout>
       

        
          <Layout style={{background: 'transparent'}}>
              <Sider width={250} className="sider">
                <h4 className="sideTitle" >Online </h4>
                <ul className="onlineList">
                  {
                    data.map((item , i) => 

                      (<li key={i}>
                          <a style={{textDecoration:'none' , color:'#555'}} href="#">
                            <b>{item.first_name}</b>
                          </a>
                       </li>)

                      )
                  }
                </ul>
              </Sider>

              <Content>
                <Chat />
              </Content>
          </Layout>

       
          </Provider>
       </React.Fragment> 

       
      

      )
    }

}


