export interface IButtonProps {
  slug?: string
  backgroundColor: string
  img?: any
}

export interface IHeadProps {
  title?: string
  description?: string
  keywords?: string
  author?: string
}

export interface ISideNavItemProps {
    slug: string
    name: string
    icon: any
}

export interface IContract {
  id?: number,
  vendor: string,
  project: string,
  timePeriod: string,
  contractValue: string,
  progress: string,

  vendorMore:string[],
  timePeriodMore: string[],
  contractValueMore: string[],
}
