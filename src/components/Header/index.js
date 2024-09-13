import './index.css'

const Header = props => {
  const {score, timeElpasedInSeconds, renderSeconds} = props
  return (
    <div>
      <nav className="nav-bg-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
          className="match-game-logo"
          alt="website logo"
        />
        <div className="right-container">
          <p className="score">Score:{score}</p>
          <div className="timer-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
              className="logo"
              alt="timer"
            />
            <p className="score">{renderSeconds} sec</p>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Header
