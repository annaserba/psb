import StyledComponentsRegistry from './lib/registry'
 
export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head></head>
      <body>
        <StyledComponentsRegistry>
          {children}
          </StyledComponentsRegistry>
      </body>
    </html>
  );
}
