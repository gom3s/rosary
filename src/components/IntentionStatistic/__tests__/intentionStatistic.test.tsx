import React from 'react'
import {render} from '@testing-library/react'
import {IntentionStatistic} from '../IntentionStatistic'

it.skip('should render rosary count', () => {
  const statisticProps = {
    rosaryCount: 0,
    prayFinished: 0,
    prayInProgress: 0,
  }

  const {queryAllByText, debug} = render(
    <IntentionStatistic {...statisticProps} />,
  )

  debug()
  expect(queryAllByText('Ukończonych różańców').length).toEqual(3)
})
