import PropTypes from "prop-types"

function EmailComponent({index, email, toggleRead, toggleStar}) {
    return (
        <li key={index} className={`email ${email.read ? 'read' : 'unread'}`}>
          <div className="select">
            <input
              className="select-checkbox"
              type="checkbox"
              checked={email.read}
              onChange={() => toggleRead(email)}
            />
          </div>
          <div className="star">
            <input
              className="star-checkbox"
              type="checkbox"
              checked={email.starred}
              onChange={() => toggleStar(email)}
            />
          </div>
          <div className="sender">{email.sender}</div>
          <div className="title">{email.title}</div>
        </li>
  )
}

EmailComponent.propTypes = {
    index: PropTypes.number.isRequired,
    email: PropTypes.object.isRequired,
    toggleRead: PropTypes.func.isRequired,
    toggleStar: PropTypes.func.isRequired
}

export default EmailComponent