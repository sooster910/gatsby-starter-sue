type emojis = { list: string[]; name: string }

export const formatReadingTimeToEmoji = (timeToRead: number): emojis => {
  const timePerArticle = 5
  const emoji =
    Math.round(timeToRead / timePerArticle) > timePerArticle * 5 ? '📖' : '📰'

  const list = Array.from(
    {
      length:
        timeToRead > timePerArticle * 5
          ? Math.round(timeToRead / timePerArticle / Math.E)
          : Math.round(timeToRead / timePerArticle),
    },
    () => emoji,
  )
  return { list, name: timeToRead > 5 ? 'open_book' : 'newspaper' }
}
