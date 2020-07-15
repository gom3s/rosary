import React, {SyntheticEvent, useContext} from 'react'
import {AddIntentionCard} from 'src/components/AddIntentionCard'
import {usePostIntention} from 'src/hooks/useRosaryApi'
import {AuthContext} from 'src/context/AuthProvider'

export const AddIntentionPage: React.FC = () => {
  const {authToken} = useContext(AuthContext)
  const {isLoading, postIntention} = usePostIntention(authToken)
  const submitIntention = (e: SyntheticEvent) => {
    e.preventDefault()
    const {
      title: {value: title},
      description: {value: description},
    } = e.target['elements']
    postIntention({title, description})
  }

  return (
    <>
      <AddIntentionCard onSubmit={submitIntention} />
      {isLoading ? 'saving...' : null}
    </>
  )
}
