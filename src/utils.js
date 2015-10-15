export const publish = (subject, data, synthEvt) => {
  subject.onNext({
    data,
    synthEvt
  })
}

export const filterObsByName = (obs, name) => {
  return obs.filter((evt) => { return evt.data.name === name })
}
