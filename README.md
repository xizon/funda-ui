# React Pure Bootstrap

React components using pure Bootstrap 5+ which does not contain any external style and script libraries. You can load Bootstrap css libraries separately in your project.


---


## Usage

First, you need to install it:

```sh
$ npm i react-pure-bootstrap
```

Next, import required components as required

```js
import Input from 'react-pure-bootstrap/Input';
import Textarea from 'react-pure-bootstrap/Textarea';
```

or 

```js
import { 
    Input,
    Textarea
} from 'react-pure-bootstrap';
```

or

```js
const Input = require('react-pure-bootstrap').Input;
const Textarea = require('react-pure-bootstrap').Textarea;
```



## Getting Started

Make sure if Node 14+ is installed on your computer.

### Step 1: Create a new Lerna workspace by running:

```sh
$ cd /{your_directory}/react-pure-bootstrap
$ npx lerna init
```


### Step 2: Install dependencies (Required)

It will automatically install the dependencies of all resources in `packages/` without duplication.

```sh
$ npm install
```
 

### Step 3: To open the visualization, run:

```sh
$ npx nx graph
```
 
### Step 4: To build all projects, run

```sh
$ npx lerna run build
```

or Build the package you want (recommend):

```sh
$ npx lerna run build --scope=plugin-1 --scope=plugin-2
```

Please do not install **lerna** globally to use `lerna run build`


### Step 5: (optional) Use a custom script like:

```sh
$ npx lerna exec npm run export --scope=plugin-2
```
  

## Publish the lib of components, it will hang on NPM: 


```sh
$ npm run build:lib
$ npm run build:publish
```
  
> **(Optional) Manually generate `.d.ts` files, you can execute**
> 
> ```sh
> $ npx -p typescript tsc lib/cjs/*.js --declaration --allowJs --emitDeclarationOnly
> ```
> 


## Contributing

- [Lerna](https://github.com/lerna/lerna)
- [Bootstrap](https://getbootstrap.com/)
- [React](https://react.dev/)


## Licensing

Licensed under the [MIT](https://opensource.org/licenses/MIT).

