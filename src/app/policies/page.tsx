import React from 'react';
import CollapsibleSection from '@/components/CollapsibleSection';

const PoliciesPage = () => {
    return (
        <div className="container mx-auto px-4 py-8 max-w-4xl">
            <div className="text-center mb-8">
                <h1 className="text-3xl font-bold text-gray-900 mb-2">Fair Practices Code (FPC)</h1>
                <p className="text-gray-600">Version 1.8 | Approved: 7th August 2018 (Last Amended: 24th October 2023)</p>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
                <p className="text-gray-700 mb-6">
                    TVS Credit Services Limited (TVSCS) follows the Reserve Bank of India (RBI) guidelines on fair lending practices.
                    This code ensures transparency, ethical conduct, and customer protection in all financial transactions.
                </p>
            </div>

            <CollapsibleSection title="I. Loan Applications & Processing" defaultOpen={true}>
                <div className="space-y-4">
                    <p className="text-gray-700">All communications to borrowers must be in their vernacular language.</p>

                    <div>
                        <p className="font-semibold mb-2">Loan application forms will include:</p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Complete terms/conditions for comparison with other NBFCs.</li>
                            <li>List of required documents.</li>
                            <li>Acknowledgement: Applicants receive a receipt with a disposal timeframe.</li>
                        </ul>
                    </div>
                </div>
            </CollapsibleSection>

            <CollapsibleSection title="II. Loan Appraisal & Terms">
                <div className="space-y-4">
                    <p className="text-gray-700">Credit assessment aligns with company policies.</p>

                    <div>
                        <p className="font-semibold mb-2">Sanction/rejection letters must:</p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>Be in the borrower's language.</li>
                            <li>Specify loan amount, interest rate (annualized), and penal charges (bolded in agreement).</li>
                            <li>Loan agreement copies provided at disbursement.</li>
                        </ul>
                    </div>
                </div>
            </CollapsibleSection>

            <CollapsibleSection title="III. Penal Charges (Effective 1st January 2024)">
                <div className="space-y-4">
                    <p className="font-semibold mb-2">Penalties for non-compliance:</p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>Treated as "penal charges" (not added to interest rates).</li>
                        <li>No capitalization (no interest on penalties).</li>
                        <li>Must be reasonable and non-discriminatory.</li>
                        <li>Borrowers must be notified of charges via reminders.</li>
                    </ul>
                </div>
            </CollapsibleSection>

            <CollapsibleSection title="IV. Disbursement & Changes">
                <div className="space-y-4">
                    <ul className="list-disc pl-6 space-y-2">
                        <li>Timely disbursement per agreed terms.</li>
                        <li>Prior notice required for changes (interest rates, repayment schedules).</li>
                        <li>Changes apply prospectively (mentioned in agreements).</li>
                    </ul>
                </div>
            </CollapsibleSection>

            <CollapsibleSection title="V. General Guidelines">
                <div className="space-y-4">
                    <p className="text-gray-700">No interference in borrower affairs unless contractual.</p>

                    <div>
                        <p className="font-semibold mb-2">Recovery practices:</p>
                        <ul className="list-disc pl-6 space-y-2">
                            <li>No harassment (e.g., odd-hour calls, threats, violence).</li>
                            <li>Staff trained to behave professionally.</li>
                        </ul>
                    </div>
                </div>
            </CollapsibleSection>

            <CollapsibleSection title="VI. Grievance Redressal">
                <div className="space-y-4">
                    <p className="font-semibold">Grievance Officer: Mr. Charandeep Singh Chawla</p>
                    <p className="text-gray-700">
                        Contact: <a href="mailto:gro@tvscredit.com" className="text-blue-600 hover:underline">gro@tvscredit.com</a> |
                        Mobile: <a href="tel:+917305963580" className="text-blue-600 hover:underline">+91 7305963580</a>
                    </p>
                    <p className="text-gray-700">
                        Unresolved complaints within 1 month may escalate to RBI (DNBS, Chennai).
                    </p>
                </div>
            </CollapsibleSection>

            <CollapsibleSection title="XII. Gold Jewelry Loans">
                <div className="space-y-4">
                    <p className="font-semibold mb-2">Auction rules:</p>
                    <ul className="list-disc pl-6 space-y-2">
                        <li>Public ads in 1 vernacular + 1 national newspaper.</li>
                        <li>TVSCS cannot participate in auctions.</li>
                    </ul>
                </div>
            </CollapsibleSection>

            <div className="mt-8 text-center text-sm text-gray-600">
                <p>This policy is reviewed annually. Refer to TVSCS website for updates.</p>
            </div>
        </div>
    );
};

export default PoliciesPage; 