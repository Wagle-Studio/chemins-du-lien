export type PageSearchParams = {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

export type PageParams<T extends string = string> = {
  params: Record<T, string>
}

export type PageProps<T extends string = string> = PageParams<T> & PageSearchParams

export type LayoutProps<T extends string = string> = React.PropsWithChildren<PageProps<T>>
