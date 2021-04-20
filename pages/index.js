import { Page, Text } from '@geist-ui/react';
import Head from 'next/head';

export default function Home() {
    return (
        <Page size="large">
            <Head>
                <title>swgoh</title>
            </Head>
            <Page.Header>
                <Text h1>SWGOH</Text>
            </Page.Header>
        </Page>
    );
};
