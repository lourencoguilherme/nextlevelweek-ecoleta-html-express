### Get Promisse using fetch javascript

```
fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados').then(function(res) {return res.json()}).then(function(data){console.log(data)})
```