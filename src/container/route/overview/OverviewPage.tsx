import { CardType, CardMonitor } from '../../shared/card/Card';
import { Col, Row } from 'antd';
import "./style.css"

import { DeviceList } from '../../../data/DeviceList';

const OverviewPage = () => {
  return(
    <div>

      <h1> Overview </h1>

      <Row>

        <Col span={14}>
          <Row>
            {
              DeviceList.map(deviceType => 
                <Col>
                  <CardType 
                    title={deviceType.title} 
                    icon={deviceType.icon} 
                    numOfItems={deviceType.numOfItems} 
                    bgColor={deviceType.bgColor}
                  />
                </Col>
              )
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

export default OverviewPage;