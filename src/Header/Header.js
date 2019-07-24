import React from 'react';
import 'antd/dist/antd.css'
import { Menu, Icon } from 'antd';

const { SubMenu } = Menu;
export default class Header extends React.Component{
  state = {
    current: 'mail',
  };
  handleClick = e => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  };
    

    render(){

      return (
        <div>
          <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal">
            <Menu.Item key="mail">
              <Icon type="mail" />
               Chat
            </Menu.Item>
           
            <Menu.Item key="alipay">
              
                Settings
            </Menu.Item>
            
           </Menu>

           
        </div>
      )
    }

}


