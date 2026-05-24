import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import ServiceDetailContent from "./service-detail-content";

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  return (
    <>
      <Navbar />
      <main className="flex-1">
        <ServiceDetailContent slug={slug} />
      </main>
      <Footer />
    </>
  );
}
