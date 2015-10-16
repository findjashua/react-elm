import _ from 'lodash'

export const publish = (subject, payload, synthEvt) => subject.onNext(_.extend(payload, { synthEvt }))
