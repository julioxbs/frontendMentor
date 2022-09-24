export interface RootObject {
    altSpellings: string[];
    area: number;
    borders?: string[];
    capital?: string[];
    capitalInfo: CapitalInfo;
    car: Car;
    cca2: string;
    cca3: string;
    ccn3?: string;
    cioc?: string;
    coatOfArms: CoatOfArms;
    continents: Continent[];
    currencies?: Currencies;
    demonyms?: Demonyms;
    fifa?: string;
    flag: string;
    flags: CoatOfArms;
    gini?: { [key: string]: number };
    idd: Idd;
    independent?: boolean;
    landlocked: boolean;
    languages?: { [key: string]: string };
    latlng: number[];
    maps: Maps;
    name: Name;
    population: number;
    postalCode?: PostalCode;
    region: Region;
    startOfWeek: StartOfWeek;
    status: Status;
    subregion?: string;
    timezones: string[];
    tld?: string[];
    translations: { [key: string]: Translation };
    unMember: boolean;
}

export interface CapitalInfo {
    latlng?: number[];
}

export interface Car {
    side: Side;
    signs?: string[];
}

export enum Side {
    Left = "left",
    Right = "right",
}

export interface CoatOfArms {
    png?: string;
    svg?: string;
}

export enum Continent {
    Africa = "Africa",
    Antarctica = "Antarctica",
    Asia = "Asia",
    Europe = "Europe",
    NorthAmerica = "North America",
    Oceania = "Oceania",
    SouthAmerica = "South America",
}

export interface Currencies {
    AED?: Aed;
    AFN?: Aed;
    ALL?: Aed;
    AMD?: Aed;
    ANG?: Aed;
    AOA?: Aed;
    ARS?: Aed;
    AUD?: Aed;
    AWG?: Aed;
    AZN?: Aed;
    BAM?: BAM;
    BBD?: Aed;
    BDT?: Aed;
    BGN?: Aed;
    BHD?: Aed;
    BIF?: Aed;
    BMD?: Aed;
    BND?: Aed;
    BOB?: Aed;
    BRL?: Aed;
    BSD?: Aed;
    BTN?: Aed;
    BWP?: Aed;
    BYN?: Aed;
    BZD?: Aed;
    CAD?: Aed;
    CDF?: Aed;
    CHF?: Aed;
    CKD?: Aed;
    CLP?: Aed;
    CNY?: Aed;
    COP?: Aed;
    CRC?: Aed;
    CUC?: Aed;
    CUP?: Aed;
    CVE?: Aed;
    CZK?: Aed;
    DJF?: Aed;
    DKK?: Aed;
    DOP?: Aed;
    DZD?: Aed;
    EGP?: Aed;
    ERN?: Aed;
    ETB?: Aed;
    EUR?: Aed;
    FJD?: Aed;
    FKP?: Aed;
    FOK?: Aed;
    GBP?: Aed;
    GEL?: Aed;
    GGP?: Aed;
    GHS?: Aed;
    GIP?: Aed;
    GMD?: Aed;
    GNF?: Aed;
    GTQ?: Aed;
    GYD?: Aed;
    HKD?: Aed;
    HNL?: Aed;
    HRK?: Aed;
    HTG?: Aed;
    HUF?: Aed;
    IDR?: Aed;
    ILS?: Aed;
    IMP?: Aed;
    INR?: Aed;
    IQD?: Aed;
    IRR?: Aed;
    ISK?: Aed;
    JEP?: Aed;
    JMD?: Aed;
    JOD?: Aed;
    JPY?: Aed;
    KES?: Aed;
    KGS?: Aed;
    KHR?: Aed;
    KID?: Aed;
    KMF?: Aed;
    KPW?: Aed;
    KRW?: Aed;
    KWD?: Aed;
    KYD?: Aed;
    KZT?: Aed;
    LAK?: Aed;
    LBP?: Aed;
    LKR?: Aed;
    LRD?: Aed;
    LSL?: Aed;
    LYD?: Aed;
    MAD?: Aed;
    MDL?: Aed;
    MGA?: Aed;
    MKD?: Aed;
    MMK?: Aed;
    MNT?: Aed;
    MOP?: Aed;
    MRU?: Aed;
    MUR?: Aed;
    MVR?: Aed;
    MWK?: Aed;
    MXN?: Aed;
    MYR?: Aed;
    MZN?: Aed;
    NAD?: Aed;
    NGN?: Aed;
    NIO?: Aed;
    NOK?: Aed;
    NPR?: Aed;
    NZD?: Aed;
    OMR?: Aed;
    PAB?: Aed;
    PEN?: Aed;
    PGK?: Aed;
    PHP?: Aed;
    PKR?: Aed;
    PLN?: Aed;
    PYG?: Aed;
    QAR?: Aed;
    RON?: Aed;
    RSD?: Aed;
    RUB?: Aed;
    RWF?: Aed;
    SAR?: Aed;
    SBD?: Aed;
    SCR?: Aed;
    SDG?: BAM;
    SEK?: Aed;
    SGD?: Aed;
    SHP?: Aed;
    SLL?: Aed;
    SOS?: Aed;
    SRD?: Aed;
    SSP?: Aed;
    STN?: Aed;
    SYP?: Aed;
    SZL?: Aed;
    THB?: Aed;
    TJS?: Aed;
    TMT?: Aed;
    TND?: Aed;
    TOP?: Aed;
    TRY?: Aed;
    TTD?: Aed;
    TVD?: Aed;
    TWD?: Aed;
    TZS?: Aed;
    UAH?: Aed;
    UGX?: Aed;
    USD?: Aed;
    UYU?: Aed;
    UZS?: Aed;
    VES?: Aed;
    VND?: Aed;
    VUV?: Aed;
    WST?: Aed;
    XAF?: Aed;
    XCD?: Aed;
    XOF?: Aed;
    XPF?: Aed;
    YER?: Aed;
    ZAR?: Aed;
    ZMW?: Aed;
    ZWL?: Aed;
}

export interface Aed {
    name: string;
    symbol: string;
}

export interface BAM {
    name: string;
}

export interface Demonyms {
    eng: Eng;
    fra?: Eng;
}

export interface Eng {
    f: string;
    m: string;
}

export interface Idd {
    root?: string;
    suffixes?: string[];
}

export interface Maps {
    googleMaps: string;
    openStreetMaps: string;
}

export interface Name {
    common: string;
    nativeName?: { [key: string]: Translation };
    official: string;
}

export interface Translation {
    common: string;
    official: string;
}

export interface PostalCode {
    format: string;
    regex?: string;
}

export enum Region {
    Africa = "Africa",
    Americas = "Americas",
    Antarctic = "Antarctic",
    Asia = "Asia",
    Europe = "Europe",
    Oceania = "Oceania",
}

export enum StartOfWeek {
    Monday = "monday",
    Sunday = "sunday",
    Turday = "turday",
}

export enum Status {
    OfficiallyAssigned = "officially-assigned",
    UserAssigned = "user-assigned",
}
