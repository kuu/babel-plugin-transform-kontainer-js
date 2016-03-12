function render() {
  return IsoBmff.createElement("file", {},
    (
    IsoBmff.createElement("ftyp", {"majorBrand": "isom"}, null),
    IsoBmff.createElement("moov", {},
      (
      IsoBmff.createElement("mvhd", {"creationTime": new Date(0), "modificationTime": new Date(0), "timeScale": 1, "nextTrackId": 4}, null),
      IsoBmff.createElement("trak", {},
        (
        IsoBmff.createElement("tkhd", {"creationTime": new Date(0), "modificationTime": new Date(0), "trackId": 1, "width": 640, "height": 480}, null),
        IsoBmff.createElement("mdia", {},
          (
          IsoBmff.createElement("mdhd", {"creationTime": new Date(0), "modificationTime": new Date(0), "timeScale": 1}, null),
          IsoBmff.createElement("hdlr", {"handlerType": "video", "name": "avc"}, null),
          IsoBmff.createElement("minf", {},
            (
            IsoBmff.createElement("vmhd", {}, null),
            IsoBmff.createElement("dinf", {},
              (
              IsoBmff.createElement("dref", {"entryCount": 2},
                (
                IsoBmff.createElement("url ", {"location": "/data"}, null),
                IsoBmff.createElement("urn ", {"location": "/data", "name": "/name"}, null)
                )
              )
              )
            ),
            IsoBmff.createElement("stbl", {},
              (
              IsoBmff.createElement("stsd", {"entryCount": 1},
                (
                IsoBmff.createElement("avc1", {"dataReferenceIndex": 1, "width": 1280, "height": 720},
                  (
                  IsoBmff.createElement("avcC", {
                    "avcProfileIndication": "baseline",
                    "profileCompatibility": {
                      constraintSet0Flag: false,
                      constraintSet1Flag: false,
                      constraintSet2Flag: false
                    },
                    "avcLevelIndication": 1.3,
                    "lengthSize": 1
                  }, null)
                  )
                )
                )
              ),
              IsoBmff.createElement("stts", {
                "entries": [
                  {sampleCount: 14, sampleDelta: 10}
                ]
              }, null),
              IsoBmff.createElement("stsz", {"sampleSize": 5}, null),
              IsoBmff.createElement("stsc", {}, null),
              IsoBmff.createElement("stco", {}, null)
              )
            )
            )
          )
          )
        )
        )
      )
      )
    )
    )
  );
}
