class Team extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            shots: 0,
            score: 0
        }

        this.shotSound = new Audio('./assets/woodbat.mp3')
        this.scoreSound = new Audio('./assets/Ball+Hit+Cheer.mp3')

    }

    shotHandler = () => {
        let score = this.state.score
        this.shotSound.play()

        if (Math.random() > 0.5) {
            score += 1
            this.scoreSound.play()
        }


        this.setState((state, props) => ({
            shots: state.shots + 1,
            score
        }))
    }

    render() {
        let shotPercentageDiv

        if (this.state.shots) {
            const shotPercentage = Math.round((this.state.score / this.state.shots) * 100)
            shotPercentageDiv = (
                <div>
                    <strong>Batting %: {shotPercentage} </strong>
                </div>
            )
        }

        return (
            <div className="Team">
                <h2>{this.props.name}</h2>

                <div className="identity">
                    <img src={this.props.logo} alt={this.props.name} />
                </div>
                <div>
                    <strong>Shots:</strong> {this.state.shots}
                </div>
                <div>
                    <strong>Score:</strong> {this.state.score}
                </div>


                {shotPercentageDiv}

                <button onClick={this.shotHandler}>Shoot!</button>
            </div>
        )
    }
}

function Game(props) {
    return (
        <div className="Game">
            <h1>Welcome to {props.venue}</h1>
            <div className="stats">
                <Team
                    name={props.visitingTeam.name}
                    logo={props.visitingTeam.logoSrc}
                />
                <div className="versus">
                    <h1>VS</h1>
                </div>

                <Team
                    name={props.homeTeam.name}
                    logo={props.homeTeam.logoSrc}
                />
            </div>
        </div>
    )
}

function App(props) {
    const skunks = {
        name: 'Lebanon Skunks',
        logoSrc: 'https://image.freepik.com/free-vector/cartoon-skunk-presenting-white_29190-5541.jpg'
    }

    const hogs = {
        name: 'Water town Hogs',
        logoSrc: 'https://st.depositphotos.com/1695366/1394/v/950/depositphotos_13949816-stock-illustration-cartoon-pig-riding-a-hog.jpg'
    }

    const vipers = {
        name: 'Cookville Vipers',
        logoSrc: 'https://siplay-website-content-user.s3.amazonaws.com/Portal/2804/Content/Graphics/Snakeball-585.png'
    }
    const mongoose = {
        name: 'Smithsville Mongoose',
        logoSrc: 'https://www.logolynx.com/images/logolynx/71/7118e65ad3e37e3ebd9628ab79b31d4a.jpeg'
    }

    return (
        <div className="App">
            <Game
                venue="Union 345 Stadium"
                homeTeam={hogs}
                visitingTeam={skunks}
            />
            <Game venue="Wilson Arena"
                homeTeam={vipers}
                visitingTeam={mongoose}

            />
        </div>
    )
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
)