import React, { Component } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import axios from "axios";

class floatingPopulationAreaChart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            responseFPList: '',
            append_FPList: '',
        }
    }

    componentDidMount = async () => {
        axios.get('https://api.bigdatahub.co.kr/v1/datahub/datasets/search.json?pid=1002351&TDCAccessKey=57f96ff81c87f1e16a714f5992845f98b4e41eb19deb06d21a4c0e43b5408dc4&$count=30', {
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
            <AreaChart
              width={1800}
              height={500}
              data={this.state.append_FPList}
              margin={{
                top: 5, right: 50, left: 20, bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="군구" />
              <YAxis type="number" domain={[0, 50000]} />
              <Tooltip />
              <Area type="monotone" dataKey="유동인구수" stroke="#8884d8" fill="#8884d8" />
            </AreaChart>
          );
    }
}

export default floatingPopulationAreaChart;