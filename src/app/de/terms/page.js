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
      title: 'Akzeptanz der Bedingungen',
      paragraphs: [
        "Willkommen bei WalkingpadReviews. Durch den Zugriff auf, das Durchsuchen oder die Nutzung unserer Website unter www.WalkingpadReviews.com (die „Website“) erklären Sie sich mit diesen Nutzungsbedingungen („Bedingungen“) einverstanden, einschließlich aller zusätzlichen Richtlinien, Regeln oder Hinweise, die wir möglicherweise auf der Website veröffentlichen. Diese Bedingungen regeln Ihre Nutzung der Website und der von uns angebotenen Dienste, einschließlich, aber nicht beschränkt auf Walkingpadbewertungen, Produktvergleiche, nutzergeneriertes Feedback, Affiliate-Empfehlungen und andere Informationsinhalte im Zusammenhang mit Fitnessgeräten. Wenn Sie mit den hier aufgeführten Bedingungen nicht einverstanden sind, empfehlen wir, die Nutzung unserer Dienste sofort einzustellen. Ihre fortgesetzte Nutzung der Website gilt als vollständiges Verständnis und Akzeptanz dieser Bedingungen sowie aller zukünftigen Änderungen.",
        "Wir behalten uns das Recht vor, diese Bedingungen nach eigenem Ermessen und ohne vorherige Ankündigung zu ändern, zu aktualisieren oder zu ersetzen. Es liegt in Ihrer Verantwortung, diese Seite regelmäßig auf Änderungen zu überprüfen. Ihr fortgesetzter Zugriff auf die Website nach Änderungen gilt als Zustimmung zu diesen Änderungen. Neue Funktionen oder Tools unterliegen ebenfalls diesen Bedingungen. Sollte eine Bestimmung dieser Bedingungen für rechtswidrig, nichtig oder nicht durchsetzbar erklärt werden, gilt diese Bestimmung als abtrennbar und beeinträchtigt nicht die Gültigkeit der übrigen Bestimmungen. Diese Bedingungen gelten für alle Besucher, Nutzer, Mitwirkende und andere Personen, die auf unsere Website zugreifen oder sie nutzen. Wenn Sie die Website im Namen eines Unternehmens oder einer juristischen Person nutzen, versichern Sie, dass Sie befugt sind, diese an die Bedingungen zu binden."
      ]
    },
    {
      id: 'Intellectual Property and Use of Content',
      title: 'Geistiges Eigentum und Nutzung von Inhalten',
      paragraphs: [
        "Alle auf WalkingpadReviews veröffentlichten Inhalte, einschließlich, aber nicht beschränkt auf Texte, Grafiken, Logos, Produktvergleiche, Bilder, Audioclips, Datensammlungen, digitale Downloads und Software, sind alleiniges Eigentum von WalkingpadReviews oder seiner Inhaltslieferanten und durch internationale Urheberrechts-, Marken- und Eigentumsgesetze geschützt. Sie dürfen keine Inhalte dieser Website ohne unsere ausdrückliche schriftliche Zustimmung reproduzieren, wiederveröffentlichen, verbreiten, anzeigen, verkaufen, lizenzieren oder anderweitig verwenden. Wir gewähren Ihnen eine eingeschränkte, nicht-exklusive, nicht übertragbare Lizenz zum Zugriff und zur Nutzung der Website ausschließlich für persönliche und nicht-kommerzielle Zwecke. Sie stimmen zu, keine automatisierten Tools wie Bots, Spiders oder Crawler zu verwenden, um auf unsere Inhalte zuzugreifen oder sie zu kopieren, es sei denn, Sie haben unsere ausdrückliche Genehmigung.",
        "Alle auf der Website angezeigten Marken, Dienstleistungsmarken, Logos oder Handelsnamen, ob eingetragen oder nicht, sind Eigentum von WalkingpadReviews oder Dritten. Nichts auf dieser Website gewährt Ihnen ein Recht oder eine Lizenz zur Nutzung unserer Marken ohne vorherige Zustimmung. Sie dürfen jedoch Links zu unseren öffentlichen Seiten auf persönlichen Blogs oder in sozialen Medien mit entsprechender Quellenangabe teilen, solange der Originalinhalt nicht verändert wird. Jede Nutzung unserer Inhalte, die gegen diese Vereinbarung verstößt, kann rechtliche Schritte nach sich ziehen, einschließlich zivil- und strafrechtlicher Sanktionen.",
        "Wir respektieren die geistigen Eigentumsrechte Dritter und erwarten dies auch von unseren Nutzern. Wenn Sie der Meinung sind, dass Inhalte auf der Website Ihre Urheberrechte oder sonstige Rechte verletzen, kontaktieren Sie uns bitte per E-Mail an legal@WalkingpadReviews.com. Geben Sie ausreichende Details an, damit wir den Fall prüfen und gegebenenfalls geeignete Maßnahmen ergreifen können, einschließlich der Entfernung von Inhalten oder der Einschränkung von Benutzerkonten."
      ]
    },
    {
      id: 'User-Generated Content and Community Standards',
      title: 'Nutzergenerierte Inhalte und Community-Richtlinien',
      paragraphs: [
        "WalkingpadReviews kann es Benutzern ermöglichen, Inhalte auf der Plattform zu veröffentlichen, einschließlich Bewertungen, Kommentare, Erfahrungsberichte oder Feedback. Durch das Einreichen von Inhalten auf unserer Website gewähren Sie uns eine weltweite, nicht-exklusive, gebührenfreie, unbefristete und unwiderrufliche Lizenz zur Nutzung, Reproduktion, Änderung, Veröffentlichung, Übersetzung, Verbreitung und Anzeige dieser Inhalte in allen Medien ohne Einschränkung oder Vergütung. Sie sind allein verantwortlich für die Inhalte, die Sie hochladen oder teilen. Sie versichern und garantieren, dass Sie alle Rechte an diesen Inhalten besitzen oder kontrollieren und dass sie keine geltenden Gesetze oder Rechte Dritter verletzen.",
        "Wir behalten uns das Recht vor, von Benutzern bereitgestellte Inhalte zu moderieren, zu bearbeiten oder zu entfernen, wenn wir sie nach eigenem Ermessen als missbräuchlich, verleumderisch, obszön, anstößig, irreführend oder als Verstoß gegen diese Bedingungen ansehen. Wiederholte oder schwere Verstöße können zur Sperrung oder dauerhaften Deaktivierung von Konten führen. Nutzer dürfen unsere Website nicht für Werbeinhalte, unerwünschte Werbung (Spam) oder für das Verlinken zu themenfremden Drittanbieter-Websites verwenden.",
        "Durch die Teilnahme an unseren Community-Funktionen stimmen Sie zu, einen respektvollen Umgangston zu wahren und unsere Standards für Professionalität und Integrität einzuhalten. Wir befürworten oder garantieren nicht die Richtigkeit von Benutzerbeiträgen und lehnen jegliche Haftung im Zusammenhang mit diesen ab. Wir ermutigen Nutzer, unangemessene oder schädliche Inhalte über unser Kontaktformular oder direkt per E-Mail zu melden. Unser Ziel ist es, eine konstruktive Umgebung zu fördern, in der Nutzer ehrliche Meinungen, Einsichten und Erfahrungen zu Fitnessgeräten respektvoll und informativ austauschen können."
      ]
    },
    {
      id: 'Disclaimer of Warranties and Limitation of Liability',
      title: 'Haftungsausschluss und Haftungsbeschränkung',
      paragraphs: [
        "WalkingpadReviews ist eine Informationsplattform, die redaktionelle Inhalte, Produktvergleiche und Nutzerbewertungen zu verschiedenen Fitness- und Walkingpadgeräten bereitstellt. Alle Informationen auf dieser Website werden „wie besehen“ und „wie verfügbar“ bereitgestellt, ohne ausdrückliche oder stillschweigende Garantien, einschließlich, aber nicht beschränkt auf Garantien der Marktgängigkeit, Eignung für einen bestimmten Zweck oder Nichtverletzung von Rechten. Wir übernehmen keine Gewähr für die Genauigkeit, Zuverlässigkeit, Vollständigkeit oder Aktualität der bereitgestellten Informationen. Trotz aller Bemühungen um aktuelle und sachliche Inhalte können Fehler auftreten, und Hersteller können Produktspezifikationen ohne Ankündigung ändern.",
        "Wir haften nicht für Verluste oder Schäden, die sich aus der Nutzung oder dem Vertrauen auf die auf der Website bereitgestellten Informationen ergeben. Dies umfasst, ist aber nicht beschränkt auf direkte, indirekte, beiläufige, strafende oder Folgeschäden, einschließlich Datenverlust, Einnahmeverluste oder gesundheitliche Schäden. Es wird empfohlen, vor Beginn eines neuen Trainingsprogramms oder der Nutzung eines auf unserer Website erwähnten Geräts einen Arzt oder Fitnessexperten zu konsultieren.",
        "Zusätzlich nimmt WalkingpadReviews an Affiliate-Programmen wie dem Amazon-Partnerprogramm teil und kann durch qualifizierte Käufe Provisionen verdienen. Wir stellen die gelisteten Produkte nicht selbst her oder verkaufen sie und können daher nicht für Produktqualität, Versandprobleme oder Kundenservice von Drittanbietern haftbar gemacht werden. Ihre Interaktion mit diesen Drittanbieter-Plattformen erfolgt auf eigenes Risiko. Wir empfehlen, deren jeweilige Geschäftsbedingungen und Datenschutzrichtlinien zu prüfen, bevor Sie mit ihnen interagieren."
      ]
    },
    {
      id: ' Governing Law, Jurisdiction, and Termination',
      title: 'Geltendes Recht, Gerichtsstand und Kündigung',
      paragraphs: [
        "Abhängig von Ihrem Standort haben Sie möglicherweise Rechte gemäß Datenschutzgesetzen wie DSGVO oder CCPA. Dazu gehören Zugriffs-, Berichtigungs- oder Löschungsrechte Ihrer Daten.",
        "Um diese Rechte auszuüben oder Fragen zu stellen, senden Sie uns bitte eine E-Mail an privacy@walkingpadreviews.com."
      ]
    },
  ];

  return (
    <>
      <section className="relative w-full py-28 sm:py-36 bg-primary-herobg text-white overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
            <circle cx="20%" cy="30%" r="200" fill="rgba(59, 130, 246, 0.05)" />
            <circle cx="80%" cy="70%" r="300" fill="rgba(59, 130, 246, 0.06)" />
          </svg>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-6 drop-shadow-sm">
            Allgemeine Geschäftsbedingungen
          </h1>
        </div>
      </section>

      <section className="bg-white py-16 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
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

          <div className="md:col-span-3 space-y-10">
            <div className="text-sm text-gray-600 italic">Gültig ab 30. Juli 2025</div>
            <div></div>

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
