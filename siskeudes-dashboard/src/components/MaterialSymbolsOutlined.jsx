export function MaterialSymbolsOutlined({ icon, className }) {
  return (
    <span className={`material-symbols-outlined ${className || ''}`}>
      {icon}
    </span>
  )
}
