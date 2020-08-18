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
    },
  }

  const url = 'https://azfun-spm-qs-projectlists-dev-sievo.azurewebsites.net/api/ConfigColumns'
  // const tenantId = 'af89019c-3178-4ec2-913a-5217a12312e9';

  const configsResponse = await fetch(url, config)
    .then(d => reportObject(d))
    .catch((error) => {
      report('Error:', error)
    })

  return configsResponse;
}

fetchConfigs()
