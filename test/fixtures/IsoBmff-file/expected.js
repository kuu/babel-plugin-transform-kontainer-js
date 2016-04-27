function render() {
  return Kontainer.createElement('trak', {}, [
    Kontainer.createElement('tkhd', {'trackId': trackId, 'duration': 0, 'width': track.settings.width, 'height': track.settings.height}, null),
    Kontainer.createElement('mdia', {}, [
      Kontainer.createElement('mdhd', {'timeScale': metadata.timeScale, 'duration': 0}, null),
      Kontainer.createElement('hdlr', {'handlerType': 'video', 'name': 'VideoHandler'}, null),
      Kontainer.createElement('minf', {}, [
        Kontainer.createElement('vmhd', {}, null),
        Kontainer.createElement('dinf', {}, [
          Kontainer.createElement('dref', {'entryCount': 1}, [
            Kontainer.createElement('url ', {'location': ''}, null)
          ])
        ]),
        Kontainer.createElement('stbl', {}, [
          Kontainer.createElement('stsd', {'entryCount': 1}, [
            Kontainer.createElement('avcC', {
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
          Kontainer.createElement('stts', {'entries': []}, null),
          Kontainer.createElement('stsc', {}, null),
          Kontainer.createElement('stsz', {}, null),
          Kontainer.createElement('stco', {}, null)
        ])
      ])
    ])
  ]);
}
