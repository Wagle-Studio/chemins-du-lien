import './style.scss'
import clsx from 'clsx'
import Image from 'next/image'
import { RichText as ConvertRichText } from '@payloadcms/richtext-lexical/react'
import { AllBlocks, ExtractBlock } from '@/types/blocks'
import { Link } from '@/ui/link/Link'
import pp0 from './../../_assets/pictures/pp_0.png'
import pp1 from './../../_assets/pictures/pp_1.png'
import pp2 from './../../_assets/pictures/pp_2.png'
import pp3 from './../../_assets/pictures/pp_3.png'

type Props = {
  data: ExtractBlock<AllBlocks, 'introduction_team'>
}

export const IntroductionTeamBlock: React.FC<Props> = ({ data }: Props) => {
  return (
    <div
      className={clsx('introduction_team_block', {
        'introduction_team_block--background': data.background,
      })}
    >
      <div className="introduction_team_block__wrapper">
        <div className="introduction_team_block__wrapper__left">
          <div className="introduction_team_block__wrapper__left__content">
            <h2 className="heading_1">{data.title}</h2>
            <ConvertRichText data={data.description} />
          </div>
          <div className="introduction_team_block__wrapper__left__team">
            <Image src={pp0} alt="Photo de profil de Eliane Hanry" quality={100} />
            <Image src={pp1} alt="Photo de profil de Jean-Luc Berger" quality={100} />
            <Image src={pp2} alt="Photo de profil de Tiphaine Hanry" quality={100} />
            <Image src={pp3} alt="Photo de profil d'une Girafone" quality={100} />
          </div>
        </div>
        <div className="introduction_team_block__wrapper__right">
          <div className="introduction_team_block__wrapper__right__video">
            <video
              className="introduction_team_block__wrapper__right__video__player"
              controls
              preload="metadata"
              poster="/pictures/preview_video_Tiphaine.jpg"
            >
              <source src="/videos/feedback_Tiphaine.mp4" type="video/mp4" />
              Votre navigateur ne supporte pas la lecture de vidéos.
            </video>
          </div>
          <div className="introduction_team_block__wrapper__right__cta">
            <Link href="/" variant="primary">
              Voir les retours d'expériences
            </Link>
            <Link href="/" variant="ghost">
              Découvrir le collectif
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
