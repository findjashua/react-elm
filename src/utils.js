import _ from 'lodash'

import subject from './subject'

export const publish = (payload, synthEvt) => subject.onNext(_.extend(payload, { synthEvt }))
