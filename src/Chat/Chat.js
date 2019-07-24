import React from 'react';


import 'antd/dist/antd.css'
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
        <div style={{padding: '15px'}}>
          <Row type="flex" justify="space-around" align="middle">
              <Col span={18} style={{border: 'solid 1px #F1F1F1' , height: '800px' , padding: '15px' , overflow: 'auto'}}>
                <List
                    itemLayout="horizontal"
                    dataSource={data}
                    renderItem={item => (
                      <List.Item actions={[<a>Delete</a>]}>
                        <List.Item.Meta
                          title={<a href="https://ant.design">{item.title}</a>}
                          description={item.description}
                        />
                      </List.Item>
                    )}
                  />

              </Col>

              
            
          </Row>

          <Row type="flex" justify="space-around" align="middle" style={{paddingTop: '25px'}}>
              <Col span={18}>
                <Row type="flex">
                  <Col span={22} >
                    <Input Placeholder="Message"/>
                  </Col>

                  <Col span={1} style={{marginLeft: '5px' }}>
                  <Button type="primary" style={{width:'100px'}}>
                    Send
                  </Button>
                  </Col>
                </Row>
              </Col>
             
          </Row>

        </div>
      )
    }

}


