import sub from '/styles/template/subpages_layout.module.scss';
import local from '/styles/subpages/aboutUs.module.scss';
import Image from "next/image"

export default function about_us() {
  return (
    <div className={sub.container}>
      <div className='emptyblock'></div>
      <div className={sub.header}>
        <div className={`${sub.header__title} ${local.header__title}`}>
          <p>about us</p>
          <p>about us</p>
          <p>about us</p>
        </div>
      </div>
      <div className={local.body}>
        <div className={local.body__list}>
          <div className={local.body__text}>
            <div className={local.text__constrainer}>
              <p>where we came from</p>
              <p>The &quot;Broken Bats &quot; are made up of members that began their baseball journey in either a school baseball club or the BIGS(Baseball Interest Group Singapore) and have played together casually for a number of years. For many of us and perhaps future members as well, this is our gateway to playing as a team in Singapore.</p>
            </div>
          </div>
          <div className={local.body__img}>
              <Image 
                src='/images/BrokenbatsSlum.jpg'
                alt=''
                layout='fill'
                objectFit="cover"
                objectPosition='center'
              />
          </div>
        </div>
        <div className={local.body__list}>
          <div className={local.body__img}>
            <Image 
              src='/images/Brokenbats2.jpg'
              alt=''
              layout='fill'
              objectFit="cover"
              objectPosition='center'
            />
          </div>
          <div className={local.body__text}>
            <div className={local.text__constrainer}>
              <p>our goal and attitude</p>
              <p>The team goal is to always bring meaningful experience home after a game or training session, in terms of playing as a team and individually. While at the same time, creating a environment where one&apos;s mistake is no one&apos;s fault but rather everyone&apos;s learning point. </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
