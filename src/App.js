import React from 'react';
import HeaderContent from './Header/Header.js';
import Chat from './Chat/Chat.js';

import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import './App.css';
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;


const onlineUser = [
  {user: '172.43.52.5' , read: false},

  {user: '172.43.52.2', read: false},
  {user: '172.43.52.5', read: true},
  {user: '172.43.542.0', read: false},
  {user: '172.43.552.6', read: true},
  {user: '172.43.551.3', read: false},
  {user: '142.43.52.5', read: false},
  {user: '172.43.52.1', read: true},
 
]


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
                <h4 className="sideTitle" >Online </h4>
                <ul className="onlineList">
                  {
                    onlineUser.map((item , i) => 

                      (<li key={i}>
                          <a style={{textDecoration:'none' , color:'#555'}} href="#">
                            <b>{item.user}</b>
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

       

       </React.Fragment> 
      

      )
    }

}


