import { useImmer } from 'use-immer'

const Complex = () => {
  const [notif, updateNotif] = useImmer({
    user: {
      name: "Alice",
      age: 25,
      settings: {
        theme: "light",
        notifications: {
          email: true,
          sms: false
        }
      }
    }
  })

  const handleToggle = () => {
    updateNotif(draft => {
      draft.user.age = draft.user.age + 1
      draft.user.settings.notifications.sms = !draft.user.settings.notifications.sms
    })
  }

  return (
  <div>
    <div>age: {notif.user.age} </div>
    <div>sms notifs are {' '}
      <b>{notif.user.settings.notifications.sms ? 'on' : 'off'}</b>
    </div>
    <button onClick={handleToggle}>toggle</button>
  </div>
  )
}

export default Complex