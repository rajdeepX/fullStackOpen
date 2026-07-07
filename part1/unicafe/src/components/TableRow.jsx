
const TableRow = ({text, value, unit=""}) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value} {unit}</td>
    </tr>
  )
}

export default TableRow
