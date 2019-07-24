import React from 'react';
import HeaderContent from './Header/Header.js';
import Chat from './Chat/Chat.js';

import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import './App.css';
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;


const onlineUser = [
  {user: '172.43.52.5'},
  {user: '172.43.52.2'},
  {user: '172.43.52.5'},
  {user: '172.43.542.0'},
  {user: '172.43.552.6'},
  {user: '172.43.551.3'},
  {user: '142.43.52.5'},
  {user: '172.43.52.1'},
  {user: '132.43.52.2'},
  {user: '172.43.52.3'},
  {user: '152.43.522.6'},
  {user: '172.453.52.5'},
  {user: '172.43.52.6'},
  {user: '172.41.552.44'},
  {user: '172.453.52.3'},
  {user: '172.43.122.3'},
  
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

                      (<li key={i}><a href="#">{item.user}</a></li>)

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


