import React, { Component } from 'react';
import { ComposedChart, Line, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import axios from "axios";

class floatingPopulationComposedChart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            responseFPList: '',
            append_FPList: '',
        }
    }

    componentDidMount = async () => {
        axios.get('https://api.bigdatahub.co.kr/v1/datahub/datasets/search.json?pid=1002351&TDCAccessKey=57f96ff81c87f1e16a714f5992845f98b4e41eb19deb06d21a4c0e43b5408dc4&$count=10', {
        })
        .then( response => {
            try {
                this.setState({ responseFPList: response });
                this.setState({ append_FPList: this.state.responseFPList.data.entry });
            } catch (error) {
                alert(error)
            }
        })
        .catch( error => {alert(error);return false;} );
    }

    render () {
        return (
            <ComposedChart
              width={1000}
              height={300}
              data={this.state.append_FPList}
              margin={{
                top: 5, right: 50, left: 20, bottom: 5,
              }}
            >
              <CartesianGrid stroke="#003458" />
              <XAxis dataKey="군구" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="유동인구수" fill="#82ca9d" />
              <Line type="monotone" dataKey="유동인구수" stroke="#ff7300" />
            </ComposedChart>
          );
    }
}

export default floatingPopulationComposedChart;