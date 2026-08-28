import { Anton, Archivo, Caveat } from "next/font/google";
import "./campaign.css";

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-campaign-display",
});

const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-campaign-body",
});

const caveat = Caveat({
  weight: "700",
  subsets: ["latin"],
  variable: "--font-campaign-script",
});

export const viewport = {
  themeColor: "#0F3D32",
  viewportFit: "cover" as const,
};

export default function CampaignLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className={`campaign-root ${anton.variable} ${archivo.variable} ${caveat.variable}`}
      style={{
        fontFamily: "var(--font-campaign-body), system-ui, sans-serif",
      }}
    >
      {children}
    </div>
  );
}
