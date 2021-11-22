---
sidebarDepth: 1
---

# Cerobong

[[toc]]

### Mendapatkan daftar cerobong

Berfungsi untuk mendapatkan daftar cerobong yang dikonfigurasi pada Hawa.

| Method | Path               |
| ------ | ------------------ |
| GET    | /api/v1/cems/stack |

**Contoh kode**
<CodeGroup>
<CodeGroupItem title="GO">

```go
package main

import (
  "fmt"
  "net/http"
  "io/ioutil"
)

func main() {

  url := "http://{BASE_URL}/api/v1/cems/stack"
  method := "GET"

  client := &http.Client {
  }
  req, err := http.NewRequest(method, url, nil)

  if err != nil {
    fmt.Println(err)
    return
  }
  req.Header.Add("x-api-key", "WGlubkRWcDd6OmRlODQyNzlhNTc0NzVhZThlMmVmZjg3ZWFlNGI0MGI3")

  res, err := client.Do(req)
  if err != nil {
    fmt.Println(err)
    return
  }
  defer res.Body.Close()

  body, err := ioutil.ReadAll(res.Body)
  if err != nil {
    fmt.Println(err)
    return
  }
  fmt.Println(string(body))
}
```

  </CodeGroupItem>

  <CodeGroupItem title="NodeJS">
  
```js
var request = require('request')
var options = {
  method: 'GET',
  url: 'http://{BASE_URL}/api/v1/cems/stack',
  headers: {
    'x-api-key': 'WGlubkRWcDd6OmRlODQyNzlhNTc0NzVhZThlMmVmZjg3ZWFlNGI0MGI3',
  },
}
request(options, function (error, response) {
  if (error) throw new Error(error)
  console.log(response.body)
})
```

  </CodeGroupItem>
  <CodeGroupItem title="PHP">
  
```php
$curl = curl_init();

curl_setopt_array($curl, array(
CURLOPT_URL => 'http://{BASE_URL}/api/v1/cems/stack',
CURLOPT_RETURNTRANSFER => true,
CURLOPT_ENCODING => '',
CURLOPT_MAXREDIRS => 10,
CURLOPT_TIMEOUT => 0,
CURLOPT_FOLLOWLOCATION => true,
CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
CURLOPT_CUSTOMREQUEST => 'GET',
CURLOPT_HTTPHEADER => array(
'x-api-key: WGlubkRWcDd6OmRlODQyNzlhNTc0NzVhZThlMmVmZjg3ZWFlNGI0MGI3'
),
));

$response = curl_exec($curl);

curl_close($curl);
echo $response;

````

  </CodeGroupItem>

</CodeGroup>

**Contoh respon**

```json
{
  "code": 20000,
  "data": [
    {
      "id": 1,
      "createdAt": "2021-06-13T09:05:22.9172299+07:00",
      "updatedAt": "2021-11-11T14:11:40.3286868+07:00",
      "deletedAt": null,
      "uid": "bfa639b0-1aa7-11ec-9621-0242ac130002",
      "name": "HRSG 2.3",
      "alias": "",
      "latitude": "",
      "longitude": "",
      "height": "",
      "diameter": "",
      "fuel": "",
      "capacity": "",
      "sulfur": "",
      "statusID": 1,
      "defaultStatus": 1,
      "statusLogics": null,
      "attributes": null
    },
    {
      "id": 2,
      "createdAt": "2021-06-13T09:05:22.9172299+07:00",
      "updatedAt": "2021-11-06T07:09:20.2049388+07:00",
      "deletedAt": null,
      "uid": "574e7b74-42b2-11ec-81d3-0242ac130003",
      "name": "HRSG 3.1",
      "alias": "",
      "latitude": "",
      "longitude": "",
      "height": "",
      "diameter": "",
      "fuel": "",
      "capacity": "",
      "sulfur": "",
      "statusID": 1,
      "defaultStatus": 1,
      "statusLogics": null
    }
  ],
  "status": "Success"
}
````
