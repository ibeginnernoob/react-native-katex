import makeWebshell, {
  HandleHTMLDimensionsFeature,
  useAutoheight,
} from '@formidable-webview/webshell';
import { type ComponentProps } from 'react';
import WebView from 'react-native-webview';

const Webshell = makeWebshell(WebView, new HandleHTMLDimensionsFeature());

export type WebshellProps = ComponentProps<typeof Webshell>;

function MinimalAutoheightWebView(webshellProps: WebshellProps) {
  const { autoheightWebshellProps } = useAutoheight({
    webshellProps,
  });
  return <Webshell {...autoheightWebshellProps} />;
}

type Styles = {
  fontSize?: number;
  textColor?: string;
  backgroundColor?: string;
  mathBgColor?: string;
};

const MathJax = ({
  content,
  customStyles,
}: {
  content: string;
  customStyles?: Styles;
}) => {
  const htmlSource = getSource(content, customStyles || {});

  return (
    <MinimalAutoheightWebView
      source={{ html: htmlSource }}
      style={{ backgroundColor: 'transparent' }}
    />
  );
};

const getSource = (content: string, styles: Styles) => {
  const setStyles = getStyles(styles);

  return `
		<!DOCTYPE html>		
		<html>
			<head>
				${setStyles}
				<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.22/dist/katex.min.css" integrity="sha384-5TcZemv2l/9On385z///+d7MSYlvIEw9FuZTIdZ14vJLqWphw7e7ZPuOiCHJcFCP" crossorigin="anonymous">
				<script defer src="https://cdn.jsdelivr.net/npm/katex@0.16.22/dist/katex.min.js" integrity="sha384-cMkvdD8LoxVzGF/RPUKAcvmm49FQ0oxwDF3BGKtDXcEc+T1b2N+teh/OJfpU0jr6" crossorigin="anonymous"></script>
				<script defer src="https://cdn.jsdelivr.net/npm/katex@0.16.22/dist/contrib/auto-render.min.js" integrity="sha384-hCXGrW6PitJEwbkoStFjeJxv+fSOOQKOPbJxSfM6G5sWZjAyWhXiTIIAmQqnlLlh" crossorigin="anonymous"></script>
				<script>
					document.addEventListener("DOMContentLoaded", function() {
						renderMathInElement(document.body, {
							delimiters: [
								{left: '$$', right: '$$', display: true},
								{left: '$', right: '$', display: false},
								{left: '\\(', right: '\\)', display: false},
								{left: '\\[', right: '\\]', display: true}
							],					
							throwOnError : false
						});
					});
				</script>
			</head>		
			<body>
			<div id="container">
				${content}
			</div>
			</body>
		</html>
	`;
};

const getStyles = (styles: Styles) => {
  return `
			<style>
				body {				
					width: 100% !important;
					margin: 0 !important;
					display: flex !important;
					justify-content: center !important;
					align-items: center !important;
					background-color: transparent !important;
				}
	
				#container {
					text-align: center !important;
					width: 100% !important;
					flex-wrap: wrap !important;
					margin: 0 !important;
					background-color: ${styles.backgroundColor || 'transparent'} !important;
					padding-top: 10px !important;
					padding-bottom: 6px !important;
				}

				*, p, span, div, * {
					background-color: transparent !important;
					color: ${styles.textColor || 'black'} !important;
					font-size: ${styles.fontSize || 20}px !important;
				}

				.katex {
					white-space: normal !important;
					overflow-wrap: break-word !important;				
					max-width: 100%;				
					font-size: ${styles.fontSize || 20}px !important;
					background-color: ${styles.mathBgColor || 'transparent'} !important;
				}
			</style>
		  `;
};

export default MathJax;
