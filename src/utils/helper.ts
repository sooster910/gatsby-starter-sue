type emojis = { list: string[]; name: string }

export const formatReadingTimeToEmoji = (timeToRead: number): emojis => {
  const minPerArticle = 5
  const emoji =
    Math.ceil(timeToRead / minPerArticle) > minPerArticle * 5 ? '🍻' : '☕️'

  const list = Array.from(
    {
      length:
        timeToRead > minPerArticle * 5
          ? Math.ceil(timeToRead / minPerArticle / Math.E)
          : Math.ceil(timeToRead / minPerArticle),
    },
    () => emoji,
  )
  return { list, name: timeToRead > 5 ? 'teacup without handle' : 'teapot' }
}
