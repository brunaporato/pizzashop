import { Link, LinkProps, useLocation } from 'react-router-dom'

export function NavLink(props: LinkProps) {
  const { pathname } = useLocation()

  console.log('pathname', pathname)
  console.log('props.to', props.to)

  return (
    <Link
      data-current={pathname === props.to}
      className="flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground data-[current=true]:text-foreground"
      {...props}
    />
  )
}
