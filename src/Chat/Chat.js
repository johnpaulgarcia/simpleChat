import React from 'react';
import { conLog,dePop } from '../actions';
import 'antd/dist/antd.css'
import './Chat.css'
import { List, Avatar , Button ,Row, Col , Input} from 'antd';
import {connect} from 'react-redux';
import io from 'socket.io-client'

const socket = io('http://localhost:3001');


class Chat extends React.Component{

  state = {
      
  }
  componentDidMount(){

    let msgContainerList = document.querySelector("#scrolldiv");
    msgContainerList.scrollTop = msgContainerList.scrollHeight;

    console.log(msgContainerList.scrollTop);

     this.props.dispatch(dePop());
     socket.on('message', () =>
      this.props.dispatch(conLog())
    );
  }

  submit = (e) => {
      e.preventDefault();
      console.log('youre here')
      socket.emit('message');
  }
    render(){
    
      const { TextArea } = Input;
      
      return (
        <div>
              <div className="msgContainer" id="scrolldiv">
                <List
                    itemLayout="horizontal"
                    dataSource={this.props.data}
                    renderItem={item => (
                      <List.Item style={{paddingLeft: '15px'}} actions={[<a>Delete</a>]}>
                        <List.Item.Meta
                          avatar={<Avatar src={item.avatar} />}
                          title={<a href="https://ant.design">{item.first_name} {item.last_name}</a>}
                          description={item.description}
                        />
                      </List.Item>
                    )}
                />

              </div>
              <div className="msgInput">
                <form action="#" onSubmit={this.submit}>
                  {this.props.message}
                 <Input type="text" placeholder="Message" size="large"/>
                </form>
              </div>


              
            
       

        
           
                {/* <Row type="flex">
                  <Col span={22} >
                    <TextArea Placeholder="Message"/>
                  </Col>

                
                  <Button type="primary" style={{width:'100px'}}>
                    Send
                  </Button>
                  </Col> */}
               
             
             
        

        </div>
      )
    }

}

const convertToProps = (state) => {
    return {
        message: state.message,
        data: state.data
    }
}


export default connect(convertToProps)(Chat);

