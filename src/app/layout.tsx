"use client";

import Footer from "@/components/footer";
import StyledComponentsRegistry from "@/lib/registry";
import theme from "@/styles/theme";
import "bootstrap/dist/css/bootstrap.min.css";
import { Montserrat } from "next/font/google";
import styled, { ThemeProvider } from "styled-components";

const Body = styled.body`
  box-sizing: border-box;
  *::-webkit-scrollbar {
    width: 5px;
    height: 5px;
  }

  *::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    -webkit-border-radius: 10px;
    border-radius: 10px;
  }

  *::-webkit-scrollbar-thumb {
    -webkit-border-radius: 10px;
    border-radius: 10px;
    background: rgba(255, 255, 255, 0.3);
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5);
  }

  *::-webkit-scrollbar-thumb:window-inactive {
    background: rgba(255, 255, 255, 0.3);
  }

  * {
    margin: 0;
    padding: 0;
  }
`;
const montSerrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={montSerrat.className}>
      <StyledComponentsRegistry>
        <ThemeProvider theme={theme}>
          <Body>
            {children}
            <Footer />
          </Body>
        </ThemeProvider>
      </StyledComponentsRegistry>
    </html>
  );
}
