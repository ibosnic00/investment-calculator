import { formatter } from '../util/investment'

export default function InvestmentResults({ annualData }) {
    return (
        <div id="result">
            <table >
                <thead >
                    <tr>
                        <th>Godina</th>
                        <th>Ukupna vrijednost investicije</th>
                        <th>Kamata</th>
                        <th>Godišnji ulog</th>
                    </tr>
                </thead>
                <tbody>
                    {annualData.map((data, index) => (
                        <tr key={index}>
                            <td>{data.year}</td>
                            <td>{formatter.format(data.valueEndOfYear)}</td>
                            <td>{formatter.format(data.interest)}</td>
                            <td>{formatter.format(data.annualInvestment)}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}