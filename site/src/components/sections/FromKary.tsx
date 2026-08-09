import Image from "next/image";

export function FromKary() {
  return (
    <section className="relative overflow-hidden bg-brand-dark py-20 text-white sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.15fr] lg:items-center">
          <div className="relative h-[420px] overflow-hidden rounded-card-md bg-white/5 shadow-xl shadow-black/30 lg:h-[540px]">
            <Image
              src="/images/about/qc-station.webp"
              alt="Jinling quality inspection"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 45vw, 100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-brand-dark/60 via-transparent to-transparent" />
          </div>

          <div>
            <p className="mb-5 text-xs font-medium uppercase tracking-[0.24em] text-brand-accent">
              A note from Kary
            </p>
            <blockquote className="space-y-5 text-lg leading-relaxed text-white/85">
              <p>
                &ldquo;We have never tried to make the factory look dramatic. The
                work is steadier than that.
              </p>
              <p>
                Running a business is a little like running a marathon. You do
                not finish it by sprinting, or by watching what everyone else is
                doing. You control your breath, watch your steps, and keep your
                own pace.
              </p>
              <p>
                That&rsquo;s how we work. We don&rsquo;t chase the fastest polishing line. We don&rsquo;t
                skip the wax cleaning on export orders. We put cotton on every tube end
                before it&rsquo;s stacked. Quality lies in details, and details are
                the only thing we really control.&rdquo;
              </p>
            </blockquote>
            <p className="mt-7 text-sm text-white/55">
              Kary &middot; Founder, Jinling Steel &middot; Foshan, China
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
