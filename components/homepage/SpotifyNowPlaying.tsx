import useSWR from 'swr';

import Spotify from 'public/static/icons/spotify.svg';

import { fetcher } from '@/utils/fetcher';
import type { SpotifyNowPlayingData } from '@/types/index';
import MusicBar from '@/components/homepage/MusicBar';

const SpotifyNowPlaying = () => {
  const response = useSWR('/api/spotify', fetcher);

  const { songUrl, title, artist } = (response.data as SpotifyNowPlayingData) || {};

  return (
    <div className="flex items-center bg-gray-900 px-3 py-2 xl:px-6">
      <Spotify className="w-6 flex-shrink-0 text-spotify" />

      <div className="ml-2 inline-flex truncate">
        {songUrl ? (
          <>
            <MusicBar />
            <a
              className="ml-2 font-medium text-gray-200 "
              href={songUrl}
              target="_blank"
              rel="noopener noreferrer"
              title={`${title} - ${artist || 'Spotify'}`}
            >
              {title}
            </a>
          </>
        ) : (
          <p className="font-medium text-gray-200">Not Playing</p>
        )}
        <span className="mx-2 text-gray-300">{' – '}</span>
        <p className="max-w-max truncate text-gray-300">{artist || 'Spotify'}</p>
      </div>
    </div>
  );
};

export default SpotifyNowPlaying;
