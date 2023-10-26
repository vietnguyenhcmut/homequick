import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faFan, 
  faLightbulb, 
  faTv,
  faBowlRice,
  faWaveSquare,
  faWind,
  faFaucetDrip,
  faBoxArchive
} from '@fortawesome/free-solid-svg-icons';

export const DeviceList = [
  {
    title: "Bóng đèn",
    icon: <FontAwesomeIcon icon={faLightbulb} size='3x'/>,
    numOfItems: 25,
    bgColor: "#526D82",
    powerConsumption: "10%",
    
  },
  {
    title: "Quạt gió",
    icon: <FontAwesomeIcon icon={faFan} size='3x'/>,
    numOfItems: 8,
    bgColor: "#526D82",
    powerConsumption: "15%",
  },
  {
    title: "Monitor",
    icon: <FontAwesomeIcon icon={faWaveSquare} size='3x'/>,
    numOfItems: 3,
    bgColor: "#526D82",
    powerConsumption: "20%",
  },
  {
    title: "Nồi cơm",
    icon: <FontAwesomeIcon icon={faBowlRice} size='3x'/>,
    numOfItems: 2,
    bgColor: "#526D82",
    powerConsumption: "5%"
  },
  {
    title: "TV",
    icon: <FontAwesomeIcon icon={faTv} size='3x'/>,
    numOfItems: 1,
    bgColor: "#526D82",
    powerConsumption: "15%"
  },
  {
    title: "Máy lạnh",
    icon: <FontAwesomeIcon icon={faWind} size='3x'/>,
    numOfItems: 1,
    bgColor: "#526D82",
    powerConsumption: "30%"
  },
  {
    title: "Máy bơm",
    icon: <FontAwesomeIcon icon={faFaucetDrip} size='3x'/>,
    numOfItems: 1,
    bgColor: "#526D82",
    powerConsumption: "10%"
  },
  {
    title: "Tủ lạnh",
    icon: <FontAwesomeIcon icon={faBoxArchive} size='3x'/>,
    numOfItems: 1,
    bgColor: "#526D82",
    powerConsumption: "10%"
  },
]