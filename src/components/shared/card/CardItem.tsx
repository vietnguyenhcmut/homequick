import { hover } from '@testing-library/user-event/dist/hover';
import { Card } from 'antd';
import "./style.css"
const { Meta } = Card;

const CardItem = () => {
  return(
    <div style={{padding: '10px'}}>
      <Card className='card-item'>
        <Meta title="Europe Street beat" description="www.instagram.com" />
      </Card>
    </div>
  )
}

export default CardItem;