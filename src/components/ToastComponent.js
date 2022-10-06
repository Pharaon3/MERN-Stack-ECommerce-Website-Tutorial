import React, { useState } from 'react'
import { Toast, Button } from 'react-bootstrap'
export default function ToastComponent() {
  const [showToast, setToast] = useState(false)
  return (
    <div>
      <h2 className="mb-4">
        React JS Desktop Notification with Bootstrap Example
      </h2>
      <Toast
        onClose={() => setToast(false)}
        // autohide
        show={showToast}
        delay={2200}
        style = {{float: 'right', backgroundColor: 'lightgreen'}}
      >
        <Toast.Header>
          <strong className="mr-auto">React Toast</strong>
          <small>50 mins ago</small>
        </Toast.Header>
        <Toast.Body>Lorem ipsum dolor sit adipiscing elit.</Toast.Body>
      </Toast>
      <Button onClick={() => setToast(true)}> Show Toast </Button>
    </div>
  )
}