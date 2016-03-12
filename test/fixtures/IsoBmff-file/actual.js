function render() {
  return (
    <file>
      <ftyp majorBrand="isom" />
      <moov>
        <mvhd creationTime={new Date(0)} modificationTime={new Date(0)} timeScale={1} nextTrackId={4} />
        <trak>
          <tkhd creationTime={new Date(0)} modificationTime={new Date(0)} trackId={1} width={640} height={480} />
          <mdia>
            <mdhd creationTime={new Date(0)} modificationTime={new Date(0)} timeScale={1} />
            <hdlr handlerType="video" name="avc" />
            <minf>
              <vmhd />
              <dinf>
                <dref entryCount={2}>
                  <url location="/data" />
                  <urn location="/data" name="/name" />
                </dref>
              </dinf>
              <stbl>
                <stsd entryCount={1}>
                  <avc1 dataReferenceIndex={1} width={1280} height={720}>
                    <avcC
                      avcProfileIndication="baseline"
                      profileCompatibility={{
                        constraintSet0Flag: false,
                        constraintSet1Flag: false,
                        constraintSet2Flag: false
                      }}
                      avcLevelIndication={1.3}
                      lengthSize={1} />
                  </avc1>
                </stsd>
                <stts
                   entries={[
                     {sampleCount: 14, sampleDelta: 10}
                   ]} />
                <stsz sampleSize={5} />
                <stsc />
                <stco />
              </stbl>
            </minf>
          </mdia>
        </trak>
      </moov>
    </file>
  );
}
