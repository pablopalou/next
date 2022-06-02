import Document, { Html, Head, Main, NextScript, DocumentContext, DocumentInitialProps } from "next/document";
import { CssBaseline } from "@nextui-org/react";

export default class MyDocument extends Document {

    static async getInitialProps(ctx: DocumentContext) {
        const originalRenderPage = ctx.renderPage

        // Run the React rendering logic synchronously
        ctx.renderPage = () =>
            originalRenderPage({
                // Useful for wrapping the whole react tree
                enhanceApp: (App) => App,
                // Useful for wrapping in a per-page basis
                enhanceComponent: (Component) => Component,
            })

        // Run the parent `getInitialProps`, it now includes the custom `renderPage`
        // in documentation they make:
        // const initialProps = await Document.getInitialProps(ctx)
        // but that is giving me an error (Property 'getInitialProps' does not exist on type '{ new (): Document; prototype: Document; }'.)
        
        const initialProps = await Document.getInitialProps(ctx)

        return {
            ...initialProps,
            styles: initialProps.styles
        }
    }

    render() {
        return (
            <Html>
                <Head>
                    {CssBaseline.flush()}
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}