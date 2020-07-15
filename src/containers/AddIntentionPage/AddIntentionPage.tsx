import React, {SyntheticEvent} from 'react'
import {AddIntentionCard} from 'src/components/AddIntentionCard'
import {usePostIntention} from 'src/hooks/useRosaryApi'

export const AddIntentionPage: React.FC = () => {
  const {isLoading, postIntention} = usePostIntention()
  const submitIntention = (e: SyntheticEvent) => {
    e.preventDefault()
    const {
      title: {value: title},
      description: {value: description},
    } = e.target['elements']
    postIntention({title, description})
    console.log('submitIntention')
  }

  return (
    <>
      <AddIntentionCard onSubmit={submitIntention} />
      {isLoading ? 'saving...' : null}
    </>
  )
}
