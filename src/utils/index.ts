export const capitalize = <T>(text: string): T => {
  return (text.substring(0, 1).toUpperCase() + text.substring(1)) as T
}
