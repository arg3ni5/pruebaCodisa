interface Propiedad {
    address?: string;
    currency?: string;
    description?: string;
    details?: Details;
    id?: number;
    location?: Location;
    price?: number;
    tags?: string[];
    title?: string;
}

interface Location {
    latitude: number;
    longitude: number;
}

interface Details {
    air_conditioner: boolean;
    backyard: boolean;
    bathrooms: number;
    bedrooms: number;
    floors: number;
    parking: number;
    security: boolean;
    service_room: boolean;
    size: number;
    terrace: boolean;
    type: string;
    warehouse: boolean;
}

interface MenuItem {
    texto: string;
    active?: boolean;
    url?: string;
    submenus?: MenuItem[];
}

export { Propiedad, MenuItem }