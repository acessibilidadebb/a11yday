import { ScheduleItemType } from '../types/schedule'

export const generateUniqueId = () => {
  const timestamp = Date.now()
  const randomString = Math.random().toString(36).substring(2, 11)
  return `id-${timestamp}-${randomString}`
}

export const getSpeakersIdsFromSchedule = (scheduleData: ScheduleItemType[]) =>
  scheduleData.reduce<string[][]>((acc, item: ScheduleItemType) => {
    if (item.type === 'talk' && item.confirmed === true && item.speakerIds) {
      acc.push(item.speakerIds)
    }
    return acc
  }, [])
