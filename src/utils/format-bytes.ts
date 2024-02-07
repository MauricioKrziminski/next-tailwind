export function formatBytes(bytes: number) {
  const units = ['B', 'KB', 'MB', 'GB', 'TB, PB']

  let value = bytes
  let uniteIndex = 0

  while (value >= 1024 && uniteIndex < units.length - 1) {
    value /= 1024
    uniteIndex++
  }

  return `${value.toFixed(1)} ${units[uniteIndex]}`
}
