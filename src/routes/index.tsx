import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { MenuSection } from "@/components/MenuSection";
import { BranchesSection } from "@/components/BranchesSection";
import { ReviewsSection } from "@/components/ReviewsSection";
import { BoardSection } from "@/components/BoardSection";
import { CareerSection } from "@/components/CareerSection";
import { Footer } from "@/components/Footer";
import { LoadingScreen } from "@/components/LoadingScreen";

const title = "Ahal Mandhi & Grills — Authentic Arabian Mandhi in Kerala";
const description =
  "Experience the smoky taste of Alfahm at Ahal Mandhi & Grills. Signature mandhi dishes, three Kerala branches, and royal Arabian dining.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-[#050505]">
      <LoadingScreen />
      <Navbar />
      <main>
        <Hero />
        <MenuSection />
        <BranchesSection />
        <ReviewsSection />
        <BoardSection />
        <CareerSection />
      </main>
      <Footer />
    </div>
  );
}
