import {
  PROFILE_ENDPOINT,
  PLAYLISTS_ENDPOINT,
  TRACKS_ENDPOINT,
  ARTISTS_ENDPOINT,
  SEARCH_ENDPOINT,
} from "./constants";

const getTokenHeader = () => ({
  Authorization: `Bearer ${localStorage.getItem("token")}`,
});

const fetchData = async (url, options = {}) => {
  try {
    const response = await fetch(url, {
      ...options,
      headers: {
        ...options.headers,
        ...getTokenHeader(),
      },
    });

    if (!response.ok) {
      throw new Error(`Request failed with status ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error(`Error fetching data from ${url}:`, error);
    throw error;
  }
};

export const getProfileData = async () => {
  return fetchData(PROFILE_ENDPOINT);
};

export const getPlaylistsData = async () => {
  return fetchData(PLAYLISTS_ENDPOINT);
};

export const getTracksData = async () => {
  return fetchData(TRACKS_ENDPOINT);
};

export const getArtistsData = async () => {
  return fetchData(ARTISTS_ENDPOINT);
};

export const searchAlbums = async (searchKey) => {
  return fetchData(`${SEARCH_ENDPOINT}${searchKey}`);
};
