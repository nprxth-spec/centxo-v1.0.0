export const metadata = {
  title: "Contact - Centxo",
  description: "Contact Centxo. Narongsak Srikracha. Facebook/Meta ads management platform.",
};

export default function ContactPage() {
  return (
    <div className="container mx-auto py-12 px-4 max-w-4xl">
      <h1 className="text-4xl font-bold mb-2 text-center text-foreground">
        Contact
      </h1>
      <p className="text-center text-muted-foreground mb-12">
        Centxo · Narongsak Srikracha
      </p>

      <div className="bg-card border rounded-xl p-8 shadow-sm max-w-lg mx-auto">
        <h2 className="text-xl font-semibold text-foreground mb-6">Get in touch</h2>
        <ul className="space-y-4 text-foreground">
          <li>
            <strong className="text-muted-foreground">Legal entity:</strong> Narongsak Srikracha
          </li>
          <li>
            <strong className="text-muted-foreground">Email:</strong>{" "}
            <a href="mailto:nprxth@gmail.com" className="text-primary hover:underline">
              nprxth@gmail.com
            </a>
          </li>
          <li>
            <strong className="text-muted-foreground">Tel:</strong>{" "}
            <a href="tel:+66803787247" className="text-primary hover:underline">
              +66 80 378 7247
            </a>
          </li>
        </ul>
      </div>

      <p className="text-sm text-muted-foreground pt-8 border-t mt-8 text-center">
        <a href="https://www.centxo.com" className="text-primary hover:underline">← Back to Home</a>
        {" · "}
        <a href="https://www.centxo.com/privacy" className="text-primary hover:underline">Privacy</a>
        {" · "}
        <a href="https://www.centxo.com/terms" className="text-primary hover:underline">Terms</a>
      </p>
    </div>
  );
}
