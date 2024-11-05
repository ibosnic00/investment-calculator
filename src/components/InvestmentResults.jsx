import { formatter } from '../util/investment'
import { calculateInvestmentResults } from '../util/investment'

export default function InvestmentResults({ userInput }) {
    const annualData = calculateInvestmentResults(userInput);
    console.log(annualData);

    return (
        <table id="result">
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
    );
}