import { Card, Divider } from 'antd';
import "./style.css"
const { Meta } = Card;

type CardItemProps = {
  title: string,
  icon: any,
  status: string,
  bgColor: string,
}

type CardTypeProps = {
  title: string,
  icon: any,
  numOfItems: number,
  bgColor: string
}

type CardMonitorProps = {
  listOfDevices: any[]
}

type CardMonitorItemProps = {
  title: string
  icon: any
  powerConsumption: string
}

const CardItem: React.FC<CardItemProps> = ({title, icon, status, bgColor}) => {
  return(
    <div style={{padding: '10px', justifyContent: 'center', backgroundColor: bgColor}}>
      <Card className='card-item'>
        <Meta title={title}/>
        <div style={{height: '60px'}}> {icon} </div>
        <div> {status} </div>
      </Card>
    </div>
  )
}
export default CardItem;


export const CardType: React.FC<CardTypeProps> = ({title, icon, numOfItems, bgColor}) => {
  return(
    <div style={{padding: '10px', justifyContent: 'center'}}>
      <div 
        className='card-item' 
        style={{
          backgroundColor: bgColor
        }}
      >
        <div> 
          <h3>{title}</h3> 
        </div>

        <div style={{height: '60px'}}> 
          {icon} 
        </div>
        
        <div> 
          <h3>{numOfItems}</h3> 
        </div>

      </div>
    </div>
  )
}

export const CardMonitor: React.FC<CardMonitorProps> = ({listOfDevices}) => {
  return(
    <div style={{padding: '10px'}}>
      <Card className='card-monitor'>

        <h2 style={{
          display: 'flex',
          justifyContent: 'center',
        }}> 
          Lượng điện tiêu thụ của mỗi thiết bị 
        </h2>

        <Divider />

        {
          listOfDevices.map(device => 
            <CardMonitorItem 
              title={device.title}
              icon={device.icon}
              powerConsumption={device.powerConsumption}
            />  
          )
        }

      </Card>
    </div>
  )
}

export const CardMonitorItem: React.FC<CardMonitorItemProps> = ({title, icon, powerConsumption}) => {
  return(
    <div style={{
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
    }}>

      <div style={{
        flex: 1
      }}>
        <h3> {title} </h3>
      </div>

      <div style={{
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
      }}>
        {icon}
      </div>

      <div style={{
        flex: 1,
        display: 'flex',
        justifyContent: 'right',
      }}>
        <h3> {powerConsumption} </h3>
      </div>

    </div>
  )
}