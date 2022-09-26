import sub from '/styles/template/subpages_layout.module.scss';
import local from '/styles/subpages/aboutUs.module.scss';
import Image from "next/image"

export default function about_us() {
  return (
    <div className={sub.container}>
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
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique vel repellendus natus eos, id vitae dolore reprehenderit rerum debitis repellat maiores dolores? Reiciendis minus expedita deserunt nisi eveniet neque animi.</p>
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
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique vel repellendus natus eos, id vitae dolore reprehenderit rerum debitis repellat maiores dolores? Reiciendis minus expedita deserunt nisi eveniet neque animi.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
