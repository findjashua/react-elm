import * as _ from 'lodash'

export const getChildProps$ = (props$, keys) => {
  return props$
    .map(function(props) {
      return _.pick(props, keys)
    })
    .distinctUntilChanged()
}

export const publish = (subject, data, synthEvt) => {
  subject.onNext({
    source: data.source,
    data: _.omit(data, 'source'),
    synthEvt: synthEvt
  })
}
