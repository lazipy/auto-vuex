# auto-vuex

#### 安装

```
npm install auto-vuex -S
```

#### 使用

```
import autoVuex from 'auto-vuex'

// eslint-disable-next-line new-cap
export default new autoVuex({
  files: require.context('../store', true, /\.js$/)
})
```

#### Options

- files（File Module）

指定 store 文件路径

- plugins（Array）

vuex 的插件
