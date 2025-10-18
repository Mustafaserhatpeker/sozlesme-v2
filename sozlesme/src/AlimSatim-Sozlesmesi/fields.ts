export type FieldType = "text" | "date" | "textarea";

export interface FieldDescriptor {
    key: string;
    label: string;
    type?: FieldType;
    placeholder?: string;
}

export const INFO_FIELDS = [
    { key: "addressCityDistrict", label: "Taşınmazın İli / İlçesi" },
    { key: "addressNeighborhood", label: "Taşınmazın Mahallesi" },
    { key: "addressStreet", label: "Taşınmazın Caddesi / Sokağı" },
    { key: "addressDoorParcel", label: "Taşınmazın Kapı / Ada Parsel Numarası" },
    { key: "assetType", label: "Taşınmazın Cinsi" },

    { key: "landlordName", label: "Kiraya Verenin Adı Soyadı / Ticari Ünvanı" },
    {
        key: "landlordIdentity",
        label: "Kiraya Verenin T.C. Kimlik / Vergi Kimlik Numarası",
    },
    { key: "landlordAddress", label: "Kiraya Verenin Ev / İş Adresi" },
    { key: "landlordPhone", label: "Kiraya Verenin Telefon Numarası" },

    { key: "tenantName", label: "Kiracının Adı Soyadı / Ticari Ünvanı" },
    {
        key: "tenantIdentity",
        label: "Kiracının T.C. Kimlik / Vergi Kimlik Numarası",
    },
    { key: "tenantAddress", label: "Kiracının Ev / İş Adresi" },
    { key: "tenantPhone", label: "Kiracının Telefon Numarası" },

    { key: "monthlyRentInfo", label: "Bir Aylık Kira Bedeli" },
    { key: "yearlyRentInfo", label: "Bir Yıllık Kira Bedeli" },
    {
        key: "paymentMethod",
        label:
            "Kiranın Nasıl Ödeneceği ve Kiranın Ödeneceği Banka Hesap Bilgileri",
    },
    { key: "currentCondition", label: "Taşınmazın Şimdiki Durumu" },
    { key: "rentalPurpose", label: "Taşınmazın Kiralanma Amacı" },

    { key: "leaseStartDate", label: "Kira Başlangıç Tarihi", type: "date", placeholder: "" },
    { key: "leaseEndDate", label: "Kira Bitiş Tarihi", type: "date", placeholder: "" },

    {
        key: "fixtures",
        label: "Taşınmaz ile Teslim Edilen Demirbaş Eşyaların Beyanı",
        type: "textarea",
        placeholder: "Detayları giriniz...",
    },
] as const satisfies readonly FieldDescriptor[];

export type InfoFieldKey = (typeof INFO_FIELDS)[number]["key"];