export type StrEllipsisOptions = {
  keepFirst?: number
  keepLast?: number
  ellipsis?: string
}

export function strEllipsis(s: string, options: StrEllipsisOptions = {}) {
  const {keepFirst = 6, keepLast = 4, ellipsis = '...'} = options
  if (s.length <= keepFirst + keepLast) return s
  return `${s.slice(0, keepFirst)}${ellipsis}${s.slice(s.length - keepLast)}`
}

export const compactFloat = Intl.NumberFormat('en', {notation: 'compact'})

export function formatCompactFloat(n: number) {
  return compactFloat.format(n)
}
