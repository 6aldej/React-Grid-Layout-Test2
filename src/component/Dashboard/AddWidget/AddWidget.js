import {React, Component} from 'react'
import './AddWidget.css'

export default class AddWidget extends Component {
    state = {
        isActive: false,
        availableCoins: [
            "график",
            "таблица"
        ]
    }

    editIsActive() {
        let isActive2 = !this.state.isActive
        this.setState({
            isActive: isActive2
        })
        console.log(this.state.isActive)
    }

    render() {
        return (
            <div className="dropdown">
                <button
                    onClick={()=> this.editIsActive()}
                    className="btn dropdown-toggle" 
                    >
                        Добавить виджет
                </button>
                <div className={this.state.isActive ? "dropdown-menu show" : "dropdown-menu"}>
                    {
                        this.state.availableCoins.map(item => {
                            return(
                                <button onClick={() =>{}} key={item} className="dropdown-item">
                                    {item}
                                </button>
                            );
                        })

                    }
                </div>
            </div>
        )
    }
    
}