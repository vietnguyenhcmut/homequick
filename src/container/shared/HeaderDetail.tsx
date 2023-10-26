import ThemeSwitch from '../shared/ThemeSwitch';

type HeaderDetailProps = {
  bgColor: string | undefined,
  textColor: string | undefined,
}

const HeaderDetail: React.FC<HeaderDetailProps> = ({bgColor, textColor}) => {
  return(
    <div 
      style={{
        backgroundColor: bgColor,
        color: textColor,
        fontWeight: 'bold',
        boxShadow: 'rgba(0, 0, 0, 0.05) 0px 0px 5px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px',
        display: 'flex',
        flexDirection: 'row',
      }}
    >
      <div style={{
        marginLeft: '20px'
      }}>
        Header
      </div>

      <div style={{paddingLeft: '10px', right: '0'}}>
        <ThemeSwitch />
      </div>

    </div>
  )
}

export default HeaderDetail;