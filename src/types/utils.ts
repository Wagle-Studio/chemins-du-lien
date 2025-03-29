export type PageParams<TSlug extends string> = {
  params: Promise<{ [K in TSlug]?: string }>
}

export type AsyncLayoutParams<TSlugs extends string> = {
  params: Promise<Record<TSlugs, string>>
}

export type LayoutWithChildren<TSlugs extends string> = React.PropsWithChildren<
  AsyncLayoutParams<TSlugs>
>
