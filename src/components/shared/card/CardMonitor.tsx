import { Card, Divider } from 'antd';
import "./style.css"
const { Meta } = Card;

type CardMonitorProps = {
  title: string,

}

const CardMonitor = () => {
  return(
    <div style={{padding: '10px'}}>
      <Card className='card-monitor'>
        <Meta title="Lượng điện tiêu thụ của mỗi thiết bị "/>
        <Divider />
        Hello you
      </Card>
    </div>
  )
}

export default CardMonitor;