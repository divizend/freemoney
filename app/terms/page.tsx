import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms & Conditions - Divizend Referral Program",
  description:
    "Terms and conditions for the Divizend 'Free Money' referral program. Read our policies and guidelines for participants.",
};

export default function TermsOfConditions() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-5xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Terms & Conditions
          </h1>
          <p className="text-lg text-gray-600 mb-2">
            Divizend "Free Money" Initiative
          </p>
          <div className="text-sm text-gray-500">Issued by Divizend GmbH</div>
        </div>

        {/* Content Container */}
        <div className="bg-gray-50 rounded-lg shadow-sm">
          {/* English Version */}
          <div className="p-8">
            <div className="prose prose-lg max-w-none">
              {/* Document Header */}
              <div className="bg-blue-50 border-l-4 border-blue-400 p-6 mb-8">
                <h2 className="text-2xl font-bold text-blue-900 mb-2">
                  Terms and Conditions for the "Free Money" Initiative
                </h2>
                <p className="text-blue-800 font-medium">
                  Issued by Divizend GmbH
                </p>
                <div className="mt-4 text-sm text-blue-700">
                  <p>
                    <strong>Effective Date:</strong> May 26, 2025
                  </p>
                  <p>
                    <strong>Last Updated:</strong> May 26, 2025
                  </p>
                </div>
              </div>

              {/* Section 1 */}
              <section className="mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  1. Introduction
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  The "Free Money" initiative is a referral-based incentive
                  program offered by Divizend GmbH ("Divizend", "we", "us",
                  "our"), a company registered under German law. This program
                  allows eligible private individuals ("Participants") to enter
                  into referral agreements with Divizend for the purpose of
                  promoting Divizend's services.
                </p>
                <p className="text-gray-700 leading-relaxed mt-4">
                  By applying to participate or participating in the Free Money
                  initiative, you ("you", "your", or "Participant") agree to be
                  bound by the following Terms and Conditions ("Agreement").
                </p>
              </section>

              {/* Section 2 */}
              <section className="mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  2. Eligibility
                </h3>
                <div className="space-y-4">
                  <p className="text-gray-700 leading-relaxed">
                    <strong>2.1.</strong> Participation in this initiative is
                    open only to private individuals who are at least 18 years
                    of age and have the legal capacity to enter into contracts.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    <strong>2.2.</strong> Participants must not be employees,
                    officers, or directors of Divizend GmbH or its affiliates.
                  </p>
                </div>
              </section>

              {/* Section 3 */}
              <section className="mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  3. Nature of the Agreement
                </h3>
                <div className="space-y-4">
                  <p className="text-gray-700 leading-relaxed">
                    <strong>3.1.</strong> Under this initiative, Participants
                    may refer new users ("Referred Users") to Divizend.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    <strong>3.2.</strong> In return, Divizend agrees to pay
                    Participants a pre-agreed share of all payments made by
                    Referred Users to Divizend, as detailed in the individual
                    referral agreement signed between the Participant and
                    Divizend.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    <strong>3.3.</strong> This Agreement does not create any
                    form of employment, partnership, agency, or joint venture
                    between Divizend and the Participant. The Participant acts
                    in their own name and on their own account.
                  </p>
                </div>
              </section>

              {/* Section 4 */}
              <section className="mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  4. Reward and Invoicing
                </h3>
                <div className="space-y-4">
                  <p className="text-gray-700 leading-relaxed">
                    <strong>4.1.</strong> The Participant is entitled to receive
                    rewards based on the net payments made by Referred Users to
                    Divizend, in accordance with the specific terms outlined in
                    their referral agreement.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    <strong>4.2.</strong> The Participant must issue an invoice
                    to Divizend in order to claim any reward payments. The
                    invoice must comply with applicable legal and tax
                    requirements.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    <strong>4.3.</strong> Divizend will not make any payments
                    unless a proper and complete invoice is received from the
                    Participant.
                  </p>
                </div>
              </section>

              {/* Section 5 */}
              <section className="mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  5. Tax Compliance
                </h3>
                <div className="space-y-4">
                  <p className="text-gray-700 leading-relaxed">
                    <strong>5.1.</strong> The Participant is solely responsible
                    for ensuring their own compliance with all applicable tax
                    laws and regulations, including but not limited to
                    registration, reporting, and payment obligations related to
                    income derived from this initiative.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    <strong>5.2.</strong> Divizend shall not be held liable for
                    any tax obligations incurred by the Participant in relation
                    to this Agreement.
                  </p>
                </div>
              </section>

              {/* Section 6 */}
              <section className="mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  6. Termination
                </h3>
                <div className="space-y-4">
                  <p className="text-gray-700 leading-relaxed">
                    <strong>6.1.</strong> Either party may terminate this
                    Agreement at any time with written notice.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    <strong>6.2.</strong> Upon termination, Divizend will pay
                    out any undisputed amounts due to the Participant based on
                    valid invoices received up to the date of termination.
                  </p>
                </div>
              </section>

              {/* Section 7 */}
              <section className="mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  7. Confidentiality
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  <strong>7.1.</strong> All non-public information exchanged
                  between the parties shall be treated as confidential and shall
                  not be disclosed to any third party without prior written
                  consent, unless required by law.
                </p>
              </section>

              {/* Section 8 */}
              <section className="mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  8. Limitation of Liability
                </h3>
                <div className="space-y-4">
                  <p className="text-gray-700 leading-relaxed">
                    <strong>8.1.</strong> Divizend shall not be liable for any
                    indirect, incidental, consequential, or punitive damages
                    arising out of or relating to this Agreement.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    <strong>8.2.</strong> Divizend's total liability for any
                    claim under this Agreement shall be limited to the total
                    amount paid to the Participant in the preceding six (6)
                    months.
                  </p>
                </div>
              </section>

              {/* Section 9 */}
              <section className="mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  9. Governing Law and Jurisdiction
                </h3>
                <div className="space-y-4">
                  <p className="text-gray-700 leading-relaxed">
                    <strong>9.1.</strong> This Agreement shall be governed by
                    and construed in accordance with the laws of the Federal
                    Republic of Germany.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    <strong>9.2.</strong> The exclusive place of jurisdiction
                    for all disputes arising out of or in connection with this
                    Agreement shall be the registered office of Divizend GmbH.
                  </p>
                </div>
              </section>

              {/* Section 10 */}
              <section className="mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  10. Final Provisions
                </h3>
                <div className="space-y-4">
                  <p className="text-gray-700 leading-relaxed">
                    <strong>10.1.</strong> Should any provision of this
                    Agreement be or become invalid or unenforceable, the
                    validity of the remaining provisions shall not be affected.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    <strong>10.2.</strong> Any amendments or additions to this
                    Agreement must be made in writing.
                  </p>
                </div>
              </section>

              {/* German Version */}
              <div className="border-t-2 border-gray-200 pt-12 mt-12">
                <div className="bg-green-50 border-l-4 border-green-400 p-6 mb-8">
                  <h2 className="text-2xl font-bold text-green-900 mb-2">
                    Allgemeine Geschäftsbedingungen für die Initiative „Free
                    Money"
                  </h2>
                  <p className="text-green-800 font-medium">
                    herausgegeben von der Divizend GmbH
                  </p>
                  <div className="mt-4 text-sm text-green-700">
                    <p>
                      <strong>Gültig ab:</strong> 26. Mai 2025
                    </p>
                    <p>
                      <strong>Letzte Aktualisierung:</strong> 26. Mai 2025
                    </p>
                  </div>
                </div>

                {/* German Section 1 */}
                <section className="mb-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    1. Einleitung
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Die Initiative „Free Money" ist ein empfehlungsbasiertes
                    Anreizprogramm der Divizend GmbH („Divizend", „wir", „uns",
                    „unser"), einer Gesellschaft mit Sitz in Deutschland. Im
                    Rahmen dieses Programms können geeignete Privatpersonen
                    („Teilnehmende") Empfehlungsverträge mit Divizend
                    abschließen, um die Dienstleistungen von Divizend
                    weiterzuempfehlen.
                  </p>
                  <p className="text-gray-700 leading-relaxed mt-4">
                    Mit der Teilnahme an der Initiative „Free Money" erkennen
                    Sie („Sie", „Ihnen", „Ihr" oder „Teilnehmender") die
                    nachfolgenden Allgemeinen Geschäftsbedingungen
                    („Vereinbarung") als verbindlich an.
                  </p>
                </section>

                {/* German Section 2 */}
                <section className="mb-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    2. Teilnahmeberechtigung
                  </h3>
                  <div className="space-y-4">
                    <p className="text-gray-700 leading-relaxed">
                      <strong>2.1.</strong> Die Teilnahme steht ausschließlich
                      volljährigen Privatpersonen offen, die uneingeschränkt
                      geschäftsfähig sind.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      <strong>2.2.</strong> Mitarbeitende, Organmitglieder oder
                      sonstige verbundene Personen der Divizend GmbH oder ihrer
                      verbundenen Unternehmen sind von der Teilnahme
                      ausgeschlossen.
                    </p>
                  </div>
                </section>

                {/* German Section 3 */}
                <section className="mb-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    3. Gegenstand der Vereinbarung
                  </h3>
                  <div className="space-y-4">
                    <p className="text-gray-700 leading-relaxed">
                      <strong>3.1.</strong> Im Rahmen dieser Initiative können
                      Teilnehmende neue Nutzerinnen und Nutzer („Geworbene
                      Nutzer") an Divizend vermitteln.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      <strong>3.2.</strong> Als Gegenleistung verpflichtet sich
                      Divizend, dem Teilnehmenden einen im jeweiligen
                      Empfehlungsvertrag vereinbarten Anteil an den Zahlungen
                      auszuschütten, die von den Geworbenen Nutzern an Divizend
                      geleistet werden.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      <strong>3.3.</strong> Diese Vereinbarung begründet kein
                      Arbeitsverhältnis, keine Partnerschaft, keine
                      Gesellschaft, kein Handelsvertreterverhältnis und keine
                      sonstige Stellvertretung zwischen dem Teilnehmenden und
                      Divizend. Der Teilnehmende handelt im eigenen Namen und
                      auf eigene Rechnung.
                    </p>
                  </div>
                </section>

                {/* German Section 4 */}
                <section className="mb-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    4. Vergütung und Rechnungsstellung
                  </h3>
                  <div className="space-y-4">
                    <p className="text-gray-700 leading-relaxed">
                      <strong>4.1.</strong> Der Teilnehmende erhält eine
                      Vergütung entsprechend dem vertraglich vereinbarten Anteil
                      an den Nettozahlungen der Geworbenen Nutzer an Divizend.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      <strong>4.2.</strong> Voraussetzung für die Auszahlung der
                      Vergütung ist die Ausstellung einer ordnungsgemäßen und
                      vollständigen Rechnung durch den Teilnehmenden an
                      Divizend. Die Rechnung muss den gesetzlichen Anforderungen
                      entsprechen.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      <strong>4.3.</strong> Ohne ordnungsgemäße Rechnung erfolgt
                      keine Auszahlung durch Divizend.
                    </p>
                  </div>
                </section>

                {/* German Section 5 */}
                <section className="mb-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    5. Steuerliche Pflichten
                  </h3>
                  <div className="space-y-4">
                    <p className="text-gray-700 leading-relaxed">
                      <strong>5.1.</strong> Der Teilnehmende ist
                      alleinverantwortlich für die Einhaltung sämtlicher
                      steuerrechtlicher Pflichten, einschließlich etwaiger
                      Anmelde-, Melde- und Zahlungspflichten in Bezug auf
                      Einkünfte aus dieser Initiative.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      <strong>5.2.</strong> Divizend übernimmt keinerlei
                      Verantwortung oder Haftung für steuerliche Verpflichtungen
                      des Teilnehmenden.
                    </p>
                  </div>
                </section>

                {/* German Section 6 */}
                <section className="mb-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    6. Beendigung der Vereinbarung
                  </h3>
                  <div className="space-y-4">
                    <p className="text-gray-700 leading-relaxed">
                      <strong>6.1.</strong> Beide Parteien können diese
                      Vereinbarung jederzeit mit schriftlicher Mitteilung
                      kündigen.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      <strong>6.2.</strong> Nach Beendigung der Vereinbarung
                      zahlt Divizend etwaige unbestrittene und auf gültigen
                      Rechnungen beruhende Vergütungen, die bis zum
                      Kündigungszeitpunkt fällig wurden, an den Teilnehmenden
                      aus.
                    </p>
                  </div>
                </section>

                {/* German Section 7 */}
                <section className="mb-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    7. Vertraulichkeit
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    <strong>7.1.</strong> Sämtliche nicht öffentlich
                    zugänglichen Informationen, die zwischen den Parteien
                    ausgetauscht werden, sind vertraulich zu behandeln und
                    dürfen Dritten nur mit vorheriger schriftlicher Zustimmung
                    oder auf gesetzlicher Grundlage offengelegt werden.
                  </p>
                </section>

                {/* German Section 8 */}
                <section className="mb-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    8. Haftungsbeschränkung
                  </h3>
                  <div className="space-y-4">
                    <p className="text-gray-700 leading-relaxed">
                      <strong>8.1.</strong> Divizend haftet nicht für mittelbare
                      Schäden, Folgeschäden oder entgangenen Gewinn im
                      Zusammenhang mit dieser Vereinbarung.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      <strong>8.2.</strong> Die Gesamthaftung von Divizend aus
                      oder im Zusammenhang mit dieser Vereinbarung ist auf die
                      Summe der in den vorangegangenen sechs (6) Monaten an den
                      Teilnehmenden gezahlten Vergütungen beschränkt.
                    </p>
                  </div>
                </section>

                {/* German Section 9 */}
                <section className="mb-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    9. Anwendbares Recht und Gerichtsstand
                  </h3>
                  <div className="space-y-4">
                    <p className="text-gray-700 leading-relaxed">
                      <strong>9.1.</strong> Diese Vereinbarung unterliegt
                      ausschließlich dem Recht der Bundesrepublik Deutschland.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      <strong>9.2.</strong> Gerichtsstand für alle
                      Streitigkeiten aus oder im Zusammenhang mit dieser
                      Vereinbarung ist der Sitz der Divizend GmbH.
                    </p>
                  </div>
                </section>

                {/* German Section 10 */}
                <section className="mb-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    10. Schlussbestimmungen
                  </h3>
                  <div className="space-y-4">
                    <p className="text-gray-700 leading-relaxed">
                      <strong>10.1.</strong> Sollte eine Bestimmung dieser
                      Vereinbarung ganz oder teilweise unwirksam oder
                      undurchführbar sein oder werden, bleibt die Wirksamkeit
                      der übrigen Bestimmungen unberührt.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      <strong>10.2.</strong> Änderungen und Ergänzungen dieser
                      Vereinbarung bedürfen der Schriftform.
                    </p>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>

        {/* Back to Home Link */}
        <div className="text-center mt-12">
          <Link
            href="/"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-green-500 to-teal-600 hover:from-green-600 hover:to-teal-700 transition-all duration-200"
          >
            ← Back to Referral Program
          </Link>
        </div>
      </div>
    </div>
  );
}
