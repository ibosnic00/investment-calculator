import { formatter } from '../util/investment'
import { calculateInvestmentResults } from '../util/investment'

import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

export default function InvestmentResults({ userInput }) {
    const annualData = calculateInvestmentResults(userInput);


    const chartData = {
        labels: annualData.map((data) => data.year), // X-axis labels
        datasets: [
            {
                label: 'Ukupno uloženo',
                data: annualData.map((data) => data.totalAmountInvested),
                borderColor: 'rgba(54, 162, 235, 1)', // Color for the first line
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                fill: false,
            },
            {
                label: 'Ukupna vrijednost',
                data: annualData.map((data) => data.valueEndOfYear),
                borderColor: 'rgba(75, 192, 192, 1)', // Color for the second line
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                fill: false,
            },
        ],
    };

    const chartOptions = {
        responsive: true,
        plugins: {
            legend: { position: 'top', },
        },
        scales: {
            x: { title: { display: true, text: 'Godina', }, },
            y: { title: { display: true, text: 'Iznos (€)', }, beginAtZero: true, },
        },
    };

    return (
        <>
            <div className="chart-container">
                <Line data={chartData} options={chartOptions} />
            </div>

            <table id="result">
                <thead >
                    <tr>
                        <th>Godina</th>
                        <th>Ukupna vrijednost investicije</th>
                        <th>Godišnja kamata</th>
                        <th>Ukupna kamata</th>
                        <th>Investirano</th>
                    </tr>
                </thead>
                <tbody>
                    {annualData.map((data) => (
                        <tr key={data.year}>
                            <td>{data.year}</td>
                            <td>{formatter.format(data.valueEndOfYear)}</td>
                            <td>{formatter.format(data.interest)}</td>
                            <td>{formatter.format(data.totalInterestThisYear)}</td>
                            <td>{formatter.format(data.totalAmountInvested)}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}