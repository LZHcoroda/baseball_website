import sub from '/styles/template/subpages_layout.module.scss';
import local from '/styles/subpages/joinUs.module.scss';
import Link from 'next/link';

export default function join_us() {
  return (
    <div className={sub.container}>
      <div className={sub.header}>
        <div className={`${sub.header__title} ${local.header__title}`} >
          <p>join us</p>
          <p>join us</p>
          <p>join us</p>
        </div>
      </div>
      <div className={local.content_wrapper}>
        <div className={local.content__description}>
          <div>
            <p>
              Please fill in the form to let us know you are interested in playing in the league with us. <br />
              if the form does not appear below, kindly use the link below: <br/>
            </p>
            <Link href="https://forms.gle/AaUTrpMstzrxjdRn7"><a> <p>https://forms.gle/AaUTrpMstzrxjdRn7</p> </a></Link>
            <p className={`${local.content__description} ${local.description_red}`}>
              *The team is currently looking for more pitchers & catchers
            </p>
          </div>
        </div>
        <div className={local.content__form}>
            <iframe 
              src="https://docs.google.com/forms/d/e/1FAIpQLSehe_ID5zL0owU1y4RLT_oiQoGZD3JnEogMi4lLBjKEnxHcBQ/viewform?embedded=true">
              Loading…
            </iframe>
        </div>
      </div>
    </div>
  )
}
