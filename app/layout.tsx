import "@/styles/globals.css";

export const metadata = {
  title: "正心教育",
  description: "",
};

const RootLayout = ({ children }: { children: React.ReactNode; }) => {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
