export const Repository = props => {
  return (
    <li>
      <span>{props.repository?.name ?? 'default'}</span>
      <span>{props.repository?.description ?? 'default'}</span>
      <a href='#link'>{props.repository?.link ?? 'default'}</a>
    </li>
  )
}
