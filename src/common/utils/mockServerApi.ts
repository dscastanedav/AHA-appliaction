/**
 * Concat path to default mock server URL
 * @param path => Path to concat
 * @returns => Server URL
 */
 export function mockServerApi(path: string) {
  return import.meta.env.VITE_API_URL + path;
}

export default mockServerApi;
