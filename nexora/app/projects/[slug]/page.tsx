import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import ProjectDetailContent from "./project-detail-content";

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  return (
    <>
      <Navbar />
      <main className="flex-1">
        <ProjectDetailContent slug={slug} />
      </main>
      <Footer />
    </>
  );
}
