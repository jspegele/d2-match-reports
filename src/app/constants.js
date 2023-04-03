const common = {
  BUNGIE_API_ROOT: "https://www.bungie.net/Platform",
  BUNGIE_STATS_API_ROOT: "https://stats.bungie.net/Platform",
}
 
const dev = {
  MANIFEST_API_ROOT: "http://localhost:3001"
}

const prod = {
  MANIFEST_API_ROOT: ""
}
 
export const config = process.env.NODE_ENV === "development" ? { ...common, ...dev } : { ...common, ...prod }