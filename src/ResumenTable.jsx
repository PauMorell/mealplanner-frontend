

function ResumenTable({ dias }) {
    return (
        <table className="content-table shadow-md">
            <thead className="rounded-header">
                
                    <tr>
                        <th className="text-sm font-medium">Dia</th>
                        <th className="text-sm font-medium">Primer Plat</th>
                        <th className="text-sm font-medium">Segon Plat</th>
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
