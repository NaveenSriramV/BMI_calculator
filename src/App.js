import React from 'react';
import './App.css';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            height: 0,
            weight: 0,
            bmi_status: "nice",
            bmi_value: 0,
            isVisible: false,
            colour:"pink"
        }
    }
    calculate = () => {
        this.setState({ isVisible: true })
        let height_meter = Number(this.state.height) / 100;
        let height_meter_square = height_meter * height_meter;
        let bmi = Number(this.state.weight) / height_meter_square
        this.setState({
            bmi_value: bmi
        })
        if (bmi < 18.5) {
            this.setState({ bmi_status: "Underweight",colour:"white" })
        }
        else if (bmi > 18.5 && bmi <= 24.9) {
            this.setState({ bmi_status: "Normal weight",colour:"green"})
        }
        else if (bmi >= 25.0 && bmi <= 29.9) {
            this.setState({ bmi_status: "Over weight",colour:"orange" })
        }
        else if (bmi >= 30.0) {
            this.setState({ bmi_status: "Obese",colour:"red" })
        }
    }
    render() {
        return (
            <div style={{marginTop:"25%"}} className="App">
                <CssBaseline/>
                <Container maxWidth="sm" style={{ background: "pink", padding: "20px" }}>
                    <h3>BMI CALCULATOR</h3>
                </Container>
                <Container maxWidth="sm" style={{ background: "skyblue", padding: "20px" }}>
                    Height(cm)<input onChange={(e) => this.setState({ height: e.target.value })} /><br />
                   Weight(kg)<input style={{marginTop:"10px"}} onChange={(e) => this.setState({ weight: e.target.value })} /><br />
                    <button style={{marginTop:"10px"}} onClick={() => this.calculate()}>submit</button>
                   </Container >
                   <Container maxWidth="sm" style={{background:this.state.colour,border:"solid 2px black"}}>
                    {
                        this.state.isVisible === true ?
                            <div>
                                BMI : {this.state.bmi_value}<br />
                        BMI_STATUS : {this.state.bmi_status}
                            </div> : null
                    }
                </Container>

            </div>
        )
    }
}
export default App;
