import { IconArrRight, IconHome } from "../icon/Icons"

const BreadCrumb = ({
  depth1, // string
  depth2, // string
  depth3, // string
}) => {

  return (
    <>
      <div className="component -breadcrumb">
        <ul className="wrap">
          <li>
            <IconHome style={{width : '14px'}}/>
          </li>
          {
            depth1 && 
            <li>
              <a href="">
                <i>
                  <IconArrRight style={{width:'6px'}}/>
                </i>
                <div>{depth1}</div>
              </a>
            </li> 
          }
          {
            depth1 && depth2 && 
            <li>
              <a href="">
                <i>
                  <IconArrRight style={{width:'6px'}}/>
                </i>
                <div>{depth2}</div>
              </a>
            </li> 
          }
          {
            depth1 && depth2 && depth3 &&
            <li>
              <a href="">
                <i>
                  <IconArrRight style={{width:'6px'}}/>
                </i>
                <div>{depth3}</div>
              </a>
            </li> 
          }
        </ul>
      </div>
    </>
  )
}

export default BreadCrumb