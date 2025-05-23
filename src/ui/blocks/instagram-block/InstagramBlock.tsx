import './style.scss'
import clsx from 'clsx'
import Image from 'next/image'
import { AllBlocks, ExtractBlock } from '@/types/blocks'
import post0 from './../../_assets/pictures/instagram_0.jpg'
import post1 from './../../_assets/pictures/instagram_1.jpg'
import post2 from './../../_assets/pictures/instagram_2.jpg'
import post3 from './../../_assets/pictures/instagram_3.jpg'
import { InstagramIcon } from '@/ui/icons/InstagramIcon'

type Props = {
  data: ExtractBlock<AllBlocks, 'instagram'>
}

export const InstagramBlock: React.FC<Props> = ({ data }: Props) => {
  return (
    <div className={clsx('instagram_block', { 'instagram_block--background': data.background })}>
      <div className="instagram_block__wrapper">
        <div className="instagram_block__wrapper__content">
          <h2 className="heading_1">
            Suivez-nous sur Instagram{' '}
            <InstagramIcon className="instagram_block__wrapper__content__icon" />
          </h2>
          <p className="heading_3">@chemins-du-lien</p>
        </div>
        <ul className="instagram_block__wrapper__posts">
          <li>
            <Image src={post0} alt="Photo d'un post Instagram" quality={100} />
          </li>
          <li>
            <Image src={post1} alt="Photo d'un post Instagram Berger" quality={100} />
          </li>
          <li>
            <Image src={post2} alt="Photo d'un post Instagram" quality={100} />
          </li>
          <li>
            <Image src={post3} alt="Photo d'un post Instagram" quality={100} />
          </li>
        </ul>
      </div>
    </div>
  )
}
