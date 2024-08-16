interface convertParams {
  text: string
  subject?: string
}

export function convertEmailsToLinks({ text, subject }: convertParams): string {
  const emailRegex = /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/gi
  return text.replace(emailRegex, (match) => {
    const mailtoLink = `mailto:${match}${
      subject ? `?subject=${encodeURIComponent(subject)}` : ''
    }`
    return `<a href="${mailtoLink}">${match}</a>`
  })
}
