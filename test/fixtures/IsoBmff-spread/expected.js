function render() {
  return IsoBmff.createElement("tkhd", {"trackId": trackId, "duration": 0, "width": track.settings.width, "height": track.settings.height}, null);
}
