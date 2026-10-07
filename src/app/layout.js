import StyledComponentsRegistry from '@/lib/registry';
import { ThemeProvider } from '@/context/ThemeContext';
import { LanguageProvider } from '@/context/LanguageContext';
import GlobalStyles from '@/styles/GlobalStyles';

export const metadata = {
    title: 'Anayet Ullah — Full-Stack Developer, Designer & Digital Marketer',
    description: 'The-Anayet: portfolio of Anayet Ullah, a Full-Stack Developer, Designer and Digital Marketer from Dhaka, Bangladesh. Helping businesses grow through modern web solutions, digital marketing strategies, and creative visual storytelling.',
    keywords: ['full-stack developer', 'web developer Bangladesh', 'digital marketer', 'React', 'Node.js', 'AI automation', 'n8n', 'portfolio', 'Anayet Ullah', 'The-Anayet'],
    authors: [{ name: 'Anayet Ullah' }],
    openGraph: {
        title: 'Anayet Ullah — Full-Stack Developer, Designer & Digital Marketer',
        description: 'Helping businesses grow through modern web solutions, digital marketing strategies, and creative visual storytelling.',
        type: 'website',
        url: 'https://www.theanayet.top',
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" dir="ltr">
            <head>
                {/* DNS prefetch for faster font domain resolution */}
                <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
                <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                {/*
                  Next.js App Router automatically optimizes Google Fonts at build time.
                  Using raw `<link rel="stylesheet">` allows Next.js to inline the CSS,
                  completely eliminating FCP/LCP network delays natively.
                */}
                <link
                    rel="stylesheet"
                    href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Space+Grotesk:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap"
                />
            </head>
            <body>
                <StyledComponentsRegistry>
                    <ThemeProvider>
                        <LanguageProvider>
                            <GlobalStyles />
                            {children}
                        </LanguageProvider>
                    </ThemeProvider>
                </StyledComponentsRegistry>
            </body>
        </html>
    );
}
