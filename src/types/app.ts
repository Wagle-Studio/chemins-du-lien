export type ArticleParams<TSlug extends string> = {
  params: Promise<{ [K in TSlug]?: string }>
}

type AsyncLayoutParams<TSlugs extends string> = {
  params: Promise<Record<TSlugs, string>>
}

export type LayoutWithChildren<TSlugs extends string> = React.PropsWithChildren<
  AsyncLayoutParams<TSlugs>
>
