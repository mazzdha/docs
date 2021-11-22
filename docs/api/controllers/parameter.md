---
sidebarDepth: 1
---

# Parameter

[[toc]]

### Mendapatkan daftar parameter

Berfungsi untuk mendapatkan daftar cerobong yang dikonfigurasi pada Hawa.

| Method | URL                         |
| ------ | --------------------------- |
| GET    | /api/v1/cems/:uid/parameter |

URL Parameter:

| Parameter | Tipe Data | Deskripsi                                               |
| --------- | --------- | ------------------------------------------------------- |
| uid       | string    | UID dari cerobong. Dapat diperoleh dari daftar cerobong |

**Contoh kode:**
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

  url := "http://{BASE_URL}/api/v1/cems/bfa639b0-1aa7-11ec-9621-0242ac130002/parameter"
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
var request = require('request');
var options = {
  'method': 'GET',
  'url': 'http://{BASE_URL}/api/v1/cems/bfa639b0-1aa7-11ec-9621-0242ac130002/parameter',
  'headers': {
    'x-api-key': 'WGlubkRWcDd6OmRlODQyNzlhNTc0NzVhZThlMmVmZjg3ZWFlNGI0MGI3'
  }
};
request(options, function (error, response) {
  if (error) throw new Error(error);
  console.log(response.body);
});

````

  </CodeGroupItem>
  <CodeGroupItem title="PHP">

```php
$curl = curl_init();

curl_setopt_array($curl, array(
  CURLOPT_URL => 'http://{BASE_URL}/api/v1/cems/bfa639b0-1aa7-11ec-9621-0242ac130002/parameter',
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => '',
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 0,
  CURLOPT_FOLLOWLOCATION => true,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => 'GET',
  CURLOPT_HTTPHEADER => array(
    'x-api-key: WGlubkRWcDd6OmRlODQyNzlhNTc0NzVhZThlMmVmZjg3ZWFlNGI0MGI3',
  ),
));

$response = curl_exec($curl);

curl_close($curl);
echo $response;


````

  </CodeGroupItem>

</CodeGroup>

**Contoh respon:**

```json
{
  "code": 20000,
  "data": [
    {
      "id": 100,
      "createdAt": "2021-07-17T08:29:47.667798+07:00",
      "updatedAt": "2021-11-02T09:26:26.8359397+07:00",
      "deletedAt": null,
      "uid": "54dab053-15fe-457f-8a8c-95cb3ff57f90",
      "stackUid": "dc04ce57-b6be-4aee-aff4-fbab1a3b329c",
      "name": "CO",
      "nameHTML": "",
      "engineeringUnit": "mg/Nm3",
      "engineeringUnitHTML": "mg/Nm<sup>3</sup>",
      "precision": 2,
      "standar": 0,
      "standarEnabled": false,
      "statusId": 1,
      "log": true,
      "limitH": 0,
      "limitHEnabled": false,
      "limitHNotif": false,
      "limitHH": 0,
      "limitHHEnabled": false,
      "limitHHNotif": false,
      "min": 0,
      "max": 0,
      "color": "",
      "expression": "CO_ppm * (28.01/24.465)",
      "value": 0.47018198546226986,
      "good": true,
      "timestamp": "2021-11-22T18:10:28.600101+07:00"
    },
    {
      "id": 45,
      "createdAt": "2021-06-23T22:02:58.3475731+07:00",
      "updatedAt": "2021-11-02T09:26:26.8359397+07:00",
      "deletedAt": null,
      "uid": "00f11063-a306-45f4-8333-b6cc6fb6fe08",
      "stackUid": "dc04ce57-b6be-4aee-aff4-fbab1a3b329c",
      "name": "FLOWRATE",
      "nameHTML": "",
      "engineeringUnit": "m3/s",
      "engineeringUnitHTML": "m<sup>3</sup>/s",
      "precision": 2,
      "standar": 0,
      "standarEnabled": false,
      "statusId": 1,
      "log": true,
      "limitH": 0,
      "limitHEnabled": false,
      "limitHNotif": false,
      "limitHH": 0,
      "limitHHEnabled": false,
      "limitHHNotif": false,
      "min": 0,
      "max": 0,
      "color": "",
      "expression": "VELOCITY * 22 / 7 /4 * 5.4 * 5.4",
      "value": 511.9644209126064,
      "good": true,
      "timestamp": "2021-11-22T18:10:28.600101+07:00"
    },
    {
      "id": 51,
      "createdAt": "2021-06-23T22:08:33.1784482+07:00",
      "updatedAt": "2021-11-02T09:26:26.8359397+07:00",
      "deletedAt": null,
      "uid": "a82ea7c8-cbd8-4665-ba3d-79aa6615deb8",
      "stackUid": "dc04ce57-b6be-4aee-aff4-fbab1a3b329c",
      "name": "NOX_C",
      "nameHTML": "",
      "engineeringUnit": "mg/Nm3",
      "engineeringUnitHTML": "mg/Nm<sup>3</sup>",
      "precision": 2,
      "standar": 0,
      "standarEnabled": false,
      "statusId": 1,
      "log": true,
      "limitH": 0,
      "limitHEnabled": false,
      "limitHNotif": false,
      "limitHH": 0,
      "limitHHEnabled": false,
      "limitHHNotif": false,
      "min": 0,
      "max": 0,
      "color": "",
      "expression": "NOX * (21-3)/(21-O2)",
      "value": 325.44809904179175,
      "good": true,
      "timestamp": "2021-11-22T18:10:28.600101+07:00"
    }
  ],
  "status": "Success"
}
```
