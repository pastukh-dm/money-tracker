import './Page.scss';

export function Page(props: {children: React.ReactNode}) {
  return <div className="Page">{props.children}</div>
}