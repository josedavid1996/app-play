import { useGetLocationsQuery } from '../generated/graphql'

export const useDog = () => {
  const { loading, error, data } = useGetLocationsQuery()
  const db = data?.locations ?? []
  return { loading, error, db }
}
