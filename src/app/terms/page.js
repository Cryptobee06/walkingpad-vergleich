// 'use client';
// import { useTranslations } from '@/contexts/LanguageContext';

// export default function PrivacySection() {
//   const t = useTranslations('about');

//   return (
//     <>

//       <section className="relative w-full py-28 sm:py-36 bg-primary-herobg text-white overflow-hidden">

//         <div className="absolute inset-0 pointer-events-none">
//           <svg
//             className="w-full h-full"
//             xmlns="http://www.w3.org/2000/svg"
//             preserveAspectRatio="xMidYMid slice"
//           >
//             <circle cx="20%" cy="30%" r="200" fill="rgba(59, 130, 246, 0.05)" />
//             <circle cx="80%" cy="70%" r="300" fill="rgba(59, 130, 246, 0.06)" />
//           </svg>
//         </div>


//         <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
//           <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-4 drop-shadow">
//             Terms and condition
//           </h1>

//         </div>
//       </section>


//       <section className="bg-slate-50 py-20 px-4 sm:px-6">
//         <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl p-8 sm:p-10 md:p-12 border border-gray-100">
//           <p className="text-neutral-700 text-base md:text-lg leading-relaxed">
//             By accessing and using the WalkingpadReviews website (referred to as "the Site", "we", "our", or "us"), you agree to comply with and be bound by the following Terms and Conditions, which govern your use of this platform and any content, features, services, or materials provided herein. The Site is intended for personal, non-commercial use to provide informational resources, product reviews, and expert insights related to treadmills, fitness equipment, and related topics. All content published on the Site—including text, graphics, logos, images, videos, product comparisons, and editorial reviews—is the intellectual property of WalkingpadReviews or its content suppliers and is protected by applicable copyright, trademark, and intellectual property laws. You may not copy, reproduce, distribute, republish, modify, or exploit any content from the Site without our prior written consent. By using our website, you acknowledge that any reliance on the information presented is at your own risk. Although we strive to provide accurate, up-to-date, and unbiased content, we make no guarantees regarding the completeness, reliability, suitability, or availability of any products or services mentioned, and we disclaim all warranties, express or implied, including but not limited to warranties of merchantability or fitness for a particular purpose. Our site may include affiliate links or sponsored content, which means we may earn a commission if you click on those links and make a purchase. These relationships do not influence our editorial content or objectivity. You agree that we are not responsible for the accuracy, legality, or content of external sites linked within our reviews or blog posts. It is your responsibility to read and comply with the terms of any third-party websites you interact with. WalkingpadReviews does not offer medical advice, diagnosis, or treatment and the information provided should not be interpreted as a substitute for professional fitness, health, or medical guidance. You must consult with a physician before beginning any exercise program or using any equipment discussed on our Site. If you choose to create an account, submit comments, reviews, or engage with any interactive features, you are solely responsible for the content you post and agree not to use the Site for unlawful, offensive, or harmful behavior. We reserve the right to remove any content, restrict access, or terminate accounts at our sole discretion without prior notice. You agree to indemnify and hold harmless WalkingpadReviews, its affiliates, team members, content creators, and service providers from any claims, damages, liabilities, losses, or expenses (including legal fees) arising from your use of the Site, violation of these Terms, or infringement of any third-party rights. We may update these Terms and Conditions at any time without prior notice, and continued use of the Site constitutes your acceptance of any revised terms. It is your responsibility to review this page periodically for any changes. If you do not agree with any part of these Terms, you should discontinue use of the Site immediately. These Terms shall be governed by and construed in accordance with the laws of the jurisdiction in which our business is registered, without regard to its conflict of law provisions. Any disputes arising from or related to the use of this Site shall be subject to the exclusive jurisdiction of the courts located in our operating territory. If any provision of these Terms is found to be invalid or unenforceable, the remaining provisions shall continue in full force and effect. For any questions or concerns regarding these Terms and Conditions, please contact us at legal@WalkingpadReviews.com.
//           </p>
//         </div>
//       </section>
//     </>
//   );
// }
'use client';
import { useTranslations } from '@/contexts/LanguageContext';

export default function Termssection() {
  const t = useTranslations('about');

  const sections = [
    {
      id: 'Acceptance of Terms',
      title: 'Acceptance of Terms',
      paragraphs: [
        "Welcome to WalkingpadReviews. By accessing, browsing, or using our website located at www.WalkingpadReviews.com (the “Site”), you agree to be bound by these Terms and Conditions (“Terms”), including any additional guidelines, policies, or rules that we may publish on the Site. These Terms govern your use of the Site and the services we offer, including but not limited to treadmill reviews, product comparisons, user-submitted feedback, affiliate recommendations, and other informational content related to fitness equipment. If you do not agree to any of the Terms outlined here, we recommend that you discontinue using our services immediately. Your continued use of the Site indicates your full understanding and acceptance of these Terms and any future modifications.",
        "We reserve the right to modify, update, or replace these Terms at our sole discretion without prior notice. It is your responsibility to review this page periodically for changes. Your continued access and usage of the Site after any changes constitutes acceptance of those modifications. We may also introduce new features or tools, which will also be subject to these Terms. If any provision within these Terms is found to be unlawful, void, or for any reason unenforceable, that provision shall be deemed severable and will not affect the validity and enforceability of the remaining provisions. These Terms apply to all visitors, users, contributors, and others who access or use our Site. If you are using this Site on behalf of a company or other legal entity, you represent that you have the authority to bind such entity to these Terms."
      ]
    },
    {
      id: 'Intellectual Property and Use of Content',
      title: 'Intellectual Property and Use of Content',
      paragraphs: [
        "All content published on WalkingpadReviews, including but not limited to text, graphics, logos, product comparisons, images, audio clips, data compilations, digital downloads, and software, is the exclusive property of WalkingpadReviews or its content suppliers and is protected by international copyright, trademark, and intellectual property laws. You may not reproduce, republish, distribute, display, sell, license, or otherwise exploit any content from this website without our express prior written consent. We grant you a limited, non-exclusive, non-transferable license to access and use the Site solely for personal and non-commercial purposes. You agree not to use any automated tools such as bots, spiders, or crawlers to access or copy any part of our content without explicit permission.",
        "Any trademarks, service marks, logos, or trade names displayed on the Site, whether registered or unregistered, are the property of WalkingpadReviews or third-party partners. Nothing on this Site grants you the right or license to use any of our marks without prior consent. You may, however, share links to our public pages through personal blogs or social media with proper credit and without modifying the original content. Any use of our content in violation of this agreement may result in legal action, including civil and criminal penalties.",
        "We respect the intellectual property rights of others and expect our users to do the same. If you believe that any content on the Site infringes your copyright or other rights, please notify us by email at legal@WalkingpadReviews.com. Provide sufficient detail for us to investigate and, if necessary, take appropriate action, including content removal or account restriction if applicable."
      ]
    },
    {
      id: 'User-Generated Content and Community Standards',
      title: 'User-Generated Content and Community Standards',
      paragraphs: [
        "WalkingpadReviews may allow users to contribute content to the platform, including reviews, comments, testimonials, or feedback. By submitting content to our Site, you grant us a worldwide, non-exclusive, royalty-free, perpetual, and irrevocable license to use, reproduce, modify, publish, translate, distribute, and display such content in any media, without restriction or compensation to you. You are solely responsible for the content you upload or share, and by doing so, you represent and warrant that you own or otherwise control all rights necessary to submit the content and that it does not violate any applicable laws or the rights of any third party.",
        "We reserve the right to moderate, edit, or remove any user-submitted content that we, at our sole discretion, deem abusive, defamatory, obscene, offensive, misleading, or in violation of these Terms. Repeated or severe violations may result in account suspension or permanent bans. Users must not use our Site to post promotional material, unsolicited advertisements (spam), or links to third-party websites that are unrelated to the discussion topic.",
        "By participating in our community features, you agree to maintain respectful discourse and adhere to our standards of professionalism and integrity. We do not endorse or guarantee the accuracy of user submissions and disclaim any liability associated with them. We encourage users to report inappropriate or harmful content by using our contact form or emailing us directly. We aim to maintain a constructive environment where users can freely exchange honest opinions, insights, and experiences about fitness equipment in a respectful and informative manner."
      ]
    },
    {
      id: 'Disclaimer of Warranties and Limitation of Liability',
      title: 'Disclaimer of Warranties and Limitation of Liability',
      paragraphs: [
        "WalkingpadReviews is an informational platform that provides editorial content, product comparisons, and user reviews on various fitness and treadmill equipment. All information provided on this Site is offered on an “as-is” and “as-available” basis, without any express or implied warranties, including but not limited to warranties of merchantability, fitness for a particular purpose, or non-infringement. We make no guarantees as to the accuracy, reliability, completeness, or timeliness of the information presented. While we strive to provide up-to-date and factual content, errors may occur, and manufacturers may change product specifications without notice.",
        "We are not responsible for any loss or damage resulting from the use or reliance on information obtained through the Site. This includes but is not limited to direct, indirect, incidental, punitive, or consequential damages, including loss of data, loss of revenue, or harm to personal fitness or health. You are advised to consult with a medical or fitness professional before starting any new exercise program or using any equipment mentioned on our Site.",
        "Additionally, WalkingpadReviews participates in affiliate marketing programs such as Amazon Associates and may earn commissions from qualifying purchases. We do not manufacture or sell the products listed and cannot be held liable for product quality, shipping issues, or customer service offered by third-party vendors. Your interaction with such third-party platforms is solely at your own risk, and we encourage you to review their respective terms and privacy policies before engaging with them."
      ]
    },
    {
      id: ' Governing Law, Jurisdiction, and Termination',
      title: ' Governing Law, Jurisdiction, and Termination',
      paragraphs: [
        "Depending on your location, you may have rights under data protection laws like GDPR or CCPA. This includes access, correction, or deletion of your data.",
        "To exercise these rights or ask questions, email us at privacy@walkingpadreviews.com."
      ]
    },
  ];

  return (
    <>
      {/* Hero Section */}
      {/* // <section className="relative py-24 sm:py-32 bg-gradient-to-br from-primary-50 to-primary-100 overflow-hidden"> */}
        <section className="relative w-full py-28 sm:py-36 bg-primary-herobg text-white overflow-hidden">

      {/* Decorative Background Circles */}
      <div className="absolute inset-0 pointer-events-none">
        <svg
          className="w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid slice"
        >
          <circle cx="20%" cy="30%" r="200" fill="rgba(59, 130, 246, 0.05)" />
          <circle cx="80%" cy="70%" r="300" fill="rgba(59, 130, 246, 0.06)" />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-6 drop-shadow-sm">
        Terms and condition
        </h1>
      </div>
    </section>

      {/* Content Section */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Table of Contents */}
          <aside className="md:col-span-1 border p-6 rounded shadow-sm">
            <h2 className="text-xl text-black mb-4">Table of Contents:</h2>
            <ul className="space-y-2 text-blue-600 text-sm">
              {sections.map((section) => (
                <li key={section.id}>
                  <a href={`#${section.id}`} className="hover:underline  text-md text-base/8">
                    {section.title}
                  </a>
                </li>
              ))}
            </ul>
          </aside>

          {/* Main Content */}
          <div className="md:col-span-3 space-y-10">
            <div className="text-sm text-gray-600 italic">Effective July 30, 2025</div>
            <div>
              {/* <h2 className="text-xl font-semibold text-gray-900 mb-2">Your Privacy Matters</h2>
              <p className="text-gray-700 text-base mb-2">
                WalkingpadReviews is committed to being transparent about the data we collect about you, how it is used, and with whom it is shared.
              </p>
              <p className="text-gray-700 text-base">
                This Privacy Policy applies when you use our Services. We offer users choices about the data we collect, use, and share as described in this policy, our Cookie Policy, and our Terms of Use.
              </p> */}
            </div>

            {sections.map((section, idx) => (
              <div key={idx} id={section.id}>
                <h2 className="text-lg font-bold text-gray-900 mb-3">{section.title}</h2>
                {section.paragraphs.map((para, pIdx) => (
                  <p key={pIdx} className="text-gray-700 text-base mb-4 leading-relaxed">
                    {para}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
