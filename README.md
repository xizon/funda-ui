# React Pure Bootstrap

React components using pure Bootstrap 5+ which does not contain any external style and script libraries. You can load Bootstrap css libraries separately in your project.


---


## Key Features

1. Components are compatible with `gRPC`, `REST APIs`, `GraphQL` self-packaging, uniformly use [Classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes) and their methods to introduce interfaces
2. Enhanced user interaction, flexible use in asynchronous and synchronous states
3. Introduce appropriate component `.css` files as needed, only for some components with special needs. Most of them can directly use Bootstrap's official style sheet.


## Components List

Here is a table of the components and their status.


| WEB ELEMENTS | FORMS | INTERACTION | LAYOUT | NAVIGATION |
| --- | --- | --- | --- | --- |
| [Accordion ❏](packages/Accordion/README.md) | [Input ✅](packages/Input/README.md) | [Infinite Scroll ❏](packages/InfiniteScroll/README.md) | [Grid ❏](packages/Grid/README.md) | [Navigation ❏](packages/Navigation/README.md) | 
| [Accordion Slider ❏](packages/AccordionSlider/README.md) | [Password Input ❏](packages/PasswordInput/README.md) | [Image Perspective Hover ❏](packages/ImagePerspectiveHover/README.md) | [Gallery ❏](packages/Gallery/README.md) | [Dropdown Menu ✅](packages/DropdownMenu/README.md)  | 
| [Back To Top ✅](packages/BackToTop/README.md) | [Merge Input ❏](packages/MergeInput/README.md) | [Mousewheel Interaction ❏](packages/MousewheelInteraction/README.md) |  | [Multilevel Dropdown Menu ✅](packages/MultilevelDropdownMenu/README.md)  | 
| [Button ❏](packages/Button/README.md) | [Tag Input ❏](packages/TagInput/README.md) | [Parallax ❏](packages/Parallax/README.md) |  |  | 
| [Card ❏](packages/Card/README.md) | [Textarea  ✅](packages/Textarea/README.md) | [Scroll Reveal ❏](packages/ScrollReveal/README.md) |  |  | 
| [Content Placeholder ❏](packages/ContentPlaceholder/README.md) | [Select ✅](packages/Select/README.md) | [Sticky Elements ❏](packages/StickyElements/README.md) |  |  | 
| [Counter ❏](packages/Counter/README.md) | [Cascading Select ✅](packages/CascadingSelect/README.md) | [Mode Switch ✅](packages/ModeSwitch/README.md) |  |  | 
| [Hybrid Content Slider ❏](packages/HybridContentSlider/README.md) | [Checkbox ✅](packages/Checkbox/README.md) |  |  |  | 
| [Image Shapes ❏](packages/ImageShapes/README.md) | [Radio ✅](packages/Radio/README.md) |  |  |  | 
| [Lightbox ❏](packages/Lightbox/README.md) | [Multi Select ❏](packages/MultiSelect/README.md) |  |  |  | 
| [List Bulleted ❏](packages/ListBulleted/README.md) | [Single Select ❏](packages/SingleSelect/README.md) |  |  |  | 
| [Modal Dialog ✅](packages/ModalDialog/README.md) | [LiveSearch ✅](packages/LiveSearch/README.md) |  |  |  | 
| [Pagination ✅](packages/Pagination/README.md) | [Number ❏](packages/Number/README.md) |  |  |  | 
| [Table ❏](packages/Table/README.md) | [SearchBar ✅](packages/SearchBar/README.md) |  |  |  | 
| [Periodical Scroll ❏](packages/PeriodicalScroll/README.md) | [Switch ❏](packages/Switch/README.md) |  |  |  | 
| [Progress Bar ❏](packages/ProgressBar/README.md) | [Dynamic Fields ❏](packages/DynamicFields/README.md) |  |  |  | 
| [Rating ❏](packages/Rating/README.md) | [File ✅](packages/File/README.md) |  |  |  | 
| [Seamless Scrolling Element ❏](packages/SeamlessScrollingElement/README.md) | [File Field ❏](packages/FileField/README.md) |  |  |  | 
| [Show More Less ✅](packages/ShowMoreLess/README.md) | [Cascading Select End-to-end ✅](packages/CascadingSelectE2E/README.md) |  |  |  | 
| [Slideshow ❏](packages/Slideshow/README.md) |  |  |  |  | 
|  |  |  |  |  | 
| [Table Grid ❏](packages/TableGrid/README.md) |  |  |  |  | 
| [Table Sorter ❏](packages/TableSorter/README.md) |  |  |  |  | 
| [Tabs ✅](packages/Tabs/README.md) |  |  |  |  | 
| [Timeline ❏](packages/Timeline/README.md) |  |  |  |  | 
| [Toaster ✅](packages/Toaster/README.md) |  |  |  |  | 
| [Tooltip ❏](packages/Tooltip/README.md) |  |  |  |  | 
| [Digital Clock ✅](packages/DigitalClock/README.md) |  |  |  |  | 



## Usage

First, you need to install it:

```sh
$ npm i react-pure-bootstrap
```

Next, import required components as required

```js
import Input from 'react-pure-bootstrap/Input';
import Textarea from 'react-pure-bootstrap/Textarea';
import CascadingSelect from 'react-pure-bootstrap/CascadingSelect';

// component styles
import 'react-pure-bootstrap/CascadingSelect/index.css';
```

or 

```js
import { 
    Input,
    Textarea,
    CascadingSelect
} from 'react-pure-bootstrap';

// component styles
import 'react-pure-bootstrap/CascadingSelect/index.css';
```

or

```js
const Input = require('react-pure-bootstrap').Input;
const Textarea = require('react-pure-bootstrap').Textarea;
const CascadingSelect = require('react-pure-bootstrap').CascadingSelect;

// component styles
import 'react-pure-bootstrap/CascadingSelect/index.css';
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

