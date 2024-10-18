import * as React from 'react';
import { PieChart, pieArcLabelClasses } from '@mui/x-charts/PieChart';

export default function Pie() {
    return (
        <PieChart
            colors={['#DF42FF', '#0F49FF', '#00D4FF']}
            series={[
                {
                    arcLabel: (item) => `${item.value}%`,
                    arcLabelMinAngle: 35,
                    arcLabelRadius: '60%',
                    data: [
                        { id: 0, value: 80, label: 'New customer' },
                        { id: 1, value: 10, label: 'Premium customer' },
                        { id: 2, value: 10, label: 'Free customer' },
                    ],
                },
            ]}
            sx={{
                [`& .${pieArcLabelClasses.root}`]: {
                    fill: 'white',
                    fontSize: 14,
                },
                "& .MuiPieArc-root": {
                    stroke: "transparent",
                },
            }}
            width={500}
            height={200}
            slotProps={{
                legend: {
                    labelStyle: {
                        fill: 'white',
                        fontSize: '14px',
                    },
                }
            }}
        />
    );
}

