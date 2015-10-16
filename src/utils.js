export const publish = (subject, payload, synthEvt) => {
  subject.onNext({
    name: payload.name,
    data: payload.data,
    synthEvt
  })
}
