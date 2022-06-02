import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link';
import { Navbar } from '../components/Navbar';
import { DarkLayout } from '../components/layouts/DarkLayout';
import { MainLayout } from '../components/layouts/MainLayout';


export default function AboutPage() {
    return (
        <>
            <h1>Estamos en about. </h1>
            <h1 className="title">
                Ir a <Link href="/"> Home! </Link>
            </h1>

            <p className="description">
                Get started by editing{" "}
                <code className="code">pages/about.jsx</code>
            </p>
        </>
    );
}

AboutPage.getLayout = function getLayout(page : JSX.Element) {
    return (
        <MainLayout>
            <DarkLayout>
                {page}
            </DarkLayout>
        </MainLayout>
    )
}

