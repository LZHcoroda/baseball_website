import sub from '/styles/template/subpages_layout.module.scss';
import local from '/styles/subpages/about_us.module.scss';
import Image from "next/image"

export default function about_us() {
  return (
    <div className={sub.wrapper}>
      <div className={sub.section1}>
        <p>about us</p>
      </div>
      <div className={local.section2}>
        <div className={local.section_left}>
          <p>asd</p>
        </div>
        <div className={local.section_right}>
          <div className={local.image_wrapper}>
            <Image 
              src='/images/Brokenbats2.jpg'
              alt=''
              layout='fill'
              objectFit="cover"
              objectPosition='center'
            />
          </div>
        </div>
      </div>
    </div>
  )
}
