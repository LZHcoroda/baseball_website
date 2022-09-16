import sub from '/styles/template/subpages_layout.module.scss';
import local from '/styles/subpages/joinUs.module.scss';
import Image from "next/image"

export default function join_us() {
  return (
    <div className={sub.wrapper}>
      <div className={sub.section1}>
        <div className={`${sub.header_wrapper} ${local.header_wrapper}`} >
          <p>join us</p>
          <p>join us</p>
          <p>join us</p>
        </div>
      </div>
    </div>
  )
}
