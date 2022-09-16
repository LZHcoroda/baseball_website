import sub from '/styles/template/subpages_layout.module.scss';
import local from '/styles/subpages/aboutUs.module.scss';
import Image from "next/image"

export default function about_us() {
  return (
    <div className={sub.wrapper}>
      <div className={sub.section1}>
        <div className={sub.header_wrapper}>
          <p>about us</p>
          <p>about us</p>
          <p>about us</p>
        </div>
      </div>
      <div className={local.section2}>
        <div className={local.section_text}>
          <div className={local.content_wrapper}>
            <p>where we came from</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique vel repellendus natus eos, id vitae dolore reprehenderit rerum debitis repellat maiores dolores? Reiciendis minus expedita deserunt nisi eveniet neque animi.</p>
          </div>
        </div>
        <div className={local.section_img}>
            <Image 
              src='/images/BrokenbatsSlum.jpg'
              alt=''
              layout='fill'
              objectFit="cover"
              objectPosition='center'
            />
        </div>
      </div>
      <div className={local.section2}>
        <div className={local.section_img}>
          <Image 
            src='/images/Brokenbats2.jpg'
            alt=''
            layout='fill'
            objectFit="cover"
            objectPosition='center'
          />
        </div>
        <div className={local.section_text}>
          <div className={local.content_wrapper}>
            <p>our goal and attitude</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique vel repellendus natus eos, id vitae dolore reprehenderit rerum debitis repellat maiores dolores? Reiciendis minus expedita deserunt nisi eveniet neque animi.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
