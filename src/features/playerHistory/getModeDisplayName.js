import DestinyActivityModeDefinition from "../../manifests/DestinyActivityModeDefinition.json"

export function getModeDisplayName(modeType) {
  for (let i = 0; i < Object.keys(DestinyActivityModeDefinition).length; i++) {
    const mode = DestinyActivityModeDefinition[Object.keys(DestinyActivityModeDefinition)[i]]
    if (mode.modeType === modeType) return mode.displayProperties.name
  }
  return ""
}
