Highcharts.chart('container', {
    chart: {
        type: 'pie'
    },
    title: {
        text: 'Egg Yolk Composition'
    },
    tooltip: {
        valueSuffix: '%'
    },
    subtitle: {
        text:
        'Source:<a href="https://www.mdpi.com/2072-6643/11/3/684/htm" target="_default">MDPI</a>'
    },
    plotOptions: {
        series: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: [{
                enabled: true,
                distance: 20
            }, {
                enabled: true,
                distance: -40,
                format: '{point.percentage:.1f}%',
                style: {
                    fontSize: '1.2em',
                    textOutline: 'none',
                    opacity: 0.7
                },
                filter: {
                    operator: '>',
                    property: 'percentage',
                    value: 10
                }
            }]
        }
    },
    series: [
        {
            name: '人數',
            colorByPoint: true,
            data: [
                {
                    name: 'Water',
                    y: 3971251
                },
                {
                    name: '非洲地區',
                    sliced: true,
                    selected: true,
                    y: 9510
                },
                {
                    name: '美洲地區',
                    y: 670162
                },
                {
                    name: '大洋洲地區',
                    y: 113772
                },
                {
                    name: '歐洲地區',
                    y: 346091
                },
                {
                    name: '其他未列明',
                    y: 854
                }
            ]
        }
    ]
});