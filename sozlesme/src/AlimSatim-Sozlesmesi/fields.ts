export type FieldType = "text" | "date" | "textarea";

export interface FieldDescriptor {
    key: string;
    label: string;
    type?: FieldType;
    placeholder?: string;
}

// İşletme Bilgileri
export const BUSINESS_FIELDS = [
    { key: "businessOwnerFullName", label: "Adı Soyadı" },
    { key: "businessOwnerNationalId", label: "T.C Kimlik Numarası" },
    { key: "businessPhone", label: "Telefon Numarası" },
    { key: "businessTitle", label: "İşletme Unvanı" },
    { key: "businessAddress", label: "Adres" },
    { key: "businessChamberRegNo", label: "Oda Sicil No." },
] as const satisfies readonly FieldDescriptor[];

// Satıcı Bilgileri
export const SELLER_FIELDS = [
    { key: "sellerFullName", label: "Adı Soyadı" },
    { key: "sellerNationalId", label: "T.C Kimlik Numarası" },
    { key: "sellerResidence", label: "İkametgah", type: "textarea", placeholder: "Adres detaylarını giriniz..." },
    { key: "sellerPhone", label: "Telefon Numarası" },
] as const satisfies readonly FieldDescriptor[];

// Alıcı Bilgileri
export const BUYER_FIELDS = [
    { key: "buyerFullName", label: "Adı Soyadı" },
    { key: "buyerNationalId", label: "T.C Kimlik Numarası" },
    { key: "buyerResidence", label: "İkametgah", type: "textarea", placeholder: "Adres detaylarını giriniz..." },
    { key: "buyerPhone", label: "Telefon Numarası" },
] as const satisfies readonly FieldDescriptor[];

// Taşınmaz Bilgileri
export const PROPERTY_FIELDS = [
    { key: "propertyType", label: "Taşınmazın Cinsi" },
    { key: "propertyCity", label: "İl" },
    { key: "propertyDistrict", label: "İlçe" },
    { key: "propertyNeighborhood", label: "Mahalle / Köy" },
    { key: "titleDeedInfo", label: "Tapu Bilgileri", type: "textarea", placeholder: "Ada, parsel, pafta, cilt/sayfa vb. bilgileri giriniz..." },
] as const satisfies readonly FieldDescriptor[];

export const ALL_FIELDS = [
    ...BUSINESS_FIELDS,
    ...SELLER_FIELDS,
    ...BUYER_FIELDS,
    ...PROPERTY_FIELDS,
] as const satisfies readonly FieldDescriptor[];

export type AllFieldKey = (typeof ALL_FIELDS)[number]["key"];