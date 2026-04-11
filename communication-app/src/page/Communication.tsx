import { type FormEvent, useState } from 'react'
import './Communication.css'

export default function Communication() {
  const [to, setTo] = useState('')
  const [channel, setChannel] = useState('email')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
  }

  return (
    <div className="communication-page">
      <div className="communication-card">
        <form className="communication-form" onSubmit={handleSubmit}>
          <header className="communication-form__header">
            <h1>Communication</h1>
            <p className="lead">
              Send a message to students, parents, or staff.
            </p>
          </header>

          <div className="field">
            <label htmlFor="comm-to">To</label>
            <input
              id="comm-to"
              name="to"
              type="text"
              autoComplete="off"
              placeholder="Name, group, or email"
              value={to}
              onChange={(e) => setTo(e.target.value)}
            />
          </div>

          <div className="field">
            <label htmlFor="comm-channel">Channel</label>
            <select
              id="comm-channel"
              name="channel"
              value={channel}
              onChange={(e) => setChannel(e.target.value)}
            >
              <option value="email">Email</option>
              <option value="sms">SMS</option>
              <option value="in_app">In-app</option>
            </select>
          </div>

          <div className="field">
            <label htmlFor="comm-subject">Subject</label>
            <input
              id="comm-subject"
              name="subject"
              type="text"
              placeholder="Brief subject line"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />
          </div>

          <div className="field">
            <label htmlFor="comm-message">Message</label>
            <textarea
              id="comm-message"
              name="message"
              placeholder="Write your message…"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>

          <div className="actions">
            <button type="submit">Send message</button>
          </div>
        </form>
      </div>
    </div>
  )
}
