/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ConversionAndFooter } from './components/ConversionAndFooter';
import { OfferAndProofSections } from './components/OfferAndProofSections';
import { ProblemValueSections } from './components/ProblemValueSections';
import { HeroSection, TopBarHeader } from './components/TopBarAndHero';

export default function App() {
  return (
    <div className="bg-dark-base text-dark-on-surface font-body antialiased min-h-screen selection:bg-apple-green selection:text-black">
      <TopBarHeader />
      <main className="w-full">
        <HeroSection />
        <ProblemValueSections />
        <OfferAndProofSections />
        <ConversionAndFooter />
      </main>
    </div>
  );
}
