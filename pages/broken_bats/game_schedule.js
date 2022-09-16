import sub from '/styles/template/subpages_layout.module.scss';
import local from '/styles/subpages/gameSchedule.module.scss';
import Image from "next/image"

export default function game_schedule() {
  return (
    <div className={sub.wrapper}>
      <div className={sub.section1}>
        <div className={`${sub.header_wrapper} ${local.header_wrapper}`} >
          <p>game schedule</p>
          <p>game schedule</p>
          <p>game schedule</p>
        </div>
      </div>
      <div className={local.section2}>
        
      </div>
    </div>
    
  )
}
