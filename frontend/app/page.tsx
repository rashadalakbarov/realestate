"use client"

import { useState } from "react";

// components
import ClientContact from "@/components/client/ClientContact";
import ClientFeaturedProperties from "@/components/client/ClientFeaturedProperties";
import ClientFooter from "@/components/client/ClientFooter";
import ClientHome from "@/components/client/ClientHome";
import ClientPropertyModal from "@/components/client/ClientPropertyModal";

export default function Home() {
  const [selectedProperty, setSelectedProperty] = useState(null)
  return (
    <div className="min-h-screen w-full bg-gray-50">
      <ClientHome/>

      <ClientFeaturedProperties setSelectedProperty={setSelectedProperty}/>

      <ClientContact/>

      <ClientFooter/>

      {
        selectedProperty && (
          <ClientPropertyModal properties={[selectedProperty]} onClose={() => setSelectedProperty(null)} />
        )
      }
    </div>
  );
}
