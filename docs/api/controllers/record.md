---
sidebarDepth: 1
---

# Record

[[toc]]

### Mendapatkan rerata data pengukuran

Berfungsi untuk mendapatkan mendapatkan rerata data pengukuran.

| Method | Path                |
| ------ | ------------------- |
| POST   | /api/v1/cems/record |

**Header:**

::: warning CATATAN
Untuk versi sebelumnya membutuhkan X-XSRF-Token pada header.

Klik [disini](mendapatkan-csrf-token.md) untuk melihat cara mendapatkan XSRF-Token.
:::

| Key          | Description |
| ------------ | ----------- |
| X-XSRF-Token | CSRF token  |

**Body:**

| Parameter  | Tipe Data         | Wajib ada | Deskripsi                                                                           | Contoh                                 |
| ---------- | ----------------- | --------- | ----------------------------------------------------------------------------------- | -------------------------------------- |
| stackUID   | string            | ya        | UID cerobong                                                                        | "dc04ce57-b6be-4aee-aff4-fbab1a3b32ad" |
| from       | string            | ya        | Awal waktu pengukuran                                                               | "now()-1d" atau "1646240400000"        |
| to         | string            | ya        | Akhir waktu pengukuran                                                              | "now()" atau "1646413199000"           |
| parameters | array dari string | ya        | Nama parameter                                                                      | ["SO2", "SO2_C", "NOX", "NOX_C"]       |
| avg        | string            | ya        | Rerata data, durasinya bisa dalam satuan detik (s), menit (m), jam (h) dan hari (h) | "1m" untuk rerata 1 menit              |

**Contoh kode**
<CodeGroup>
<CodeGroupItem title="GO">

```go
package main

import (
  "fmt"
  "strings"
  "net/http"
  "io/ioutil"
)

func main() {

  url := "http://localhost:3000/api/v1/cems/record"
  method := "POST"

  payload := strings.NewReader(`{`+"
"+`
    "from": "1646240400000",`+"
"+`
    "to": "1646413199000",`+"
"+`
    "avg": "5m",`+"
"+`
    "chartStyle": "single",`+"
"+`
    "stackUID": "dc04ce57-b6be-4aee-aff4-fbab1a3b329c",`+"
"+`
    "parameters": [`+"
"+`
        "SO2",`+"
"+`
        "SO2_C"`+"
"+`
    ]`+"
"+`
}`)

  client := &http.Client {
  }
  req, err := http.NewRequest(method, url, payload)

  if err != nil {
    fmt.Println(err)
    return
  }
  req.Header.Add("x-api-key", "NE42aU4tSFZrOjdjODRiZThkNTczM2Y5YWM 4OGQ1ZDlkOTdiY2QzOGZm")
  req.Header.Add("X-XSRF-Token", "csrf-token-from-cookie")
  req.Header.Add("Content-Type", "application/json")

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
  'method': 'POST',
  'url': 'http://localhost:3000/api/v1/cems/record',
  'headers': {
    'x-api-key': 'NE42aU4tSFZrOjdjODRiZThkNTczM2Y5YWM4OGQ1ZDlkOTdiY2QzOGZm',
    'X-XSRF-Token': 'csrf-token-from-cookie',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    "from": "1646240400000",
    "to": "1646413199000",
    "avg": "5m",
    "chartStyle": "single",
    "stackUID": "dc04ce57-b6be-4aee-aff4-fbab1a3b329c",
    "parameters": [
      "SO2",
      "SO2_C"
    ]
  })

};
request(options, function (error, response) {
if (error) throw new Error(error);
console.log(response.body);
});

````

  </CodeGroupItem>
  <CodeGroupItem title="PHP">

```php
<?php

$curl = curl_init();

curl_setopt_array($curl, array(
  CURLOPT_URL => 'http://localhost:3000/api/v1/cems/record',
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => '',
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 0,
  CURLOPT_FOLLOWLOCATION => true,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => 'POST',
  CURLOPT_POSTFIELDS =>'{
    "from": "1646240400000",
    "to": "1646413199000",
    "avg": "5m",
    "chartStyle": "single",
    "stackUID": "dc04ce57-b6be-4aee-aff4-fbab1a3b329c",
    "parameters": [
        "SO2",
        "SO2_C"
    ]
}',
  CURLOPT_HTTPHEADER => array(
    'x-api-key: NE42aU4tSFZrOjdjODRiZThkNTczM2Y5YWM4OGQ1ZDlkOTdiY2QzOGZm',
    'X-XSRF-Token': 'csrf-token-from-cookie',
    'Content-Type: application/json'
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
    "data": {
        "statement_id": 0,
        "Series": [
            {
                "name": "stat",
                "columns": [
                    "time",
                    "SO2",
                    "SO2_C"
                ],
                "values": [
                    [
                        1646240400000,
                        1.4472116142323326,
                        34.419074404696154
                    ],
                    [
                        1646240700000,
                        0.44690545793658515,
                        10.77162740421586
                    ],

                    ...

                    [
                        1646412900000,
                        1.5531294298555327,
                        43.89767170746943
                    ]
                ]
            }
        ],
        "Messages": null
    },
    "status": "Success"
}
```
