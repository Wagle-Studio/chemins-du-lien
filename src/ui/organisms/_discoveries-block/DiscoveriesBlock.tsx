// import './style.scss'
// import { AllBlocks, ExtractBlock } from '@/types/blocks'
// import { Link } from '@/ui/link/Link'

// type Props = {
//   data: ExtractBlock<AllBlocks, 'discoveries'>['cards']
// }

// export const DiscoveriesBlock: React.FC<Props> = ({ data }) => {
//   return (
//     <div className="discoveries_block">
//       <ul className="discoveries_block__cards">
//         {data?.map((card: any) => (
//           <li key={card.id}>
//             <div className="discoveries_block__cards__item">
//               <div className="discoveries_block__cards__item__header">
//                 <h3>{card.title}</h3>
//                 <p>{card.description}</p>
//               </div>
//               {typeof card.internalLink.article !== 'number' && (
//                 <Link href={`/articles/${card.internalLink.article.slug}`} variant="primary">
//                   {card.internalLink.label}
//                 </Link>
//               )}
//             </div>
//           </li>
//         ))}
//       </ul>
//     </div>
//   )
// }
