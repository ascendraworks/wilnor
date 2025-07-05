import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/sections/Footer";

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <h1 className="text-3xl font-bold mb-6">Terms and Conditions</h1>

        <p className="mb-4">
          Welcome to our website. If you continue to browse and use this website, you are agreeing to comply with and be bound by the following terms and conditions of use, which together with our Privacy Policy govern Wilnor & Lavett's Employment Pte Ltd's relationship with you in relation to this website.
        </p>

        <p className="mb-4">
          The term "Wilnor & Lavett's Employment Pte Ltd" or "us" or "we" refers to the owner of the website. The term "you" refers to the user or viewer of our website.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">Terms of Use</h2>

        <p className="mb-4">
          This website is owned and operated by Wilnor & Lavett's Employment Pte Ltd (UEN 202401313H) Address: 256 Simei Street 1 #04-531. Your use of this website constitutes acceptance of these Terms of Use. If you do not agree, you must not use this site. We reserve the right to edit or delete content, including these Terms of Use, at any time without notice.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-3">Use of This Site</h3>
        <p className="mb-2">You agree not to:</p>
        <ul className="list-disc list-inside mb-4">
          <li>Reproduce, copy, distribute, modify, publish, transmit, display, reuse, assign, sell, or exploit any part of the site for commercial purposes.</li>
          <li>Alter, deface, hack, or interfere with any content or materials displayed on this site.</li>
          <li>Access or use this site in a manner intended to damage or impair the site or related networks, or interfere with others' use.</li>
        </ul>

        <h3 className="text-xl font-semibold mt-6 mb-3">Use of Information</h3>
        <p className="mb-4">
          We have a separate Privacy Policy that explains how we handle personal data you may provide when accessing this website.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-3">Disclaimer and Exclusion of Liability</h3>
        <ul className="list-disc list-inside mb-4">
          <li>This site, services, and content are provided on an "as is, as available" basis with no warranties, express or implied.</li>
          <li>We disclaim all warranties regarding merchantability, fitness for a particular purpose, accuracy, availability, and non-infringement.</li>
          <li>We do not guarantee uninterrupted, secure, or error-free access to the site or immunity from viruses or damaging code.</li>
          <li>We are not liable for any direct, indirect, incidental, special, consequential or punitive damages resulting from your use of this site.</li>
          <li>We are not responsible for any data interception or monitoring during electronic transfers or email transmissions.</li>
        </ul>

        <h3 className="text-xl font-semibold mt-6 mb-3">Links to This Site</h3>
        <p className="mb-4">
          You may not create a link to this site without our prior written consent. Links to third-party sites on this site do not imply endorsement, and we are not responsible for any linked site or its content. We disclaim liability for any losses arising from use or reliance on any third-party content or services.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-3">Intellectual Property Rights</h3>
        <p className="mb-4">
          All content, graphics, trademarks, and other materials on this site are protected by copyright, trademark, and other laws and belong to us or our partners. No part may be copied, distributed, published, or reused without our prior written permission.
        </p>
        <p className="mb-4">
          Misuse of any trademarks or content on this site is strictly prohibited. We will take legal action to protect our intellectual property rights.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-3">Refunds and Cancellations</h3>
        <ul className="list-disc list-inside mb-4">
          <li>Agency Fee Refund: A 50% refund of the agency fee is provided if the placement is cancelled within six months, and a replacement helper is not engaged.</li>
          <li>Placement Fee Subscription Cancellation: Cancellation of the placement fee subscription is allowed only upon the helper's return to the agency.</li>
        </ul>

        <h3 className="text-xl font-semibold mt-6 mb-3">Changes to Terms of Use</h3>
        <p className="mb-4">
          We may modify these Terms of Use at any time. Continued use of the site after changes indicates your acceptance of the modified terms.
        </p>

        <h3 className="text-xl font-semibold mt-6 mb-3">Governing Law and Jurisdiction</h3>
        <p className="mb-4">
          These Terms of Use are governed by the laws of the Republic of Singapore. You agree to submit to the exclusive jurisdiction of the Singapore courts for any disputes arising in connection with these Terms of Use.
        </p>
      </main>
      <Footer />
    </>
  );
}
