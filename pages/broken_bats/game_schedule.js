import sub from '/styles/template/subpages_layout.module.scss';
import local from '/styles/subpages/gameSchedule.module.scss';
import Image from "next/image"

export default function game_schedule() {
  return (
    <div className={sub.container}>
      <div className='emptyblock'></div>
      <div className={sub.header}>
        <div className={`${sub.header__title} ${local.header__title}`} >
          <p>game schedule</p>
          <p>game schedule</p>
          <p>game schedule</p>
        </div>
      </div>
      <div className={local.body}>
        <p>TO BE UPDATED</p>
      </div>
    </div>
    
  )
}
