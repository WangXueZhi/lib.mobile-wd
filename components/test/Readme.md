### 演示案例：
```jsx harmony
import Example from './Example'

;<div className="mobile-example">
  {window.system && window.system.env === 'doc' 
   ? <iframe src="./components/test.html" />
   : <div><Example /></div>
  }
</div>
``` 
```js { "file": "../Example.tsx" }
```