export interface AgentsType {
    id: number,
    title: string,
    logo: string,
    description: string,
    count: number,
    active: boolean,
}

export const agentsData: AgentsType[] = [
    {
        id: 1,
        title: "emlak store",
        logo: "/images/agents/emlak-store.jpg",
        description: "Əmlak Store-un çevik və peşəkar komandası daima xidmətinizdədir! Əmlakınızı bizə etibar edə bilərsiniz. ",
        count: 15,
        active: true,
    },
    {
        id: 2,
        title: "smart house",
        logo: "/images/agents/smart-house.jpg",
        description: "Smart House - daşınmaz əmlak agentliyi 2010-ci ildən Bakı şəhərində fəaliyyət göstərir. Biz istənilən növ daşınmaz əmlakınızın alqı-satqısı və icarəsi məsələlərində hər zaman xidmətinizdəyik.",
        count: 12,
        active: true,
    },
    {
        id: 3,
        title: "real estate service",
        logo: "/images/agents/real-estate-service.jpg",
        description: "Real Estate Service - daşınmaz əmlak agentliyi 2010-ci ildən Bakı şəhərində fəaliyyət göstərir. Biz istənilən növ daşınmaz əmlakınızın alqı-satqısı və icarəsi məsələlərində hər zaman xidmətinizdəyik.",
        count: 5,
        active: true,
    },
    {
        id: 4,
        title: "imperial plus",
        logo: "/images/agents/imperial-plus.jpg",
        description: "Imperial Plus daşınmaz əmlak agentliyi 2015-ci ildə fəaliyyətə başlayıb. Agentlik Bakı şəhərində hər növ daşınmaz əmlakın daha sürətli və sərfəli alqı-satqısını həyata keçirə biləcək əməkdaşlara sahibdir. ",
        count: 4,
        active: false
    },
    {
        id: 5,
        title: "milli emlak logo",
        logo: "/images/agents/milli-emlak-logo.jpg",
        description: "Milli Əmlak - Daha üstün xidmət devizi ilə fəaliyyətə başlayıb. Biz daşınmaz əmlakın alqı-satqısı, icarəsi, qiymətləndirilməsi üzrə operativ, peşəkar və güvənli fəaliyyətimizlə xidmətinizdəyik.",
        count: 89,
        active: true
    },
    {
        id: 6,
        title: "new house logo",
        logo: "/images/agents/new-house-logo.jpg",
        description: "New House daşınmaz əmlak agentliyi 2015-ci ildən Bakı şəhərində fəaliyyət göstərir. Biz istənilən növ daşınmaz əmlakınızın alqı-satqısı və icarəsi məsələlərində hər zaman xidmətinizdəyik.",
        count: 75,
        active: true
    },
]