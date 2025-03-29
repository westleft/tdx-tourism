export const capitalize = <T>(text: string): T => {
  return (text.substring(0, 1).toUpperCase() + text.substring(1)) as T
}

export const splitByUnderscore = <T>(text: string): T => {
  return text.split('_')[0] as T
}
