export const generateUniqueId = () => {
  const timestamp = Date.now()
  const randomString = Math.random().toString(36).substring(2, 11)
  return `id-${timestamp}-${randomString}`
}
