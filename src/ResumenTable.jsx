

function ResumenTable({ dias }) {
    return (
        <table>
            <thead>
                <tr>
                    <th>Día</th>
                    <th>Primer Plat</th>
                    <th>Segon Plat</th>
                </tr>
            </thead>
            <tbody>
                {dias.map((dia, index) => (
                    <tr key={index}>
                        <td>{dia.nom}</td>
                        <td>{dia.plat1Display || "Selecciona un plat"}</td>
                        <td>{dia.plat2Display || "Selecciona un plat"}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default ResumenTable;
