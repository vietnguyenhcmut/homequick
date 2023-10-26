import { Col, Row } from 'antd';
import "./style.css"

import CardItem, { CardMonitor } from '../../../shared/card/Card'

import { DeviceList } from '../../../../data/DeviceList';

const DeviceDetail = () => {
  return(
    <div>
      <h1> Devices Detail ! </h1>

      <Row>

        <Col span={14}>
          <Row>
            {
              // DeviceList.map(deviceType => 
              //   <Col>
              //     <CardItem 
              //       title={deviceType.title} 
              //       icon={deviceType.icon} 
              //       status={deviceType.status}
              //     />
              //   </Col>
              // )
            }
          </Row>
        </Col>

        <Col span={8}>
          <Row>
            <CardMonitor
              listOfDevices={DeviceList}
            />
          </Row>
        </Col>
        
      </Row>
    </div>
  )
}

export default DeviceDetail;