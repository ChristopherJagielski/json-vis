import Table from "react-bootstrap/Table";

const renderHeader = (data) => {
  let header = [];
  if (Array.isArray(data)) {
    header = Object.keys(data[0]);
  } else {
    for (const item in data) {
      header.push(item);
    }
  }
  return header.map((key, index) => {
    return <th key={index}>{key.toUpperCase()}</th>;
  });
};

const renderMoreData = (data) => {
  const result = [];
  for (const key in data) {
    result.push(`${key}: ${data[key]}`);
  }
  return result.map((item) => {
    return {item};
  });
};

const showMore = (id, data) => {
  const el = document.getElementById(`show-${id}`)
  if (el.textContent === '>') {
    const items = renderMoreData(data);
    let text = ''
    for (const key in items) {
      if(items.length === 1){
        text = items[key].item
      } else {
        text += `${items[key].item} \n`
      }
      el.innerText = text;
    }
  } else {
    el.innerText = '>';
  }
}

const renderTableData = (data) => {
  console.log(data);
  if (data) {
    return data.map((item, index) => {
      const id = Math.random() + Math.random();
      const { country, web_pages, alpha_two_code, name, domains,  } = item;
      const stateProvince = item['state-provine'] // co za debilny klucz z '-' nie mozna destrukturyzowac :/
      return (
        <tr key={id} onClick={() => {showMore(id, domains)}}>
          <td>{country}</td>
          <td>{stateProvince}</td>
          <td>{web_pages}</td>
          <td>{alpha_two_code}</td>
          <td>{name}</td>
          <td id={`show-${id}`}>&gt;</td>
        </tr>
      );
    });
  }
};

const Test = (props) => {
  return (
    <Table striped bordered hover size="sm">
      <thead>
        <tr key={Math.random()}>{renderHeader(props.data)}</tr>
      </thead>
      <tbody>{renderTableData(props.data)}</tbody>
    </Table>
  );
};

export default Test;
