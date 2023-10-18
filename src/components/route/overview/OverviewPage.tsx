import CardItem from "../../shared/card/CardItem";
import CardMonitor from "../../shared/card/CardMonitor";
import { Col, Row } from 'antd';
import "./style.css"

const OverviewPage = () => {
  return(
    <div>
      <h1> Overview </h1>

      <Row>
        <Col span={14}>
          <Row>
            <Col>
              <CardItem />
            </Col>
            <Col>
              <CardItem />
            </Col>
            <Col>
              <CardItem />
            </Col>
            <Col>
              <CardItem />
            </Col>
            <Col>
              <CardItem />
            </Col>
            <Col>
              <CardItem />
            </Col>
            <Col>
              <CardItem />
            </Col>
            <Col>
              <CardItem />
            </Col>
          </Row>
        </Col>
        <Col span={8}>
          <CardMonitor />
        </Col>
        
      </Row>

    </div>
  )
}

export default OverviewPage;