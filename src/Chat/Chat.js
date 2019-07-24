import React from 'react';
import { conLog } from '../actions';
import 'antd/dist/antd.css'
import './Chat.css'
import { List, Avatar , Button ,Row, Col , Input} from 'antd';
const data = [
  {
    title: '172.60.60.180',
    description: "Lorem ipsdfasLorem ipsdfasLorem ipsdfasLorem ipsdfasLorem ipsdfasLorem ipsdfasLorem ipsdfasLorem ipsdfasLorem ipsdfasLorem ipsdfasLorem ipsdfas"
  
  },
  {
    title: '176.65.50.8',
    description: "Lorem ipsdfasLorem ipsdfasLorem ipsdfasLorem ipsdfasLorem ipsdfasLorem ipsdfasLorem ipsdfasLorem ipsdfasLorem ipsdfasLorem ipsdfasLorem ipsdfas"
  },
  {
    title: '176.65.50.8',
    description: "Lorem ipsdfasLorem ipsdfasLorem ipsdfasLorem ipsdfasLorem ipsdfasLorem ipsdfasLorem ipsdfasLorem ipsdfasLorem ipsdfasLorem ipsdfasLorem ipsdfas"
  },
  {
    title: '176.65.50.8',
    description: "Lorem ipsdfasLorem ipsdfasLorem ipsdfasLorem ipsdfasLorem ipsdfasLorem ipsdfasLorem ipsdfasLorem ipsdfasLorem ipsdfasLorem ipsdfasLorem ipsdfas"
  },
  {
    title: '176.65.50.8',
    description: "Lorem ipsdfasLorem ipsdfasLorem ipsdfasLorem ipsdfasLorem ipsdfasLorem ipsdfasLorem ipsdfasLorem ipsdfasLorem ipsdfasLorem ipsdfasLorem ipsdfas"
  },
  {
    title: '176.65.50.8',
    description: "Lorem ipsdfasLorem ipsdfasLorem ipsdfasLorem ipsdfasLorem ipsdfasLorem ipsdfasLorem ipsdfasLorem ipsdfasLorem ipsdfasLorem ipsdfasLorem ipsdfas"
  },
  {
    title: '176.65.50.8',
    description: "Lorem ipsdfasLorem ipsdfasLorem ipsdfasLorem ipsdfasLorem ipsdfasLorem ipsdfasLorem ipsdfasLorem ipsdfasLorem ipsdfasLorem ipsdfasLorem ipsdfas"
  },
  {
    title: '176.65.50.8',
    description: "Lorem ipsdfasLorem ipsdfasLorem ipsdfasLorem ipsdfasLorem ipsdfasLorem ipsdfasLorem ipsdfasLorem ipsdfasLorem ipsdfasLorem ipsdfasLorem ipsdfas"
  },
  {
    title: '176.65.50.8',
    description: "Lorem ipsdfasLorem ipsdfasLorem ipsdfasLorem ipsdfasLorem ipsdfasLorem ipsdfasLorem ipsdfasLorem ipsdfasLorem ipsdfasLorem ipsdfasLorem ipsdfas"
  },
  {
    title: '176.65.50.8',
    description: "Lorem ipsdfasLorem ipsdfasLorem ipsdfasLorem ipsdfasLorem ipsdfasLorem ipsdfasLorem ipsdfasLorem ipsdfasLorem ipsdfasLorem ipsdfasLorem ipsdfas"
  },
  {
    title: '176.65.50.8',
    description: "Lorem ipsdfasLorem ipsdfasLorem ipsdfasLorem ipsdfasLorem ipsdfasLorem ipsdfasLorem ipsdfasLorem ipsdfasLorem ipsdfasLorem ipsdfasLorem ipsdfas"
  },
  {
    title: '176.65.50.8',
    description: "Lorem ipsdfasLorem ipsdfasLorem ipsdfasLorem ipsdfasLorem ipsdfasLorem ipsdfasLorem ipsdfasLorem ipsdfasLorem ipsdfasLorem ipsdfasLorem ipsdfas"
  },
  {
    title: '176.65.50.8',
    description: "Lorem ipsdfasLorem ipsdfasLorem ipsdfasLorem ipsdfasLorem ipsdfasLorem ipsdfasLorem ipsdfasLorem ipsdfasLorem ipsdfasLorem ipsdfasLorem ipsdfas"
  },
  {
    title: '176.65.50.8',
    description: "Lorem ipsdfasLorem ipsdfasLorem ipsdfasLorem ipsdfasLorem ipsdfasLorem ipsdfasLorem ipsdfasLorem ipsdfasLorem ipsdfasLorem ipsdfasLorem ipsdfas"
  },
  {
    title: '176.65.50.8',
    description: "Lorem ipsdfasLorem ipsdfasLorem ipsdfasLorem ipsdfasLorem ipsdfasLorem ipsdfasLorem ipsdfasLorem ipsdfasLorem ipsdfasLorem ipsdfasLorem ipsdfas"
  },
  {
    title: '176.65.50.8',
    description: "Lorem ipsdfasLorem ipsdfasLorem ipsdfasLorem ipsdfasLorem ipsdfasLorem ipsdfasLorem ipsdfasLorem ipsdfasLorem ipsdfasLorem ipsdfasLorem ipsdfas"
  },
  {
    title: '176.65.50.8',
    description: "Lorem ipsdfasLorem ipsdfasLorem ipsdfasLorem ipsdfasLorem ipsdfasLorem ipsdfasLorem ipsdfasLorem ipsdfasLorem ipsdfasLorem ipsdfasLorem ipsdfas"
  },
  {
    title: '176.65.50.8',
    description: "Lorem ipsdfasLorem ipsdfasLorem ipsdfasLorem ipsdfasLorem ipsdfasLorem ipsdfasLorem ipsdfasLorem ipsdfasLorem ipsdfasLorem ipsdfasLorem ipsdfas"
  },
  {
    title: '176.65.50.8',
    description: "Lorem ipsdfasLorem ipsdfasLorem ipsdfasLorem ipsdfasLorem ipsdfasLorem ipsdfasLorem ipsdfasLorem ipsdfasLorem ipsdfasLorem ipsdfasLorem ipsdfas"
  },
  {
    title: '176.65.50.8',
    description: "Lorem ipsdfasLorem ipsdfasLorem ipsdfasLorem ipsdfasLorem ipsdfasLorem ipsdfasLorem ipsdfasLorem ipsdfasLorem ipsdfasLorem ipsdfasLorem ipsdfas"
  },
  {
    title: '176.65.50.8',
    description: "Lorem ipsdfasLorem ipsdfasLorem ipsdfasLorem ipsdfasLorem ipsdfasLorem ipsdfasLorem ipsdfasLorem ipsdfasLorem ipsdfasLorem ipsdfasLorem ipsdfas"
  },
  
];



export default class Chat extends React.Component{





    render(){
      const { TextArea } = Input;
      return (
        <div>
              <div className="msgContainer">
                <List
                    itemLayout="horizontal"
                    dataSource={data}
                    renderItem={item => (
                      <List.Item style={{paddingLeft: '15px'}} actions={[<a>Delete</a>]}>
                        <List.Item.Meta
                          title={<a href="https://ant.design">{item.title}</a>}
                          description={item.description}
                        />
                      </List.Item>
                    )}
                />

              </div>
              <div className="msgInput">
                <TextArea rows={2} placeholder="Message"/>
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


