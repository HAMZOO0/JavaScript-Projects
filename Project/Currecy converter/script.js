const countryList = {
    AED: 'AE',
    AFN: 'AF',
    XCD: 'AG',
    ALL: 'AL',
    AMD: 'AM',
    ANG: 'AN',
    AOA: 'AO',
    AQD: 'AQ',
    ARS: 'AR',
    AUD: 'AU',
    AZN: 'AZ',
    BAM: 'BA',
    BBD: 'BB',
    BDT: 'BD',
    XOF: 'BE',
    BGN: 'BG',
    BHD: 'BH',
    BIF: 'BI',
    BMD: 'BM',
    BND: 'BN',
    BOB: 'BO',
    BRL: 'BR',
    BSD: 'BS',
    NOK: 'BV',
    BWP: 'BW',
    BYR: 'BY',
    BZD: 'BZ',
    CAD: 'CA',
    CDF: 'CD',
    XAF: 'CF',
    CHF: 'CH',
    CLP: 'CL',
    CNY: 'CN',
    COP: 'CO',
    CRC: 'CR',
    CUP: 'CU',
    CVE: 'CV',
    CYP: 'CY',
    CZK: 'CZ',
    DJF: 'DJ',
    DKK: 'DK',
    DOP: 'DO',
    DZD: 'DZ',
    ECS: 'EC',
    EEK: 'EE',
    EGP: 'EG',
    ETB: 'ET',
    EUR: 'FR',
    FJD: 'FJ',
    FKP: 'FK',
    GBP: 'GB',
    GEL: 'GE',
    GGP: 'GG',
    GHS: 'GH',
    GIP: 'GI',
    GMD: 'GM',
    GNF: 'GN',
    GTQ: 'GT',
    GYD: 'GY',
    HKD: 'HK',
    HNL: 'HN',
    HRK: 'HR',
    HTG: 'HT',
    HUF: 'HU',
    IDR: 'ID',
    ILS: 'IL',
    INR: 'IN',
    IQD: 'IQ',
    IRR: 'IR',
    ISK: 'IS',
    JMD: 'JM',
    JOD: 'JO',
    JPY: 'JP',
    KES: 'KE',
    KGS: 'KG',
    KHR: 'KH',
    KMF: 'KM',
    KPW: 'KP',
    KRW: 'KR',
    KWD: 'KW',
    KYD: 'KY',
    KZT: 'KZ',
    LAK: 'LA',
    LBP: 'LB',
    LKR: 'LK',
    LRD: 'LR',
    LSL: 'LS',
    LTL: 'LT',
    LVL: 'LV',
    LYD: 'LY',
    MAD: 'MA',
    MDL: 'MD',
    MGA: 'MG',
    MKD: 'MK',
    MMK: 'MM',
    MNT: 'MN',
    MOP: 'MO',
    MRO: 'MR',
    MTL: 'MT',
    MUR: 'MU',
    MVR: 'MV',
    MWK: 'MW',
    MXN: 'MX',
    MYR: 'MY',
    MZN: 'MZ',
    NAD: 'NA',
    XPF: 'NC',
    NGN: 'NG',
    NIO: 'NI',
    NPR: 'NP',
    NZD: 'NZ',
    OMR: 'OM',
    PAB: 'PA',
    PEN: 'PE',
    PGK: 'PG',
    PHP: 'PH',
    PKR: 'PK',
    PLN: 'PL',
    PYG: 'PY',
    QAR: 'QA',
    RON: 'RO',
    RSD: 'RS',
    RUB: 'RU',
    RWF: 'RW',
    SAR: 'SA',
    SBD: 'SB',
    SCR: 'SC',
    SDG: 'SD',
    SEK: 'SE',
    SGD: 'SG',
    SKK: 'SK',
    SLL: 'SL',
    SOS: 'SO',
    SRD: 'SR',
    STD: 'ST',
    SVC: 'SV',
    SYP: 'SY',
    SZL: 'SZ',
    THB: 'TH',
    TJS: 'TJ',
    TMT: 'TM',
    TND: 'TN',
    TOP: 'TO',
    TRY: 'TR',
    TTD: 'TT',
    TWD: 'TW',
    TZS: 'TZ',
    UAH: 'UA',
    UGX: 'UG',
    USD: 'US',
    UYU: 'UY',
    UZS: 'UZ',
    VEF: 'VE',
    VND: 'VN',
    VUV: 'VU',
    YER: 'YE',
    ZAR: 'ZA',
    ZMK: 'ZM',
    ZWD: 'ZW',
};

const URL = 'https://v6.exchangerate-api.com/v6/e8a0fbde30a2922dad080f80/latest/';

const dropdown = document.querySelectorAll('.dropdown');
const select = document.querySelectorAll('.selectoption');
const btn = document.querySelector('Form button');
const amount = document.querySelector('.amount input'); // accessing the input tag
const api_kye='' 

// selection both selec tag and adding all countries  codes
select.forEach((each) => {
    for (currcode in countryList) {
        const opt = document.createElement('option');

        // here we use if to select pkr and usd
        if (each.name == 'From' && currcode == 'PKR') {
            opt.selected = 'selected';
        }

        if (each.name == 'To' && currcode == 'USD') {
            opt.selected = 'selected';
            // opt.setAttribute("selected", "selected");
        }

        opt.value = currcode; // Set the value attribute to the country code
        opt.textContent = countryList[currcode]; // Display the country name
        each.appendChild(opt);
    }

    // event listner when we change currechy from option then flag will change
    each.addEventListener('change', (event) => {
        updateflag(event.target);
    });
});

// flag change function
const updateflag = (element) => {
    let currcode = element.value;
    let countrycode = countryList[currcode];

    let new_img_Src = `https://flagsapi.com/${countrycode}/flat/64.png`;

    let img = element.parentElement.querySelector('img');
    img.src = new_img_Src;
};


//
btn.addEventListener('click', (event) => {
    event.preventDefault(); // we dont want to submit the form and other page relaod oprations


    let amount_value = amount.value;

    if (amount_value == '' || amount_value < 1 || ( !/^\d+$/.test(amount_value))) {

      amount.value = "1";
        amount_value = 1;

        console.log(amount_value);
    }

    const URL = ` https://v6.exchangerate-api.com/v6/${api_kye}/pair/${from_curr}/${to_curr}/${amount_value}`;

});
