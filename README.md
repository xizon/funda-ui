# Funda UI

React components using pure Bootstrap 5+ which has undergone complex business testing and is easy to integrate with any API. You can load Bootstrap css libraries separately in your project.

All components have undergone complex business verification and provide multiple examples.


---


## Key Features

1. Simplify the assignment method of diversified data.
2. Components are compatible with `gRPC`, `REST APIs`, `GraphQL` self-packaging, uniformly use [Classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes) and their methods to introduce interfaces
3. Enhanced user interaction, flexible use in asynchronous and synchronous states
4. Introduce appropriate component `.css` files as needed, only for some components with special needs. Most of them can directly use Bootstrap's official style sheet.


## Components List

Here is a table of the components and their status.


| WEB ELEMENTS | FORMS | INTERACTION | NAVIGATION | LAYOUTS |
| --- | --- | --- | --- | --- |
| [Accordion ✅](packages/Accordion/README.md) | [Input ✅](packages/Input/README.md) | [Infinite Scroll ❏](packages/InfiniteScroll/README.md) |[Multilevel Dropdown Menu ✅](packages/MultilevelDropdownMenu/README.md)  | [MasonryLayout ✅](packages/MasonryLayout/README.md) |
| [Accordion Slider ❏](packages/AccordionSlider/README.md) | [Password Input ❏](packages/PasswordInput/README.md) | [Image Perspective Hover ❏](packages/ImagePerspectiveHover/README.md) | [Dropdown Menu ✅](packages/DropdownMenu/README.md)  | [RootPortal ✅](packages/RootPortal/README.md)  |
| [Back To Top ✅](packages/BackToTop/README.md) | [Merge Input ❏](packages/MergeInput/README.md) | [Mousewheel Interaction ❏](packages/MousewheelInteraction/README.md) | |   |
| [Button ❏](packages/Button/README.md) | [Tag Input ✅](packages/TagInput/README.md) | [Parallax ❏](packages/Parallax/README.md) |  |   |
| [Card ❏](packages/Card/README.md) | [Textarea  ✅](packages/Textarea/README.md) | [Scroll Reveal ✅](packages/ScrollReveal/README.md) |  |   |
| [Content Placeholder ❏](packages/ContentPlaceholder/README.md) | [Select ✅](packages/Select/README.md) | [Sticky Elements ❏](packages/StickyElements/README.md) |  |  |
| [Counter ❏](packages/Counter/README.md) | [Cascading Select ✅](packages/CascadingSelect/README.md) | [Mode Switch ✅](packages/ModeSwitch/README.md) |  |  |
| [Hybrid Content Slider ❏](packages/HybridContentSlider/README.md) | [Cascading Select End-to-end ✅🔥](packages/CascadingSelectE2E/README.md) | [Custom Scrollbar ✅](packages/Scrollbar/README.md) |  |  |
| [Image Shapes ❏](packages/ImageShapes/README.md) | [Radio ✅](packages/Radio/README.md) | [Horizontal Scroll Content ✅](packages/HorizontalScrollContent/README.md) |  |  |
| [Lightbox ❏](packages/Lightbox/README.md) | [Checkbox ✅](packages/Checkbox/README.md) |  |  |  |
| [List Bulleted ❏](packages/ListBulleted/README.md) | [Multifunction Select ✅🔥](packages/MultiFuncSelect/README.md) |  |  |  |
| [Modal Dialog ✅🔥](packages/ModalDialog/README.md) | [Live Search ✅](packages/LiveSearch/README.md) |  |  |  |
| [Pagination ✅](packages/Pagination/README.md) | [Number ❏](packages/Number/README.md) |  |  |  |
| [Table ✅🔥](packages/Table/README.md) | [SearchBar ✅](packages/SearchBar/README.md) |  |  |  |
| [Periodical Scroll ❏](packages/PeriodicalScroll/README.md) | [Switch ✅](packages/Switch/README.md) |  |  |  |
| [Progress Bar ❏](packages/ProgressBar/README.md) | [Dynamic Fields ✅🔥](packages/DynamicFields/README.md) |  |  |  |
| [Rating ❏](packages/Rating/README.md) | [File ✅](packages/File/README.md) |  |  |  |
| [Seamless Scrolling Element ❏](packages/SeamlessScrollingElement/README.md) | [File Field ❏](packages/FileField/README.md) |  |  |  |
| [Show More Less ✅](packages/ShowMoreLess/README.md) | [Range Slider ✅](packages/RangeSlider/README.md) | |  |  |
| [Slideshow ❏](packages/Slideshow/README.md) | [Color Picker ✅](packages/ColorPicker/README.md) |  |  |  |
| [Tabs ✅](packages/Tabs/README.md) | [MultipleCheckboxes ✅](packages/MultipleCheckboxes/README.md) |  |  |  |
| [Timeline ❏](packages/Timeline/README.md) | [MultipleSelect ✅🔥](packages/MultipleSelect/README.md) |  |  |  |
| [Toast ✅](packages/Toast/README.md) | [Date ✅🔥](packages/Date/README.md) |  |  |  |
| [Tooltip ✅](packages/Tooltip/README.md) |  |  |  |  |
| [Digital Clock ✅](packages/DigitalClock/README.md) |  |  |  |  |
| [Tree ✅🔥](packages/Tree/README.md) |  |  |  |  |
| [Event Calendar ✅🔥](packages/EventCalendar/README.md) |  |  |  |  |
| [Event Calendar Timeline ✅🔥](packages/EventCalendarTimeline/README.md) |  |  |  |  |




## Usage

First, you need to install it:

```sh
$ npm i funda-ui
```

Next, import required components as required

```js
import Input from 'funda-ui/Input';
import Textarea from 'funda-ui/Textarea';
import CascadingSelect from 'funda-ui/CascadingSelect';

// component styles
import 'funda-ui/CascadingSelect/index.css';
```

or 

```js
import { 
    Input,
    Textarea,
    CascadingSelect
} from 'funda-ui';

// component styles
import 'funda-ui/CascadingSelect/index.css';
```

or

```js
const Input = require('funda-ui').Input;
const Textarea = require('funda-ui').Textarea;
const CascadingSelect = require('funda-ui').CascadingSelect;

// component styles
import 'funda-ui/CascadingSelect/index.css';
```


## Getting Started

Make sure if Node 14+ is installed on your computer.

### Step 1: Create a new Lerna workspace by running:

```sh
$ cd /{your_directory}/funda-ui
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
  
  
> **(Optional) Update Utils**
> 
> ```sh
> $ npx lerna run build --scope=funda-utils
> $ npm i
> $ npx lerna run build
> ```
> 



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

