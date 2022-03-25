import { useEffect } from 'react'

class UserAction {
  type: string
  constructor(type: string) {
    this.type = type
  }
}

const endpoint = 'api/analytics'

const Analytics = () => {
  const eventListener = () => {
    console.log('User has clicked the window')
    // post/api/analytics
    // hw1: get the real data from request
    const userAction = new UserAction('click')
    fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userAction),
    })
  }
  // when mount | update
  useEffect(() => {
    // Vanilla Js event biding
    // Observer pattern
    window.addEventListener('click', eventListener)

    // when unmount
    return function cleanup() {
      window.removeEventListener('click', eventListener)
    }
  }, [])
  return <div>Analytics</div>
}

export default Analytics
