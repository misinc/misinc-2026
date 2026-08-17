import { motion } from "motion/react";
import { Link } from "react-router";
import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";

export type CaseStudyCard = {
  image: string;
  industry: string;
  title: string;
  outcome: string;
  to?: string;
};

export type CaseStudiesSectionProps = {
  sectionId?: string;
  title?: string;
  caseStudies?: CaseStudyCard[];
  backgroundColor?: string;
};

const defaultCaseStudies: CaseStudyCard[] = [
  {
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGRhc2hib2FyZCUyMGFuYWx5dGljc3xlbnwxfHx8fDE3NjkyNzk2NDB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    industry: "Healthcare",
    title: "Regional Medical Practice",
    outcome: "300% increase in online appointment bookings within 6 months",
  },
  {
    image:
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxub25wcm9maXQlMjBjb21tdW5pdHklMjBzZXJ2aWNlfGVufDF8fHx8MTc2OTI3OTY0MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    industry: "Nonprofit",
    title: "Community Foundation",
    outcome: "Streamlined donation process increased contributions by 85%",
  },
  {
    image:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBzZXJ2aWNlcyUyMG9mZmljZXxlbnwxfHx8fDE3NjkyNzk2NDF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    industry: "Professional Services",
    title: "Legal Association",
    outcome: "Custom member portal reduced admin time by 60%",
  },
];

export function CaseStudiesSection({
  sectionId = "case-studies",
  title = "Recent Client Success Stories",
  caseStudies = defaultCaseStudies,
  backgroundColor = "#fafafa",
}: CaseStudiesSectionProps) {
  return (
    <section
      id={sectionId}
      className="content-stretch flex flex-col items-center py-[80px] md:py-[120px] relative shrink-0 w-full"
      style={{ backgroundColor }}
    >
      <div className="content-stretch flex flex-col gap-[48px] md:gap-[64px] items-start relative shrink-0 w-full max-w-[1200px] px-5 md:px-8 lg:px-12">
        <motion.div
          className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="home-section-heading w-full">
            {title}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-[24px] md:gap-[32px] w-full">
          {caseStudies.map((study, index) => {
            const card = (
              <>
                <div className="h-[240px] overflow-hidden relative bg-gray-100">
                  <ImageWithFallback
                    src={study.image}
                    alt={study.title}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-[24px] md:p-[32px] flex flex-col gap-[12px]">
                  <div className="flex items-center gap-[8px]">
                    <div className="content-stretch flex items-center px-[10px] py-[4px] relative rounded-[500px] shrink-0 bg-[#FFAA1D]/10">
                      <p className="font-['Manrope:Medium',sans-serif] font-medium leading-[1.4] relative shrink-0 text-[#9B3139] text-[11px] tracking-[0.5px] uppercase">
                        {study.industry}
                      </p>
                    </div>
                  </div>
                  <h3 className="font-['Manrope:Medium',sans-serif] font-medium text-[#151515] text-[20px] md:text-[22px] leading-[1.3]">
                    {study.title}
                  </h3>
                  <p className="font-['Manrope:Light',sans-serif] font-light text-[#777] text-[15px] leading-[1.6]">
                    {study.outcome}
                  </p>
                </div>
              </>
            );

            return (
              <motion.div
                key={study.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(0,0,0,0.08)" }}
              >
                {study.to ? (
                  <Link to={study.to} className="bg-white flex flex-col overflow-hidden rounded-[28px] group cursor-pointer">
                    {card}
                  </Link>
                ) : (
                  <div className="bg-white flex flex-col overflow-hidden rounded-[28px] group cursor-pointer">{card}</div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
