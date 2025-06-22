import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/sections/Footer";

export default function PrivacyPolicyPage() {
  return (
    <>
      <Navbar />
      <main className="container mx-auto px-4 py-8 max-w-4xl">
        <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>

      <p className="mb-4">
        This privacy policy sets out how Wilnor & Lavett's Employment Pte (202401313H) Ltd uses and protects any information that you give when you use this website.
      </p>

      <p className="mb-4">
        Wilnor & Lavett's Employment Pte Ltd is committed to ensuring that your privacy is protected. Should we ask you to provide certain information by which you can be identified when using this website, it will only be used in accordance with this privacy statement.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">Privacy Terms</h2>

      <p className="mb-4">
        We are committed to providing you with professional and valuable products and services whilst safeguarding your privacy. This Data Protection Notice (“Notice”) sets out how Wilnor & Lavett's Employment Pte Ltd (“Wilnor”, “we”, “us”, or “our”) may collect, use, disclose or otherwise process personal data in accordance with applicable laws.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-3">Personal Data</h3>

      <p className="mb-2">
        “Personal data” means data about an individual who can be identified from that data, or from that data combined with other information we have access to.
      </p>

      <p className="mb-2">
        Examples of personal data we may collect include: name, contact information, nationality, ID number, gender, date of birth, marital status, photographs, employment information, education background, and website usage data.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-3">Collection, Use and Disclosure of Personal Data</h3>

      <p className="mb-2">
        We collect personal data from customers, domestic workers, business partners, employees, job applicants, or other individuals, either directly or via authorised representatives, for purposes notified and consented to, unless collection is permitted by law without consent.
      </p>

      <p className="mb-2">
        Data may be collected through forms, meetings, emails, phone calls, or website interactions. We collect data only for business or specified purposes.
      </p>

      <p className="font-semibold mt-4 mb-2">Purposes of collection include:</p>
      <ul className="list-disc list-inside mb-4">
        <li>Service delivery</li>
        <li>Business operations</li>
        <li>Permit/license applications</li>
        <li>Insurance applications for foreign domestic workers</li>
        <li>Recruitment</li>
        <li>Billing/account management</li>
        <li>Responding to complaints/feedback/queries</li>
        <li>Law enforcement and regulatory compliance</li>
      </ul>

      <p className="font-semibold mt-4 mb-2">We may disclose personal data:</p>
      <ul className="list-disc list-inside mb-4">
        <li>With consent, for service fulfillment</li>
        <li>As required by law</li>
        <li>To authorised third-party service providers (bound by confidentiality)</li>
      </ul>

      <p className="mb-4">
        You may withdraw consent by contacting our Data Protection Officer (details below). Withdrawal may impact our ability to continue providing services to you.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-3">Access, Correction & Retention of Personal Data</h3>

      <p className="mb-2">
        You may request access to or correction of your personal data. A reasonable fee may apply for access requests.
      </p>

      <p className="mb-2">
        We retain personal data only as long as necessary for business or legal purposes, after which data is deleted or anonymised.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-3">Protection of Personal Data</h3>

      <p className="mb-2">
        We implement administrative, physical, and technical safeguards (e.g. antivirus, encryption, access controls) to protect personal data. However, no system is completely secure; we continually review and improve security measures.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-3">Cross-Border Transfers</h3>

      <p className="mb-4">
        If personal data is transferred overseas, we will obtain your consent and ensure that data remains protected to standards comparable to local data protection laws.
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-3">Data Protection Officer Contact</h3>

      <p className="mb-2">
        If you have any enquiries, requests, or complaints, please contact:
      </p>

      <p className="mb-1">
        <strong>Data Protection Officer:</strong> <br />
        Email: <a href="mailto:wilianatjandra@yahoo.com" className="underline text-blue-600">wilianatjandra@yahoo.com</a><br />
        Phone: +65 6782 4879
      </p>

      <h3 className="text-xl font-semibold mt-6 mb-3">Modifications</h3>

      <p className="mb-4">
        We may revise this Notice at any time without prior notice. Continued use of our services constitutes acceptance of changes.
      </p>
    </main>
      <Footer />
    </>
  );
}
