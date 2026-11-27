import useSWR from 'swr'
import type { SpotifyNowPlayingData } from '~/types/data'
import { fetcher } from '~/utils/misc'

export function useNowPlaying() {
  let { data } = useSWR<SpotifyNowPlayingData>('/api/spotify', fetcher, {
    // Refresh periodically so the widget reflects what is playing without
    // requiring a page reload or window refocus.
    refreshInterval: 30_000,
  })
  return data || { isPlaying: false }
}
