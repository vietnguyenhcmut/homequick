import { useDispatch } from 'react-redux';
import { light, dark } from "../../redux/store/slice/counterSlice";
import { Switch } from 'antd';

import ThemeApp from '../theme/ThemeApp';

const ThemeSwitch = () => {
  const dispatch = useDispatch();
  const handleThemeSwitch = (checked: boolean) => {
    if (checked) {
      return dispatch(light())
    } else {
      return dispatch(dark())
    }
  }

  return (
    <div>
      <Switch 
        checkedChildren="Light" 
        unCheckedChildren="Dark" 
        defaultChecked
        onChange={handleThemeSwitch}
        style={{
          backgroundColor: ThemeApp()?.themeSwitch
        }}
        size='default'
      />
    </div>
  )
}

export default ThemeSwitch;