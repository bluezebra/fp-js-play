import {
  // eslint-disable-next-line no-unused-vars
  assert, report, reportObject
} from '../test-simple/simple-test'

const fetchConfigs = async () => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
      method: 'GET',
      mode: 'cors',
      'Access-Control-Allow-Origin': 'http://localhost:3000',
      'Access-Control-Allow-Credentials': 'true',
      'Access-Control-Allow-Methods': 'GET',
      'Access-Control-Request-Headers': 'X-Custom-Header'
    },
  }

  const url = 'http://localhost:7071/api/ConfigColumns'

  const configsResponse = await fetch(url, config);
  const responseData = await configsResponse.json();
  const { basicColumns } = responseData;
  const { customColumns } = responseData;
  const { columnConfig } = responseData;

  console.log(`responseData:${responseData}`);
  console.log(`basicColumns:${basicColumns}`);


  // const handleResponse = data => {
  //   const { basicColumns, columnConfig, customColumns } = data;

  //   reportObject(basicColumns)
  //   reportObject(columnConfig)
  //   reportObject(customColumns)
  // }

  // await fetch(url, config)
  //   .then(response => response.json())
  //   .then(handleResponse)
  //   .catch(error => {
  //     report('Error:', error)
  //   })
}

fetchConfigs()
