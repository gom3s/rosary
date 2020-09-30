import React from 'react'
import {render} from '@testing-library/react'
import {IntentionStatisticCard} from '../IntentionStatisticCard'

it.skip('should render rosary count', () => {
  const statisticProps = {
    rosaryCount: 0,
    prayFinished: 0,
    prayInProgress: 0,
  }

  const {queryAllByText, debug} = render(
    <IntentionStatisticCard {...statisticProps} />,
  )

  debug()
  expect(queryAllByText('Ukończonych różańców').length).toEqual(3)
})
