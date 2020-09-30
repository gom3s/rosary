import dayjs from 'dayjs'
import React, {FC, useEffect, useState} from 'react'
import {IntentionStatisticCard} from 'src/components/IntentionStatisticCard'
import {UIContext} from 'src/context/UIStateProvider'

interface IntentionStatisticProps {
  rosaryCount: number
  prayFinished: number
  prayInProgress: number
  updateStats: () => void
}

export const IntentionStatistic: FC<IntentionStatisticProps> = ({
  rosaryCount,
  prayFinished,
  prayInProgress,
  updateStats,
}) => {
  const {
    activePrayer: {start},
  } = React.useContext(UIContext)
  const [timeLeft, setTimeLeft] = useState(0)
  useEffect(() => {
    const timer = setInterval(() => {
      const seconds = dayjs().diff(start, 'second')
      const diff = 600 - seconds
      if (diff >= 0) {
        setTimeLeft(diff)
      } else {
        setTimeLeft(0)
      }
      // console.log('diff:', diff)
    }, 1000)
    return () => {
      clearInterval(timer)
    }
  }, [start, setTimeLeft])

  useEffect(() => {
    if (timeLeft === 0) {
      updateStats()
    }
  }, [timeLeft])

  return (
    <IntentionStatisticCard
      rosaryCount={rosaryCount}
      prayFinished={prayFinished}
      prayInProgress={prayInProgress}
      timeLeft={timeLeft}
    />
  )
}
