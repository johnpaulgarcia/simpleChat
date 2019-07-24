import React from 'react';
import { conLog,dePop } from '../actions';
import 'antd/dist/antd.css'
import './Chat.css'
import { List, Avatar , Button ,Row, Col , Input} from 'antd';
import {connect} from 'react-redux';
import io from 'socket.io-client'
const socket = io('http://localhost:3001');
class Chat extends React.Component<Props,State>{

  state = {

  }
  componentDidMount(){
     this.props.dispatch(dePop());
     socket.on('message', () =>
      this.props.dispatch(conLog())
    );
  }

  submit = (e) => {
      e.preventDefault();
      console.log('youre here')
      let user = "ben";
      socket.emit('message',user);
  }
    render(){
      const { TextArea } = Input;
      return (
        <div>
              <div className="msgContainer">
                <List
                    itemLayout="horizontal"
                    dataSource={this.props.data}
                    renderItem={item => (
                      <List.Item style={{paddingLeft: '15px'}} actions={[<a>Delete</a>]}>
                        <List.Item.Meta
                          avatar={<Avatar src="https://picsum.photos/200/300" />}
                          title={<a href="https://ant.design">{item.title}</a>}
                          description={item.description}
                        />
                      </List.Item>
                    )}
                />

              </div>
              <div className="msgInput">
                <form action="#" onSubmit={this.submit}>
                  {this.props.message}
                 <Input type="text" placeholder="Message"/>
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

