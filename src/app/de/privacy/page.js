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
//             Privacy Policy
//           </h1>
//           <p className="text-md md:text-lg text-slate-200">
//             Your privacy matters. Here’s how we collect, use, and protect your data.
//           </p>
//         </div>
//       </section>
//       <section className="bg-slate-50 py-20 px-4 sm:px-6">
//         <div className="max-w-4xl mx-auto space-y-10">
//           <div className="bg-white rounded-3xl shadow-xl p-6 sm:p-8 md:p-10 border border-gray-100">
//             <h2 className="text-xl font-bold text-black mb-4">1. Introduction and Scope of Policy</h2>
//             <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-4">
//               At WalkingpadReviews, we value the trust our visitors place in us and are committed to protecting your privacy. This Privacy Policy outlines how we collect, use, store, and protect your personal data when you visit or interact with our website. Whether you're browsing treadmill comparisons, reading fitness advice, or signing up for newsletters, your privacy is important to us. We understand that you may be concerned about how the information you provide is being used. This policy applies to all users of WalkingpadReviews and governs data collection and usage practices in compliance with applicable data protection laws, including the General Data Protection Regulation (GDPR) and the California Consumer Privacy Act (CCPA).
//             </p>
//             <p className="text-gray-700 text-base md:text-lg leading-relaxed">
//               We only collect information that is necessary for us to provide services, enhance your user experience, and ensure the website's functionality. By using WalkingpadReviews, you acknowledge and accept the practices outlined in this Privacy Policy. If you do not agree to the terms herein, we encourage you not to use our services. This policy applies to all visitors, users, and anyone who accesses the site. Please note that this policy does not apply to any third-party websites, services, or applications that may be linked from our platform, and we recommend reviewing their policies individually. We reserve the right to update or change this policy at any time, and we will notify you of significant changes by updating this page. Continued use of the website following such changes indicates your consent to the updated terms.
//             </p>

//             <h2 className="text-xl font-bold text-black mb-4">2. Information We Collect</h2>
//             <p className="text-gray-700 text-base md:text-lg leading-relaxed">
//               We may collect your name, email address, IP address, phone number (if provided), or location data. This information is typically collected when you voluntarily fill out forms on our site—such as when subscribing to newsletters, submitting reviews, commenting on articles, or contacting us directly for customer support.
//             </p>
//             <p className="text-gray-700 text-base md:text-lg leading-relaxed">
//               Non-personal information is data that does not directly identify you but may include details like browser type, operating system, device used, referral source, and website usage patterns. We use tools like Google Analytics and other web-tracking software to collect this data for statistical and functional analysis. This helps us understand user behavior, track the performance of specific pages, and optimize our content and services. We may also use cookies and similar technologies to personalize your experience, remember your preferences, and facilitate login features.
//             </p>
//             <p className="text-gray-700 text-base md:text-lg leading-relaxed">
//               In some cases, information may be collected automatically by your device or browser when you access the site. This includes log files, access times, and error reports. We take care to ensure that all information collected—whether directly from you or through automated means—is processed lawfully and transparently. We never sell your personal data to third parties.
//             </p>

//             <h2 className="text-xl font-bold text-black mb-4">3. How We Use Your Information</h2>
//             <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-4">
//               We use the collected information to provide, maintain, and improve our services. Personal information helps us respond to your inquiries, deliver requested content like newsletters, and personalize your experience. We may also use aggregated data to analyze user behavior, detect fraud, and enhance platform security. Your submitted reviews or comments may be published with attribution unless you request anonymity.
//             </p>
//             <p className="text-gray-700 text-base md:text-lg leading-relaxed">
//               We do not use your data beyond the purposes described without your consent. From debugging technical issues to analyzing trends and monitoring campaign effectiveness, all internal uses are aligned with legal compliance and user trust.
//             </p>

//             <h2 className="text-xl font-bold text-black mb-4">4. Data Sharing, Third Parties, and Retention</h2>
//             <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-4">
//               We never sell, rent, or trade your personal data. However, we may share it with trusted third-party providers such as hosting services, analytics partners, or email campaign tools under strict confidentiality terms. Some affiliate links on our site may redirect you to third-party platforms which have separate privacy policies.
//             </p>
//             <p className="text-gray-700 text-base md:text-lg leading-relaxed">
//               We retain data only as long as necessary for its purpose or legal compliance. Security measures like encryption, access controls, and audits are employed to protect your information.
//             </p>

//             <h2 className="text-xl font-bold text-black mb-4">5. Your Rights and Contact Information</h2>
//             <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-4">
//               Depending on your location, you may have rights under data protection laws like GDPR or CCPA. This includes access, correction, deletion, or limiting the use of your data. To exercise these rights or ask questions, email us at privacy@WalkingpadReviews.com.
//             </p>
//             <p className="text-gray-700 text-base md:text-lg leading-relaxed">
//               We will notify users of major updates to this policy via this page or direct communication. Your continued use of the site implies consent to any updates. Thank you for trusting WalkingpadReviews.
//             </p>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }
'use client';
import { useTranslations } from '@/contexts/LanguageContext';

export default function PrivacySection() {
  const t = useTranslations('about');

  const sections = [
    {
      id: 'introduction',
      title: 'Einführung und Geltungsbereich der Richtlinie',
      paragraphs: [
        "Bei WalkingpadReviews schätzen wir das Vertrauen, das unsere Besucher in uns setzen, und verpflichten uns zum Schutz Ihrer Privatsphäre. Diese Datenschutzerklärung beschreibt, wie wir Ihre personenbezogenen Daten erfassen, verwenden, speichern und schützen, wenn Sie unsere Website besuchen oder mit ihr interagieren. Ob Sie Walkingpad-Vergleiche durchstöbern, Fitness-Ratschläge lesen oder sich für Newsletter anmelden - Ihre Privatsphäre ist uns wichtig. Wir verstehen, dass Sie möglicherweise besorgt darüber sind, wie die von Ihnen bereitgestellten Informationen verwendet werden. Diese Richtlinie gilt für alle Nutzer von WalkingpadReviews und regelt die Datenerfassung und -nutzung in Übereinstimmung mit den geltenden Datenschutzgesetzen, einschließlich der Datenschutz-Grundverordnung (DSGVO) und des California Consumer Privacy Act (CCPA).",
        "Wir erfassen nur Informationen, die notwendig sind, um Ihnen Dienstleistungen zu erbringen, Ihre Benutzererfahrung zu verbessern und die Funktionalität der Website zu gewährleisten. Durch die Nutzung von WalkingpadReviews erkennen Sie die in dieser Datenschutzerklärung beschriebenen Praktiken an und akzeptieren sie."
      ]
    },
    {
      id: 'data-we-collect',
      title: 'Informationen, die wir erfassen',
      paragraphs: [
        "Wir können Ihren Namen, Ihre E-Mail-Adresse, IP-Adresse, Telefonnummer (falls angegeben) oder Standortdaten erfassen. Diese Informationen werden normalerweise erfasst, wenn Sie freiwillig Formulare auf unserer Website ausfüllen.",
        "Nicht-personenbezogene Informationen sind Daten, die Sie nicht direkt identifizieren, aber Details wie Browsertyp, Betriebssystem, Verweisquelle und Website-Nutzungsmuster enthalten können.",
        "Diese Daten helfen uns, Ihre Benutzererfahrung zu verbessern und unsere Inhalte und Dienstleistungen zu optimieren."
      ]
    },
    {
      id: 'use-of-data',
      title: 'Wie wir Ihre Informationen verwenden',
      paragraphs: [
        "Wir verwenden die erfassten Informationen, um unsere Dienstleistungen bereitzustellen, aufrechtzuerhalten und zu verbessern. Wir können auch aggregierte Daten verwenden, um das Benutzerverhalten zu analysieren und die Plattformsicherheit zu erhöhen.",
        "Ihre eingereichten Bewertungen oder Kommentare können mit Namensnennung veröffentlicht werden, es sei denn, Sie beantragen Anonymität."
      ]
    },
    {
      id: 'sharing-data',
      title: 'Wie wir Informationen teilen',
      paragraphs: [
        "Wir verkaufen, vermieten oder handeln niemals mit Ihren persönlichen Daten. Wir können sie jedoch mit vertrauenswürdigen Drittanbietern wie Hosting-Diensten und Analysepartnern teilen.",
        "Einige Affiliate-Links auf unserer Website können Sie zu Plattformen von Drittanbietern weiterleiten, die separate Datenschutzrichtlinien haben."
      ]
    },
    {
      id: 'your-rights',
      title: 'Ihre Wahlmöglichkeiten und Verpflichtungen',
      paragraphs: [
        "Je nach Ihrem Standort haben Sie möglicherweise Rechte gemäß Datenschutzgesetzen wie der DSGVO oder CCPA. Dies umfasst Zugang, Berichtigung oder Löschung Ihrer Daten.",
        "Um diese Rechte auszuüben oder Fragen zu stellen, senden Sie uns eine E-Mail an privacy@walkingpadreviews.com."
      ]
    },
    {
      id: 'other-info',
      title: 'Weitere wichtige Informationen',
      paragraphs: [
        "Wir können diese Datenschutzerklärung gelegentlich aktualisieren. Ihre fortgesetzte Nutzung der Website zeigt die Annahme von Änderungen an.",
        "Bitte überprüfen Sie diese Seite regelmäßig auf Aktualisierungen."
      ]
    }
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
        Datenschutzerklärung
        </h1>
      </div>
    </section>

      {/* Content Section */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Table of Contents */}
          <aside className="md:col-span-1 border p-6 rounded shadow-sm">
            <h2 className="text-xl text-black mb-4">Inhaltsverzeichnis:</h2>
            <ul className="space-y-2 text-blue-600 text-sm">
              {sections.map((section) => (
                <li key={section.id}>
                  <a href={`#${section.id}`} className="hover:underline text-md text-base/8">
                    {section.title}
                  </a>
                </li>
              ))}
            </ul>
          </aside>

          {/* Main Content */}
          <div className="md:col-span-3 space-y-10">
            <div className="text-sm text-gray-600 italic">Gültig ab 30. Juli 2025</div>
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-2">Ihre Privatsphäre ist wichtig</h2>
              <p className="text-gray-700 text-base mb-2">
                WalkingpadReviews verpflichtet sich zu Transparenz über die Daten, die wir über Sie erfassen, wie sie verwendet werden und mit wem sie geteilt werden.
              </p>
              <p className="text-gray-700 text-base">
                Diese Datenschutzerklärung gilt, wenn Sie unsere Dienste nutzen. Wir bieten Nutzern Wahlmöglichkeiten über die Daten, die wir erfassen, verwenden und teilen, wie in dieser Richtlinie, unserer Cookie-Richtlinie und unseren Nutzungsbedingungen beschrieben.
              </p>
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