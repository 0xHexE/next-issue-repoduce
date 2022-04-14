import Document, {DocumentContext, Head, Html, Main, NextScript} from 'next/document'

class MyDocument extends Document {
    static async getInitialProps(ctx: DocumentContext) {
        const originalRenderPage = ctx.renderPage

        console.log('_document');

        // Run the React rendering logic synchronously
        ctx.renderPage = () =>
            originalRenderPage({
                // Useful for wrapping the whole react tree
                enhanceApp: (App: any) => App,

                // Useful for wrapping in a per-page basis
                enhanceComponent: (Component: any) => Component,
            });

        // Run the parent `getInitialProps`, it now includes the custom `renderPage`
        return await Document.getInitialProps(ctx)
    }

    render() {
        return (
            <Html>
                <Head />
                <body>
                <Main />
                <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument
