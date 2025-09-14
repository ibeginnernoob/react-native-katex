<div>

<h1>React Native <a href="https://katex.org/">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://katex.org/img/katex-logo.svg">
    <img alt="KaTeX" width=130 src="https://katex.org/img/katex-logo-black.svg">
  </picture>
</a></h1>
</div>

Render Math Latex in React Native using Katex with Webshell

## Installation

```sh
npm install @adheil_gupta/react-native-katex
```

## Usage

Pass Content as a string with math equations wrapped with -

- \$ ... \$ -> to display inline math
- \$$ ... \$$ -> to display the equation on a new line

## The Results looks something like:

<img src="https://res.cloudinary.com/dzaj1xdgz/image/upload/v1757872049/eg_kcgxvr.jpg" width="400">

## Styling

<img src="https://res.cloudinary.com/dzaj1xdgz/image/upload/v1757872048/eg2_z7tbzm.png" width="400">

- containerStyles - style the outer div
- textStyles - text styling
- mathContainerStyles - style the inner divs(green border that render the math equations)

```
	eg. pass containerStyles as ->

	"
		background-color: red !important;
		padding-left: 40px !important;
		padding-right: 40px !important;
	"
```

## Simple Example

```js
import MathJax from '@adhei_gupta/react-native-katex';
import { Text, View } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={{ backgroundColor: 'white', flex: 1 }}>
      <MathJax content="Inline Equaton - $ \sum_{i=1}^n i = frac{(n(n+1))}^{2} $ New Line Equation - $$ \sum_{i=1}^n i = frac{(n(n+1))}^{2} $$" />
    </View>
  );
}
```

## Contributing

- [Development workflow](CONTRIBUTING.md#development-workflow)
- [Sending a pull request](CONTRIBUTING.md#sending-a-pull-request)
- [Code of conduct](CODE_OF_CONDUCT.md)

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
