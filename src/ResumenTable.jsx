

function ResumenTable({ dias }) {
    return (
        <table className="content-table">
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
                        <td className="text-left">{dia.plat1Display || "-"}</td>
                        <td className="text-left">{dia.plat2Display || "-"}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default ResumenTable;
