class VisibilityToggle extends React.Component {
    constructor(props){
        super(props)
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this)
        this.state = {
            visibility: false
        }
    }
    handleToggleVisibility() {
        this.setState((prevState) => {
            return {
                visibility: !prevState.visibility
            }
        })
    }
    render() {
        return(
            <div>
             <h1>Visibility Toggle</h1>
             <button onClick={this.handleToggleVisibility}>
                 {this.state.visibility ? 'Hide Details' : 'Show Details'}
             </button>
             {this.state.visibility && <p>Details that not everyone should see...</p>}
         </div>
        )
    }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'))

// let show = false
// const details = () => {
//     show = !show
//     render()
// }

// const render = () => {
//     const app = (
//         <div>
//             <h1>Visibility Togge</h1>
//             <button onClick={details}>
//                 {show ? 'Hide Details' : 'Show Details'}
//             </button>
//             {show && <p>Details that not everyone should see...</p>}
//         </div>
//     )
//     ReactDOM.render(app, document.getElementById('app'))
// }
// render()