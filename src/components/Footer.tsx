import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t bg-slate-50 dark:bg-slate-950 py-12 mt-auto">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">VoterVani AI</h3>
            <p className="text-sm text-muted-foreground">
              Empowering Indian citizens through education and digital guidance for a stronger democracy.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="https://voters.eci.gov.in/" className="hover:text-saffron">NVSP Portal</Link></li>
              <li><Link href="https://eci.gov.in/" className="hover:text-saffron">Official ECI Website</Link></li>
              <li><Link href="/faq" className="hover:text-saffron">Frequently Asked Questions</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Contact & Support</h4>
            <p className="text-sm text-muted-foreground mb-4">
              Helpdesk Number: 1950 (Toll-free)
            </p>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t text-center">
          <p className="text-xs text-muted-foreground max-w-2xl mx-auto italic">
            Disclaimer: This is an educational tool. While we strive for accuracy, please always verify the latest information, dates, and requirements on the official Election Commission of India website.
          </p>
          <p className="mt-4 text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} VoterVani AI. Not affiliated with the ECI.
          </p>
        </div>
      </div>
    </footer>
  );
}
