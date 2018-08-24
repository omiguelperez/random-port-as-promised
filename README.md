# random-port-promise

random-port as promised

## Usage

```javascript
import getRandomPort from 'random-port-as-promised'

async function ... () {
  let port = await getRandomPort() // returns port from 15000 to 15099

  let portFrom5000 = await getRandomPort({ 
    from: 5000 
  }) // returns port from 5000 to 5099

  let portFrom5000To5009 = await getRandomPort({ 
    from: 5000, 
    range: 10 
  }) // returns port from 5000 to 5009
}

// ... OR ...

getRandomPort()
  .then(port => console.log(port))
```
