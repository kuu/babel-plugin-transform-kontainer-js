function render() {
  return IsoBmff.createElement('trak', {}, [
    IsoBmff.createElement('tkhd', {'trackId': trackId, 'duration': 0, 'width': track.settings.width, 'height': track.settings.height}, null),
    IsoBmff.createElement('mdia', {}, [
      IsoBmff.createElement('mdhd', {'timeScale': metadata.timeScale, 'duration': 0}, null),
      IsoBmff.createElement('hdlr', {'handlerType': 'video', 'name': 'VideoHandler'}, null),
      IsoBmff.createElement('minf', {}, [
        IsoBmff.createElement('vmhd', {}, null),
        IsoBmff.createElement('dinf', {}, [
          IsoBmff.createElement('dref', {'entryCount': 1}, [
            IsoBmff.createElement('url ', {'location': ''}, null)
          ])
        ]),
        IsoBmff.createElement('stbl', {}, [
          IsoBmff.createElement('stsd', {'entryCount': 1}, [
            IsoBmff.createElement('avcC', {
              'avcProfileIndication': 'baseline',
              'profileCompatibility': {
                 constraintSet0Flag: false,
                 constraintSet1Flag: false,
                 constraintSet2Flag: false
              },
              'avcLevelIndication': 3,
              'lengthSize': 4,
              'sequenceParameterSets': [{data:metadata.sps,length:metadata.sps.length}],
              'pictureParameterSets': [{data:metadata.pps,length:metadata.pps.length}]
            },null)
          ]),
          IsoBmff.createElement('stts', {'entries': []}, null),
          IsoBmff.createElement('stsc', {}, null),
          IsoBmff.createElement('stsz', {}, null),
          IsoBmff.createElement('stco', {}, null)
        ])
      ])
    ])
  ]);
}
