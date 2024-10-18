import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
const uData = [4000, 3000, 2000, 2780, 1890, 2390, 3490];
const pData = [2400, 1398, 9800, 3908, 4800, 3800, 4300];
const amtData = [2400, 2210, 2290, 2000, 2181, 2500, 2100];

const xLabels = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
];

function Bar() {
    return (
        <BarChart
            colors={['#DF42FF', '#0F49FF', '#00D4FF']}
            width={500}
            height={300}
            series={[
                { data: pData, label: 'free', stack: 'stack1' },
                { data: amtData, label: 'vip', stack: 'stack1' },
                { data: uData, label: 'normal', stack: 'stack1' },
            ]}
            xAxis={[{ data: xLabels, scaleType: 'band', categoryGapRatio: 0.5 }]}
            slotProps={{
                legend: {
                    labelStyle: {
                        fill: 'white',
                        fontSize: '14px',
                    },

                }
            }}
            sx={{
                //change left yAxis label styles
                "& .MuiChartsAxis-left .MuiChartsAxis-tickLabel": {
                    strokeWidth: "1",
                    fill: "white"
                },
                // change bottom label styles
                "& .MuiChartsAxis-bottom .MuiChartsAxis-tickLabel": {
                    strokeWidth: "1",
                    fill: "white"
                },
                // bottomAxis Line Styles
                "& .MuiChartsAxis-bottom .MuiChartsAxis-line": {
                    stroke: "white",
                    strokeWidth: 1,
                },
                // leftAxis Line Styles
                "& .MuiChartsAxis-left .MuiChartsAxis-line": {
                    stroke: "white",
                    strokeWidth: 1
                },
                "& .MuiChartsAxis-tick": {
                    stroke: "white",
                }
                
            }}
        />
    );
}

export default Bar;