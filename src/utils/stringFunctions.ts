export function convertEmailsToLinks(text: string): string {
  const emailRegex = /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/gi
  return text.replace(emailRegex, '<a href="mailto:$1">$1</a>')
}
