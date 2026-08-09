import Image from "next/image";
import Link from "next/link";

const letterParagraphs = [
  "Thanks for reading this far. I am Kary Guo. People who read this will be our old friends, new friends, and maybe you who have never met.",
  "Thank you for your support in co-creating Jinling's brilliance today. Jinling Steel is the painstaking effort of our team for over twenty years of development.",
  "At the same time, I would also like to thank all my colleagues for their hard work and dedication. Together, we have created everything about Jinling.",
  "Jinling is committed to the stainless steel business. For a long time, we have been engaged in the bulk commodity export business of stainless steel raw materials. Our product line is firmly spread all over the world like the roots of a tree, so we dare not neglect every order, because only by maintaining good products can we ensure that every circumstance customers face in the future will be flawless.",
  "But stability is not our working style. On a stable and seemingly outdated career path, we keep pursuing innovation and breakthroughs. I am constantly vigilant to myself: if we are only content with the current success, we will be eliminated by the market one day.",
  "I used to only focus on raw material transactions. Behind the market, price, inventory, and sales figures, it suddenly occurred to me that stainless steel itself is what we should pay more attention to. Its value should not stop at numbers. The application of stainless steel is amazing. In architecture, the aesthetics of the design is born; in the shaping of fine craftsmanship, the humanities and art collide with the metal industry.",
  "I realized that what we are selling was not a crude raw material, but a material that makes the world shine.",
  "In 2019, we established the Stainless Steel Solutions Division, which specializes in providing services for foreign construction projects. It is not easy for an enterprise to innovate and transform. In a time of eternal changes, the only unchanged is to keep thinking. This makes Jinling Steel a stainless steel enterprise that will always maintain its vitality.",
];

export function AboutFounderLetter() {
  return (
    <section className="bg-[#f5efe3] px-4 pb-8 sm:px-6 lg:px-8 lg:pb-10">
      <div
        className="mx-auto flex min-h-14 w-full max-w-[42rem] items-center justify-center bg-[#f6d044] px-6 py-3.5 text-center text-[1.4rem] font-extrabold uppercase tracking-[0.08em] text-[#111820] shadow-[0_14px_30px_rgba(13,20,27,0.11)] sm:min-h-16 sm:px-8 sm:py-4 sm:text-[1.75rem] lg:w-1/2 lg:text-[2rem]"
        style={{ clipPath: "polygon(0 0, 100% 0, 92% 100%, 8% 100%)" }}
      >
        A Letter From Kary Guo
      </div>

      <div className="mx-auto max-w-6xl pt-6">
        <div className="mx-auto max-w-4xl text-left">
          <p className="text-[0.95rem] leading-7 text-[#4f5863] first-letter:float-left first-letter:mr-3 first-letter:text-[3.35rem] first-letter:font-extrabold first-letter:leading-[0.88] first-letter:text-[#111820]">
            This personal message shares how Jinling Metals grew from a
            stainless steel raw material supplier into a team that thinks
            deeply about material value, customer trust, and long-term
            stainless steel solutions. From{" "}
            <Link
              href="/products/stainless-steel-sheet"
              className="font-semibold text-[#111820] underline decoration-[#d8b43d] underline-offset-4 transition hover:text-[#9a6b00]"
            >
              stainless steel sheet
            </Link>
            , coil, tube, and pipe to{" "}
            <Link
              href="/solutions/capabilities/surface-finish-capability"
              className="font-semibold text-[#111820] underline decoration-[#d8b43d] underline-offset-4 transition hover:text-[#9a6b00]"
            >
              surface finishing
            </Link>
            , application support, and{" "}
            <Link
              href="/solutions/capabilities/packaging-logistics"
              className="font-semibold text-[#111820] underline decoration-[#d8b43d] underline-offset-4 transition hover:text-[#9a6b00]"
            >
              export packing
            </Link>
            , the letter explains why we keep moving beyond raw material
            trading toward more thoughtful stainless steel service for global
            buyers.
          </p>
        </div>

        <div className="mx-auto mt-6 grid max-w-5xl gap-5 lg:grid-cols-2 lg:items-stretch">
          <div className="relative h-[27rem] w-full overflow-hidden bg-white/46 shadow-[0_18px_44px_rgba(13,20,27,0.12)] sm:h-[29rem] lg:h-[30rem]">
            <Image
              src="/images/about/founder-letter-kary-guo.png"
              alt="Kary Guo of Jinling Metals wearing a white blazer for the founder letter section"
              fill
              className="object-contain object-center"
              sizes="(min-width: 1024px) 32rem, 100vw"
            />
            <span className="absolute inset-0 bg-[linear-gradient(180deg,rgba(13,20,27,0.02)_0%,rgba(13,20,27,0.04)_48%,rgba(13,20,27,0.34)_100%)]" />
            <span className="absolute left-5 top-5 bg-[#f6d044] px-3 py-1.5 text-[0.68rem] font-extrabold uppercase tracking-[0.14em] text-[#111820] shadow-[0_8px_18px_rgba(13,20,27,0.16)]">
              Founder&apos;s Message
            </span>
          </div>

          <article className="flex h-[27rem] flex-col bg-white/72 px-5 py-5 shadow-[0_18px_44px_rgba(13,20,27,0.08)] sm:h-[29rem] sm:px-7 sm:py-6 lg:h-[30rem]">
            <div className="mb-4 border-b border-[#d8cbb8] pb-4">
              <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#9a6b00]">
                Jinling Metals
              </p>
              <h3 className="mt-2 text-[1.22rem] font-extrabold uppercase tracking-[0.05em] text-[#111820] sm:text-[1.45rem]">
                A Letter From Kary Guo
              </h3>
            </div>
            <div className="min-h-0 overflow-y-auto pr-2 text-[0.88rem] leading-7 text-[#3d454d]">
              <p className="font-semibold text-[#111820]">Dear Customers,</p>
              {letterParagraphs.map((paragraph) => (
                <p key={paragraph} className="mt-4">
                  {paragraph}
                </p>
              ))}
              <p className="mt-7 font-semibold text-[#111820]">Faithfully,</p>
              <p className="mt-1 font-extrabold uppercase tracking-[0.12em] text-[#111820]">
                Kary Guo
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
