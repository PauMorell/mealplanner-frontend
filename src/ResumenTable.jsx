

function ResumenTable({ dias }) {
    return (
        <table>
            <thead>
                <tr>
                    <th>Dia</th>
                    <th>Primer Plat</th>
                    <th>Segon Plat</th>
                </tr>
            </thead>
            <tbody>
                {dias.map((dia, index) => (
                    <tr key={index}>
                        <td className="text-left">{dia.nom}</td>
                        <td className="text-center">{dia.plat1Display || "-"}</td>
                        <td className="text-center">{dia.plat2Display || "-"}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default ResumenTable;
