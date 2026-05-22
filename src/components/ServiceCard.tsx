import Link from "next/link"
import { Service } from "@/data/services"
import { serviceIllustrationMap } from "@/components/illustrations/ServiceIllustrations"

interface ServiceCardProps {
  service: Service
}

export default function ServiceCard({ service }: ServiceCardProps) {
  const Illustration = serviceIllustrationMap[service.slug]

  return (
    <Link
      href={`/services/${service.slug}`}
      className="group bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md hover:border-green-200 transition-all overflow-hidden flex flex-col"
    >
      <div className="relative h-44 overflow-hidden bg-gray-50 flex items-center justify-center">
        {Illustration ? (
          <Illustration
            width={160}
            height={160}
            className="group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div className="text-6xl">{service.icon}</div>
        )}
      </div>
      <div className="p-5 flex flex-col gap-2 flex-1">
        <h3 className="font-bold text-gray-900 group-hover:text-green-700 transition-colors flex items-center gap-2">
          <span>{service.icon}</span> {service.name}
        </h3>
        <p className="text-gray-500 text-sm leading-relaxed">{service.description}</p>
        <span className="text-green-600 text-sm font-semibold mt-auto pt-2">Learn more →</span>
      </div>
    </Link>
  )
}
