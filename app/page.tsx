import { HeroSection } from '@/components/HeroSection';
import { Navbar } from '@/components/Navbar';
import { SampleDocuments } from '@/components/features/SampleDocuments';
import { PriceCalculator } from '@/components/features/PriceCalculator';
import { DocumentsByType } from '@/components/features/DocumentsByType';
import { CustomOrderForm } from '@/components/features/CustomOrderForm';
import { Footer } from './Footer/Page';

export default function Home() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <SampleDocuments />
      <PriceCalculator />
      <DocumentsByType />
      <CustomOrderForm />
      
    </main>
  );
}