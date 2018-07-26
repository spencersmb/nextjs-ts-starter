myCart example:

```js

const {Provider} = require('react-redux')
const {initStore} = require('../../store')
// import {Provider} from 'react-redux'
// import {initStore} from '../store'

const store = initStore();
<Provider store={store}>
	 <MyShoppingCart />
</Provider>
```
