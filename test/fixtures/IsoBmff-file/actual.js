function render() {
  return (
    <trak>
      <tkhd {...{trackId, duration: 0, width: track.settings.width, height: track.settings.height}} />
      <mdia>
        <mdhd {...{timeScale: metadata.timeScale, duration: 0}} />
        <hdlr {...{handlerType: 'video', name: 'VideoHandler'}} />
        <minf>
          <vmhd />
          <dinf>
            <dref entryCount={1}>
              <url location='' />
            </dref>
          </dinf>
          <stbl>
            <stsd entryCount={1}>
              <avcC {...{
                avcProfileIndication: 'baseline',
                profileCompatibility: {
                  constraintSet0Flag: false,
                  constraintSet1Flag: false,
                  constraintSet2Flag: false
                },
                avcLevelIndication: 3,
                lengthSize: 4,
                sequenceParameterSets: [{data: metadata.sps, length: metadata.sps.length}],
                pictureParameterSets: [{data: metadata.pps, length: metadata.pps.length}]
              }} />
            </stsd>
            <stts entries={[]} />
            <stsc />
            <stsz />
            <stco />
          </stbl>
        </minf>
      </mdia>
    </trak>
  );
}
