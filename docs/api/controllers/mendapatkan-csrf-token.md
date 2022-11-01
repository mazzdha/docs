---
sidebarDepth: 1
---

# CSRF Token

[[toc]]

### Mendapatkan CSRF / XSRF Token

Berfungsi untuk mendapatkan csrf token.

| Method | Path         |
| ------ | ------------ |
| GET    | /api/v1/ping |

**Contoh kode:**

<CodeGroup>

<CodeGroupItem title="Go Lang">

```go

package main

import (
  "fmt"
  "net/http"
  "io/ioutil"
)

func main() {

  url := "http://localhost:3000/api/v1/ping"
  method := "GET"

  client := &http.Client {
  }
  req, err := http.NewRequest(method, url, nil)

  if err != nil {
    fmt.Println(err)
    return
  }

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
  'url': 'http://localhost:3000/api/v1/ping'
};
request(options, function (error, response) {
  if (error) throw new Error(error);
  console.log(response.body);
});

```
</CodeGroupItem>
<CodeGroupItem title="PHP">

```php
$curl = curl_init();

curl_setopt_array($curl, array(
  CURLOPT_URL => 'http://localhost:3000/api/v1/ping',
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => '',
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 0,
  CURLOPT_FOLLOWLOCATION => true,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => 'GET',
));

$response = curl_exec($curl);

curl_close($curl);
echo $response;


```
</CodeGroupItem>
</CodeGroup>


**Body pada respon:**

```json
{
    "code": 20000,
    "status": "Success"
}
```

Token tidak diberikan dalam body tetapi pada cookie dengan nama _csrf, jadi untuk parsing tokennya harus membaca cookie.
